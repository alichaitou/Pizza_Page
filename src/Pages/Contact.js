import React from 'react'
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../Styles/Contact.css";
function Contact() {
    return (
        <div className="contact">
            <div className="leftSide"  style={{backgroundImage: `url(${PizzaLeft})`}}></div>
            <div className="rightSide">
                <h1> Contact Us</h1>
                <form id="contact-form" method="Post">
                    <label htmlFor="name">Full Name</label>
                    <input name="name" placeholder="Full Name...." type="text"/>
                    <label htmlFor="email">Email</label>
                    <input name="email" placeholder="someone@hotmail.com" type="email"/>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" placeholder="Enter message" rows="6"></textarea>
                    <button type="submit">Send Message</button>
                </form>


            </div>
            
        </div>
    )
}

export default Contact



