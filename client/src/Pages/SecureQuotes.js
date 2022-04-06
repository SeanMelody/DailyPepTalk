import React, { useState, useEffect } from 'react'
import axios from 'axios'


const SecureQuotes = () => {

    const [secureQuotes, setSecureQuotes] = useState([])

    const getSecureQuoteList = async () => {

        try {
            const quotesList = await axios.get("api/quotes")

            // Reverse the list of quotes so the most recent shows up first
            const sortedSecureQuotes = quotesList.data.sort().reverse()
            // console.log("sorted", sortedQuotes)


            setSecureQuotes(sortedSecureQuotes)
            console.log(quotesList.data)

        } catch (error) {
            console.log(error)
        }
    }

    const deleteQuote = async (quote) => {

        console.log(quote)

        try {
            const deleteAQuote = await axios.delete("api/deletequote", { data: { source: quote } })
            // axios.delete("api/deletequote")
            // console.log(deleteAQuote.data)
            window.location.reload()


        } catch (error) {
            console.log(error)
        }

    }



    useEffect(() => {
        getSecureQuoteList()

    }, [])

    return (


        <div>
            <h2>Secure Quotes</h2>

            <form>Edit</form>

            {secureQuotes.length ? (
                // Map through the quotes database displaying each as a Quotes Component
                <div>
                    {secureQuotes.map((quote) => (


                        <div key={quote._id}>
                            <hr></hr>
                            <div>
                                <h2>Quote Description</h2>
                                <p>{quote.quote}</p>
                                <h3>
                                    {quote.author}
                                </h3>
                                <h5>{quote.submittedBy}</h5>
                                <p>{quote.tags}</p>
                                <p>{quote.date}</p>
                                <button onClick={() => deleteQuote(quote)}>Delete Quote</button>

                            </div>

                        </div>



                    ))}

                </div>
            ) : (
                // Display if the Database is down, or route not working correctly
                <div>
                    <p>Quotes not loading</p>
                </div>
            )
            }





        </div>
    )
}

export default SecureQuotes