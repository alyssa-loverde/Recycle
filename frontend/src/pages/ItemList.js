import React from "react";
import './ItemList.css';

const codes = [
  { code: 0, name: 'Not_Recyclable', items: ['Aluminum Can', 'Glass Jar', 'Cardboard Box', 'Newspaper', 'Steel Soup Can', 'Copper Wiring'] },
  { code: 1, name: 'PET', items: ['Water Bottle'] },
  { code: 2, name: 'HDPE', items: ['Milk Jug', 'Shampoo Bottle'] },
  { code: 3, name: 'PVC', items: ['PVC Piping'] },
  { code: 4, name: 'LDPE', items: ['Cling Wrap', 'Grocery Bag'] },
  { code: 5, name: 'PP', items: ['Yogurt Container', 'Takeout Container'] },
  { code: 6, name: 'PS', items: ['Egg Carton', 'Styrofoam Cup'] },
  { code: 7, name: 'Other', items: ['Sunglasses', 'Baby Bottle'] }
];

function ItemList(){
  return (
    <div className="ItemList">
      <h1>Recycling Codes</h1>

      <section className="codes-list">
        {codes.map((c, i) => (
          <div key={c.code} className="code-block">
            <div className="heading-with-icon">
              <img src={`/icons/num-${c.code}.svg`} className="number-icon" alt={`code ${c.code}`} />
              <h2 className="code-heading">{c.name}</h2>
            </div>
            <p className="code-info"><strong>Common items:</strong> {c.items.join(', ')}</p>
            {i < codes.length - 1 && <hr className="separator" />}
          </div>
        ))}
      </section>
    </div>
  )
}

export default ItemList;
