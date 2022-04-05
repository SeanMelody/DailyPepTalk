import React, { useState, useEffect } from 'react'
import axios from "axios"
import Quotes from '../Components/Quotes';
import ExternalQuote from './ExternalQuote';

const Home = () => {

    const [quotes, setQuotes] = useState([])


    const getQuoteList = async () => {

        try {
            const quotesList = await axios.get("api/quotes")

            const sortedQuotes = quotes.sort((a, b) => {
                // If statement to sort a->z or z->a
                if (b.name.first > a.name.first) {
                    return -1
                }
                if (a.name.first > b.name.first) {
                    return 1
                }
                return 0;
            });

            console.log(sortedQuotes)


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
            {/* External Quote Component to load quotes from RapidAPI */}
            <ExternalQuote />

            {quotes.length ? (
                // Map through the quotes database displaying each as a Quotes Component
                <div>
                    {quotes.map((quote) => (

                        <Quotes quote={quote} key={Math.random()} />

                    ))}

                </div>
            ) : (
                // Display if the Database is down, or route not working correctly
                <div>
                    <p>Quotes not loading</p>
                </div>
            )
            }



        </div >
    )
}

export default Home