import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './People.css'

const People = (props) => {
    console.log(props)
    const{name,email,gender,photo,salary} = props.people;
    return (
        <div className="people">

            <div className="people-img">
                <img src={photo} alt=""/>

            </div>

            <div className="people-info">
                <h2> Name: <span id="color"> {name}</span> </h2>
                <p> <small> Email: {email}</small></p>
                <p> <small> Gender: {gender}</small></p>
                <p> <small> Salary: <span id="color-2">  {salary}</span></small></p>
                <br/>

                <button className="main-button" onClick={() => props.handleAddPerson(props.people)}> <FontAwesomeIcon icon={faUserPlus} /> Add Me </button>

            </div>
            
        </div>
    );
};

export default People;