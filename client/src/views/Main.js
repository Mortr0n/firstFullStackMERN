import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PersonForm from '../components/PersonForm';


const Main = () => {
    // was for checking the react and server were working together properly
    // const [ message, setMessage ] = useState("Loading...")
    // useEffect(() => {
    //     axios.get("http://localhost:8000/api")
    //         .then((res)=> {
    //             console.log(res.data.message);
    //             setMessage(res.data.message);
    //         } )
    //         .catch((err) => console.log(err));
    // }, []);
    return (
        <div>
            {/* below line was for react and server functionality testing */}
            {/* <h2>Message from the backend: {message} </h2> */}
            <PersonForm />
        </div>
    )
}

export default Main;