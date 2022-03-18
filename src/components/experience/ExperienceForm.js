import React, {useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { ExperienceContext } from "./ExperienceProvider";
import { JobTypeContext } from "../jobtype/JobtypeProvider";


export const ExperienceForm = () => {
    const history = useNavigate();
    const { addExperience } = useContext(ExperienceContext);
    const { jobtypes, getJobTypes } = useContext(JobTypeContext);
    const [currentExperience, setCurrentExperience] = useState({
        job_title: "",
        company: "",
        jobtype_id: "",
        start_yr: "",
        end_yr: ""
    });

    useEffect(() => {
        getJobTypes()
    }, [])


    const changeExperienceState = (e) => {
        const key = e.target.name;
        const newExperienceState = { ...currentExperience };
        newExperienceState[key] = e.target.value;
        setCurrentExperience(newExperienceState);
      };
      return (
        <form>
             <h2 className="experienceForm__name">Create New Experience</h2>
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
                        className="form-control"
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
            <button 
            type="submit"
            onClick={(evt) => {
                evt.preventDefault();

                const event = {
                     ...currentExperience, 
                    applicant_id: parseInt(localStorage.getItem("lu_token")),
                    // created a spread opperator to send everything below to data
                    // job_title: currentExperience.job_title,
                    // company: currentExperience.company,
                    // jobtype_id: currentExperience.jobtype_id,
                    // start_yr: currentExperience.start_yr,
                    // end_yr: currentExperience.end_yr

                };
                addExperience(event).then(() => history("/experiences"));
            }}
            className="gen_button"
            >
                Add School
            </button>
        </form>
    )

}