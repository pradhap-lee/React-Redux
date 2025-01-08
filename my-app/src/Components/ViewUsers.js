import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../Slices/UserSlices';
import './ViewUser.css';
import Sidle from './Sidle';


function ViewUsers() {

     const usersData = useSelector(state => state.Users);

     const dispatch = useDispatch();

     function HandledeUsers(index){
        dispatch(deleteUser(index));
     }

  return (
    <div >
         
       <h1>View Users List </h1>
        {
            usersData.map((user,index)=>{
                return(
                    <ul key={index}>
                        <h2>{user}</h2>
                        <button  onClick={() =>
                            {HandledeUsers(index)}
                        }>Delete</button>
                        
                       



                    </ul>

                   
                )
            })
        }

        
         
    </div>
  )
}

export default ViewUsers
