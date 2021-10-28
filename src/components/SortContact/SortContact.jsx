import React from 'react'

const SortContact = (props) => {
    return (
        <div className="mt-3" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <select id="search" style={{margin: "5px", width: "20%", height: "38px"}} name="val" onChange={props.onChangeHandler}>
                <option>Please select sort by</option>
                <option value="name">Name</option>
                <option value="email">Email</option>
                <option value="contact">Contact</option>
            </select>
            <button className="btn btn-danger" onClick={props.onClearHandler}>Clear</button>
        </div>
    )
}

export default SortContact
