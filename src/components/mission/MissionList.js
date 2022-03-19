import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MissionContext } from "./MissionProvider";

export const MissionList = (props) => {
  const{ missions, getMissions, deleteMission} = useContext(MissionContext);
  const history = useNavigate()


  useEffect(() => {
    getMissions();
  }, []);

  return (
    <article className="mission__wrapper">
        <h1>Missions</h1>
        <button onClick={() => history(`/missions/new/`)}>Add Mission</button>
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
              <button onClick={() => history(`/missions/edit/${mission.id}`)}>Edit</button>
              <button onClick={() => deleteMission(mission.id)}>Delete</button>
            
            </div>
          );
        })}
        </div> 
    </article>
  );
};