import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './Product';

function Home(){
    var [products, setProducts] = useState([]);
    useEffect(()=>{
        axios({
            method: "get",
            url: "http://localhost:8000/api/v1",
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
        .then((data) => {
            
            setProducts(data.data.products);
            
        });
        
    }, [products]);
    
    return(
        <div>
            <h2 className='mt-4'>All</h2>
            <div className='col d-flex flex-wrap justify-content-center'>
            { 
                products.map((product) => <Product product={product} key={product._id}></Product>)
            }
            </div>
        </div>
    )
}

export default Home;
