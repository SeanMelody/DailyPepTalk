import React, { useState, useEffect } from 'react'
import axios from "axios"

const Quotes = (props) => {

    const [userData, setUserData] = useState({
        user: undefined,
        token: undefined
    })

    // const navigate = useNavigate()

    const checkLoggedIn = async () => {
        let token = localStorage.getItem("auth-token")

        if (token === null) {
            localStorage.setItem("auth-token", "")
        }
        // If no auth token, call the database and set the userData
        else {
            try {
                const userRes = await axios.get("/users", {
                    headers: { "x-auth-token": token },
                })
                console.log("app.js", userRes.data)
                setUserData({ token, user: userRes.data })
            } catch (err) {
                console.log("User must log in")
            }
        }

    }



    useEffect(() => {
        checkLoggedIn()
    }, [])

    return (
        <div className="container">
            <hr className="hrs"></hr>
            <div key={props.quote._id} className="row justify-content-center">
                <div className="card col-md-6">
                    {/* <h2>Quote Description</h2> */}
                    <p>{props.quote.quote}</p>
                    <h3>
                        {props.quote.author}
                    </h3>
                    <h5>{props.quote.submittedBy}</h5>
                    <p>{props.quote.tags}</p>
                    <p>{props.quote.date}</p>
                    {!userData.user ?
                        <>

                            <h3 className="margin10">Quotes</h3>



                        </>
                        :
                        <>

                            <h3 className="margin10">Admin Quotes</h3>

                        </>
                    }

                </div>

            </div>
        </div>
    )
}

export default Quotes