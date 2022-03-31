import React, { useEffect, useState } from 'react'
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

    // useEffect(() => {
    //     quoteGen()

    // }, [])


    return (
        <div>ExternalQuote

            <h1>Press Me for a quote!</h1>
            <button onClick={quoteGen}>Quote</button>


            <div>
                <p>{extQuote.quote}</p>
                <h3>{extQuote.author}</h3>

            </div>



        </div>
    )
}

export default ExternalQuote