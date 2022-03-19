import React, { useContext, useEffect, useState } from "react";
import { VitaContext } from "./VitaProvider";
import { EducationContext } from "../education/EducationProvider";
import { EducationVitaContext } from "../education/EducationVitaProvider";

export const VitaList = (props) => {
  const { vitas, getVitas } = useContext(VitaContext);
  const { educations, getEducations } = useContext(EducationContext);
  const{ educationvitas, getEducationVitas} = useContext(EducationVitaContext);


  useEffect(() => {
    getVitas();
    getEducations();
    getEducationVitas();
  }, []);

  // useEffect(() => {
  //   setFiltered(vitas)
  // })

  return (
    <article className="vita__wrapper">
      <h1>Vitas</h1>
      <div className="vita__stack">
        {vitas.map((vita) => {
          return (
            <div key={`vita--${vita.id}`} className="vita">
              <section className="vita">
                <div className="vita__text">
                  <h2>{vita.applicant.user.first_name}{" "}{vita.applicant.user.last_name}</h2>
                  <ul><h3>{vita.mission.job_type.label}</h3></ul>
                  <ul><h4>About Me:</h4>{" "}{vita.mission.mission_text}</ul>
                  <ul>{vita.applicant.address}</ul>
                  <ul><h4>Contact:</h4>{" "}{vita.applicant.user.email}</ul>
                  <ul>{vita.applicant.address}</ul>
                  <ul>{vita.applicant.city}{" "}{vita.applicant.state}.{" "}{vita.applicant.zipcode}</ul>
                  <ul>{vita.applicant.phone}</ul>
                  <br></br>
                </div>
              </section>
              <div>
              {/* <ul><h3>Education</h3></ul>
              </div>
              <div className="education__stack">
                {educations.map((education) => {
                  return (
                    <div key={`education--${education.id}`} className="education">
                      <section className="education">
                        <div className="description__text">
                          <ul><b>{education.school_name}</b></ul>
                          <ul>{education.city}{" "}{education.state}.</ul>
                          <ul>Degree:{" "}{education.diploma}</ul>
                          <ul>Year Graduated:{" "}{education.grad_year}</ul>
                          <br></br>
                        </div>
                      </section>
                      <div className="educationvita__stack">
                      </div>
                    </div>
                  );
                })} */}
                <ul>Job Listing:{" "}{vita.prospect.listing_url}</ul>
              </div>
              <div className="educationvita__stack">
                {educationvitas.map((educationvita) => {
                  return (
                    <div key={`educationvita--${educationvita.id}`} className="educationvita">
                      <section className="educationvita">
                        <div className="educationvita__text">
                          <ul><b>{educationvita.education.school_name}</b></ul>
                          <ul>{educationvita.education.city}{" "}{educationvita.education.state}.</ul>
                          <ul>Degree:{" "}{educationvita.education.diploma}</ul>
                          <ul>Year Graduated:{" "}{educationvita.education.grad_year}</ul>
                          <br></br>
                        </div>
                      </section>
                    
                      <div className="education__stack">
                      </div>
                    </div>
                  );
                })}
                
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
};