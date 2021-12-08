import React from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

const PersonList = (props) => {

    const { removeFromDom, people } = props;
    const deletePerson = (personId) => {
        axios.delete(`http://localhost:8000/api/people/${personId}`)
            .then((res) => {
                removeFromDom(personId)
            })
            .catch((err) => console.log(err));
    }


    return( 
        <div>
            {props.people.map((person, index)=>{
                return(
                    <div className="personBox" key={index}>
                    <Link to={"/people/" + person._id} >
                        <p >{person.lastName}, {person.firstName}</p>
                    </Link>
                    <Link to={"/people/" + person._id + "/edit"} >
                        <p >Edit</p>
                    </Link>
                    <button onClick={(e) => {deletePerson(person._id)}}>Delete</button>
            </div>
                ) 

            })}
        </div>
    )
}

export default PersonList;