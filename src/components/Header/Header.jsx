import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import Search from '../Search/Search';

const Header = () => {
    const [activeTab, setTab] = useState("Home");
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            setTab("Home");
        } else if (location.pathname === "/add") {
            setTab("AddContact");
        }
    }, [location])

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary p-0 ">
                <Link className="navbar-brand ml-3" to="/">Contact App</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className=" collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto mt-2 mr-5">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                <p
                                    className={`${activeTab === "Home" ? "active" : "nav-link-text"}`}
                                    onClick={() => setTab("Home")}>
                                    Home</p>
                            </Link>
                        </li>
                        <li className="nav-item mr-5">
                            <Link className="nav-link" to="/add">
                                <p
                                    className={`${activeTab === "AddContact" ? "active" : "nav-link-text"}`}
                                    onClick={() => setTab("AddContact")}>
                                    Add Contact</p>
                            </Link>
                        </li>
                        <li>
                            <Search />
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header
