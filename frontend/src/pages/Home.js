import React from "react";
import './Home.css';

function Home(){
  return (
    <div className="Home">
        <h1>Learn How to Properly Recycle</h1>
        <p>Recycling does not have to be confusing. Our mission is to help individuals understand all about recycling and how easy it can be. Explore the codes, common items, and nearby drop-off locations to recycle responsibly.</p>
      <img 
        src="https://as1.ftcdn.net/jpg/07/97/85/80/1000_F_797858052_F9vvtqZWA4qfkuTaxe1vhfjG7vJh2h0b.jpg" 
        alt="recycling bins" 
        style={{ width: "300px" }}
      />
    </div>
  )
}

export default Home;