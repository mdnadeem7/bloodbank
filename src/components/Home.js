import React, { Component } from 'react'
import styles from '../Styles/styles.css'
import { bloodlistg } from './bloodlistg'
import homepagepic from '../assets/homepagepic.png'
import { doneelist } from './doneelist'
export class World extends Component {
  constructor(props)
  {
    super(props)
    this.state =
    {
      id:12,
      name:"",
      contact:"",
      group:"",
      pincode:""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleSubmit(e)
  {
     e.preventDefault();
    const{id,name,contact,group,pincode} = this.state;   
    console.log( name,contact,group,pincode);
    doneelist.concat({
      id:12,
      name:this.state.name,
      group:this.state.group,
      pincode:this.state.pincode,
      contact: this.state.contact
  });
   
    {
    // fetch("http://localhost:5000/register", {
    //   method: "POST",
    //   crossDomain: true,
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //   },
    //   body: JSON.stringify({
    //     names,
    //     phno,
    //     age,
    //     pincode,
    //     btype
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data, "userRegister");
    //   });
    }
  }


  render() {
    return (
      <React.Fragment>

        <div className='menu'>
          <h2>Blood<span>Bank</span></h2>
          <div className='menu1'>
            <a href= "#" >HOME</a>
            <a href='#'>DONER</a>
            <a href='#'>DONEE</a>
          </div>
          <button>Log-in/Sign-up</button>
        </div>
        <div className='secondbox'>
        <div>
          <img src={homepagepic} />
          </div>
          <div className='secondinner'>
            <h1>Donate</h1>
            <h2>Your blood for saving</h2>
            <h1>Lives</h1>
           
          </div>
          
          <div className='login'>
      
      <form onSubmit={this.handleSubmit}>
       <h2>Register your name for donation</h2>
        <input id='name' type='text' placeholder='Name' onChange={(e)=>this.setState(
          {
            name:e.target.value
          }
        )}/><br/>
        <input id ='phno' type='text'placeholder='Phone number' onChange={(e)=>this.setState(
          {
            contact:e.target.value
          }
        )}/><br/>
        <input id ='pincode' type='text'placeholder='Pincode' onChange={(e)=>this.setState(
          {
            pincode:e.target.value
          }
        )}/><br/>
        <select id="btype" onChange={(e)=>this.setState(
          {
            group:e.target.value
          })}>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="A-">A-</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
        </select>
        <button >Register</button>
      </form>
      
    </div>
          
        </div>
        <div className='ddata'>
          <div className='card'>
            <h1>1</h1>
            <p>Donations</p>
          </div>
          <div className='card'>
            <h1>2</h1>
            <p>Received</p>
          </div>
          <div className='card'>
            <h1>4</h1>
            <p>Requested</p>
          </div>
        </div>
        
        <div className='headings'>
          <h1>Blood Groups Availability</h1>
        </div>
        <div className='bloodG' >
          {
            bloodlistg.map((item)=>(
              <div className='dropB' key={item.id}>
              <h1>{item.available}</h1>
              <p>{item.name}</p>
            </div>
            ))
          }
        </div>
       
      </React.Fragment>
      
    )
  }
}

export default World
