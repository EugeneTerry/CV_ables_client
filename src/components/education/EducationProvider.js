import React,{useState} from "react";

export const EducationContext = React.createContext();

export const EducationProvider = (props) => {
  const [educations, setEducation] = useState([]);

  const getEducations = () => {
    return fetch(`${process.env.REACT_APP_DATABASE_URL}/educations`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    })
      .then((response) => response.json())
      .then(setEducation);
  };

  const addEducation = newEducation => {
    return fetch(`${process.env.REACT_APP_DATABASE_URL}/educations`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${localStorage.getItem("lu_token")}`,
        },
        body: JSON.stringify(newEducation)
    })
        .then(getEducations)
    };

  const getEducationById = (id) => {
    return fetch(`${process.env.REACT_APP_DATABASE_URL}/educations/${id}`, {
        headers: {
            Authorization: `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(res => res.json())
  }

  const deleteEducation = (educationID) => {
    return fetch(`${process.env.REACT_APP_DATABASE_URL}/educations/${educationID}`, {
      method: "DELETE",
      headers: {
          Authorization: `Token ${localStorage.getItem("lu_token")}`
      }
    })
    .then(getEducations)
  }

  const editEducation = (education) => {
    return fetch(`${process.env.REACT_APP_DATABASE_URL}/educations/${education.id}`, {
      method: 'PUT',
      headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
      body: JSON.stringify(education)
    })
      .then(getEducations)
      }  

  return (
    <EducationContext.Provider value={{ 
      educations,
      addEducation,
      getEducations,
      editEducation,
      deleteEducation,
      getEducationById
      }}>
      {props.children}
    </EducationContext.Provider>
  );
}; 