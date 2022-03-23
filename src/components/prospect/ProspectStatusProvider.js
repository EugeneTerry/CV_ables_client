import React, { useState } from "react";

export const ProspectStatusContext = React.createContext();

export const ProspectStatusProvider = (props) => {
  const [prospectstatuss, setProspectStatus] = useState([]);

  const getProspectStatus = () => {
    return fetch(`${process.env.REACT_APP_DATABASE_URL}/prospectstatuss`, {
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