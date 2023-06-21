

import Activity from "./Activity";
import Register from "./Register";
import Login from "./Login"
import {Route, Routes} from "react-router-dom";

function App() {


  return (
   <>
   <Routes>
        <Route path='/' element={<Activity/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>

   </Routes>

   </>
  );
}

export default App;
