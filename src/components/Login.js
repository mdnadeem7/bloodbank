import React, { Component } from 'react'
import PropTypes from 'prop-types'
import login from '../Styles/login.css'
import blood_img from '../assets/blood.png'
class Login extends Component {
  
  constructor(props)
  {
    super(props)
    this.state =
    {
      names:"",
      phno:"",
      age:"",
      pincode:"",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleSubmit(e)
  {
     e.preventDefault();
    const{names,phno,age,pincode} = this.state;   
    console.log( names,phno,age,pincode);
    fetch("http://localhost:5000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        names,
        phno,
        age,
        pincode,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
      });
  }
  render() {
    return (
      <div>
       {/* <div className='login'>
      
      <form onSubmit={this.handleSubmit}>
       <h2>Register your name for donation</h2>
        <input id='name' type='text' placeholder='Name' onChange={(e)=>this.setState(
          {
            names:e.target.value
          }
        )}/><br/>
        <input id ='phno' type='text'placeholder='Phone number11' onChange={(e)=>this.setState(
          {
            phno:e.target.value
          }
        )}/><br/>
        <input id ='age' type='number'placeholder='Ag111111e' onChange={(e)=>this.setState(
          {
            age:e.target.value
          }
        )}/><br/>
        <input id ='pincode' type='text'placeholder='Pincode' onChange={(e)=>this.setState(
          {
            pincode:e.target.value
          }
        )}/><br/>
        <select>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="A-">A-</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
        </select>
        <button>Register</button>
      </form>
      
    </div> */}
          
      </div>
    )
  }
}

export default Login