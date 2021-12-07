import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PersonDetail = (props) => {
    const { id } = props;
    const [person, setPerson] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/api/people/'+ id)
            .then((res) => {
                setPerson({...res.data})
            })
    }, [])

    return(
        <div>
            <p>First Name: {person.firstName}</p>
            <p>Last Name: {person.lastName} </p>
        </div>
    )

}

export default PersonDetail;