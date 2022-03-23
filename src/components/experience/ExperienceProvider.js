import React,{useState} from "react";

export const ExperienceContext = React.createContext();

export const ExperienceProvider = (props) => {
  const [experiences, setExperience] = useState([]);

  const getExperiences = () => {
    return fetch(`${process.env.REACT_APP_DATABASE_URL}/experiences`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    })
      .then((response) => response.json())
      .then(setExperience);
  };

  const addExperience = newExperience => {
    return fetch(`${process.env.REACT_APP_DATABASE_URL}/experiences`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${localStorage.getItem("lu_token")}`,
        },
        body: JSON.stringify(newExperience)
    })
        .then(getExperiences)
    };

  const getExperienceById = (id) => {
    return fetch(`${process.env.REACT_APP_DATABASE_URL}/experiences/${id}`, {
        headers: {
            Authorization: `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(res => res.json())
  }

  const deleteExperience = (experienceID) => {
    return fetch(`${process.env.REACT_APP_DATABASE_URL}/experiences/${experienceID}`, {
      method: "DELETE",
      headers: {
          Authorization: `Token ${localStorage.getItem("lu_token")}`
      }
    })
    .then(getExperiences)
  }

  const editExperience = (experience) => {
    return fetch(`${process.env.REACT_APP_DATABASE_URL}/experiences/${experience.id}`, {
      method: 'PUT',
      headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
      body: JSON.stringify(experience)
    })
      .then(getExperiences)
      }  

  return (
    <ExperienceContext.Provider value={{ 
      experiences,
      addExperience,
      getExperiences,
      editExperience,
      deleteExperience,
      getExperienceById
      }}>
      {props.children}
    </ExperienceContext.Provider>
  );
}; 