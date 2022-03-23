/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ExperienceContext } from "./ExperienceProvider";
import { JobTypeContext } from "../jobtype/JobtypeProvider";
import {Button} from "react-bootstrap";




export const ExperienceForm = () => {
    const history = useNavigate();
    const { addExperience, getExperienceById, editExperience } = useContext(ExperienceContext);
    const { jobtypes, getJobTypes } = useContext(JobTypeContext);
    const { experienceId } = useParams()

    const [currentExperience, setCurrentExperience] = useState({
        job_title: "",
        company: "",
        duties: "",
        jobtype_id: "",
        start_yr: "",
        end_yr: ""
    });
    const changeExperienceState = (e) => {
        const key = e.target.name;
        const newExperienceState = { ...currentExperience };
        newExperienceState[key] = e.target.value;
        setCurrentExperience(newExperienceState);
    };
    useEffect(()=>{
        getJobTypes();
    }, []);

    useEffect(()=> {
        if (experienceId){
            getExperienceById(experienceId).then((data) =>{
                setCurrentExperience(prevState =>({
                    ...prevState,
                    job_title: data.job_title,
                    company: data.company,
                    jobtype_id: data.job_type.id,
                    start_yr: data.start_yr,
                    end_yr: data.end_yr,
                    duties: data.duties

                }))
            })

        }

    },[experienceId]) 

      return (
        <form className="container">
             <h1 className="experienceForm__name">
             {experienceId? 'Edit': 'Create'} Experience</h1>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="company">Company: </label>
                    <input
                    type="text"
                    name="company"
                    required
                    autoFocus
                    className="form-control"
                    value={currentExperience.company}
                    onChange={changeExperienceState}
                    />
                </div>
            </fieldset>
            <fieldset>
            <div className="form-group">
                <label htmlFor="job_title">Job Title </label>
                <input
                type="text"
                name="job_title"
                required
                autoFocus
                className="form-control"
                value={currentExperience.job_title}
                onChange={changeExperienceState}
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
                        value={currentExperience.jobtype_id}
                        onChange= {changeExperienceState}
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
            <fieldset>
                <div className="form-group">
                    <label htmlFor="start_yr">Start Year: </label>
                    <input
                    type="text"
                    name="start_yr"
                    required
                    autoFocus
                    className="form-control"
                    value={currentExperience.start_yr}
                    onChange={changeExperienceState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="end_yr">End Year: </label>
                    <input
                    type="text"
                    name="end_yr"
                    required
                    autoFocus
                    className="form-control"
                    value={currentExperience.end_yr}
                    onChange={changeExperienceState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="duties_text">Your Duties: </label>
                    <textarea
                    type="text"
                    name="duties"
                    required
                    autoFocus
                    className="form-control"
                    style={{height: "115px"}}
                    value={currentExperience.duties}
                    onChange={changeExperienceState}
                    />
                </div>
            </fieldset>
            <Button 
            type="submit"
            variant="success"
            onClick={(evt) => {
                evt.preventDefault();

                const event = {
                     ...currentExperience, 
                    applicant_id: parseInt(localStorage.getItem("lu_token")),
                };
                if (experienceId){
                    editExperience({...event, id: experienceId}).then(() => history("/experiences"));
                }else{
                    addExperience(event).then(() => history("/experiences"));
                }
            }}
            className="gen_button"
            >
                {experienceId? 'Edit': 'Create'} Experience
                </Button>
        </form>
    )

}