import React from 'react'
import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div>
            <h1 className="space-large">404 ERROR</h1>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <img src="./obi-wan.jpg" alt="Obi-Wan wrong page"></img>
                    <div className="row justify-content-center">
                        <div className="col-md-12 space-large">
                            <h5>You want to go back <Link to="/">
                                <h5 className="link-design">Home</h5>
                            </Link></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound