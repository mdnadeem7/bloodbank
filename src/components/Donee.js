import React, { useEffect, useState } from "react";
import { bloodlistg } from './bloodlistg'
import { doneelist } from './doneelist'
import donestyle from '../Styles/donestyle.css'
 function Donee() {
    const [data,setdata] = useState([{
        name:"",
        group:"",
        pincode:"",
        contact: ""
    }])
    // useEffect(()=> {
    //   fetch("http://localhost:5000/").then(res => {
    //     return res.json()
    //   })
    // }).then(jsonRes => setdata(jsonRes))
  return (
    <React.Fragment>
    <div className='filterme'>
      <h2>Donar</h2>
      <form className='form1'>
        <p>pincode:</p>
        <input type='number'/>
      </form>
      <div className='groupF'>
      <p>Select group</p>
      {
       bloodlistg.map((item) =>{
        return <div className='gitem' key={item.id}> <p>{item.name}</p></div>
       })
      }
      </div>
    </div>
    <div className='doneeitemhead'>
                    <p>GROUP</p>
                    <p>NAME</p>
                    <p>CONTACT</p>
                    <p>PINCODE</p>
                </div>
    <div className='donelist' >
    {
        doneelist.map((item)=>{
            return (
                <div className='doneeitem' key={item.id}>
                    <p>{item.group}</p>
                    <p>{item.name}</p>
                    <p>{item.contact}</p>
                    <p>{item.pincode}</p>
                </div>
            )
        })
    }
    </div>
</React.Fragment>
  )
}
export default Donee