import React,{useState} from "react";

export const DescriptionContext = React.createContext();

export const DescriptionProvider = (props) => {
  const [descriptions, setDescription] = useState([]);

  const getDescriptions = () => {
    return fetch("http://localhost:8000/descriptions", {
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    })
      .then((response) => response.json())
      .then(setDescription);
  };

  const addDescription = newDescription => {
    return fetch("http://localhost:8000/descriptions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${localStorage.getItem("lu_token")}`,
        },
        body: JSON.stringify(newDescription)
    })
        .then(getDescriptions)
    };

  const getDescriptionById = (id) => {
    return fetch(`http://localhost:8000/descriptions/${id}`, {
        headers: {
            Authorization: `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(res => res.json())
  }

  const deleteDescription = (descriptionID) => {
    return fetch(`http://localhost:8000/descriptions/${descriptionID}`, {
      method: "DELETE",
      headers: {
          Authorization: `Token ${localStorage.getItem("lu_token")}`
      }
    })
    .then(getDescriptions)
  }

  const editDescription = (description) => {
    return fetch(`http://localhost:8000/descriptions/${description.id}`, {
      method: 'PUT',
      headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
      body: JSON.stringify(description)
    })
      .then(getDescriptions)
      }  

  return (
    <DescriptionContext.Provider value={{ 
      descriptions,
      addDescription,
      getDescriptions,
      editDescription,
      deleteDescription,
      getDescriptionById
      }}>
      {props.children}
    </DescriptionContext.Provider>
  );
}; 