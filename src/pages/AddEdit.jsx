import React, { useState } from 'react';
import firedb from '../firebase';
import { toast } from 'react-toastify';
import './styles.css';
import { useHistory } from 'react-router-dom';

const initialState = {
    name: "",
    email: "",
    contact: ""
}
const AddEdit = () => {
    const [state, setState] = useState(initialState);
    const [data, setData] = useState({});
    const { name, email, contact } = state;
    const history = useHistory();
    
    const inputChangeHandler = (event) => {
        const {name, value} = event.target;
        setState({...state, [name]: value});
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if(!name || !email || !contact){
            toast.error("Fields cannot be empty...☹");
        }
        else{
            firedb.child("contactDB").push(state, (error) => {
                if(error){
                    toast.error(error);
                }
                else{
                    toast.success("Contact added successfully...🙂")
                }
            });
            setTimeout(() => history.push("/"), 500);
        }
    }

    return (
        <div className="mt-5">
            <form className="form-body" onSubmit={submitHandler}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" className="form-control" name="name" placeholder="Enter name" value={name} onChange={inputChangeHandler} />
           
                <label htmlFor="email" className="mt-4">Email</label>
                <input type="email" id="email" className="form-control" name="email" placeholder="Enter Email" value={email} onChange={inputChangeHandler} />           

                <label htmlFor="contact" className="mt-4">Contact number</label>
                <input type="text" id="contact" className="form-control" name="contact" placeholder="Enter contact number" value={contact} onChange={inputChangeHandler} maxLength={10} />
            
                <button type="submit" className="btn btn-success mt-4 w-100 btn-lg">Save Contact</button>
            </form>
        </div>
    )
}

export default AddEdit
