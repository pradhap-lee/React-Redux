import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../Slices/UserSlices';
import './AddUser.css';
import Sidle from './Sidle';

function AddUser() {

     const [input,setInput] = useState('');

     const dispatch = useDispatch();

     function handleUser(){
        if(input){
            dispatch(addUser(input))
            /// setInput('');
        }
     }
 
      


  return (
    <div className='Adduser'>
      <h1>React Redux</h1>
      
      <input type="text" autocomplete="off" name="text" class="input" placeholder="Enter new user" value={input}
      onChange={(e)=> {setInput(e.target.value)}} >
      
      </input>

      <br />
      <br />
      

      <button onClick={handleUser} class="btn" >
        Add New User</button> 
        
    </div>
  )
}

export default AddUser
