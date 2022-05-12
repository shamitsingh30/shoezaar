import React from 'react'
import Axios from 'axios';
import Product from './Product';


class Home extends React.Component{

    _isMounted = false;

    constructor(props){
        super(props);

        this.state = {
            products: []
        }

        // this.getProducts();

    }

    componentDidMount(){
        Axios.get('http://localhost:8000/api/v1')
        .then((data) => {this.setState({products: data.data.products})})
    }

    // getProducts(){
    //     Axios.get('http://localhost:8000/api/v1')
    //     .then((data) => {this.setState({products: data.data.products})})
    // }

    render(){
        return (
            <div>
                <h2 className='mt-4'>All</h2>
                <div className='col d-flex flex-wrap justify-content-center'>
                { 
                    this.state.products.map((product) => <Product product={product} key={product._id}></Product>)
                }
            </div>
            </div>
            
            
        );
    }
};

export default Home;
