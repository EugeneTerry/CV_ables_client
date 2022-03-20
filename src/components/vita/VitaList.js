import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { VitaContext } from "./VitaProvider";
import { EducationContext } from "../education/EducationProvider";
import { EducationVitaContext } from "../education/EducationVitaProvider";

export const VitaList = (props) => {
  const { vitas, getVitas, deleteVita } = useContext(VitaContext);
  const { educations, getEducations } = useContext(EducationContext);
  const { getEducationVitas } = useContext(EducationVitaContext);
  const history = useNavigate()


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
      <button onClick={() => history(`/vitas/new/`)}>Add Vita</button>
      <div className="vita__stack">
        {vitas.map((vita) => {
          return (
            <div key={`vita--${vita.id}`} className="vita">
              <Link
                to={`/vitas/${vita.id}/${vita.slug}`}
                key={vita.id}
                className="linkTitleVitaList"
              >
                <h2>{vita.mission.job_type.label}</h2>
              </Link>
              <section className="vita">
                <div className="vita__text">
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
                <ul><h3>Education</h3></ul>
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
                    </div>
                  );
                })}
                <ul>Job Listing:{" "}{vita.prospect.listing_url}</ul>
              </div>
                <button onClick={() => history(`/experiences/edit/${vita.id}`)}>Edit</button>
                <button onClick={() => deleteVita(vita.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </article>
  );
};