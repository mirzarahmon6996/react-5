import React from "react";
import "./Header.scss";
import { NavLink, useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  return (
    <>
      <header
        style={
          location.pathname === "/"
            ? { background: "yellow" }
            : { background: "white" }
        }
      >
        <div className="container">
          <div className="header__block">
            <h1>
              <NavLink
                className={({ isActive }) => (isActive ? "black" : "offActive")}
                to="/"
              >
                CameraMath
              </NavLink>
            </h1>
            <div className="header__center">
              <ul>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active" : "offActive"
                    }
                    to="/download"
                  >
                    Download
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active" : "offActive"
                    }
                    to="/Expert"
                  >
                    Expert
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active" : "offActive"
                    }
                    to="/Lessons"
                  >
                    Lessons
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active" : "offActive"
                    }
                    to="/Premium"
                  >
                    Premium
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="header__right">
              <select className="header__select">
                <option value="En">En</option>
                <option value="Ru">Ru</option>
                <option value="Uz">Uz</option>
              </select>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
