import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { login } from "../features/userSlice";
import userSlice from "../features/userSlice";

export default function SignIn() {
    const navigate = useNavigate();
    // const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
            method: "post",
            url: "http://localhost:8000/api/v1/users/create-session",
            data: {
                email: email,
                password: password
            },
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                // console.log(res.data);
                let token = res.data.data.token;
                if (token) {
                    // localStorage.setItem('token', 'Bearer ' + token);
                    dispatch(login({
                        name: res.data.data.name,
                        email: res.data.data.email,
                        password: res.data.data.password,
                        token: 'Bearer ' + res.data.data.token
                    }))
                    navigate('/home');
                }
            });
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="mx-auto border" style={{ width: '650px' }}>
                    {
                        localStorage.getItem('token') &&
                        (<h3>Already Signed In</h3>)

                    }
                    <h2 className="col text-center my-5">Sign In</h2>
                    <form className="row g-3" onSubmit={handleSubmit}>

                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value); }} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">Password</label>
                            <input type="password" className="form-control" value={password} onChange={(e) => { setPassword(e.target.value); }} />
                        </div>

                        <div className="col text-center my-5">
                            <button type="submit" className="btn btn-primary mx-auto">Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}