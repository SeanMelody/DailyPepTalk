import React, { useState } from 'react'
import axios from "axios"

const ExternalQuote = () => {

    const [extQuote, setExtQuote] = useState({
        quote: "",
        author: ""
    })

    const quoteGen = async () => {
        try {
            const getQuote = await axios.get("/api/externalquote")
            console.log(getQuote.data)
            setExtQuote(getQuote.data)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div>
            <hr></hr>
            <h3>You reached the end of the Quotes</h3>
            <h5>But if you would like a randomly generated quote, hit this button!</h5>
            <button className="btn btn-outline-dark" onClick={quoteGen}>Quote</button>


            <div>
                <br></br>
                <p>{extQuote.quote}</p>
                <h3>{extQuote.author}</h3>

            </div>



        </div>
    )
}

export default ExternalQuote