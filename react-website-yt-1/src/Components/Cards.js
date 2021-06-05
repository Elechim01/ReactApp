import React from 'react';
import Carditem from './Carditem';
import './Cards.css';
import image1 from '../images/img-1.jpg';
import image2 from '../images/img-2.jpg';
import image3 from '../images/img-3.jpg';
import image4 from '../images/img-4.jpg';
import image5 from '../images/img-5.jpg';
import image6 from '../images/img-6.jpg';
import image7 from '../images/img-7.jpg';
import image8 from '../images/img-8.jpg';
import image9 from '../images/img-9.jpg';
function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className = "cards__container">
                <div className = "cards__wrapped">
                    <ul className="cards__items">
                      <Carditem
                        src = {image9}
                        text = "Explore the hidden waterfall deep inside the amazon Jungle"
                        label = 'Adventure'
                        path = '/services'
                      />  
                      <Carditem
                        src = {image2}
                        text = "Travel throught the islands of bali in a Privare Cruise"
                        label = 'Luxury'
                        path = '/services'
                      />  
                    </ul>
                    <ul className="cards__items">
                      <Carditem
                        src = {image3}
                        text = "Set Sail in the atlantic Ocean visiting Uncharted Waters"
                        label = 'Mystery'
                        path = '/services'
                      />  
                      <Carditem
                        src = {image4}
                        text = "Experinece Football on Top of the Himilayan Mountains"
                        label = 'Adventure'
                        path = '/products'
                      /> 
                      <Carditem
                        src = {image8}
                        text = "Ride throught the Sahara Desert on a guided camel tour"
                        label = 'Adrenaline'
                        path = '/sign-up'
                      /> 
                     </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
