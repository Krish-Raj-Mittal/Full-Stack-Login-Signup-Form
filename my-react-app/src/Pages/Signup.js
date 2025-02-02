import React, { useState } from 'react'
import axios from 'axios'

const Signup = () => {

  const [formData, setFormData] = useState({ name: "", email: '', password: '' });

  function ChangeHandler(event) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      }
    })
  }

  console.log(formData);


  async function submitHandler(e) {
    e.preventDefault()
    try {
      await axios.post("https://full-stack-login-signup-form-2.onrender.com/signup", formData)
      alert('User Signup')
    }
    catch (err) {
      console.error(err)
      console.log('Error to send data to backend')
      alert('Signup failed')
    }
  }



  return (
    <div className='body'>
      <div className="container">
        <h1>Signup Form</h1>
        <form id="signupForm" onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="name" value={formData.name} required onChange={ChangeHandler} />
          </div>
          <div className="htmlForm-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} required onChange={ChangeHandler} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={formData.password} required onChange={ChangeHandler} />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default Signup
