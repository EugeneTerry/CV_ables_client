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
        <ul>Name: {currentApplicant.user && currentApplicant.user.first_name}{""} {currentApplicant.user && currentApplicant.user.last_name}</ul>
        <ul>Email: {currentApplicant.user && currentApplicant.user.email}</ul>
        
      </div>
      {/* <h3>Your Events</h3>
      <div className="game__stack">
        {currentGamer.attending?.map((event) =>{
          return (
            <div key={event.id} className="attending_events">
            <section>
               <div className="attending_title">{event.title}</div>
               <div className="attending_date">{moment.utc(event.date).format("dddd, MMMM DD YYYY")}</div>
               <div className="attending_time">{moment(event.time, "HH:mm:ss").format("h:mm a")}</div>
            </section>
            </div>
          )
        })}
      </div> */}
    </article>

  );
}