import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'; // Import your new CSS file here
import Location from './pages/Location';
import Item_list from './pages/Item_list';
import Accounts from './pages/Accounts';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        {/* --- NAVIGATION BAR --- */}
        <nav className="navbar">
          <Link to="/" className="nav-logo">
            <span style={{color: '#fff'}}>Recycle</span>
          </Link>
          
          <div className="nav-links">
            <Link to="/Location" className="nav-item">Location</Link>
            <Link to="/Item_list" className="nav-item">Item_list</Link>
            <Link to="/Accounts" className="nav-item">Accounts</Link>
          </div>

        </nav>

        {/* --- PAGE CONTENT --- */}
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Item_list />} />
            <Route path="/Location" element={<Location />} />
            <Route path="/Item_list" element={<Item_list />} />
            <Route path="/Accounts" element={<Accounts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;