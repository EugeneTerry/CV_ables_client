import React, { useContext, useEffect } from "react";
import { VitaContext } from "./VitaProvider";
import { EducationContext } from "../education/EducationProvider";

export const VitaList = (props) => {
  const{ vitas, getVitas} = useContext(VitaContext);
  const{ educations, getEducations} = useContext(EducationContext);


  useEffect(() => {
    getVitas();
    getEducations();
  }, []);

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
                <ul>Job Listing:{" "}{vita.prospect.listing_url}</ul> 
                <ul><h4>Contact:</h4>{" "}{vita.applicant.user.email}</ul>
                <ul>{vita.applicant.address}</ul> 
                <ul>{vita.applicant.city}{" "}{vita.applicant.state}.{" "}{vita.applicant.zipcode}</ul>
                <ul>{vita.applicant.phone}</ul>
                <ul><h4>About Me:</h4>{" "}{vita.mission.mission_text}</ul>
                <ul>{vita.applicant.address}</ul> 
                <ul>{vita.applicant.city}{" "}{vita.applicant.state}.{" "}{vita.applicant.zipcode}</ul>
                <ul><h4>About Me:</h4>{" "}{vita.mission.mission_text}</ul>
                <br></br>
                </div>
              </section>
        <ul><h3>Education</h3></ul>
        <div className="education__stack">
        {educations.map((education) => {
          return (
            <div key={`education--${education.id}`} className="education">
              <section className="education">
                <div className="description__text">
                <ul>{education.school_name}</ul>
                <ul>{education.city}{" "}{education.state}.</ul> 
                
                <ul>Degree:{" "}{education.diploma}</ul>
                <ul>Year Graduated:{" "}{education.grad_year}</ul>

                <br></br>
                </div>
              </section>
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