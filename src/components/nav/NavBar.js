import React from "react"
import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"
import { Navbar, Container, Nav, Button } from "react-bootstrap"

export const NavBar2 = () => {
    const history = useNavigate()
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">CV-ables</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/prospects">
                            Prospects
                        </Link>
                        {/* <Link className="nav-link" to="/profile">
                            Profile
                        </Link> */}
                        <Link className="nav-link" to="/educations">
                            Education
                        </Link>

                        <Link className="nav-link" to="/experiences">
                            Experience
                        </Link>
                        <Link className="nav-link" to="/missions">
                            Missions
                        </Link>
                        <Link className="nav-link" to="/vitas">
                            Vitas
                        </Link>
                        {
                            (localStorage.getItem("lu_token") !== null) ?
                                <Button variant="secondary"
                                    onClick={() => {
                                        localStorage.removeItem("lu_token")
                                        history({ pathname: "login" })
                                    }}>Logout</Button> :
                                <>
                                    <Link className="nav-link" to="/login">Login</Link>
                                    <Link className="nav-link" to="/register">Register</Link>
                                </>
                        }
                    </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
