import React from "react";
import { Route, Routes, Navigate} from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./components/nav/NavBar";
import { Login } from "./components/auth/Login"; 
import { Register } from "./components/auth/Register"; 
// import { Wrapper } from "./Styles/Global";
import { ApplicantProvider } from "./components/applicant/ApplicantProvider";

export const CVables = () => {
const Home = () => {
  if (localStorage.getItem("lu_token")) {
    return (
      <>
          <NavBar />
          <ApplicationViews />
      </>
    );
  } else {
    return <Navigate to="/login" />;
  }
}
		// <Wrapper>
			return<ApplicantProvider>
        <Routes>
          <Route path='*' element={<Home/>}/>
        
          <Route element={<Login/>} path="/login"/>

          <Route element={'this is home'} path="*"/>
            
          <Route element={<Register/>} path="/register"/>

        </Routes>
			</ApplicantProvider>
		// </Wrapper>
    
  
};
