import React, { useState } from "react";

export const JobTypeContext = React.createContext();

export const JobTypeProvider = (props) => {
  const [jobtypes, setJobType] = useState([]);

  const getJobTypes = () => {
    return fetch("http://localhost:8000/jobtypes", {
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    })
      .then((response) => response.json())
      .then(setJobType);
  };

  return (
    <JobTypeContext.Provider value={{ jobtypes, getJobTypes }}>
      {props.children}
    </JobTypeContext.Provider>
  );
};