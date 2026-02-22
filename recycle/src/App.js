import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Location from './pages/Location';

function App() {
  return (
    <Router>
      <div>
        <Link to="/Location">
          <button>Go to Location Page</button>
        </Link>

        <Routes>
          <Route path="/Location" element={<Location />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;