import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import axios from "axios"

const AddNew = () => {

    const navigate = useNavigate()


    //use onSubmit to set state
    const [addQuote, setaddQuote] = useState({
        quote: "",
        author: "",
        submittedBy: "",
        email: "",
        tags: [],
    })
    // Set the change for state
    const onChange = (e) => {
        setaddQuote({ ...addQuote, [e.target.name]: e.target.value })
    }

    const submit = (e) => {
        e.preventDefault();
        console.log(addQuote)
        try {
            axios.post("/api/quotes", addQuote)
                .then((data) => {
                    console.log(data)
                })
            console.log("submitted successfully")
        } catch (error) {
            console.log(error)
        }
    }

    // useEffect(() => {
    //     const password = prompt("Whats the password")


    //     if (password !== "7777") navigate("/")
    // }, [navigate])

    return (
        <div className="submit-quote space-large">Add Quote
            <form onSubmit={submit}>
                <textarea
                    type="text"
                    name="quote"
                    id="quote"
                    placeholder="quote"
                    onChange={onChange}></textarea>
                <input type="text"
                    name="author"
                    id="author"
                    placeholder="author"
                    onChange={onChange}></input>
                <input type="text"
                    name="submittedBy"
                    id="submittedBy"
                    placeholder="Your Name"
                    onChange={onChange}></input>
                <input type="text"
                    name="tags"
                    id="tags"
                    placeholder="Tags"
                    onChange={onChange}></input>
                <button>Submit</button>
            </form>


        </div>
    )
}

export default AddNew