import React from 'react'

const Quotes = (props) => {
    return (
        <div div className="container">
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

                </div>

            </div>
        </div>
    )
}

export default Quotes