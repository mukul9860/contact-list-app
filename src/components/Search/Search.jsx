import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Search = () => {
    const [searchContact, setSearchContact] = useState("");
    const history = useHistory();

    const submitHandler = (event) => {
        event.preventDefault();
        history.push(`/search?name=${searchContact}`);
        setSearchContact("");
    }
    return (
        <div>
            <form className="container w-50 mt-5" onSubmit={submitHandler}>
                <input type="text" placeholder="Search contact" className="form-control"
                 style={{textTransform: "lowercase"}}
                 onChange={(event) => setSearchContact(event.target.value)}
                 value={searchContact} />
            </form>
        </div>
    )
}

export default Search
