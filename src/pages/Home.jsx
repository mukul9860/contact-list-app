import React, { useEffect, useState } from 'react';
import firedb from '../firebase';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        firedb.child("contactDB").on("value", (snapshot) => {
            if (snapshot.val() !== null) {
                setData({ ...snapshot.val() });
            }
            else {
                setData({});
            }
        });
        return () => {
            setData({});
        }
    }, []);
    return (
        <div className="mt-5 table-responsive table-style">
            <table className="table table-bordered table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Contact no.</th>
                        <th scope="col">Actions</th>
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
                                <td>
                                    <Link to={`/edit/${id}`}>
                                        <button className="btn btn-primary btn-sm">Edit</button>
                                    </Link>
                                    <button className="btn btn-danger btn-sm ml-2">Delete</button>
                                    <Link to={`/view/${id}`}>
                                        <button className="btn btn-warning btn-sm ml-2">View</button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Home
