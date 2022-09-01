import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="">
      <div className="">
        <nav className="">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
          >
            JO DO -+-
          </NavLink>
          <NavLink
            to="/post"
            className=""
            activeClassName=""
          >
            Blog Posts -+-
          </NavLink>
          <NavLink
            to="/project"
            className=""
            activeClassName=""
          >
            Projects -+-
          </NavLink>
          <NavLink
            to="/about"
            className=""
            activeClassName=""
          >
            About Me!-+-
          </NavLink>
        </nav>
        <div className="">
          <SocialIcon
            url="https://twitter.com/kapehe_ok"
            className=""
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://youtube.com/c/kapehe"
            className=""
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://linkedin.com/in/kapehe"
            className=""
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
