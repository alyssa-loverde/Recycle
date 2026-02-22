import React, { useState, useEffect } from "react";
import './ItemList.css';

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
  const [searchTerm, setSearchTerm] = useState(""); // State for search

  const fetchItems = async () => {
    try {
      const response = await fetch("/items");
      const data = await response.json();
      const grouped = data.reduce((acc, [itemName, material, code]) => {
        if (!acc[code]) acc[code] = { material, items: [] };
        acc[code].items.push(itemName);
        return acc;
      }, {});
      setGroupedItems(grouped);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  useEffect(() => { fetchItems(); }, []);

  const handleMaterialChange = (selectedMaterial) => {
    const found = recyclingMap.find(m => m.material === selectedMaterial);
    setFormData({ ...formData, material: selectedMaterial, code: found.code });
  };

  const handleCodeChange = (selectedCode) => {
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

      {/* --- SEARCH BAR SECTION --- */}
      <div className="search-container">
        <input 
          type="text"
          className="search-input"
          placeholder="Search for an item (e.g. 'Bottle')..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="add-container">
        <h3>Add New Item</h3>
        <form onSubmit={handleAddItem} className="add-form">
          <input 
            placeholder="Item (e.g. Milk Jug)" 
            value={formData.item} 
            onChange={(e) => setFormData({...formData, item: e.target.value})} 
          />
          <select value={formData.material} onChange={(e) => handleMaterialChange(e.target.value)}>
            {recyclingMap.map(m => <option key={m.material} value={m.material}>{m.material}</option>)}
          </select>
          <select value={formData.code} onChange={(e) => handleCodeChange(e.target.value)}>
            {recyclingMap.map(m => <option key={m.code} value={m.code}>Code {m.code}</option>)}
          </select>
          <button type="submit">Add</button>
        </form>
      </div>

      <section className="codes-list">
        {Object.entries(groupedItems)
          .sort()
          .map(([code, data]) => {
            // Filter the items within this category based on search term
            const filteredItems = data.items.filter(item => 
              item.toLowerCase().includes(searchTerm.toLowerCase())
            );

            // Only show the category if it has items that match the search
            if (filteredItems.length === 0 && searchTerm !== "") return null;

            return (
              <div key={code} className="code-block">
                <div className="heading-with-icon">
                  <img src={`/icons/num-${code}.svg`} className="number-icon" alt="icon" />
                  <h2 className="code-heading">{data.material} (Code {code})</h2>
                </div>
                <div className="item-list-container">
                  <strong>Items:</strong> {filteredItems.join(", ")}
                </div>
              </div>
            );
          })}
      </section>
    </div>
  );
}

export default ItemList;