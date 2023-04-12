import {Container, Form} from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import {React,useEffect,useState} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";

// import axios from 'axios'
// import axios from 'axios'
//  import {useNavigate} from 'react-router-dom'

function Updateuser()
{
  const [user,setUser]=useState({
    name:"",
    email:"",
    phone:""
  })
  const {id} = useParams()
  // console.log("Updatepage")
  
    // let history=useHistory()
    let Navigate=useNavigate()
// console.log(id);
 

useEffect(()=>{loadUser()}, [])
const loadUser= async()=>{
    const result = await axios.get('http://localhost:3001/user')
    console.log(result)
    const f=result.data.find((obj)=>{
      return obj.id === +id
     
   })
   setUser(f)
  


}

// console.log(user)
  
   
  
   const   OnInputChange=(e)=>{
    console.log("fuction call")
    setUser({...user,[e.target.name]:e.target.value})
  }
  
    // const data={id,name,email,phone}
    // // console.log(data)
 
      // useEffect(()=>{
     
      //   Updatedata()
      // })     
      
     
      const Updatedata=async(e)=>{
        e.preventDefault()
        await axios.put(`http://localhost:3001/user/${id}`,user)
        Navigate('/get')
      }
    
   
    
   return(
    <div> 
       <h1>Updatepage</h1>
   <Container>
     <Form>
        <Form.Control  type="text" value={user.name}    name="name" onChange={OnInputChange} placeholder="Enter name"/>
        <Form.Control  type="email" value={user.email}  name="email" onChange={OnInputChange} placeholder="Enter email"/>
        <Form.Control  type="text"  value={user.phone} name="phone" onChange={OnInputChange} placeholder="Enter phone" />

      <Button variant="primary" type="submit"  onClick={Updatedata}>
        Update
      </Button>
    </Form>
    </Container>
      {/* <input type="text"  value={user.name}  onChange={(e)=>{console.log(e)}} placeholder="Enter name" id="lname" name="lname"></input> */}
      {/* <input type="text" value={user.name}  name="name" onChange={OnInputChange} placeholder="Enter name"/>
      <input type="email" value={user.email} name="email" onChange={OnInputChange} placeholder="Enter email" />
      <input type="text"  value={user.phone} name="phone" onChange={OnInputChange} placeholder="Enter phone" />
     <button type="submit" onClick={()=>{Updatedata()}}> Update </button> */}
    </div>
   )
}
export default  Updateuser