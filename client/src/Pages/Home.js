import React, { useState, useEffect } from 'react'
import axios from "axios"
import Quotes from '../Components/Quotes';
import ExternalQuote from './ExternalQuote';
import Footer from '../Components/Footer'

const Home = () => {

    const [quotes, setQuotes] = useState([])


    const getQuoteList = async () => {

        try {
            const quotesList = await axios.get("api/quotes")

            // Reverse the list of quotes so the most recent shows up first
            const sortedQuotes = quotesList.data.sort().reverse()
            // console.log("sorted", sortedQuotes)


            setQuotes(sortedQuotes)
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
            <h1>Daily Quotes From a Best Friend</h1>
            <p>Inspired by: <a href="https://dailypeptalkfromabestfriend.com/">dailypeptalkfromabestfriend.com</a></p>
            {
                quotes.length ? (
                    // Map through the quotes database displaying each as a Quotes Component
                    <div className="container">
                        {quotes.map((quote) => (

                            <Quotes quote={quote} key={quote._id} />

                        ))}

                    </div>
                ) : (
                    // Display if the Database is down, or route not working correctly
                    <div>
                        <p>Quotes not loading</p>
                    </div>
                )
            }
            {/* External Quote Component to load quotes from RapidAPI */}
            <ExternalQuote />

            <Footer />
        </div >
    )
}

export default Home