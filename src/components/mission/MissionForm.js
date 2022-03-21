import React, {useContext, useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MissionContext } from "./MissionProvider";
import { JobTypeContext } from "../jobtype/JobtypeProvider";
import {Button} from "react-bootstrap";

export const MissionForm = () => {
    const history = useNavigate();
    const { addMission, getMissionById, editMission } = useContext(MissionContext);
    const { jobtypes, getJobTypes } = useContext(JobTypeContext);
    const { missionId } = useParams()

    const [currentMission, setCurrentMission] = useState({
        mission_text: "",
        jobtype_id: ""
    });
    const changeMissionState = (e) => {
        const key = e.target.name;
        const newMissionState = { ...currentMission };
        newMissionState[key] = e.target.value;
        setCurrentMission(newMissionState);
    };
    useEffect(()=>{
        getJobTypes();
    }, []);

    useEffect(()=> {
        if (missionId){
            getMissionById(missionId).then((data) =>{
                setCurrentMission(prevState =>({
                    ...prevState,
                    mission_text: data.mission_text,
                    jobtype_id: data.job_type.id

                }))
            })

        }

    },[missionId]) 

      return (
        <form className="container">
             <h1 className="missionForm__name">
             {missionId? 'Edit': 'Create'} Mission</h1>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="mission_text">Your Statement: </label>
                    <textarea
                    type="text"
                    name="mission_text"
                    required
                    autoFocus
                    className="form-control"
                    style={{height: "115px"}}
                    value={currentMission.mission_text}
                    onChange={changeMissionState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="jobtype_id">Select Job Type:</label>
                    <select
                        name="jobtype_id"
                        id="jobtype_id"
                        className="form-select"
                        value={currentMission.jobtype_id}
                        onChange= {changeMissionState}
                        >
                    <option value="0"> Job Type </option>

                    {
                     jobtypes.map((jobtype) => (
                    
                    <option key={jobtype.id} value={jobtype.id}>
                        {jobtype.label}
                        
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
                     ...currentMission, 
                    applicant_id: parseInt(localStorage.getItem("lu_token")),
                };
                if (missionId){
                    editMission({...event, id: missionId}).then(() => history("/missions"));
                }else{
                    addMission(event).then(() => history("/missions"));
                }
            }}
            className="gen_button"
            >
                {missionId? 'Edit': 'Create'} Personal Mission
                </Button>
        </form>
    )

}