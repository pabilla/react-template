import React from 'react'
import './contact-items.css';

// Reminder: Props in React can be seen parameters in regular JavaScript functions
// The data passed as props can be accessed in such a way:
// props.data1, props.data2, props.data3
export default function ContactItem(props) {
    console.log(props.contactData)
    return (
        // Write the HTML (jsx) code to display the information of one contact in the contact list
        <div className="container">
            <div className="Bubble">
                <img src={props.contactData.avatar} alt="Contact" className="Avatar"/>
            </div>
            <div className="info">
                <p id="name">{props.contactData.first_name} {props.contactData.last_name}</p>
                <p id="title">{props.contactData.employment.title}</p>
            </div>
        </div>
    )
}
