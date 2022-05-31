import React from "react";

export default function Search(props) {

    let onClick = (category) => async (event) => {
        let response = await fetch(`https://api.yelp.com/v3/businesses/search?latitude=37.786882&longitude=-122.399972&categories=${category}`);
        let data = await response.json();
        console.log(data);
    }

    return (
        <div>
            <button id="vegan" onClick={onClick("vegan")}>Vegan</button>
            <button id="vegetarian" onClick={onClick("vegetarian")}>Vegetarian</button>
        </div>
    )
}




