import React, { useContext, useEffect } from "react";
import { JobTypeContext } from "./JobtypeProvider";

export const JobTypeList = (props) => {
  const{ jobtypes, getJobTypes} = useContext(JobTypeContext);


  useEffect(() => {
    getJobTypes();
  }, []);

  return (
    <article className="jobtype__wrapper">
        <h1>Job Types</h1>
        <div className="jobtype__stack">
        {jobtypes.map((jobtype) => {
          return (
            <div key={`jobtype--${jobtype.id}`} className="jobtype">
              <section className="jobtype">
                <div className="jobtype__label">
                <li>{jobtype.label}</li>
                </div>
              </section>
            </div>
          );
        })}
        </div> 
    </article>
  );
};