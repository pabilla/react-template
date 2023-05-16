import React, {useState, useEffect} from 'react'
import ContactItem from "../contact-item/ContactItem";
import {Link} from "react-router-dom";

export default function ContactList() {

    const API_URL = "https://random-data-api.com/api/v2/users?size=10";

    // Declaration of the component's state
    // Reminder: the difference between a regular variable
    // and a state is when states changes, the component is re-rendered
    // meaning the JSX (HTML) will be too
    const [contacts, setContacts] = useState([]);

    // Reminder: the useEffect hook let us define piece of code that should be
    // executed at a specific moment of the component life-cycle
    // useEffect expects two paramters, one is a function (an anomymous function for better syntax)
    // and a list of variable/state that should trigger the execution of the function passed in the
    // first parameter.
    // If the second paramter is an empty list (like it's the case in the useEffect hook bellow),
    // annonymous function passed as the first parameter will be executed once the component is rendered
    // It's usually a good place to make API calls.
    useEffect(() => {
        fetch(API_URL)
            .then(data => data.json())
            .then(data => setContacts(data));


    }, []);


    // Using an array.map() to map/transform a list of contact (data)
    // to a list of 
    // <li> 
    //      <Link to={route}><ContactItem data={contact}/>
    //      </Link> 
    //  </li>
    // This usually how we display lists of items in a React application
    const items = contacts.map(contact => {
        const newUrl = "contact/" + contact.id
        return (
            <li key={contact.uid}>
                <Link to={newUrl}>
                    <ContactItem contactData={contact}/>
                </Link>
            </li>);
    });

    if (contacts.length > 0) {
        return (
            <div>
                <ul>
                    {/*Reminder: {} (brackets) are used*/}
                    {/*to include data in the JSX*/}
                    {items}
                </ul>
            </div>
        )
    } else {
        return <p>The contact list are being fetched...</p>
    }
}
