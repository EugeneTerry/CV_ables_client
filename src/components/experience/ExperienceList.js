/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ExperienceContext } from "./ExperienceProvider";
import { Button, Card } from 'react-bootstrap';


export const ExperienceList = (props) => {
  const { experiences, getExperiences, deleteExperience } = useContext(ExperienceContext);
  const history = useNavigate()

  useEffect(() => {
    getExperiences();
  }, []);

  return (
    <article className="container">
      <h1>Experiences</h1>
      <Button variant="success" onClick={() => history(`/experiences/new/`)}>Add Experience</Button>

      <div className="experience__stack">
        {experiences.map((experience) => {
          return (

            <Card key={`experience--${experience.id}`}>
              <Card.Header>{experience.company}</Card.Header>
              <Card.Body>
                <Card.Text>
                  Title:{" "}{experience.job_title}
                </Card.Text>
                <Card.Text>
                  Job Type:{" "}{experience.job_type.label}
                </Card.Text>
                <Card.Text>
                  From:{" "}{experience.start_yr} to {experience.end_yr}
                </Card.Text>
                <Card.Text>
                  {experience.duties}
                </Card.Text>
                <Button onClick={() => history(`/experiences/edit/${experience.id}`)}>Edit</Button>{"  "}
                <Button variant="danger" onClick={() => deleteExperience(experience.id)}>Delete</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </article>
  );
};