import React from 'react'
import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div>
            <h3>Oops</h3>
            <img src="./obi-wan.jpg"></img>
            <h5>You want to go back <Link to="/">
                <h5>Home</h5>
            </Link></h5>
        </div>
    )
}

export default NotFound