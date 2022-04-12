import React, { useState, useContext, useEffect } from 'react'
import userContext from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios"

const Login = () => {

    const [login, setLogin] = useState()

    const { userData, setUserData } = useContext(userContext)

    const navigate = useNavigate()

    const onChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }

    const submitLogin = async (e) => {
        e.preventDefault()
        console.log(login)
        try {
            const { data } = await axios.post("/users/login", login)
            console.log(data)

            if (!data.user.confirmed) {
                navigate("/confirm")
                console.log("not confirmed")
            } else {
                console.log("confirmed")
                setUserData({
                    token: data.token,
                    user: data.user,
                    email: data.email
                })
                // console.log(userData)

                localStorage.setItem("auth-token", data.token)
                navigate("/")
            }


        }

        catch (err) {
            console.log("login error", err.response)
        }

    }

    useEffect(() => {
        // console.log(userData)
        if (userData.user) navigate("/")
    }, [userData.user, navigate])



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