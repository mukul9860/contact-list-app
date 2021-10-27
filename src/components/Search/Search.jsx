import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

const Search = () => {
    const [searchContact, setSearchContact] = useState("");
    const history = useHistory();

    const submitHandler = (event) => {
        event.preventDefault();
        if (searchContact === "") {
            toast.error("Please enter some value");
        }
        else {
            history.push(`/search?name=${searchContact}`);
            setSearchContact("");
        }

    }
    return (
        <form className="form-inline" onSubmit={submitHandler}>
            <input type="text" placeholder="Search contact" className="form-control"
                style={{ textTransform: "lowercase" }}
                onChange={(event) => setSearchContact(event.target.value)}
                value={searchContact} />
            <button className="btn btn-success"><i className="fa fa-search"></i></button>
        </form>
    )
}

export default Search
