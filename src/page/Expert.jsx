import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const Expert = () => {
  return (
    <>
      <section className="lessons">
        <div className="container">
          <div className="lessons__block">
            <div>
              <h1>Lorem ipsum dolor sit.</h1>
              <button>Lorem, ipsum dolor.</button>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="lessons__wrap">
          <NavLink to="/expert/all">
            <button>All</button>
          </NavLink>
          <NavLink to="/expert/aritmetic">
            <button>Aritmetic</button>
          </NavLink>
          <NavLink to="/expert/algebra">
            <button>Algebra</button>
          </NavLink>
          <NavLink to="/expert/geometry">
            <button>Geometry</button>
          </NavLink>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Expert;
