import React from "react";
import "../App.css";
import logo from "../lib/utils/Img/logo.png";
import { Stack, Button } from "@mui/material";
import { Link, NavLink, Outlet } from "react-router-dom";

const NavBar: React.FC = () => {
  const hoverStyle =
    "hover:opacity-60 text-sm font-medium ease-soft-spring duration-700 font-monserrat";
  const clickStyle =
    "font-medium text-sky-600 text-sm ease-soft-spring duration-500 font-monserrat";
  return (
    <nav className="w-full bg-black p-4 flex flex-col md:flex-row justify-between items-center h-auto md:h-20">
      <section className="w-full md:w-1/4 flex items-center justify-center md:justify-start mb-4 md:mb-0">
        <img className="pl-0 md:pl-12" src={logo} alt="Loading..." />
      </section>
      <section className="w-full md:w-2/5 flex flex-col md:flex-row items-center justify-center md:justify-between mb-4 md:mb-0">
        <ul className="flex flex-col md:flex-row justify-center md:justify-between w-full p-2">
          <li className="mb-2 md:mb-0">
            <NavLink
              className={({ isActive }) => (isActive ? clickStyle : hoverStyle)}
              to={"/"}
            >
              Main
            </NavLink>
          </li>
          <li className="mb-2 md:mb-0">
            <NavLink
              className={({ isActive }) => (isActive ? clickStyle : hoverStyle)}
              to={"/projects"}
            >
              Projects
            </NavLink>
          </li>
          <li className="mb-2 md:mb-0">
            <NavLink
              className={({ isActive }) => (isActive ? clickStyle : hoverStyle)}
              to={"/drawer"}
            >
              Pricing
            </NavLink>
          </li>
          <li className="mb-2 md:mb-0">
            <NavLink
              className={({ isActive }) => (isActive ? clickStyle : hoverStyle)}
              to={"/contact"}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </section>

      <section className="w-full md:w-1/4 flex items-center justify-center">
        <Stack spacing={2} direction={"row"} className="w-full justify-center md:justify-end">
          <Button variant="contained" color="info" size="large">
            <Link to={"/register"} className="text-white">
              Sign Up
            </Link>
          </Button>
          <Button variant="outlined" size="large">
            <Link to={"/login"} className="text-white">
              Log In
            </Link>
          </Button>
        </Stack>
      </section>

      <Outlet />
    </nav>
  );
};

export default NavBar;
