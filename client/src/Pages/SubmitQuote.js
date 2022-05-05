import React, { useState } from 'react'
import axios from "axios"


const SubmitQuote = () => {

    //use onSubmit to set state
    const [submitQuote, setsubmitQuote] = useState({
        quote: "",
        author: "",
        submittedBy: "",
        email: "",
        tags: [],
    })
    // Set the change for state
    const onChange = (e) => {
        setsubmitQuote({ ...submitQuote, [e.target.name]: e.target.value })
    }

    const submit = (e) => {
        e.preventDefault();
        console.log(submitQuote)
        try {
            axios.post("/api/submittedQuote", submitQuote)
                .then((data) => {
                    console.log(data)
                })
            console.log("submitted successfully")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="submit-quote space-large container">
            <h3>Submit Quote</h3>
            <form onSubmit={submit} className="justify-content-center padding-medium">
                <div className="row">
                    <textarea
                        className="form-control margin-small"
                        rows="3"
                        type="text"
                        name="quote"
                        id="quote"
                        placeholder="quote"
                        onChange={onChange}></textarea>
                </div>
                <div className="row">
                    <input type="text"
                        className="form-control margin-small"
                        name="author"
                        id="author"
                        placeholder="author"
                        onChange={onChange}></input>
                </div>
                <div className="row">
                    <input type="text"
                        className="form-control margin-small"
                        name="submittedBy"
                        id="submittedBy"
                        placeholder="Your Name"
                        onChange={onChange}></input>
                </div>
                <div className="row">
                    <input type="text"
                        className="form-control margin-small"
                        name="email"
                        id="email"
                        placeholder="Email"
                        onChange={onChange}></input>
                </div>
                <div className="row">
                    <select type="text"
                        className="form-control margin-small"
                        name="tags"
                        id="tags"
                        placeholder="Tags"
                        onChange={onChange}>
                        <option>--Select a Tag--</option>
                        <option>Inspirational</option>
                        <option>Success</option>
                        <option>Positive</option>
                        <option>Confident</option>
                        <option>Believe</option>
                        <option>Self-Esteem</option>
                    </select>

                </div>
                <div className="row">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>


        </div>
    )
}

export default SubmitQuote