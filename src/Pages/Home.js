import React from 'react';
import '../Styles/Home.css'
import {Link} from "react-router-dom";
import BannerImage from '../assets/pizza.jpeg'
function Home() {
    return (
        <div className="home" style={{backgroundImage: `url(${BannerImage})`}}>
            <div className="headerContainer" >
                <h1>ALI's PIZZERIA</h1>
                <p>PIZZA TO FIT ANY TASTE</p>
                <Link to='/menu'>
                <button>Order Now</button>
                </Link>

            </div>
        </div>
    )
        
          
        
    
}

export default Home;
