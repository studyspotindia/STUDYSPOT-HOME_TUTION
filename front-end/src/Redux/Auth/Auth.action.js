//import { AUTH_STUDENT_ERROR, AUTH_STUDENT_LOGOUT, AUTH_STUDENT_REQUEST, AUTH_STUDENT_SUCCESS,AUTH_STUDENT_SIGNUP_ERROR, AUTH_STUDENT_SIGNUP_REQUEST, AUTH_STUDENT_SIGNUP_SUCCESS, GET_SINGLE_USER  } from "./Auth.actionTypes";
import * as types from "./Auth.actionTypes"
import axios from "axios"
import Cookies from 'js-cookie';
import jwt_decode from "jwt-decode";


// STUDENT Add authSignup action

export  const authStudentSignup = (signupData) => async (dispatch) => {
    dispatch({ type: types.AUTH_STUDENT_SIGNUP_REQUEST });

    try {
        const response = await axios.post('https://filthy-rose-shoe.cyclic.cloud/student/signup', signupData);
        const data = response.data;
        console.log(data, 'hello signup');  


        dispatch({
            type: types.AUTH_STUDENT_SIGNUP_SUCCESS,
            payload: data,
        });
    } catch (error) {
        const errorMessage = error.response.data.message;
        dispatch({ type: types.AUTH_STUDENT_SIGNUP_ERROR, payload: { message: errorMessage } });
    }
};

// Teacher Signup Section

export const authTeacherSignup = (signupData) => async (dispatch) => {
    dispatch({ type: types.AUTH_TEACHER_SIGNUP_REQUEST });

    try {
        const response = await axios.post('https://filthy-rose-shoe.cyclic.cloud/tutor/signup', signupData);
        const data = response.data;
        console.log(data, 'hello signup');


        dispatch({
            type: types.AUTH_TEACHER_SIGNUP_SUCCESS,
            payload: data,
        });
    } catch (error) {
        const errorMessage = error.response.data.message;
        dispatch({ type: types.AUTH_TEACHER_SIGNUP_ERROR, payload: { message: errorMessage } });
    }
};


//   STUDENT  Login Section /////////////////

export const AuthStudentLogin = (loginData) => async (dispatch) => {

    dispatch({ type: types.AUTH_STUDENT_LOGIN_REQUEST });

    try {
        const response = await axios.post('https://filthy-rose-shoe.cyclic.cloud/student/login', loginData, {
            withCredentials: true // This will include cookies in the request
        });
        const data = response.data;
        console.log(data, 'hello login Check');

        // Calculate the expiration time for one week (7 days)
        const oneWeekFromNow = new Date();
        oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);

        // Set access token in a cookie with 1-minute expiration
        Cookies.set('StudentToken', data.token, { expires: oneWeekFromNow }); 
        const decodedToken = jwt_decode(data.token);
        const userId = decodedToken.userID;
        //console.log(userId,"Login userID")
        Cookies.set('userId', userId, { expires: oneWeekFromNow }); // Set userId in a cookie
        dispatch({
            type: types.AUTH_STUDENT_LOGIN_SUCCESS,
            payload: {
                token: data.token,
                message: data.message,
                //data

            },
        });
    } catch (error) {
        const errorMessage = error.response.data.message;
        dispatch({ type: types.AUTH_STUDENT_LOGIN_ERROR, payload: { message: errorMessage } });
    }
};



//   Teacher  Login Section /////////////////

export const AuthTeacherLogin = (loginData) => async (dispatch) => {

    dispatch({ type: types.AUTH_TEACHER_LOGIN_REQUEST });

    try {
        const response = await axios.post('https://filthy-rose-shoe.cyclic.cloud/tutor/login', loginData, {
            withCredentials: true // This will include cookies in the request
        });
        const data = response.data;
        console.log(data, 'hello login Check');

        // Calculate the expiration time for one week (7 days)
        const oneWeekFromNow = new Date();
        oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);

        // Set access token in a cookie with 1-minute expiration
        Cookies.set('StudentToken', data.token, { expires: oneWeekFromNow }); // Expires in 1 minute

        const decodedToken = jwt_decode(data.token);
        const userId = decodedToken.userID;
        //console.log(userId,"Login userID")
        Cookies.set('userId', userId, { expires: oneWeekFromNow }); // Set userId in a cookie
        dispatch({
            type: types.AUTH_TEACHER_LOGIN_SUCCESS,
            payload: {
                token: data.token,
                message: data.message,
                //data

            },
        });
    } catch (error) {
        const errorMessage = error.response.data.message;
        dispatch({ type: types.AUTH_TEACHER_LOGIN_ERROR, payload: { message: errorMessage } });
    }
};





// Check token presence action
export const checkTokenPresence = () => (dispatch) => {
    const tokenCookie = Cookies.get('StudentToken');
    //console.log(tokenCookie, "baap re baap");
    const isAuthenticated = !!tokenCookie; // Convert to boolean
    dispatch({ type: types.AUTH_STUDENT_CHECK_TOKEN, payload: { isAuthenticated } });
};



export const getallTeachers = () => async (dispatch) => {

    dispatch({ type: types.GET_ALL_TEACHERS_REQUEST });


    try {
       // console.log(userType, user_id,"chek in action")
      // Make a GET request to your backend to fetch the student data using the user ID
      const response = await axios.get(`https://filthy-rose-shoe.cyclic.cloud/tutor`);
  
      const teachersData = response.data; // Assuming the API returns student data
      //console.log(teachersData)

      dispatch({ type: types.GET_ALL_TEACHERS_SUCCESS, payload: teachersData });

    } catch (error) {
      // Handle any errors here
      const errorMessage = error.response.data.message;
        dispatch({ type: types.GET_ALL_TEACHERS_ERROR, payload: { message: errorMessage } });
    }
  };



export const getSingleStudent = (userType, user_id) => async (dispatch) => {

    dispatch({ type: types.GET_SINGLE_STUDENT_REQUEST });


    try {
       // console.log(userType, user_id,"chek in action")
      // Make a GET request to your backend to fetch the student data using the user ID
      const response = await axios.get(`https://filthy-rose-shoe.cyclic.cloud/${userType}/singleuser/${user_id}`);
  
      const studentData = response.data; // Assuming the API returns student data
     // console.log(studentData)

      dispatch({ type: types.GET_SINGLE_STUDENT_SUCCESS, payload: studentData });

    } catch (error) {
      // Handle any errors here
      const errorMessage = error.response.data.message;
        dispatch({ type: types.GET_SINGLE_STUDENT_ERROR, payload: { message: errorMessage } });
    }
  };







// Logout action

export const authStudentLogout = () => async (dispatch) => {

    dispatch({ type: types.AUTH_STUDENT_LOGOUT });
};





