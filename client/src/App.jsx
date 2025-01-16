import { useEffect,useState } from "react";
import "./App.css";
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./components/Login"
import SignUp from "./components/Signup"
import MainPage from "./components/MainPage"
import AddTravel from "./components/Addtravel"
import UpdateTravel from "./components/UpdateTravel";

function App(){


  const[travel,setTravel]=useState([])


  const [isAuthenticated, setIsAuthenticated] = useState(false);

  console.log(localStorage.getItem("token"));

  const fetch=()=>{

    const token = localStorage.getItem('token');
    console.log("Token in fetch:", token);

    axios.get("http://localhost:8000/api/travel/",{headers: {
      Authorization: `Bearer ${token}`,
    }
    
    }).then((response)=>{
      console.log(response.data)
      setTravel(response.data.stories)
    }).catch((error) => {
      if (error.response && error.response.status === 401) {
        console.error("Unauthorized: Please log in again.");
        setIsAuthenticated(false);
        // Redirect to login page or show an alert
      } else {
        console.error(error);
      }
    });
    
  }
  useEffect(()=>{
    const token = localStorage.getItem('token');
      if (token) {
        setIsAuthenticated(true);
        fetch();
      }
   },[])

   const deleteTravel=(id)=>{
    const token = localStorage.getItem('token');
    axios.delete(`http://localhost:8000/api/travel/delete/${id}`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(()=>{
      if (token) {
        setIsAuthenticated(true);
        fetch();
      }
    }).catch((error)=>{
        throw error
    })

  }





   return  <Router>
   <Routes>
          <Route path="/login" element={<LoginPage  />} />
         <Route path="/main" element={<MainPage travel={travel} deleteTravel={deleteTravel} fetch={fetch} />} />
          <Route path="/Signup" element={<SignUp  />} />
          <Route path="/add" element={<AddTravel fetch={fetch}  />} />
          <Route
  path="/update"
  element={<UpdateTravel travel={travel} fetch={fetch} />}
/>
      </Routes>
      </Router>
}

export default App;
