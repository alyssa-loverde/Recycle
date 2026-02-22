import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'; // Import your new CSS file here
import Location from './pages/Location';
import ItemList from './pages/ItemList';
import Accounts from './pages/Accounts';
import Home from './pages/Home';

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
            <Link to="/Home" className="nav-item">Home</Link>
            <Link to="/Location" className="nav-item">Location</Link>
            <Link to="/ItemList" className="nav-item">ItemList</Link>
            <Link to="/Accounts" className="nav-item">Accounts</Link>
          </div>

        </nav>

        {/* --- PAGE CONTENT --- */}
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Location" element={<Location />} />
            <Route path="/ItemList" element={<ItemList />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Accounts" element={<Accounts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;