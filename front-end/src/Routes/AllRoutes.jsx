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
import TutorProfile from '../Pages/Tutor/TutorProfile'
import TutorDashboard from '../Pages/Tutor/TutorDashboard'
import TutorSetting from '../Pages/Tutor/TutorSetting'
import TutorCourse from '../Pages/Tutor/TutorCourse'

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


            {/* Tutor-pages */}


            <Route path="/:userType/tutorprofile/:user_id"  element={<PrivateRoute><TutorProfile/></PrivateRoute>} />
            <Route path="/:userType/tutordashboard/:user_id"  element={<PrivateRoute><TutorDashboard/></PrivateRoute>} />
            <Route path="/:userType/tutorsetting/:user_id"  element={<PrivateRoute><TutorSetting /></PrivateRoute>}/>
            <Route path="/:userType/tutorcourse/:user_id" element={ <PrivateRoute><TutorCourse/></PrivateRoute>} />




        </Routes>
    </div>
  )
}

export default AllRoutes