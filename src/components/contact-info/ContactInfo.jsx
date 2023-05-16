import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import ContactItem from "../contact-item/ContactItem";



export default function ContactInfo() {

    const API_URL = "https://random-data-api.com/api/v2/users";
    let {id} = useParams();
    const [info, setInfo] = useState();



    useEffect(() => {
        const url = API_URL + "?size=1"
        fetch(url)
            .then(data => data.json())
            .then(data => setInfo(data));


    }, []);


    if (info) {
        console.log(info);
       return (
           <div>
            <h1>Some info</h1>
            <div>
                <img src={info.avatar} alt="Contact" className="Avatar"/>
                <h2>{info.first_name} {info.last_name}</h2>
            </div>
            <p><strong>Title:</strong> {info.employment.title}</p>
            <p><strong>Email:</strong> {info.email}</p>
            <p><strong>Gender:</strong> {info.gender}</p>
            <p><strong>Phone </strong> {info.phone_number}</p>
            <p><strong>Location:</strong> {info.address.city}, {info.address.state}, {info.address.country}</p>
        </div>);
    }

    else {
        return <p>Data is being fetched</p>}
}


