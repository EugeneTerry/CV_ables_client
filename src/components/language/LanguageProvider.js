import React, { useState } from "react";

export const LanguageContext = React.createContext();

export const LanguageProvider = (props) => {
  const [languages, setLanguage] = useState([]);

  const getLanguages = () => {
    return fetch("http://localhost:8000/languages", {
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