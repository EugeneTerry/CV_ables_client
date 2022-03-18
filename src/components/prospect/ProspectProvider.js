import React,{useState} from "react";

export const ProspectContext = React.createContext();

export const ProspectProvider = (props) => {
  const [prospects, setProspect] = useState([]);

  const getProspects = () => {
    return fetch("http://localhost:8000/prospects", {
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    })
      .then((response) => response.json())
      .then(setProspect);
  };

  const addProspect = newProspect => {
    return fetch("http://localhost:8000/prospects", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${localStorage.getItem("lu_token")}`,
        },
        body: JSON.stringify(newProspect)
    })
        .then(getProspects)
    };

  const getProspectById = (id) => {
    return fetch(`http://localhost:8000/prospects/${id}`, {
        headers: {
            Authorization: `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(res => res.json())
  }

  const deleteProspect = (prospectID) => {
    return fetch(`http://localhost:8000/prospects/${prospectID}`, {
      method: "DELETE",
      headers: {
          Authorization: `Token ${localStorage.getItem("lu_token")}`
      }
    })
    .then(getProspects)
  }

  const editProspect = (prospect) => {
    return fetch(`http://localhost:8000/prospects/${prospect.id}`, {
      method: 'PUT',
      headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
      body: JSON.stringify(prospect)
    })
      .then(getProspects)
      }  

  return (
    <ProspectContext.Provider value={{ 
      prospects,
      addProspect,
      getProspects,
      editProspect,
      deleteProspect,
      getProspectById
      }}>
      {props.children}
    </ProspectContext.Provider>
  );
}; 