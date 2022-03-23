import React, { useState } from "react";

export const LanguageContext = React.createContext();

export const LanguageProvider = (props) => {
  const [languages, setLanguage] = useState([]);

  const getLanguages = () => {
    return fetch(`${process.env.REACT_APP_DATABASE_URL}/languages`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    })
      .then((response) => response.json())
      .then(setLanguage);
  };

  return (
    <LanguageContext.Provider value={{ languages, getLanguages }}>
      {props.children}
    </LanguageContext.Provider>
  );
};