import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Register = () => {

    const [form, setForm] = useState()

    const navigate = useNavigate()

    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const submit = async (e) => {
        e.preventDefault()
        // console.log(form)

        try {
            // console.log(form)
            await axios.post("/users/register", form);
            // const newUser = await axios.post("/users/register", form);
            // console.log(newUser)
            navigate("/confirm")
        } catch (err) {
            console.log(err.response)
        }
    }

    return (
        <div>
            <h1>Register</h1>
            <div className="container text-center justify-content-center">
                <form onSubmit={submit}>
                    <h3 className="col-md-12">Email</h3>
                    <div className="row justify-content-center">
                        <input onChange={onChange} type="text" name="email" className="row col-md-6 text-center"></input>
                    </div>
                    <h3 className="col-md-12">User Name</h3>
                    <div className="row justify-content-center">
                        <input onChange={onChange} type="text" name="displayName" className="row col-md-6 text-center"></input>
                    </div>
                    <h3 className="col-md-12">Password</h3>
                    <div className="row justify-content-center">
                        <input onChange={onChange} type="text" name="password" className="row col-md-6 text-center"></input>
                    </div>
                    <h3 className="col-md-12">Please Re-type your password</h3>
                    <div className="row justify-content-center">
                        <input onChange={onChange} type="text" name="passwordCheck" className="row col-md-6 text-center"></input>
                    </div>
                    <input type="submit" className="btn btn-primary border-dark" />
                </form>
            </div>
        </div>
    )
}

export default Register
