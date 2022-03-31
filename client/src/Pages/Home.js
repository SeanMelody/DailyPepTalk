import React, { useState, useEffect } from 'react'
// import API from '../Utils/API';
import axios from "axios"
import Quotes from '../Components/Quotes';
import ExternalQuote from './ExternalQuote';

const Home = () => {

    // // dotenv const to hide API key
    // const dotenv = require('dotenv').config()
    // // Check for errors
    // if (dotenv.error) {
    //     throw dotenv.error
    // }
    // // Set the .env data as a variable for the API Key
    // const quotesAPI = dotenv.parsed.quotesAPI

    const [quotes, setQuotes] = useState([])


    const getQuoteList = async () => {

        try {
            const quotesList = await axios.get("api/quotes")
            setQuotes(quotesList.data)
            console.log(quotesList.data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getQuoteList()

    }, [])



    return (
        <div>
            {/* <h1>Press Me for a quote!</h1> */}
            {/* <button onClick={quoteGen}>Quote</button> */}
            {/* <API /> */}


            {/* <Quotes /> */}
            <ExternalQuote />

            {quotes.length ? (
                // Map through the quotes database displaying each as a Quotes Component
                <div>
                    {quotes.map((quote) => (

                        <Quotes quote={quote} key={Math.random()} />

                    ))}

                </div>
            ) : (
                <div>
                    <p>Quotes not loading</p>
                </div>
            )
            }



        </div >
    )
}

export default Home