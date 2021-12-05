import React, { useState } from 'react';
import axios from 'axios';

const PersonForm = () => {
    // set first,lastName to blank string using useState to track what's being typed 
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    // handler for the form submission
    const onSubmitHandler = (e) => {
        // prevent default submit page reload
        e.preventDefault();
        // make a post request to create a new person
        axios.post('http://localhost:8000/api/people', {
            firstName,  // shorcut syntax for firstName: firstName,
            lastName,   // shorcut syntax for lastName: lastName,
        })
            .then((res)=>console.log(res))
            // may want to later set up to change the res.status on error
            // .catch((err) => res.status(400).json({ errMessage: err }));
            .catch((err)=>console.log(err))

    }


    return(
        // onChange to update firstName and lastName
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name</label><br/>
                <input type="text" onChange={(e)=>setFirstName(e.target.value)}/>
            </p>
            <p>
                <label>Last Name</label><br/>
                <input type="text" onChange={(e)=>setLastName(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )

}

export default PersonForm;