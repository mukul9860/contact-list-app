import React from 'react'
import './style.css';

const ViewContact = (props) => {
    return (
        <div className="card card-style">
            <div className="card-body">
                <h5 className="card-title">Contact Detail</h5>
                <div className="card-text">
                    <div className="mt-4">
                        <strong>Id: </strong>
                        <span>{props.id}</span>
                    </div>
                    <div className="mt-3">
                        <strong>Name: </strong>
                        <span>{props.name}</span>
                    </div>
                    <div className="mt-3">
                        <strong>Email: </strong>
                        <span>{props.email}</span>
                    </div>
                    <div className="mt-3">
                        <strong>Contact no.: </strong>
                        <span>{props.contact}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewContact
