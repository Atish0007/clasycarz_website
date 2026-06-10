import { useEffect, useState } from "react";
import { Link, NavLink } from 'react-router-dom'
import '../assets/css/header.css'   // separate CSS import
import logo from "../assets/images/logo.png";

const Header = () => {

    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {

        document.getElementById(id).scrollIntoView({
            behavior: "smooth"
        });

        // navbar close after click
        const navbarCollapse = document.getElementById("nav");

        if (navbarCollapse.classList.contains("show")) {

            // toggler button select
            const toggler = document.querySelector(".navbar-toggler");

            // auto click toggler
            toggler.click();
        }

    };

    // Navbar close open
    const toggleMenu = () => {
        setOpen(!open);
    };
    const closeMenu = () => {
        setOpen(false);

        const navbarCollapse = document.getElementById("navbarNav");
        if (navbarCollapse?.classList.contains("show")) {
            document.querySelector(".navbar-toggler")?.click();
        }
    };



    return (
        <nav className={`navbar navbar-expand-lg fixed-top navbar-custom ${scrolled ? "scrolled" : ""}`}>
            <div className="container">
                <Link className="navbar-brand navbar-brand-custom text-white" to="/">
                    <img src={logo} className="logo" width="26" height="auto" alt="ClasyCarz" />
                    CLASY<span className="gold-text">CARZ</span>
                </Link>
                {/* <button
                    className="navbar-toggler bg-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <button
                    className={`navbar-toggler custom-toggler ${open ? "active" : ""}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded={open}
                    aria-label="Toggle navigation"
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) => `nav-link nav-link-custom ${isActive ? 'nav-link-active' : 'text-white-50'}`}
                                to="/"
                                onClick={closeMenu}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) => `nav-link nav-link-custom ${isActive ? 'nav-link-active' : 'text-white-50'}`}
                                to="/about"
                                onClick={closeMenu}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) => `nav-link nav-link-custom ${isActive ? 'nav-link-active' : 'text-white-50'}`}
                                to="/services"
                                onClick={closeMenu}
                            >
                                Services
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) => `nav-link nav-link-custom ${isActive ? 'nav-link-active' : 'text-white-50'}`}
                                to="/contact"
                                onClick={closeMenu}
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;