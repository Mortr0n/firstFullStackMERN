import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import PersonForm from '../components/PersonForm';
import DeleteButton from '../components/DeleteButton';

const UpdatePerson = (props) => {
    const {id} = props;
    // const [firstName, setFirstName] = useState();
    // const [lastName, setLastName] = useState();
    const [person, setPerson] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/people/' + id)
            .then(res => {
                // setFirstName(res.data.firstName);
                // setLastName(res.data.lastName);
                setPerson(res.data);
                setLoaded(true);
            })
            .catch((err)=> console.log(err))
    }, [])

    const updatePerson = (person) => {
        // e.preventDefault();
        axios.put('http://localhost:8000/api/people/' + id, person)
            .then(res => {
                console.log(res);
                navigate('/people');
            })
    }

    return(
        <div>
            <h1>Update a Person</h1>
                {/* <form onSubmit={updatePerson}> */}
                    {loaded && (
                        <PersonForm
                            onSubmitProp ={updatePerson}
                            initialFirstName={person.firstName}
                            initialLastName={person.lastName} />
                    )}
                    <DeleteButton personId={id} successCallback={() => navigate("/") } />
                    {/* original way commented out */}
                    {/* <p>
                        <label>First Name</label>
                        <input type="text" 
                        name="firstName" 
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)} />
                    </p>
                    <p>
                        <label>Last Name</label>
                        <input type="text" 
                        name="lastName" 
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)} />
                    </p> */}
                    {/* <input type="submit" /> */}
                {/* </form> */}

        </div>
    )
}

export default UpdatePerson;