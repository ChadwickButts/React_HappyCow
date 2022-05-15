import React from "react";

export default function Search(props) {

    let onClick = (category) => (event) => {
        console.log(category)
    }

    return (
        <div>
            <button id="vegan" onClick={onClick("vegan")}>Vegan</button>
            <button id="vegetarian" onClick={onClick("vegetarian")}>Vegetarian</button>
        </div>
    )
}




