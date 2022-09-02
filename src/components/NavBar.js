import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="nav-wrapper relative">
      <div>
        <nav className="nav-primary">
          <NavLink to="/" exact className="nav-link logo">
            Josef <span className="logo-bold">Dosoudil</span>
          </NavLink>
          <div className="links-wrapper">
            <NavLink
              to="/post"
              activeClassName="nav-link-active"
              className="nav-link"
            >
              Blog Posts
            </NavLink>
            <NavLink
              to="/project"
              activeClassName="nav-link-active"
              className="nav-link"
            >
              Projects
            </NavLink>
            <NavLink
              to="/about"
              activeClassName="nav-link-active"
              className="nav-link"
            >
              About Me!
            </NavLink>
          </div>
        </nav>
        <div className="icon-wrapper">
          <SocialIcon
            url="https://twitter.com/kapehe_ok"
            className=""
            target="_blank"
            fgColor="#fff"
            bgColor="#000"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://youtube.com/c/kapehe"
            className=""
            target="_blank"
            fgColor="#fff"
            bgColor="#000"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://linkedin.com/in/kapehe"
            className=""
            target="_blank"
            fgColor="#fff"
            bgColor="#000"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
