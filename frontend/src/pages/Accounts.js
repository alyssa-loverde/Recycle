import React, { useState, useEffect } from 'react';


function App() {
 const [users, setUsers] = useState({});
 const [nameInput, setNameInput] = useState("");
 const [loading, setLoading] = useState(true);


 const fetchUsers = () => {
   fetch("/users")
     .then((res) => res.json())
     .then((data) => {
       setUsers(data);
       setLoading(false);
     })
     .catch((err) => console.error("Error fetching users:", err));
 };


 useEffect(() => {
   fetchUsers();
 }, []);


 const handleSignUp = async (e) => {
   e.preventDefault();
   if (!nameInput) return;


   await fetch("/users", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify({ name: nameInput }),
   });


   setNameInput("");
   fetchUsers();
 };


 // I added inline styles here so your app isn't blank and is easy to read
 const containerStyle = {
   padding: '40px',
   fontFamily: 'Arial, sans-serif',
   maxWidth: '600px',
   margin: '0 auto',
   color: '#333'
 };

 const leaderboardItemStyle = {
  background: '#f8f9fa', // The light gray background
  margin: '8px 0',
  padding: '12px 20px',
  borderRadius: '6px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: '1px solid #eee',
  fontFamily: 'sans-serif'
};


 return (
   <div style={containerStyle}>
     <h1>♻️ Recycle Dashboard</h1>


     <form onSubmit={handleSignUp} style={{ marginBottom: '20px' }}>
       <input
         type="text"
         placeholder="Enter name..."
         value={nameInput}
         onChange={(e) => setNameInput(e.target.value)}
         style={{ padding: '10px', width: '200px', borderRadius: '4px', border: '1px solid #ccc' }}
       />
       <button type="submit" style={{ padding: '10px 20px', marginLeft: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
         Sign Up
       </button>
     </form>


     <hr />


     <h2>Leaderboard</h2>
     {loading ? (
       <p>Connecting to Flask...</p>
     ) : (
       <ul style={{ listStyle: 'none', padding: 0 }}>
         {Object.entries(users)
           .sort(([,a], [,b]) => b - a) // This double-checks the sort in the browser
           .map(([name, points]) => (
      <li key={name} style={leaderboardItemStyle}>
      <strong>{name}</strong>: {points} points
       </li>
         ))}
       </ul>
     )}
   </div>
 );
}


export default App;