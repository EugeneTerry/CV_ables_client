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
import { MissionForm } from "./components/mission/MissionForm";
import { MissionList } from "./components/mission/MissionList";
import { VitaList } from "./components/vita/VitaList";
import { VitaDetails } from "./components/vita/VitaDetails";
import { VitaForm } from "./components/vita/VitaForm";
import { VitaProvider } from "./components/vita/VitaProvider";
import { ProspectProvider } from "./components/prospect/ProspectProvider";
import { ProspectList } from "./components/prospect/ProspectList";
import { EducationForm } from "./components/education/EducationForm";
import { ExperienceForm } from "./components/experience/ExperienceForm";
import { EducationVitaProvider } from "./components/education/EducationVitaProvider";
import { ProspectStatusProvider } from "./components/prospect/ProspectStatusProvider";
import { ProspectCreate } from "./components/prospect/ProspectCreate";
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
        <EducationVitaProvider>
          <EducationProvider>
            <JobTypeProvider>
              <MissionProvider>
                <ProspectProvider>
                  <ProspectStatusProvider>

                    <VitaProvider>
                      <ExperienceProvider>
                        <Routes>
                          <Route element={<ApplicantList />} path="/profile" />
                          <Route element={<VitaList />} path="/vitas" />
                          <Route element={<VitaForm />} path="/vitas/new" />
                          <Route element={<VitaForm />} path="/vitas/edit/:vitaId" />
                          <Route element={<VitaDetails />} path="/vitas/:vitaId/:slug" />
                          <Route element={<VitaDetails />} path="/vitas/:vitaId" />
                          <Route element={<ProspectCreate />} path="/prospects/edit/:prospectId" />
                          <Route element={<ProspectCreate />} path="/prospects/new" />
                          <Route element={<ProspectList />} path="/prospects" />
                          <Route element={<ExperienceList />} path="/experiences" />
                          <Route element={<ExperienceForm />} path="/experiences/new" />
                          <Route element={<ExperienceForm />} path="/experiences/edit/:experienceId" />
                        </Routes>
                      </ExperienceProvider>

                      <Routes>
                        <Route element={<JobTypeList />} path="/jobtypes" />
                        <Route element={<EducationList />} path="/educations" />
                        <Route element={<EducationForm />} path="/educations/new" />
                        <Route element={<EducationForm />} path="/educations/edit/:educationId" />
                        <Route element={<MissionList />} path="/missions" />
                        <Route element={<MissionForm />} path="/missions/new" />
                        <Route element={<MissionForm />} path="/missions/edit/:missionId" />


                      </Routes>

                      <DescriptionProvider>
                        <LanguageProvider>
                          <FrameworkProvider>
                            <Routes>
                              <Route element={<DescriptionList />} path="/descriptions" />
                              <Route element={<FrameworkList />} path="/langframes" />
                              <Route element={<LanguageList />} path="/languages" />
                            </Routes>
                          </FrameworkProvider>
                        </LanguageProvider>
                      </DescriptionProvider>


                    </VitaProvider>
                  </ProspectStatusProvider>
                </ProspectProvider>
              </MissionProvider>
            </JobTypeProvider>
          </EducationProvider>
        </EducationVitaProvider>
      </ApplicantProvider>
    </main>

  );
};
