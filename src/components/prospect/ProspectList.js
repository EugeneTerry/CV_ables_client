import React, { useContext, useEffect } from "react";
import { ProspectContext } from "./ProspectProvider";

export const ProspectList = (props) => {
  const{ prospects, getProspects} = useContext(ProspectContext);


  useEffect(() => {
    getProspects();
  }, []);

  return (
    <article className="prospect__wrapper">
        <h1>Prospects</h1>
        <div className="prospect__stack">
        {prospects.map((prospect) => {
          return (
            <div key={`prospect--${prospect.id}`} className="prospect">
              <section className="prospect">
                <div className="prospect">
                {prospect.prospect_name}
                <li>{prospect.listing_url}</li>
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