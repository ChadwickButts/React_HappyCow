import React from 'react';
import cardPhoto from './IMG_5954.jpeg';

class Card extends React.Component {
    render() {
        return (
            <article className="Card">
                <figure>
                    <img src={cardPhoto} alt="Restaurant"></img>
                    <hgroup>
                        <h3>
                            Business Name
                        </h3>
                        <h4>
                            Location
                        </h4>
                    </hgroup>
                    <figcaption>
                        this is a description for a location
                    </figcaption>
                </figure>
            </article>
        );
    }
}

export default Card;