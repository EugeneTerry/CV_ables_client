/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EducationContext } from "./EducationProvider";
import {Button} from "react-bootstrap";

export const EducationForm = () => {
    const history = useNavigate();
    const { addEducation, getEducationById, editEducation } = useContext(EducationContext);
    const { educationId } = useParams()

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
    useEffect(() => {
        if (educationId) {
            getEducationById(educationId).then((data) => {
                setCurrentEducation(prevState => ({
                    ...prevState,
                    school_name: data.school_name,
                    city: data.city,
                    state: data.state,
                    grad_year: data.grad_year,
                    diploma: data.diploma
                }))
            })

        }
    }, [educationId])
    return (
        <form className="container">
            <h1 className="educationForm__name">
                {educationId ? 'Edit' : 'Create'} School
            </h1>
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
            <Button
                type="submit"
                variant="success"
                onClick={(evt) => {
                    evt.preventDefault();

                    const event = {
                        ...currentEducation,
                        applicant_id: parseInt(localStorage.getItem("lu_token")),
                    };
                    if (educationId) {
                        editEducation({ ...event, id: educationId }).then(() => history("/educations"));
                    } else {
                        addEducation(event).then(() => history("/educations"));
                    }
                }}
                className="gen_button"
            >
                {educationId ? 'Edit' : 'Create'} School
            </Button>
        </form>
    )

}