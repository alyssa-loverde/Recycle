import React, { useState, useEffect } from 'react';

const Accounts = () => {
    const [users, setUsers] = useState({});
    const [nameInput, setNameInput] = useState("");

    // The style name we discussed earlier
    const leaderboardItemStyle = {
        background: '#f8f9fa',
        margin: '8px 0',
        padding: '12px 20px',
        borderRadius: '6px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid #ddd'
    };

    // 1. READ (Display users in descending order)
    const fetchUsers = () => {
        fetch("/users")
            .then(res => {
                if (!res.ok) throw new Error("Backend error");
                return res.json();
            })
            .then(data => setUsers(data))
            .catch(err => console.error("Fetch error:", err));
    };

    useEffect(() => { fetchUsers(); }, []);

    // 2. CREATE (Add User)
    const handleAdd = async (e) => {
        e.preventDefault();
        if (!nameInput) return;
        await fetch("/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: nameInput })
        });
        setNameInput("");
        fetchUsers();
    };

    // 3. UPDATE (Increment Points - PATCH is the official name)
    const handleIncrement = async (name) => {
        await fetch("/users/increment", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: name })
        });
        fetchUsers();
    };

    // 4. DELETE (Remove User - DELETE is the official name)
    const handleDelete = async (name) => {
        await fetch(`/users/delete?name=${name}`, {
            method: "DELETE"
        });
        fetchUsers();
    };

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', fontFamily: 'sans-serif' }}>
            <h2>♻️ User Accounts</h2>
            
            <form onSubmit={handleAdd} style={{ marginBottom: '20px' }}>
                <input 
                    value={nameInput} 
                    onChange={(e) => setNameInput(e.target.value)} 
                    placeholder="New user name..."
                    style={{ padding: '8px', width: '200px' }}
                />
                <button type="submit" style={{ padding: '8px', marginLeft: '5px', backgroundColor: '#28a745', color: 'white', border: 'none', cursor: 'pointer' }}>
                    Sign Up
                </button>
            </form>

            <ul style={{ listStyle: 'none', padding: 0 }}>
                {Object.entries(users)
                    .sort(([, a], [, b]) => b - a) // JavaScript double-check on sorting
                    .map(([name, points]) => (
                        <li key={name} style={leaderboardItemStyle}>
                            <span><strong>{name}</strong>: {points} points</span>
                            <div>
                                <button 
                                    onClick={() => handleIncrement(name)}
                                    style={{ marginRight: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                                >
                                    +1
                                </button>
                                <button 
                                    onClick={() => handleDelete(name)} 
                                    style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default Accounts;