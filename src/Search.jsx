import React from "react";
import axios from 'axios';

export default function Search(props) {

    let onClick = (category) => async (event) => {
       let api_key = 'dxirLfvnmFlvxIpvmBrotrasncTduFC-Uc-pG3wsjVOz2uvdPc7X2PFQIvWnNc3VSZgqCmyFLlC4YdN94LITe_-DtvL7yyiaYKho_10Ug3V0mxycgiSErmnCmEuAYnYx'
        // axios.interceptors.request.use(
        //     config => {
        //         config.headers.authorization = `Bearer ${api_key}`;
        //         config.headers.mode = 'no-cors';
        //         return config;
        //     },
        //     error => {
        //         return Promise.reject(error);
        //     }
        // )

        axios.defaults.headers.common['Authorization'] = `Bearer ${api_key}`;
        let data = await axios.get(`https://api.yelp.com/v3/businesses/search?latitude=37.786882&longitude=-122.399972&categories=${category}`);
        console.log(data);
    }
    return (
        <div>
            <button id="vegan" onClick={onClick("vegan")}>Vegan</button>
            <button id="vegetarian" onClick={onClick("vegetarian")}>Vegetarian</button>
        </div>
    )
}