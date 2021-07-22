import { Link, navigate } from '@reach/router';
import axios from 'axios';
import React, {useState, useEffect} from 'react';


const ProductView = (props) => {

    const [productview, setProductView] = useState({})
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${props.id}`)
        .then(res=>{
            console.log("got product")
            console.log(res.data.results)
            setProductView(res.data.results)
        })
        .catch(err=> console.log("error", err))
    },[])


const deleteProduct =(e)=>{
    console.log("deleting product now")
    axios.delete(`http://localhost:8000/api/products/${props.id}`)
    .then(res=>{
        console.log("removing product")
        console.log(res)
    })
    .catch(err=> console.log("error",err))
    navigate("/")
}


    return(
        <div>
            <div className="">
        <Link to="/" className="btn btn-outline-danger">Back</Link>
        </div>
            <h3>Details about product</h3>
            <br/>
            <h6>Item No. {props.id}</h6>
            <h5>Title: {productview.title}</h5>
            <br/>
            <h5>Price: {productview.price}</h5>
            <br/>
            <h5>Product Description: {productview.description}</h5>
            <button onClick={deleteProduct} className="btn btn-danger">Delete Product</button>
        </div>
    );
};


export default ProductView