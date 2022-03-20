import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProspectContext } from "./ProspectProvider";

export const ProspectList = (props) => {
  const{ prospects, getProspects, deleteProspect} = useContext(ProspectContext);
  const history = useNavigate()


  useEffect(() => {
    getProspects();
  }, []);

  return (
    <article className="prospect__wrapper">
        <h1>Prospects</h1>
        <button onClick={() => history(`/prospects/new/`)}>Add Prospect</button>
        <div className="prospect__stack">
        {prospects.map((prospect) => {
          return (
            <div key={`prospect--${prospect.id}`} className="prospect">
                <h2>{prospect.prospect_name}</h2>
              <section className="prospect">
                <div className="prospect">
                Job Search Status:<li>{prospect.prospectstatus.label}</li>
                <br></br>
                Job Listing Link<li>{prospect.listing_url}</li>
                <br></br>
                Notes:<ul>{prospect.notes}</ul>
                </div>
                <Link
                to={`/vitas/${prospect.markedvita}`}
                className="linkTitleVitaList"
              >
                Submitted Vita
              </Link>

              </section>
              <button onClick={() => history(`/prospects/edit/${prospect.id}`)}>Edit</button>
              <button onClick={() => deleteProspect(prospect.id)}>Delete</button>
            </div>
          );
        })}
        </div> 
    </article>
  );
};