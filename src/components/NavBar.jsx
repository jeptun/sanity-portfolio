import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  const [navExpanded, setNavExpanded] = useState(false);

  return (
    <header className="nav-wrapper">
      <div>
        <nav className="nav-primary">
          <NavLink to="/" exact className="nav-link logo">
            Josef <span className="logo-bold">Dosoudil</span>
          </NavLink>
          <label className="hamburger" htmlFor="check">
            <input
              type="checkbox"
              id="check"
              onClick={() => {
                setNavExpanded(!navExpanded);
              }}
            />
            <span className="hamburger-item"></span>
            <span className="hamburger-item"></span>
            <span className="hamburger-item"></span>
          </label>
        </nav>
        <div
          className={navExpanded ? "links-wrapper expanded" : "links-wrapper "}
        >
          <NavLink
            to="/post"
            activeClassName="nav-link-active"
            className="nav-link"
          >
            Projekty
          </NavLink>
          <NavLink
            to="/usefulLinks"
            activeClassName="nav-link-active"
            className="nav-link"
          >
            O co se zajímám
          </NavLink>
          <button
            className="email-btn"
            onClick={() => (window.location = "mailto:pepadosoudil@seznam.cz")}
          >
            E-Mail
          </button>
        </div>
        <div className="icon-wrapper">
          <SocialIcon
            url="https://github.com/jeptun"
            target="_blank"
            fgColor="#fff"
            bgColor="#000"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/josef-dosoudil-032302225/"
            target="_blank"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.youtube.com/channel/UCo6tkMEbWTS41t2r5OKVvuA"
            target="_blank"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
