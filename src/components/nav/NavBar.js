import React from "react"
import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const history = useNavigate()
    return (
        
        <ul className="navbar">
            <li className="navbar__item">
                
                <Link className="navbar__link" to="/games">
                    <h3>Vitas</h3>
                </Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/events">
                    <h3>Languages</h3>
                </Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/profile">
                    <h3>Profile</h3>
                </Link>
                

            </li>
            <li className="navbar__item">
                <h3>Navigation Link</h3>
            </li>
            {
                (localStorage.getItem("lu_token") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("lu_token")
                                history.push({ pathname: "/" })
                            }}
                        ><h3>Logout</h3></button>
                    </li> :
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
