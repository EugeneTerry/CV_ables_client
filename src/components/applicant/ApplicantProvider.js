import React, { useState } from "react";

export const ApplicantContext = React.createContext();

export const ApplicantProvider = (props) => {
  const [currentApplicant, setCurrentApplicant] = useState({});

  const getCurrentApplicant = () => {
    return fetch("http://localhost:8000/profile", {
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    })
      .then((response) => response.json())
      .then(setCurrentApplicant);
  };

  const editCurrentApplicant = (currentApplicant) => {
    return fetch(`http://localhost:8000/profile/${currentApplicant.id}`, {
      method: 'PUT',
      headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
      body: JSON.stringify(currentApplicant)
    })
      .then(getCurrentApplicant)
      } 

  return (
    <ApplicantContext.Provider value={{ currentApplicant, getCurrentApplicant, editCurrentApplicant}}>
      {props.children}
    </ApplicantContext.Provider>
  );
};