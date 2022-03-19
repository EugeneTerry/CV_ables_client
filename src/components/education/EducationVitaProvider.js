import React,{useState} from "react";

export const EducationVitaContext = React.createContext();

export const EducationVitaProvider = (props) => {
  const [educationvitas, setEducationVita] = useState([]);

  const getEducationVitas = () => {
    return fetch("http://localhost:8000/educationvitas", {
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    })
      .then((response) => response.json())
      .then(setEducationVita);
  };

  const addEducationVita = newEducationVita => {
    return fetch("http://localhost:8000/educationvitas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${localStorage.getItem("lu_token")}`,
        },
        body: JSON.stringify(newEducationVita)
    })
        .then(getEducationVitas)
    };

  const getEducationVitaById = (id) => {
    return fetch(`http://localhost:8000/educationvitas/${id}`, {
        headers: {
            Authorization: `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(res => res.json())
  }

  const deleteEducationVita = (educationvitaID) => {
    return fetch(`http://localhost:8000/educationvitas/${educationvitaID}`, {
      method: "DELETE",
      headers: {
          Authorization: `Token ${localStorage.getItem("lu_token")}`
      }
    })
    .then(getEducationVitas)
  }

  const editEducationVita = (educationvita) => {
    return fetch(`http://localhost:8000/educationvitas/${educationvita.id}`, {
      method: 'PUT',
      headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
      body: JSON.stringify(educationvita)
    })
      .then(getEducationVitas)
      }  

  return (
    <EducationVitaContext.Provider value={{ 
      educationvitas,
      addEducationVita,
      getEducationVitas,
      editEducationVita,
      deleteEducationVita,
      getEducationVitaById
      }}>
      {props.children}
    </EducationVitaContext.Provider>
  );
}; 