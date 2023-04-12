import {useEffect,useState} from 'react'
import {Table} from 'react-bootstrap'
function Apidata()
{
    const [data,setdata]=useState([])
    useEffect(()=>{

        fetch("https://jsonplaceholder.typicode.com/todos").then((resolve)=>{
            resolve.json().then((resp)=>{
               setdata(resp)
            })
        })
    },[])   
    // console.log(data)
    return(
        <div>
            <h1>Api Data</h1>
     

            <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>userId</th>
        </tr>
      </thead>
      <tbody>
    {   data.map((item)=>(

    
        <tr>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{item.userId}</td>
          
        </tr>

    ))}
      </tbody>
    </Table>  
        </div>
    )
}
export default Apidata