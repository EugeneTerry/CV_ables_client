import React from "react";
import { Route, Routes, Navigate} from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./components/nav/NavBar";
import { Login } from "./components/auth/Login"; 
import { Register } from "./components/auth/Register"; 
// import { Wrapper } from "./Styles/Global";
import { ApplicantProvider } from "./components/applicant/ApplicantProvider";

export const CVables = () => (

		// <Wrapper>
			<ApplicantProvider>
				<Routes>
        <Route
					render={() => {
						if (localStorage.getItem("lu_token")) {
							return (
								<>
               
									<Route>
										<NavBar />
										<ApplicationViews />
									</Route>

								</>
							);
						} else {
							return <Navigate to="/login" />;
						}
					}}
				/>
        </Routes>
				<Routes path="/login">
					<Login />
				</Routes>

				<Routes path="/register">
					<Register />
				</Routes>
        
			</ApplicantProvider>
		// </Wrapper>
    
  
);
