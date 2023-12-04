import React from 'react'
import Home from '../Pages/Home'
import { Route, Routes,Switch } from 'react-router-dom'
import StudentSignup from '../Pages/Auth/StudentSignup'
import TeacherSignup from '../Pages/Auth/TeacherSignup'
import StudentLogin from '../Pages/Auth/StudentLogin'
import TeacherLogin from '../Pages/Auth/TeacherLogin'

import PrivateRoute from '../Components/PrivateRoute'
import SidebarComponent from '../Pages/Auth/SidebarComponent'
import StudentDashboard from '../Pages/Student/StudentDashboard'
import StudentSetting from '../Pages/Student/StudentSetting'
import StudentCourse from '../Pages/Student/StudentCourse'
import StudentProfile from '../Pages/Student/StudentProfile'
import ContactUs from '../Components/ContactUs'
import MainContactUs from '../Components/MainContactUs'
import About from '../Components/About'

const AllRoutes = () => {
  return (
    <div>
         <Routes>
          
            <Route path="/" element={<Home />} />
            <Route path="/studentlogin" element={<StudentLogin/>} />
            <Route path="/teacherlogin" element={<TeacherLogin/>} />
            <Route path="/studentsignup" element={<StudentSignup />} />
            <Route path="/teachersignup" element={<TeacherSignup />} />
            <Route path="/contactus" element={<MainContactUs />} />
            <Route path="/about" element={<About/>}></Route>

            
            {/* student-pages */}
            
            <Route path="/:userType/studentprofile/:user_id"  element={<PrivateRoute><StudentProfile/></PrivateRoute>} />
            <Route path="/:userType/studentdashboard/:user_id"  element={<PrivateRoute><StudentDashboard/></PrivateRoute>} />
            <Route path="/:userType/studentsetting/:user_id"  element={<PrivateRoute><StudentSetting /></PrivateRoute>}/>
            <Route path="/:userType/studentcourse/:user_id" element={ <PrivateRoute><StudentCourse/></PrivateRoute>} />

        </Routes>
    </div>
  )
}

export default AllRoutes