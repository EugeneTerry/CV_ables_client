/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProspectContext } from "./ProspectProvider";
import { Button, Table } from 'react-bootstrap';

export const ProspectList = (props) => {
  const { prospects, getProspects, deleteProspect } = useContext(ProspectContext);
  const history = useNavigate()


  useEffect(() => {
    getProspects();
  }, []);

  return (
    <article className="container">
      <h1>Prospects</h1>
      <Button variant="success" onClick={() => history(`/prospects/new/`)}>Add Prospect</Button>

      <div className="prospect__stack">


        <Table responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Posting</th>
              <th>Notes</th>
              <th>Vita</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {prospects.map((prospect) => (
              <tr>

                <th>{prospect.prospect_name}</th>
                <td className="table-status">{prospect.prospectstatus.label}</td>
                <td><a href={prospect.listing_url} target="_blank" rel="noreferrer">📄</a></td>
                <td className="table-notes">{prospect.notes}</td>
                <td><Link
                  to={`/vitas/${prospect.markedvita}`}
                  className="linkTitleVitaList"
                >
                  Link
                </Link>
                </td>
                <td>
                  <Button size="sm" onClick={() => history(`/prospects/edit/${prospect.id}`)}>Edit</Button>
                  <br/>
                  <Button variant="danger" size="sm" onClick={() => deleteProspect(prospect.id)}>Delete</Button>

                </td>
              </tr>
            ))}


          </tbody>
        </Table>

      </div>
    </article>
  );
};