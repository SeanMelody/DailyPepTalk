import React from 'react'

const Quotes = (props) => {
    return (
        <div className="color">
            <hr className="hrs"></hr>
            <div key={props.quote._id} className="row justify-content-center padding-medium">
                <div className="card col-md-6">
                    {/* <h2>Quote Description</h2> */}
                    <p>{props.quote.quote}</p>
                    <h4>
                        Author: {props.quote.author}
                    </h4>
                    <h5>
                        Submitted By: {props.quote.submittedBy}
                    </h5>
                    <p>Tags: {props.quote.tags}</p>
                    {/* <p>{props.quote.date}</p> */}


                </div>

            </div>
        </div>
    )
}

export default Quotes