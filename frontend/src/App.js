import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Location from './pages/Location';
import Item_list from './pages/Item_list';
import Accounts from './pages/Accounts';

function App() {
  return (
    <Router>
      <div>
        <Link to="/Location">
          <button>Locations</button>
        </Link>
        <Link to="/Item_list">
          <button>Item_list</button>
        </Link>
        <Link to="/Accounts">
          <button>Accounts</button>
        </Link>

        <Routes>
          <Route path="/" element={<Item_list />} />
          <Route path="/Location" element={<Location />} />
          <Route path="/Item_list" element={<Item_list />} />
          <Route path="/Accounts" element={<Accounts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;