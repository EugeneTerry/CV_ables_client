import React from "react";
import { Route, Routes } from "react-router-dom";
import { FrameworkProvider } from "./components/framework/FrameworkProvider";
import { FrameworkList } from "./components/framework/FrameworkList";
import { LanguageProvider } from "./components/language/LanguageProvider";
import { LanguageList } from "./components/language/LanguageList";
import { ApplicantProvider } from "./components/applicant/ApplicantProvider";
import { ApplicantList } from "./components/applicant/ApplicantList";


export const ApplicationViews = () => {
    return (
      
        <main
          style={{
            margin: "5rem 2rem",
            backgroundColor: "#dcf2e2",
            lineHeight: "1.75rem",
          }}
        >
          
          <ApplicantProvider>
            <Routes>
                <Route element={<ApplicantList/>} path="/profile"/>
            </Routes>
          </ApplicantProvider>
          <FrameworkProvider>
            <Routes>
                <Route element={<FrameworkList/>} path="/framework"/>  
            </Routes>
          </FrameworkProvider>
            <LanguageProvider>
                <Routes>
                    <Route element={<LanguageList/>} path="/languages"/>
                </Routes>  
            </LanguageProvider>
        </main>
    
    );
  };
  