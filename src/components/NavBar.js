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
          <div
            className={
              navExpanded ? "links-wrapper expanded" : "links-wrapper "
            }
          >
            <NavLink
              to="/post"
              activeClassName="nav-link-active"
              className="nav-link"
            >
              Projekty
            </NavLink>
            <NavLink
              to="/project"
              activeClassName="nav-link-active"
              className="nav-link"
         
            >
              Užitečné odkazy
            </NavLink>
            <NavLink
              to="/about"
              activeClassName="nav-link-active"
              className="nav-link"
    
            >
              O mě
            </NavLink>
          </div>
          <button
            className="hamburger"
            onClick={() => {
              setNavExpanded(!navExpanded);
            }}
          >
            {/* icon from heroicons.com */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
            
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
                fill="black"
              />
            </svg>
          </button>
        </nav>
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
