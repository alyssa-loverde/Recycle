import React, { useState, useEffect } from "react";
import '../ItemList.css';

// The "Source of Truth" for your recycling categories
const recyclingMap = [
  { code: "0", material: "Not_Recyclable" },
  { code: "1", material: "PET" },
  { code: "2", material: "HDPE" },
  { code: "3", material: "PVC" },
  { code: "4", material: "LDPE" },
  { code: "5", material: "PP" },
  { code: "6", material: "PS" },
  { code: "7", material: "Other" }
];

function ItemList() {
  const [groupedItems, setGroupedItems] = useState({});
  const [formData, setFormData] = useState({ item: "", material: "0", code: "0" });

  const fetchItems = async () => {
    const response = await fetch("/items");
    const data = await response.json();
    const grouped = data.reduce((acc, [itemName, material, code]) => {
      if (!acc[code]) acc[code] = { material, items: [] };
      acc[code].items.push(itemName);
      return acc;
    }, {});
    setGroupedItems(grouped);
  };

  useEffect(() => { fetchItems(); }, []);

  // --- SMART LINKED INPUT LOGIC ---
  const handleMaterialChange = (selectedMaterial) => {
    // Find the code that belongs to this material
    const found = recyclingMap.find(m => m.material === selectedMaterial);
    setFormData({ ...formData, material: selectedMaterial, code: found.code });
  };

  const handleCodeChange = (selectedCode) => {
    // Find the material that belongs to this code
    const found = recyclingMap.find(m => m.code === selectedCode);
    setFormData({ ...formData, code: selectedCode, material: found.material });
  };

  const handleAddItem = async (e) => {
    e.preventDefault();
    if (!formData.item) return alert("Please enter an item name.");

    await fetch("/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setFormData({ item: "", material: "0", code: "0" });
    fetchItems();
  };

  return (
    <div className="ItemList">
      <h1>Recycling Database</h1>

      <div className="add-container">
        <h3>Add New Item</h3>
        <form onSubmit={handleAddItem} className="add-form">
          {/* 1. Item Name Text Input */}
          <input 
            placeholder="Item (e.g. Milk Jug)" 
            value={formData.item} 
            onChange={(e) => setFormData({...formData, item: e.target.value})} 
          />

          {/* 2. Material Dropdown */}
          <select 
            value={formData.material} 
            onChange={(e) => handleMaterialChange(e.target.value)}
          >
            {recyclingMap.map(m => (
              <option key={m.material} value={m.material}>{m.material}</option>
            ))}
          </select>

          {/* 3. Code Dropdown (Linked to Material) */}
          <select 
            value={formData.code} 
            onChange={(e) => handleCodeChange(e.target.value)}
          >
            {recyclingMap.map(m => (
              <option key={m.code} value={m.code}>Code {m.code}</option>
            ))}
          </select>

          <button type="submit">Add</button>
        </form>
      </div>

      {/* --- LIST DISPLAY --- */}
      <section className="codes-list">
        {Object.entries(groupedItems).sort().map(([code, data]) => (
          <div key={code} className="code-block">
            <div className="heading-with-icon">
              <img src={`/icons/num-${code}.svg`} className="number-icon" alt="icon" />
              <h2 className="code-heading">{data.material} (Code {code})</h2>
            </div>
            <div className="item-list-container">
              <strong>Items:</strong> {data.items.join(", ")}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ItemList;