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

  return (
    <ApplicantContext.Provider value={{ currentApplicant, getCurrentApplicant}}>
      {props.children}
    </ApplicantContext.Provider>
  );
};