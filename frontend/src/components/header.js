import React from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, selectUser } from "../features/userSlice";

export default function Header() {
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const handleLogOut = (e) => {
        e.preventDefault();
        dispatch(logout());
        navigate('/users/sign-in');
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">ShoeZaar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">


                        <li className="nav-item">
                            <a className="nav-link" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                            {
                                user
                                    ? <a className="nav-link" aria-current="page" href="/users/profile">Profile</a>
                                    : <a className="nav-link" aria-current="page" href="/users/sign-in">Sign In</a>
                            }

                        </li>
                        <li className="nav-item">
                            {
                                user
                                    ? <a className="nav-link" aria-current="page" href="/home" onClick={handleLogOut}>Logout</a>
                                    : <a className="nav-link" aria-current="page" href="/users/sign-up">Sign Up</a>
                            }
                        </li>

                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}