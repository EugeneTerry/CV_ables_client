import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProspectContext } from "./ProspectProvider";
import { ProspectStatusContext } from "./ProspectStatusProvider";

export const ProspectCreate = () => {
    const history = useNavigate();
    const { addProspect, getProspectById, editProspect } = useContext(ProspectContext);
    const { prospectstatuss, getProspectStatus } = useContext(ProspectStatusContext);
    const { prospectId } = useParams()

    const [currentProspect, setCurrentProspect] = useState({
        applicant_id: parseInt(localStorage.getItem("lu_token")),
        listing_url: "",
        prospect_name: "",
        prospectstatus_id: ""

    });
    const changeProspectState = (e) => {
        const key = e.target.name;
        const newProspectState = { ...currentProspect };
        newProspectState[key] = e.target.value;
        setCurrentProspect(newProspectState);
    };
    useEffect(() => {
        getProspectStatus();
    })

    useEffect(() => {
        if (prospectId) {
            getProspectById(prospectId).then((data) => {
                setCurrentProspect(prevState => ({
                    ...prevState,
                    listing_url: data.listing_url,
                    prospect_name: data.prospect_name,
                    prospectstatus_id: data.prospectstatus.id

                }))
            })

        }

    }, [prospectId])

    return (
        <form>
            <h2 className="prospectForm__name">
                {prospectId ? 'Edit' : 'Create'} Prospect</h2>
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
                        type="text"
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
                    <label htmlFor="prospectstatus_id">Select Prospect Status:</label>
                    <select
                        name="prospectstatus_id"
                        id="prospectstatus_id"
                        className="form-control"
                        value={currentProspect.prospectstatus_id}
                        onChange= {changeProspectState}
                        >
                    <option value="0"> Job Type </option>

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

            <button
                type="submit"
                onClick={(evt) => {
                    evt.preventDefault();

                    const event = {
                        prospect_name: currentProspect.prospect_name,
                        listing_url: currentProspect.listing_url,
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
            </button>
        </form>
    )

}