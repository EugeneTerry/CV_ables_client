import React from "react"
import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const history = useNavigate()
    return (
        
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="navbar__link" to="/profile">
                    <h3>Profile</h3>
                </Link>  
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/educations">
                    <h3>Education</h3>
                </Link>
            </li>
            <li className="navbar__item">
                
                <Link className="navbar__link" to="/experiences">
                    <h3>Experience</h3>
                </Link>
            </li>
            <li className="navbar__item">
                
                <Link className="navbar__link" to="/vitas">
                    <h3>Vitas</h3>
                </Link>
            </li>
            <li className="navbar__item">
                
                <Link className="navbar__link" to="/prospects">
                    <h3>Prospects</h3>
                </Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/missions">
                    <h3>Missions</h3>
                </Link>
            </li>
            {
                (localStorage.getItem("lu_token") !== null) ?
                    <li className="nav-item">
                        <button className="nav-linkLink"
                            onClick={() => {
                                localStorage.removeItem("lu_token")
                                history({ pathname: "login" })
                            }}
                        ><h3>Logout</h3></button>
                    </li>:
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    )
}
