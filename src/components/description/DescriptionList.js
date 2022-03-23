/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { DescriptionContext } from "./DescriptionProvider";

export const DescriptionList = (props) => {
  const{ descriptions, getDescriptions} = useContext(DescriptionContext);


  useEffect(() => {
    getDescriptions();
  }, []);

  return (
    <article className="description__wrapper">
        <h1>Descriptions</h1>
        <div className="description__stack">
        {descriptions.map((description) => {
          return (
            <div key={`description--${description.id}`} className="description">
              <section className="description">
                <div className="description__text">
                {description.experience.job_title}
                <li>{description.description_text}</li>
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