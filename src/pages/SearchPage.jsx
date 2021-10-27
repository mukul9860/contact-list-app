import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import fireDB from '../firebase';
import './styles.css';

const SearchPage = () => {
    const [data, setData] = useState({});

    const SearchFunc = () => {
        return new URLSearchParams(useLocation().search);
    }
    let query = SearchFunc();
    let search = query.get("name");

    useEffect(() => {
        fireDB.child("contactDB").orderByChild("name").equalTo(search).on("value", (snapshot) => {
            if (snapshot.val()) {
                const data = snapshot.val();
                setData(data);
            }
        });

    }, [search])

    return (
        <div>
            <div className="mt-4 table-responsive table-style">
                {Object.keys(data).length === 0 ? (
                    <>
                        <h1 className="text-center text-danger mt-5">Sorry no contact available for "{query.get("name")}"</h1>
                        <h4 className="text-muted text-center mt-3">Please try again..</h4>
                    </>
                ) : (
                    <>
                        <table className="table table-bordered table-hover">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">No.</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Contact no.</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(data).map((id, index) => {
                                    return (
                                        <tr key={id}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{data[id].name}</td>
                                            <td>{data[id].email}</td>
                                            <td>{data[id].contact}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </>
                )}
            </div>
            <Link to="/" className="btn_back mt-4">
                <button className="btn btn-primary">Back</button>
            </Link>
        </div>
    )
}

export default SearchPage
