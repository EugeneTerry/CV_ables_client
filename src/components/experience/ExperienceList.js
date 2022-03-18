import React, { useContext, useEffect } from "react";
import { ExperienceContext } from "./ExperienceProvider"; 

export const ExperienceList = (props) => {
  const{ experiences, getExperiences} = useContext(ExperienceContext);


  useEffect(() => {
    getExperiences();
  }, []);

  return (
    <article className="experience__wrapper">
        <h1>Experiences</h1>
        <div className="experience__stack">
        {experiences.map((experience) => {
          return (
            <div key={`experience--${experience.id}`} className="experience">
              <section className="experience">
                <div className="experience__text">
                {experience.company}
                <ul>Title:{" "}{experience.job_title}</ul> 
                <ul>Job Type:{" "}{experience.job_type.label}</ul>
                <ul>From:{" "}{experience.start_yr} to {experience.end_yr}</ul>
                <br></br>
                </div>
              </section>
            </div>
          );
        })}
        </div> 
    </article>
  );
};