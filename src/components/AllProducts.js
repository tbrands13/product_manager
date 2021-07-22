import React, {useState, useEffect} from 'react';
import {Link, Router} from "@reach/router";
import axios from "axios";

const AllProducts = () => {
const [allProducts, setAllProducts] = useState([])

useEffect(()=>{
    axios.get("http://localhost:8000/api/products")
        .then(res =>{
            console.log("logging response",res)
            setAllProducts(res.data.results)
        })
        .catch(err => console.log("flag on the play with the axios call", err))
},[])


    return (
        <div>
            {/* <Form/> */}
            <h1>All the Products</h1>
            <Link to="products/new">Add a product</Link>
            {allProducts.map(q=>{
                return <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{q.title}</h5>
                    <p className="card-text">{q.price}</p>
                    <p className="card-text">{q.description}</p>
                    <Link to={`/products/show/${q._id}`} className="btn btn-primary">View Product</Link>
                </div>
            </div>
            })}
        </div>
    );
};

export default AllProducts;