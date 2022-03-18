import React, {useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import { ProspectContext } from "./ProspectProvider";

export const ProspectForm = () => {
    const history = useNavigate();
    const { addProspect } = useContext(ProspectContext);

    const [currentProspect, setCurrentProspect] = useState({
        applicant_id: parseInt(localStorage.getItem("lu_token")),
        listing_url: "",
        prospect_name: ""
    });
    const changeProspectState = (e) => {
        const key = e.target.name;
        const newProspectState = { ...currentProspect };
        newProspectState[key] = e.target.value;
        setCurrentProspect(newProspectState);
      };
      return (
        <form>
             <h2 className="prospectForm__name">Create New Vita</h2>
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

            <button 
            type="submit"
            onClick={(evt) => {
                evt.preventDefault();

                const event = {
                    applicant_id: parseInt(localStorage.getItem("lu_token")),
                    prospect_name: currentProspect.prospect_name,
                    listing_url: currentProspect.listing_url,
                };

                addProspect(event).then(() => history("/prospects"));
            }}
            className="gen_button"
            >
                Create Prospect
            </button>
        </form>
    )

}