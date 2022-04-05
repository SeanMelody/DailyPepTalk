import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from './Pages/Home';
import SubmitQuote from './Pages/SubmitQuote';
import AddNew from './Pages/AddNew'


function App() {
  return (
    <div className="App">
      <Router>
        <nav className="nav navbar nav-styles">
          <Link to="/">
            Home
          </Link>
          <Link to="/submit">
            Submit A Quote
          </Link>
          <Link to="/addnew">
            Add
          </Link>
        </nav>
        <Routes>
          <Route path="submit" element={<SubmitQuote />} />
          <Route path="addnew" element={<AddNew />} />
          <Route path="/" element={<Home />} />
        </Routes>

      </Router>


    </div>
  );
}

export default App;
