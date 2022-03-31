import React from 'react'
import axios from "axios"

const ExternalQuote = () => {


    const quoteGen = () => {

        // var options = {
        //     method: 'GET',
        //     url: 'https://world-of-quotes.p.rapidapi.com/v1/quotes/quote-of-the-day',
        //     params: { category: 'inspirational' },
        //     headers: {
        //         'X-RapidAPI-Host': 'world-of-quotes.p.rapidapi.com',
        //      
        //     }
        // };

        // axios.request(options).then(function (response) {
        //     console.log(response.data);
        // }).catch(function (error) {
        //     console.error(error);
        // });

    }

    return (
        <div>ExternalQuote

            <h1>Press Me for a quote!</h1>
            <button onClick={quoteGen}>Quote</button>
        </div>
    )
}

export default ExternalQuote