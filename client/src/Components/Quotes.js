import React from 'react'

const Quotes = (props) => {
    return (
        <div key={props.quote._id}>
            <div>
                <h2>Quote Description</h2>
                <p>{props.quote.quote}</p>
                <h3>
                    {props.quote.author}
                </h3>
                <h5>{props.quote.submittedBy}</h5>
                <p>{props.quote.tags}</p>

            </div>

        </div>
    )
}

export default Quotes