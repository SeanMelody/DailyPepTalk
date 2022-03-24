import React from 'react'

const Home = () => {

    const quoteGen = () => {
        console.log("quote")
    }


    return (
        <div>
            {/* <h1>Press Me for a quote!</h1> */}
            <button onClick={quoteGen}>Quote</button>
        </div >
    )
}

export default Home