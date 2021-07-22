
import axios from 'axios';
import React, {useEffect, useState}from 'react';
import {Link, navigate} from '@reach/router';

const Edit = (props) => {

const [productInfo, setProductInfo] = useState({
    title:"",
    price:"",
    description:""
})

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
        .then(res=>{
            console.log(res)
            setProductInfo(res.data.results)
        })
        .catch(err=>console.log(err))
    },[])

const changeHandler = (e)=>{
    console.log("calling audible")
    setProductInfo({
        ...productInfo,
        [e.target.name]:e.target.value
    })
}

const submitHandler = (e)=>{
    e.preventDefault();
    axios.put(`http://localhost:8000/api/products/${props.id}`, productInfo)
    .then(res=>{
        console.log("changing play")
        console.log(res)
    })
    .catch(err=> console.log(err))
    navigate("/")
}


    return (<div>
        <div className="d-flex flex-row">
        <Link to="/" className="btn btn-outline-danger">Back</Link>
        </div>
        <h1 className="text-secondary">Edit Product No: {props.id}</h1>
        <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label>Title:</label>
                    <input className="form-control mb-2" type="text" name="title" value={productInfo.title} onChange={changeHandler}/>
                    <br/>
                    <label>Price:</label>
                    <input className="form-control mb-2" type="text" name="price" value={productInfo.price} onChange={changeHandler}/>
                    <br/>
                    <label>Description:</label>
                    <textarea className="form-control mb-2" cols="30" rows="1" name="description" value={productInfo.description} onChange={changeHandler}/>
                    <br/>
                    <input type="submit" value="Update Product" className="btn btn-success"/>
                </div>
            </form>
    </div>
    );
};



export default Edit;