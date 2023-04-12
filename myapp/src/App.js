// import logo from './logo.svg';
import './App.css';
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Getdata from './Component/Getdata'
import Adduser from './Component/AddUser';
import Viewuser from './Component/Viewuser';
import  Updateuser from './Component/Updateuser';

function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
            <Route path="/get" element={<Getdata />}> </Route>
            <Route path="/add" element={<Adduser />}> </Route>
            <Route path="/view" element={<Viewuser />}> </Route>
            <Route path="/edit/:id" element={< Updateuser />}> </Route>
            {/* <Route path="/delete" element={< DeleteUser />}> </Route> */}

           
         </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
