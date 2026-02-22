import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Location from './pages/location';


function App() {
  return (
    
    <Router>
        <Routes>
          <Route path="/pages/location" elemnt={<location />}/> 
          
        </Routes>
      
    </Router>

  );
}

export default App;
