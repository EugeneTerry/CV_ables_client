import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { EducationContext } from "./EducationProvider";

export const EducationList = (props) => {
  const{ educations, getEducations, deleteEducation} = useContext(EducationContext);
  const history = useNavigate()


  useEffect(() => {
    getEducations();
  }, []);

  return (
    <article className="education__wrapper">
        <h1>Education</h1>
        <button onClick={() => history(`/educations/new/`)}>Add Education</button>
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

              <button onClick={() => history(`/educations/edit/${education.id}`)}>Edit</button>
              <button onClick={() => deleteEducation(education.id)}>Delete</button>
            
                </div>
              </section>
            </div>
          );
        })}
        </div> 
    </article>
  );
};