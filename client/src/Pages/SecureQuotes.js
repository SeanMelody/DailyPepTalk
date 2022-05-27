import React, { useState, useEffect, useContext } from 'react'
import userContext from "../Context/UserContext"
import { useNavigate } from "react-router-dom"
import axios from 'axios'


const SecureQuotes = () => {

    const [secureQuotes, setSecureQuotes] = useState([])

    const { userData } = useContext(userContext)

    const navigate = useNavigate()

    //use onSubmit to set state
    const [editQuote, setEditQuote] = useState({
        quote: "",
        author: "",
        submittedBy: "",
        email: "",
        tags: [],
    })
    // Set the change for state
    const onChange = (e) => {
        setEditQuote({ ...editQuote, [e.target.name]: e.target.value })
    }

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

    // const setPrevent = (e) => {
    //     e.preventDefault()

    // }

    const edit = (e) => {

        e.preventDefault()

        console.log(editQuote)
        // setEditQuote(quote)

        // console.log(quote, editQuote)
        try {
            axios.put("/api/editquote", { data: { source: editQuote } })
                .then((data) => {
                    console.log(data)
                })
            console.log("edited successfully")
        } catch (error) {
            console.log(error)
        }
    }

    // const editAQuote = async (quote) => {

    //     console.log(quote)
    // }

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
                                    <p>{quote.quote}</p>
                                    <h4>
                                        Author: {quote.author}
                                    </h4>
                                    <h5>
                                        Submitted By: {quote.submittedBy}
                                    </h5>
                                    <p>Tags: {quote.tags}</p>
                                    <p>Date: {quote.date}</p>
                                    <button onClick={() => deleteQuote(quote)} className="btn btn-danger" >Delete Quote</button>


                                    <hr></hr>

                                    <div>
                                        <h6>Edit Quote</h6>
                                        <form>
                                            {/* <form onSubmit={edit(quote)}> */}

                                            <div className="row justify-content-center">
                                                <textarea
                                                    type="text"
                                                    name="quote"
                                                    id="quote"
                                                    defaultValue={quote.quote}
                                                    onChange={onChange}
                                                    className="col-md-12 margin-small">
                                                </textarea>
                                            </div>
                                            <div className="row justify-content-center">
                                                <textarea type="text"
                                                    name="author"
                                                    id="author"
                                                    defaultValue={quote.author}
                                                    onChange={onChange}
                                                    className="col-md-6 margin-small"></textarea>
                                            </div>
                                            <div className="row justify-content-center">
                                                <textarea type="text"
                                                    name="submittedBy"
                                                    id="submittedBy"
                                                    defaultValue={quote.submittedBy}
                                                    onChange={onChange}
                                                    className="col-md-6 margin-small"></textarea>
                                            </div>
                                            <div className="row justify-content-center">
                                                <textarea type="text"
                                                    name="tags"
                                                    id="tags"
                                                    defaultValue={quote.tags}
                                                    onChange={onChange}
                                                    className="col-md-6 margin-small"></textarea>
                                            </div>
                                            <div className="row justify-content-center">
                                                <button onClick={edit} className="btn btn-danger col-md-6 margin-small" >Edit Quote</button>
                                                {/* <button onClick={() => { setPrevent(); edit(quote) }} className="btn btn-danger col-md-6 margin-small" >Edit Quote</button> */}
                                            </div>

                                        </form>
                                    </div>
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