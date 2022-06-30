import React, { useState } from 'react'
import axios from "axios"

const ExternalQuote = () => {

    const [extQuote, setExtQuote] = useState({
        quote: "",
        author: ""
    })

    const [loading, setLoading] = useState({
        loading: false
    })

    const quoteGen = async () => {

        setLoading(true)
        try {
            const getQuote = await axios.get("/api/externalquote")

            console.log(getQuote.data)
            setExtQuote(getQuote.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
        console.log("loading done")
        // setLoading(false)
    }

    return (
        <div>
            <hr></hr>
            <h3>You reached the end of the Quotes</h3>
            <h5>But if you would like a randomly generated quote, hit this button!</h5>
            <button className="btn btn-outline-dark margin-small" onClick={quoteGen}>Random Quote</button>
            {loading.true ? <h5 className="margin-small">...Loading</h5> : null}

            <div>
                <br></br>
                <p>{extQuote.quote}</p>
                <h3>{extQuote.author}</h3>

            </div>



        </div>
    )
}

export default ExternalQuote