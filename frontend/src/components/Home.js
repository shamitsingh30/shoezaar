import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Product from './Product';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function Home() {
    var [products, setProducts] = useState([]);
    const user = useSelector(selectUser);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(typeof (user), user);
        if (user) {
            axios({
                method: "get",
                url: "http://localhost:8000/api/v1",
                headers: {
                    'Authorization': user.token
                }
            })
                .then((data) => {
                    setProducts(data.data.products);
                });
        }
        else {
            navigate('/users/sign-in');
        }
    }, []);

    return (
        <div>
            <h2 className='mt-4'>All</h2>
            <div className='col d-flex flex-wrap justify-content-center'>
                {
                    user && products.map((product) => <Product product={product} key={product._id}></Product>)
                }
            </div>
        </div>
    )
}

export default Home;
