import React, { useState, useContext, useEffect } from 'react'
import axios from "axios"

const Login = () => {

    const [login, setLogin] = useState()

    const onChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }

    const submitLogin = (e) => {
        e.preventDefault()
        console.log(login)


    }


    return (
        <div>
            <h1>Login</h1>
            <div className="container justify-content-center">
                <form onSubmit={submitLogin}>
                    <h3 className="col-md-12">Email:</h3>
                    <div className="row justify-content-center">
                        <input onChange={onChange} type="text" name="email" className="col-md-6 text-center"></input>
                    </div>
                    <h3 className="col-md-12">Password:</h3>
                    <div className="row justify-content-center">
                        <input onChange={onChange} type="password" name="password" className="col-md-6 text-center"></input>
                    </div>
                    <input type="submit" className="btn btn-primary space-large border-dark" />
                </form>
            </div>
        </div >
    )
}

export default Login