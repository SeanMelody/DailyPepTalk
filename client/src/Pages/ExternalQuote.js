import React from 'react'
import axios from "axios"

const ExternalQuote = () => {


    const quoteGen = async () => {

        const getQuote = await axios.get("/api/externalquote")
        console.log(getQuote.data)

    }

    return (
        <div>ExternalQuote

            <h1>Press Me for a quote!</h1>
            <button onClick={quoteGen}>Quote</button>
        </div>
    )
}

export default ExternalQuote