import React from 'react'
import './style.css';

const ViewContact = (props) => {
    return (
        <div className="card card-style mt-5">
            <div className="card-body">
                <h5 className="card-title">Contact Detail</h5>
                <div className="card-text">
                    <strong>Id: </strong>
                    <span>{props.id}</span>
                    <br />
                    <strong>Name: </strong>
                    <span>{props.name}</span>
                    <br />
                    <strong>Email: </strong>
                    <span>{props.email}</span>
                    <br />
                    <strong>Contact no.: </strong>
                    <span>{props.contact}</span>
                </div>
            </div>
        </div>
    )
}

export default ViewContact
