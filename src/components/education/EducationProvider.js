import React,{useState} from "react";

export const EducationContext = React.createContext();

export const EducationProvider = (props) => {
  const [educations, setEducation] = useState([]);

  const getEducations = () => {
    return fetch("http://localhost:8000/educations", {
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    })
      .then((response) => response.json())
      .then(setEducation);
  };

  const addEducation = newEducation => {
    return fetch("http://localhost:8000/educations", {
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
    return fetch(`http://localhost:8000/educations/${id}`, {
        headers: {
            Authorization: `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(res => res.json())
  }

  const deleteEducation = (educationID) => {
    return fetch(`http://localhost:8000/educations/${educationID}`, {
      method: "DELETE",
      headers: {
          Authorization: `Token ${localStorage.getItem("lu_token")}`
      }
    })
    .then(getEducations)
  }

  const editEducation = (education) => {
    return fetch(`http://localhost:8000/educations/${education.id}`, {
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