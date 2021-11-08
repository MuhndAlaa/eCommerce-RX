import { NavLink } from "react-router-dom";
import "./Navbar.css"

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">
                <NavLink to="/" className="navbar-brand">React Project</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink to="/shop" className="nav-link text-dark" activeClassName="text-primary fw-bold">Shop</NavLink>
                        <NavLink to="/login" className="nav-link text-dark" activeClassName="text-primary fw-bold">Login</NavLink>
                        <NavLink to="/register" className="nav-link text-dark" activeClassName="text-primary fw-bold">Register</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}