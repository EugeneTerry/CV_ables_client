import React, {useContext, useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProspectContext } from "../project1/ProspectProvider";

export const ProspectForm = () => {
    const history = useNavigate();

    const[prospect, setProspects] = useState ([])
    const {theProspect, setTheProspect} = useState({prospect_name: '', listing_url: ''});
    const { newProspect, setNewProspect } = useState({})
    const {prospects, getProspects, editProspect} = useContext(ProspectContext)
    const { prospectId } = useParams()

    useEffect(() => {
        getProspects().then((data) => setProspects(data))
    }, [])

    useEffect(() => {
        const theProspect = prospects.find(prospect => prospect.id === parseInt(prospectId)) || {prospect_name: '', listing_url: ''}
        setTheProspect(theProspect)
    }, [prospects, prospectId]);


    const changeProspectState = (e) => {
        newProspect[e.target.name] = e.target.value
        setNewProspect(newProspect)
      };

    const saveProspectState = (e) => {
        e.preventDefault()

        editProspect({
            id: theProspect.id,
            prospect_name: theProspect.prospect_name,
            listing_url: setTheProspect.listing_url
        }).then(() =>{
            history('/prospects')
        })
    }
      return (
        <div className="edit_prospect">
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
                value={theProspect.prospect_name}
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
                value={theProspect.listing_url}
                onChange={changeProspectState}
                />
            </div>
            </fieldset>
        </form>
        <button className='prospect_edit--save' onClick={saveProspectState}>Save</button>
        <button className='prospect_edit--cancel' onClick={() => {history('/prospects')}}>Cancel</button>
        </div>
    )

}
