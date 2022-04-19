import React, { useState, useEffect, useContext } from 'react'
import userContext from "../Context/UserContext"
import { useNavigate } from "react-router-dom"
import axios from 'axios'


const SecureQuotes = () => {

    const [secureQuotes, setSecureQuotes] = useState([])

    const { userData } = useContext(userContext)

    const navigate = useNavigate()

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
        if (!userData.user) {
            navigate("/")
        }

        // console.log(userData.user)

        userData.user
            ? console.log(userData.user.displayName)
            : console.log("User Loading")

    }, [userData.user, navigate])



    useEffect(() => {
        getSecureQuoteList()

    }, [])

    return (


        <div>
            <h2>Secure Quotes</h2>

            <form>Edit</form>

            {secureQuotes.length ? (
                // Map through the quotes database displaying each as a Quotes Component
                <div className="container">
                    {secureQuotes.map((quote) => (


                        <div key={quote._id}>
                            <hr className="hrs"></hr>
                            <div className="row justify-content-center">
                                <div className="card col-md-6 padding-medium">
                                    <h2>Quote Description</h2>
                                    <p>{quote.quote}</p>
                                    <h3>
                                        {quote.author}
                                    </h3>
                                    <h5>{quote.submittedBy}</h5>
                                    <p>{quote.tags}</p>
                                    <p>{quote.date}</p>
                                    <button onClick={() => deleteQuote(quote)} className="btn btn-danger" >Delete Quote</button>
                                </div>
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