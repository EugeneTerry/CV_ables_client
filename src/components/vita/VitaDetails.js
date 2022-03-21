import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { VitaContext } from "./VitaProvider";
import { EducationContext } from "../education/EducationProvider";
import { ExperienceContext } from "../experience/ExperienceProvider";

export const VitaDetails = (props) => {
  const { getVitaById, deleteVita } = useContext(VitaContext);
  const { educations, getEducations } = useContext(EducationContext);
  const { experiences, getExperiences } = useContext(ExperienceContext)
  const [vita, setVita] = useState({})
  const history = useNavigate()
  const { vitaId } = useParams();

  useEffect(() => {
    getEducations();
    getExperiences();
    getVitaById(vitaId).then(setVita)
  }, [vitaId]);

  const handleRelease = () => {
    deleteVita(vita.id)
      .then(() => {
        history("/vitas");
      });
  }

  return (
    <article className="container">
      <div className="vitadetail__stack">
        <div key={`vita--${vita?.id}`} className="vita">
          {
            Object.values(vita).length && (
              <>
                <section className="vita-header">
                  <h1 className="vita-applicant-name">{vita.applicant.user.first_name}{" "}{vita.applicant.user.last_name}</h1>
                  <h3 className="vita-job-title">{vita.mission.job_type.label}</h3>

                  <p className="contact-info">{vita.applicant.address}, {vita.applicant.city}{" "}{vita.applicant.state}.{" "}{vita?.applicant.zipcode}</p>
                  <p className="contact-info"><a href={`tel:${vita.applicant.phone}`}>{vita.applicant.phone}</a> | <a href={`mailto:${vita.applicant.user.email}`}>{vita.applicant.user.email}</a></p>
                  
                  <p className="contact-info"><a href={`${vita.applicant.github_url}`} target="_blank">GitHub</a> | <a href={`${vita.applicant.linkedin_url}`}target="_blank">LinkedIn</a></p>

                </section>
                <section className="vita-mission">
                  <p>{vita.mission.mission_text}</p>
                </section>
              </>

            )
          }

          <div className="vita-section">
            <hr />
            <h3 className="vita-section-header">Experiences</h3>
            <hr />
            {experiences.map((experience) => {
              return (
                <div key={`experience--${experience.id}`} className="experience">

                  <div className="experience__text">
                    <h4 className="vita-section-title">{experience.company}</h4>
                    <p className="vita-subtitle">{experience.job_title}{" "} | {experience.start_yr} - {experience.end_yr}</p>
                    <p className="vita-text">{experience.duties}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="vita-section">
            <hr />
            <h3 className="vita-section-header">Education</h3>
            <hr />
            {educations.map((education) => {
              return (
                <div key={`education--${education.id}`} className="education">
                  <div className="description__text">
                    <h4 className="vita-section-title">{education.school_name}</h4>
                    <p className="vita-subtitle">{education.city}{" "}{education.state}.</p>
                    <p className="vita-text">{education.diploma}</p>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </article>
  );
};