import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';

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
    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() =>{
        axios.get('http://localhost:8000/api/people')
            .then(res=>{
                console.log(res.data);
                setPeople(res.data);
                setLoaded(true);
            });
    }, [])

    const removeFromDom = (personId) => {
        setPeople(people.filter(person => person._id != personId));
    }

    return (
        <div>
            {/* below line was for react and server functionality testing */}
            {/* <h2>Message from the backend: {message} </h2> */}
            <PersonForm />
            <hr/>
            { loaded && <PersonList people={people} removeFromDom={removeFromDom} /> }
        </div>
    )
}

export default Main;