import './App.css';
import Navbar from './Components/Navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from 'react-redux';
import { checkAuthStatus } from './Redux/Auth/Auth.action';
import { useEffect, useState } from 'react';
import Footer from './Components/Footer';
import AllRoutes from './Routes/AllRoutes'
import { useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Box } from '@chakra-ui/react';

function App() {
  const [isSmall, setIsSmall] = useState(false);
  const location=useLocation()
  console.log(location)
  const cookieUserID = Cookies.get('userId');

  // if(location.pathname==`/student/studentprofile/${cookieUserID}`){
  //   <Box width={isSmall ? "93.5%" : "84%"} ml={isSmall ? "100px" : "16%"}>  <Footer/></Box>
  // }if(location.pathname==`/student/studentdashboard/${cookieUserID}`){
  //   <Box width={isSmall ? "93.5%" : "84%"} ml={isSmall ? "100px" : "16%"}>  <Footer/></Box>
  // }if(location.pathname==`/student/studentsetting/${cookieUserID}`){
  //   <Box width={isSmall ? "93.5%" : "84%"} ml={isSmall ? "100px" : "16%"}>  <Footer/></Box>
  // }if(location.pathname==`/student/studentcourse/${cookieUserID}`){
  //   <Box width={isSmall ? "93.5%" : "84%"} ml={isSmall ? "100px" : "16%"}>  <Footer/></Box>
  // }else{
  //   <Box>  <Footer/></Box>
  // }
 


  return (
    <div className="App">
         <Navbar/>
         <AllRoutes/>
         {
          location.pathname === `/student/studentprofile/${cookieUserID}` ||
          location.pathname === `/student/studentdashboard/${cookieUserID}` ||
          location.pathname === `/student/studentsetting/${cookieUserID}` ||
          location.pathname === `/student/studentcourse/${cookieUserID}` ? "" :(<Box>  <Footer/></Box>)

         }
       
    </div>
  )
}

export default App;
