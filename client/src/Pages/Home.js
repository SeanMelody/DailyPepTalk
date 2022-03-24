import React from 'react'
import API from '../Utils/API';
import axios from "axios"
import Quotes from '../Components/Quotes';

const Home = () => {

    // // dotenv const to hide API key
    // const dotenv = require('dotenv').config()
    // // Check for errors
    // if (dotenv.error) {
    //     throw dotenv.error
    // }
    // // Set the .env data as a variable for the API Key
    // const quotesAPI = dotenv.parsed.quotesAPI


    const quoteGen = () => {

        var options = {
            method: 'GET',
            url: 'https://quotes15.p.rapidapi.com/quotes/random/',
            headers: {
                'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
                // 'X-RapidAPI-Key': quotesAPI
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });

    }


    return (
        <div>
            {/* <h1>Press Me for a quote!</h1> */}
            <button onClick={quoteGen}>Quote</button>
            {/* <API /> */}
            <Quotes />
        </div >
    )
}

export default Home