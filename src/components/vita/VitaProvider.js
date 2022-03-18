import React,{useState} from "react";

export const VitaContext = React.createContext();

export const VitaProvider = (props) => {
  const [vitas, setVita] = useState([]);

  const getVitas = () => {
    return fetch("http://localhost:8000/vitas", {
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    })
      .then((response) => response.json())
      .then(setVita);
  };

  const addVita = newVita => {
    return fetch("http://localhost:8000/vitas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${localStorage.getItem("lu_token")}`,
        },
        body: JSON.stringify(newVita)
    })
        .then(getVitas)
    };

  const getVitaById = (id) => {
    return fetch(`http://localhost:8000/vitas/${id}`, {
        headers: {
            Authorization: `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(res => res.json())
  }

  const deleteVita = (vitaID) => {
    return fetch(`http://localhost:8000/vitas/${vitaID}`, {
      method: "DELETE",
      headers: {
          Authorization: `Token ${localStorage.getItem("lu_token")}`
      }
    })
    .then(getVitas)
  }

  const editVita = (vita) => {
    return fetch(`http://localhost:8000/vitas/${vita.id}`, {
      method: 'PUT',
      headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
      body: JSON.stringify(vita)
    })
      .then(getVitas)
      }  

  return (
    <VitaContext.Provider value={{ 
      vitas,
      addVita,
      getVitas,
      editVita,
      deleteVita,
      getVitaById
      }}>
      {props.children}
    </VitaContext.Provider>
  );
}; 