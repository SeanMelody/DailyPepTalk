import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from './Pages/Home';
import SubmitQuote from './Pages/SubmitQuote';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to="/">
            Home
          </Link>
          <Link to="/submit">
            Submit A Quote
          </Link>
        </div>
        <Routes>
          <Route path="submit" element={<SubmitQuote />} />
          <Route path="/" element={<Home />} />
        </Routes>

      </Router>


    </div>
  );
}

export default App;
