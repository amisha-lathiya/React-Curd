import {Container, Form} from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import {React,useState} from 'react'
import axios from 'axios'
// import axios from 'axios'
 import {useNavigate} from 'react-router-dom'

function Adduser(){
    // let history=useHistory()
    let Navigate=useNavigate()
    const [name,setName]= useState("")
    const [email,setEmail]= useState("")
    const [phone,setPhone]= useState("")
 
   
    const postData=async(e)=>{
      e.preventDefault()
      // console.log(name)
      // console.log(email)
      // console.log(phone)
      const data={name,email,phone}
      await axios.post("http://localhost:3001/user",data)
      Navigate("/get")
    }
  
   return(
    <div> 
       
   <Container>
     <Form>
        
        <Form.Control  type="name"  onChange={(e)=>setName(e.target.value)} placeholder="Enter name"/>
        <Form.Control  type="email"  onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email"/>
        <Form.Control type="phone"  onChange={(e)=>setPhone(e.target.value)} placeholder="Enter phone" />

      <Button variant="primary" type="submit"  onClick={postData} >
        Submit
      </Button>
    </Form>
    </Container>
    </div>
   )
}
export default Adduser