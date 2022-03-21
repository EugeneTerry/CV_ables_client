import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { VitaContext } from "./VitaProvider";
import { EducationContext } from "../education/EducationProvider";
import { ExperienceContext } from "../experience/ExperienceProvider";

export const VitaDetails = (props) => {
    const { getVitaById, deleteVita } = useContext(VitaContext);
    const { educations, getEducations } = useContext(EducationContext);
    const { experiences, getExperiences } = useContext(ExperienceContext)
    const [vita, setVita] = useState({})
    const history = useNavigate()
    const { vitaId } = useParams();

    useEffect(() => {
        getEducations();
        getExperiences();
        getVitaById(vitaId).then(setVita)
    }, [vitaId]);

    const handleRelease = () => {
        deleteVita(vita.id)
            .then(() => {
                history("/vitas");
            });
    }

    return (
        <article className="container">
            <div className="vitadetail__stack">
                <div key={`vita--${vita?.id}`} className="vita">
                    {
                        Object.values(vita).length && (
                            <section className="vita">
                                <div className="vita__text">
                                    <h1>{vita.applicant.user.first_name}{" "}{vita.applicant.user.last_name}</h1>
                                    <ul><h3>{vita.mission.job_type.label}</h3></ul>
                                    <ul><h4>About Me:</h4>{" "}{vita.mission.mission_text}</ul>
                                    <ul>{vita.applicant.address}</ul>
                                    <ul><h4>Contact:</h4>{" "}{vita.applicant.user.email}</ul>
                                    <ul>{vita.applicant.address}</ul>
                                    <ul>{vita.applicant.city}{" "}{vita.applicant.state}.{" "}{vita?.applicant.zipcode}</ul>
                                    <ul>{vita.applicant.phone}</ul>
                                    <br></br>
                                </div>
                            </section>

                        )
                    }
                    <article className="experience__wrapper">
                        <h1>Experiences</h1>
                        <div className="experience__stack">
                            {experiences.map((experience) => {
                                return (
                                    <div key={`experience--${experience.id}`} className="experience">
                                        <section className="experience">
                                            <div className="experience__text">
                                                {experience.company}
                                                <ul>Title:{" "}{experience.job_title}</ul>
                                                <ul>Job Type:{" "}{experience.job_type.label}</ul>
                                                <ul>From:{" "}{experience.start_yr} to {experience.end_yr}</ul>
                                                <ul>Duties:{" "}{experience.duties}</ul>
                                                <br></br>
                                            </div>
                                        </section>
                                    </div>
                                );
                            })}
                        </div>
                    </article>

                    <div>
                        <ul><h3>Education</h3></ul>
                    </div>
                    <div className="education__stack">
                        {educations.map((education) => {
                            return (
                                <div key={`education--${education.id}`} className="education">
                                    <section className="education">
                                        <div className="description__text">
                                            <ul><b>{education.school_name}</b></ul>
                                            <ul>{education.city}{" "}{education.state}.</ul>
                                            <ul>Degree:{" "}{education.diploma}</ul>
                                            <ul>Year Graduated:{" "}{education.grad_year}</ul>
                                            <br></br>
                                        </div>
                                    </section>
                                    <div className="educationvita__stack">
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </article>
    );
};