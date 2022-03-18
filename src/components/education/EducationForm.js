import React, {useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import { EducationContext } from "./EducationProvider";

export const EducationForm = () => {
    const history = useNavigate();
    const { addEducation } = useContext(EducationContext);

    const [currentEducation, setCurrentEducation] = useState({
        applicant_id: parseInt(localStorage.getItem("lu_token")),
        school_name: "",
        city: "",
        state: "",
        grad_year: "",
        diploma: ""
    });
    const changeEducationState = (e) => {
        const key = e.target.name;
        const newEducationState = { ...currentEducation };
        newEducationState[key] = e.target.value;
        setCurrentEducation(newEducationState);
      };
      return (
        <form>
             <h2 className="educationForm__name">Create New Vita</h2>
            <fieldset>
            <div className="form-group">
                <label htmlFor="name">School Name: </label>
                <input
                type="text"
                name="school_name"
                required
                autoFocus
                className="form-control"
                value={currentEducation.school_name}
                onChange={changeEducationState}
                />
            </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="city">City: </label>
                    <input
                    type="text"
                    name="city"
                    required
                    autoFocus
                    className="form-control"
                    value={currentEducation.city}
                    onChange={changeEducationState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="state">State: </label>
                    <input
                    type="text"
                    name="state"
                    required
                    autoFocus
                    className="form-control"
                    value={currentEducation.state}
                    onChange={changeEducationState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="grad_year">Graduating Year: </label>
                    <input
                    type="text"
                    name="grad_year"
                    required
                    autoFocus
                    className="form-control"
                    value={currentEducation.grad_year}
                    onChange={changeEducationState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="diploma">Degree: </label>
                    <input
                    type="text"
                    name="diploma"
                    required
                    autoFocus
                    className="form-control"
                    value={currentEducation.diploma}
                    onChange={changeEducationState}
                    />
                </div>
            </fieldset>
            <button 
            type="submit"
            onClick={(evt) => {
                evt.preventDefault();

                const event = {
                    applicant_id: parseInt(localStorage.getItem("lu_token")),
                    school_name: currentEducation.school_name,
                    city: currentEducation.city,
                    state: currentEducation.state,
                    grad_year: currentEducation.grad_year,
                    diploma: currentEducation.diploma
                };

                addEducation(event).then(() => history("/educations"));
            }}
            className="gen_button"
            >
                Add School
            </button>
        </form>
    )

}