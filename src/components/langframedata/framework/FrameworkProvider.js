import React, { useState } from "react";

export const FrameworkContext = React.createContext();

export const FrameworkProvider = (props) => {
  const [frameworks, setFramework] = useState([]);

  const getFrameworks = () => {
    return fetch("http://localhost:8000/languages", {
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    })
      .then((response) => response.json())
      .then(setFramework);
  };

  return (
    <FrameworkContext.Provider value={{ frameworks, getFrameworks }}>
      {props.children}
    </FrameworkContext.Provider>
  );
};