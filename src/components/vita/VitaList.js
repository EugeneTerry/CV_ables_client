import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { VitaContext } from "./VitaProvider";
import { EducationContext } from "../education/EducationProvider";
import { EducationVitaContext } from "../education/EducationVitaProvider";
import {Button, Card} from 'react-bootstrap';


export const VitaList = (props) => {
  const { vitas, getVitas, deleteVita } = useContext(VitaContext);
  const { educations, getEducations } = useContext(EducationContext);
  const { getEducationVitas } = useContext(EducationVitaContext);
  const history = useNavigate()


  useEffect(() => {
    getVitas();
    getEducations();
    getEducationVitas();
  }, []);

  // useEffect(() => {
  //   setFiltered(vitas)
  // })

  return (
    <article className="container">
      <h1>Vitas</h1>
      <Button variant="success" onClick={() => history(`/vitas/new/`)}>Add Vita</Button>

      
        {vitas.map((vita) => {
          return (
           
              <Card key={`vita--${vita.id}`} className="vita-list" body>
              <Link
                to={`/vitas/${vita.id}/${vita.slug}`}
                key={vita.id}
                className="linkTitleVitaList"
              >
                <h3>{vita.job_type.label}</h3>
              </Link>

                <div>
                <Button size="sm" onClick={() => history(`/vitas/edit/${vita.id}`)}>Edit</Button>
                {' '}
                <Button variant="danger" size="sm" onClick={() => deleteVita(vita.id)}>Delete</Button>
                </div>
                </Card>
            
          );
        })}
      
    </article>
  );
};