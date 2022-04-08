import './App.css';
import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from './Pages/Home';
import SubmitQuote from './Pages/SubmitQuote';
import AddNew from './Pages/AddNew'
import SecureQuotes from './Pages/SecureQuotes';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Confirm from './Pages/Confirm';
import ConfirmAccount from './Pages/ConfirmAccount';
import UserContext from './Context/UserContext'
import axios from 'axios'


function App() {

  const [userData, setUserData] = useState({
    user: undefined,
    token: undefined
  })

  const checkLoggedIn = async () => {
    let token = localStorage.getItem("auth-token")

    if (token === null) {
      localStorage.setItem("auth-token", "")
    }
    // If no auth token, call the database and set the userData
    else {
      try {
        const userRes = await axios.get("/users", {
          headers: { "x-auth-token": token },
        })
        console.log("app.js", userRes.data)
        setUserData({ token, user: userRes.data })
      } catch (err) {
        console.log("User must log in")
      }
    }

  }

  useEffect(() => {
    checkLoggedIn()
  }, [])

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
          <Link to="/securequotes">
            Secure Quotes
          </Link>
          <Link to="/login">
            Login
          </Link>
          <Link to="/register">
            Register
          </Link>
        </nav>
        <UserContext.Provider value={{ userData, setUserData }} >
          <Routes>
            <Route path="submit" element={<SubmitQuote />} />
            <Route path="addnew" element={<AddNew />} />
            <Route path="securequotes" element={<SecureQuotes />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="confirm" element={<Confirm />} />
            <Route path="confirm_token:token" element={<ConfirmAccount />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </UserContext.Provider>
      </Router>


    </div>
  );
}

export default App;
