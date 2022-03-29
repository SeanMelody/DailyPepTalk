import React, { useState } from 'react'
import axios from "axios"


const SubmitQuote = () => {

    //use onSubmit to set state
    const [submitQuote, setsubmitQuote] = useState({
        quote: "",
        author: "",
        submittedBy: "",
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
            const newQuote = axios.post("/api/submittedQuote", submitQuote)
            console.log(newQuote.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="submit-quote space-large">SubmitQuote
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

export default SubmitQuote