import React, {useState, useEffect} from 'react';
import {Link, navigate, Router} from "@reach/router";
import axios from "axios";

const AllProducts = () => {
const [allProducts, setAllProducts] = useState([])
const [deletebtn, setDeleteBtn] = useState(false)

useEffect(()=>{
    axios.get("http://localhost:8000/api/products")
        .then(res =>{
            console.log("logging response",res)
            setAllProducts(res.data.results)
        })
        .catch(err => console.log("flag on the play with the axios call", err))
},[deletebtn])


const deleteProduct = (e, productid) =>{
    console.log("removing product from field")
    console.log(productid)
    axios.delete(`http://localhost:8000/api/products/${productid}`)
    .then(res=>{
        console.log(res)
        setDeleteBtn(!deletebtn)
    })
    .catch(err=> console.log(err))
    navigate("/")
}

    return (
        <div>
            <h1>All the Products</h1>
            <Link to="products/new" className="btn btn-outline-primary">Add a product</Link>
            {allProducts.map(q=>{
                return <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{q.title}</h5>
                    <p className="card-text">{q.price}</p>
                    <p className="card-text">{q.description}</p>
                    <Link to={`/products/show/${q._id}`} className="btn btn-primary">View Product</Link>
                    <Link to={`/products/edit/${q._id}`} className="btn btn-warning m-4">Edit Product</Link>
                    <button onClick={(e)=> deleteProduct(e, q._id)} className="btn btn-danger">Delete Product</button>
                </div>
            </div>
            })}
        </div>
    );
};

export default AllProducts;