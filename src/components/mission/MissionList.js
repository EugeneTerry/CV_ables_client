import React, { useContext, useEffect } from "react";
import { MissionContext } from "./MissionProvider";

export const MissionList = (props) => {
  const{ missions, getMissions} = useContext(MissionContext);


  useEffect(() => {
    getMissions();
  }, []);

  return (
    <article className="mission__wrapper">
        <h1>Missions</h1>
        <div className="mission__stack">
        {missions.map((mission) => {
          return (
            <div key={`mission--${mission.id}`} className="mission">
              <section className="mission">
                <div className="mission__text">
                {mission.job_type.label}
                <ul>Statement:{" "}{mission.mission_text}</ul> 
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