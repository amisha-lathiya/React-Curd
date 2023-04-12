  import axios from 'axios'
import { useState,useEffect } from "react"
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Getdata()
{
  console.log()
   const [Apidata,setApidata]=useState([])

   useEffect(()=>{loadUser()},[])
   const loadUser= async()=>{
   const result = await axios.get('http://localhost:3001/user')
   setApidata(result.data)
   }

  //   const {id}=useParams()
  

    const DeleteUser=async(id)=>{
      await axios.delete(`http://localhost:3001/user/${id}`)
      setApidata((prev) => prev.filter(row => row.id !== id))
    }
   
     
    return(
        <div>
             <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th></th>
        
        </tr>
      </thead>
      <tbody>
      {Apidata.map(user => {
                return (
                    
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td><Link to="/view" className='btn btn-primary'>View</Link>
                        <Link to={`/edit/${user.id}`} className='btn btn-outline-primary'>Edit</Link>
                        <button className='btn btn-danger' onClick={()=>DeleteUser(user.id)}>delete</button>
                
                       </td>
                        
                      </tr>
               )
            })}
       
      
      </tbody>
    </Table>
        
          
         
        </div>
  
    )
}    
export default Getdata