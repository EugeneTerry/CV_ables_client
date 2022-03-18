import React from "react";
import { Route, Routes } from "react-router-dom";
import { FrameworkProvider } from "./components/framework/FrameworkProvider";
import { FrameworkList } from "./components/framework/FrameworkList";
import { LanguageProvider } from "./components/language/LanguageProvider";
import { LanguageList } from "./components/language/LanguageList";
import { ApplicantProvider } from "./components/applicant/ApplicantProvider";
import { ApplicantList } from "./components/applicant/ApplicantList";
import { DescriptionProvider } from "./components/description/DescriptionProvider";
import { DescriptionList } from "./components/description/DescriptionList";
import { EducationProvider } from "./components/education/EducationProvider";
import { EducationList } from "./components/education/EducationList";
import { ExperienceList } from "./components/experience/ExperienceList";
import { ExperienceProvider } from "./components/experience/ExperienceProvider";
import { JobTypeProvider } from "./components/jobtype/JobtypeProvider";
import { JobTypeList } from "./components/jobtype/JobtypeList";
import { MissionProvider } from "./components/mission/MissionProvider";
import { MissionList } from "./components/mission/MissionList";
import { VitaList } from "./components/vita/VitaList";
import { VitaProvider } from "./components/vita/VitaProvider";

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
        <EducationProvider>
        <VitaProvider>
          <Routes>
              <Route element={<ApplicantList/>} path="/profile"/>
          </Routes>
          <Routes>
              <Route element={<VitaList/>} path="/vitas"/>
          </Routes>          
        <ExperienceProvider>
          <Routes>
                <Route element={<ExperienceList/>} path="/experiences"/>
          </Routes>
        </ExperienceProvider>
        <JobTypeProvider>
          <Routes>
          <Route element={<JobTypeList/>} path="/jobtypes"/>
          </Routes>
        </JobTypeProvider>
          <Routes>
              <Route element={<EducationList/>} path="/educations"/>
          </Routes>
        <MissionProvider>
          <Routes>
                  <Route element={<MissionList/>} path="/missions"/>
          </Routes>
        </MissionProvider>
        <DescriptionProvider>
          <Routes>
                <Route element={<DescriptionList/>} path="/descriptions"/>
          </Routes>
        <LanguageProvider>
          <FrameworkProvider>
            <Routes>
                <Route element={<FrameworkList/>} path="/langframes"/> 
            </Routes>
          </FrameworkProvider>
            <Routes>
                <Route element={<LanguageList/>} path="/languages"/>
            </Routes>  
        </LanguageProvider>
        </DescriptionProvider>
        </VitaProvider>
        </EducationProvider>
      </ApplicantProvider>
    </main>

  );
};
  