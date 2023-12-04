import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {

    const auth = useSelector((state) => state.auth)
    console.log(auth.isAuthenticated, "In navbar")
     console.log(auth,"Private Route")
     
  if (!auth.isAuthenticated) {
    return <Navigate to={"/studentlogin"} />;
  }
  return <div>{children}</div>;
}

export default PrivateRoute;