import React, { useContext, useEffect } from "react";
import { EducationContext } from "./EducationProvider";

export const EducationList = (props) => {
  const{ educations, getEducations} = useContext(EducationContext);


  useEffect(() => {
    getEducations();
  }, []);

  return (
    <article className="education__wrapper">
        <h1>Education</h1>
        <div className="education__stack">
        {educations.map((education) => {
          return (
            <div key={`education--${education.id}`} className="education">
              <section className="education">
                <div className="description__text">
                {education.school_name}
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
    </article>
  );
};