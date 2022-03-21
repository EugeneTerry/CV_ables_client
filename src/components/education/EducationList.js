import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { EducationContext } from "./EducationProvider";
import {Button, Card} from 'react-bootstrap';

export const EducationList = (props) => {
  const{ educations, getEducations, deleteEducation} = useContext(EducationContext);
  const history = useNavigate()


  useEffect(() => {
    getEducations();
  }, []);

  return (
    <article className="container">
        <h1>Education</h1>
        <Button variant="success" onClick={() => history(`/educations/new/`)}>Add Education</Button>
        <div className="education__stack">
        {educations.map((education) => {
          return (


            <Card key={`education--${education.id}`}>
            <Card.Header>{education.school_name}</Card.Header>
            <Card.Body>
              <Card.Text>
              {education.city}{" "}{education.state}
              </Card.Text>
              <Card.Text>
              Degree:{" "}{education.diploma}
              </Card.Text>
              <Card.Text>
              Year Graduated:{" "}{education.grad_year}
              </Card.Text>
              <Button onClick={() => history(`/educations/edit/${education.id}`)}>Edit</Button>{"  "}
              <Button variant="danger" onClick={() => deleteEducation(education.id)}>Delete</Button>
            </Card.Body>
          </Card>
          );
        })}
        </div> 
    </article>
  );
};