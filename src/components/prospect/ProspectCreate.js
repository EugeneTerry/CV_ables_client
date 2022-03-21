import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProspectContext } from "./ProspectProvider";
import { ProspectStatusContext } from "./ProspectStatusProvider";
import { VitaContext } from "../vita/VitaProvider";
import {Button} from "react-bootstrap";

export const ProspectCreate = () => {
    const history = useNavigate();
    const { addProspect, getProspectById, editProspect } = useContext(ProspectContext);
    const { prospectstatuss, getProspectStatus } = useContext(ProspectStatusContext);
    const { vitas, getVitas } = useContext(VitaContext);

    const { prospectId } = useParams()

    const [currentProspect, setCurrentProspect] = useState({
        applicant_id: parseInt(localStorage.getItem("lu_token")),
        listing_url: "",
        prospect_name: "",
        prospectstatus_id: "",
        markedvita: "",
        notes: ""

    });
    const changeProspectState = (e) => {
        const key = e.target.name;
        const newProspectState = { ...currentProspect };
        newProspectState[key] = e.target.value;
        setCurrentProspect(newProspectState);
    };
    useEffect(() => {
        getProspectStatus();
        getVitas();
    }, [])

    useEffect(() => {
        if (prospectId) {
            getProspectById(prospectId).then((data) => {
                setCurrentProspect(prevState => ({
                    ...prevState,
                    listing_url: data.listing_url,
                    prospect_name: data.prospect_name,
                    prospectstatus_id: data.prospectstatus.id,
                    markedvita: data.markedvita,
                    notes: data.notes

                }))
            })

        }

    }, [prospectId])

    return (
        <form className="container">
            <h1 className="prospectForm__name">
                {prospectId ? 'Edit' : 'Create'} Prospect</h1>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Company: </label>
                    <input
                        type="text"
                        name="prospect_name"
                        required
                        autoFocus
                        className="form-control"
                        value={currentProspect.prospect_name}
                        onChange={changeProspectState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="listing_url">Listing URL: </label>
                    <input
                        type="url"
                        name="listing_url"
                        required
                        autoFocus
                        className="form-control"
                        value={currentProspect.listing_url}
                        onChange={changeProspectState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="markedvita">Vita Submitted </label>
                    <select
                        name="markedvita"
                        required
                        className="form-select"
                        value={currentProspect.markedvita}
                        onChange={changeProspectState}
                    >
                        <option value="0">None Selected</option>

                        {
                            vitas.map((vita) => (

                                <option key={vita.id} value={vita.id}>
                                    {vita.slug}

                                </option>)
                            )
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="notes">Notes</label>
                    <textarea
                        type="text"
                        name="notes"
                        optional
                        autoFocus
                        className="form-control"
                        value={currentProspect.notes}
                        onChange={changeProspectState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="prospectstatus_id">Select Job Search Status:</label>
                    <select
                        name="prospectstatus_id"
                        id="prospectstatus_id"
                        className="form-select"
                        value={currentProspect.prospectstatus_id}
                        onChange={changeProspectState}
                    >
                        <option value="0"> </option>

                        {
                            prospectstatuss.map((prospectstatus) => (

                                <option key={prospectstatus.id} value={prospectstatus.id}>
                                    {prospectstatus.label}

                                </option>)
                            )
                        }
                    </select>
                </div>
            </fieldset>

            <Button
                type="submit"
                variant="success"
                onClick={(evt) => {
                    evt.preventDefault();

                    const event = {
                        ...currentProspect
                    };

                    if (prospectId) {
                        editProspect({ ...event, id: prospectId }).then(() => history("/prospects"));

                    } else {
                        addProspect(event).then(() => history("/prospects"));
                    }
                }}
                className="gen_button"
            >
                {prospectId ? 'Edit' : 'Create'} Prospect
            </Button>
        </form>
    )

}