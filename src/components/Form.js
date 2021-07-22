import React, { useState } from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';




const Form = () =>{

    const [formInfo, setFormInfo] = useState({
        title:"",
        price:"",
        description:""
    })


const [formErrors, setFormErrors] = useState({})


    const changeHandler = (e)=>{
        console.log("changing input now")
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })
    }


    const submitHandler = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/products/create", formInfo)
        .then(res=> {
            console.log("***********")
            console.log(res)
            if(res.data.results){
                navigate("/")
            }else{
                console.log("That's a red card!, you didn't fill this out properly")
                // setFormErrors(res.data.error.errors) still working on getting validations to work
            }
        })
        .catch(err=> console.log("penalty when submitting the form", err))
    }

    return(
        <div>
            <h2>Add a new product</h2>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label>Title:</label>
                    <input className="form-control mb-2" type="text" name="title" onChange={changeHandler}/>
                    <p className="text-danger">{formErrors.title}</p>
                    <br/>
                    <label>Price:</label>
                    <input className="form-control mb-2" type="text" name="price" onChange={changeHandler}/>
                    <br/>
                    <label>Description:</label>
                    <textarea className="form-control mb-2" cols="30" rows="1" name="description" onChange={changeHandler}/>
                    <br/>
                    <input type="submit" value="Create" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
}

export default Form;