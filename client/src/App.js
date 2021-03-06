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
import NotFound from './Pages/NotFound';


function App() {

  const [userData, setUserData] = useState({
    user: undefined,
    token: undefined
  })

  // const navigate = useNavigate()

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

  const logout = () => {
    setUserData({ token: undefined, user: undefined })
    localStorage.setItem("auth-token", "")
    // navigate("/")
    checkLoggedIn()

  }

  useEffect(() => {
    checkLoggedIn()
  }, [])

  return (
    <div className="App">
      <Router>
        {!userData.user ?
          <>
            <nav className="navbar">
              <Link to="/">
                <h3 className="margin10 link-design">Quotes</h3>
              </Link>
              <Link to="/submit">
                <button className="btn btn-outline-dark margin10">Submit A Quote</button>
              </Link>
              <Link to="/login">
                <button className="btn btn-outline-dark margin10">Admin Login</button>
              </Link>
            </nav>
            <hr></hr>

          </>
          :
          <>
            <nav className="navbar">
              <Link to="/">
                <h3 className="margin10 link-design">Welcome {userData.user.displayName}</h3>
              </Link>
              <Link to="/securequotes">
                <button className="btn btn-outline-dark margin10">Edit / Delete Quotes</button>
              </Link>
              <Link to="/addnew">
                <button className="btn btn-outline-dark margin10">Add a New Quote</button>
              </Link>
              <button onClick={logout} className="btn btn btn-outline-danger margin10">Logout</button>
            </nav>
            <hr></hr>
          </>
        }

        <UserContext.Provider value={{ userData, setUserData }} >
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="submit" element={<SubmitQuote />} />
            <Route path="addnew" element={<AddNew />} />
            <Route path="securequotes" element={<SecureQuotes />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="confirm" element={<Confirm />} />
            <Route path="confirm_token:token" element={<ConfirmAccount />} user={userData} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </UserContext.Provider>
      </Router>


    </div>
  );
}

export default App;
