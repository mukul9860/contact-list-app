import React, { useEffect, useState } from 'react';
import firedb from '../firebase';
import { Link } from 'react-router-dom';
import './styles.css';
import { toast } from 'react-toastify';
import SortContact from '../components/SortContact/SortContact';

const Home = () => {
    const [data, setData] = useState({});
    const [sortContact, setSortContact] = useState([]);
    const [isSort, setIsSort] = useState(false);

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

    const deleteDetails = (id) => {
        if (window.confirm("Are you sure to delete...")) {
            firedb.child(`contactDB/${id}`).remove((error) => {
                if (error) {
                    toast.error(error);
                }
                else {
                    toast.success("Sucessfully Deleted");
                }
            })
        }
    }
    const changeHandler = (event) => {
        setIsSort(true);
        firedb.child("contactDB").orderByChild(`${event.target.value}`).on("value", (snapshot) => {
            let sortData = [];
            snapshot.forEach((s) => {
                sortData.push(s.val())
            });
            setSortContact(sortData);
        })
    }
    const clearHandler = () => {
        setIsSort(false);
        document.getElementById("search").value ="Please select sort by"
    }
    return (
        <>
            <SortContact
                onChangeHandler={changeHandler}
                onClearHandler={clearHandler}
            />
            <div className="mt-4 table-responsive table-style">
                <table className="table table-bordered table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Contact no.</th>
                            {!isSort && (
                                <th scope="col">Actions</th>
                            )}
                        </tr>
                    </thead>
                    {!isSort && (
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
                                                <button className="btn btn-primary btn-sm ml-2">Edit</button>
                                            </Link>
                                            <button className="btn btn-danger btn-sm ml-2" onClick={() => deleteDetails(id)}>Delete</button>
                                            <Link to={`/view/${id}`}>
                                                <button className="btn btn-warning btn-sm ml-2">View</button>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    )}
                    {isSort && (
                        <tbody>
                            {sortContact.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.contact}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    )}
                </table>
            </div>
        </>
    )
}

export default Home
