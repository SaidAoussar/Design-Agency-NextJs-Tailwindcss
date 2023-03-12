"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import menuIcon from "@/public/img/menu-icon.svg";
import Container from "../container/container";
import Link from "next/link";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState("");

  useEffect(() => {
    console.log(openMenu);
  }, [openMenu]);

  const showMenu = () => {
    if (openMenu !== "open") {
      setOpenMenu("open");
    } else {
      setOpenMenu("close");
    }
  };
  return (
    <nav className="bg-[#D7F5DC] overflow-hidden fixed top-0 w-full">
      <Container>
        <div className="relative flex justify-between items-center h-[64px]">
          <div className="logo">
            <h1>
              Design<span className="text-[#F55F1D]">AGENCY</span>
            </h1>
          </div>
          <div
            className={`menu-btn-cover md:hidden ${
              openMenu === "open" && "is-active"
            }`}
            onClick={showMenu}
          >
            <div className="hamburger"></div>
          </div>
          {/*<ul className="links hidden md:flex md:items-center md:gap-6 lg:gap-10">  */}
          <ul className="links hidden  md:flex md:items-center md:gap-6 lg:gap-10">
            <li>
              <Link href="#services" className="font-bold">
                services
              </Link>
            </li>
            <li>
              <Link href="#about-us" className="font-bold">
                About us
              </Link>
            </li>
            <li>
              <Link href="#contact-us" className="font-bold">
                Contact us
              </Link>
            </li>
            <li>
              <button className="font-bold py-2 px-5 border border-[#20B15A] rounded-lg">
                Login
              </button>
            </li>
            <li>
              <button className="font-bold bg-[#20B15A] text-white py-2 px-5 rounded-lg">
                Register
              </button>
            </li>
          </ul>

          <ul
            className={`nav-mobile ${
              openMenu === "open" && "visible fade-in"
            } ${openMenu === "close" && "fade-out"} md:hidden`}
          >
            <li>
              <Link href="#services" className="font-bold">
                services
              </Link>
            </li>
            <li>
              <Link href="#about-us" className="font-bold">
                About us
              </Link>
            </li>
            <li>
              <Link href="#contact-us" className="font-bold">
                Contact us
              </Link>
            </li>
            <li>
              <button className="font-bold py-2 px-5 border border-[#20B15A] rounded-lg">
                Login
              </button>
            </li>
            <li>
              <button className="font-bold bg-[#20B15A] text-white py-2 px-5 rounded-lg">
                Register
              </button>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
