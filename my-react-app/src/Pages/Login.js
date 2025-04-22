import React from 'react'
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from 'react';
import axios from 'axios';

const Login = () => {

    const [formData, setFormData] = useState({name:'' , password:''})

    function ChangeHandler (e) {
        const {name,value} = e.target
        setFormData((prevData) => {
            return{
                ...prevData,
                [name] : value,              
            }
        })
    }

    console.log(formData);

    async function submitHandler(e) {
        e.preventDefault();

        try{
            await axios.post('https://full-stack-login-signup-form-3.onrender.com/api/v1/login', formData)
            alert('User Logged In');
        }
        catch(err){
            console.error(err)
            console.log('Problem to Login')
            alert('Problem to Login')
        }
    }

    return (
        <div className='body2'>
                <div className="container2">
                    <div className="wrapper">
                        <div className="title"><span>Login Form</span></div>
                        <form onSubmit={submitHandler}>
                            <div className="row">
                                <FaUser className='i' />
                                <input type="email" placeholder="Email or Phone" name='email' required id="i1" onChange={ChangeHandler} />
                            </div>
                            <div className="row">
                                <FaLock className='i' />
                                <input type="password" placeholder="Password" required id="i2" name='password' onChange={ChangeHandler}/>
                            </div>
                            <div className="pass"><a href="#">Forgot Password?</a></div>
                            <div className="row  button">
                                <input type="submit" value="Login" id="submit" />
                            </div>
                            <div className="signup-link">Not a member? <Link to='/'>Signup now</Link></div>
                        </form>
                    </div>
                </div>
        </div>
    )
}

export default Login;
