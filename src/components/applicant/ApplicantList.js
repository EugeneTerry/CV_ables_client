import React, { useContext, useEffect } from "react";
import { ApplicantContext } from "./ApplicantProvider";

export const ApplicantList = (props) => {
  const{ currentApplicant, getCurrentApplicant} = useContext(ApplicantContext);

  useEffect(() => {
    getCurrentApplicant();
  }, []);

  return (
    <article className="applicant__wrapper">
      <header>
        <h1>Your Profile</h1>
      </header>
      <section className="applicant_info">
        <header  className="applicant_header">
          <h3>Your Info</h3>
        </header>
      </section>
      <div className="applicant_name">
        {
          currentApplicant.user && (
            <>
            <ul>Name: { currentApplicant.user.first_name}{""} {currentApplicant.user.last_name}</ul>
            <ul>Email: { currentApplicant.user.email}</ul>
            <ul>LinkedIn: { currentApplicant.linkedin_url}</ul>
          </>
          )
        }
      </div>
    </article>

  );
}