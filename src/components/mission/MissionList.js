/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MissionContext } from "./MissionProvider";
import {Button, Card} from 'react-bootstrap';

export const MissionList = (props) => {
  const{ missions, getMissions, deleteMission} = useContext(MissionContext);
  const history = useNavigate()


  useEffect(() => {
    getMissions();
  }, []);

  return (
    <article className="container">
        <h1>Mission Statments</h1>
        <Button variant="success" onClick={() => history(`/missions/new/`)}>Add Mission</Button>
        <div className="mission__stack">
        {missions.map((mission) => {
          return (

              <Card key={`mission--${mission.id}`}>
                <Card.Header>{mission.job_type.label}</Card.Header>
                <Card.Body>
                  <Card.Text>
                  {mission.mission_text}
                  </Card.Text>
                  <Button onClick={() => history(`/missions/edit/${mission.id}`)}>Edit</Button>{"  "}
                  <Button variant="danger" onClick={() => deleteMission(mission.id)}>Delete</Button>
                </Card.Body>
              </Card>
          
          );
        })}
        </div> 
    </article>
  );
};