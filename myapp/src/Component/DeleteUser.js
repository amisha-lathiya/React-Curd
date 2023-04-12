import {useParams} from 'react-router-dom'
import { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function DeleteUser()
{
    const {id}=useParams()
    console.log(id)
    const [user,setUser]=useState({
        name:"",
        email:"",
        phone:""
    })
    console.log(user)
    console.log(setUser)
    const Navigate=useNavigate()
    const DeleteUser=async()=>{
      await axios.delete(`http://localhost:3001/user/${id}`,user)
      Navigate('/get')
     
    }

    return(
        <div>
            <button onClick={DeleteUser}>delete</button>
        </div>
    )
}
export default DeleteUser