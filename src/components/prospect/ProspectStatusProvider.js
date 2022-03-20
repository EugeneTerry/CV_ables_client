import React, { useState } from "react";

export const ProspectStatusContext = React.createContext();

export const ProspectStatusProvider = (props) => {
  const [prospectstatuss, setProspectStatus] = useState([]);

  const getProspectStatus = () => {
    return fetch("http://localhost:8000/prospectstatuss", {
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    })
      .then((response) => response.json())
      .then(setProspectStatus);
  };

  return (
    <ProspectStatusContext.Provider value={{ prospectstatuss, getProspectStatus }}>
      {props.children}
    </ProspectStatusContext.Provider>
  );
};