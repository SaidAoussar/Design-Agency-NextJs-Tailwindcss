import Image from "next/image";
import menuIcon from "@/public/img/menu-icon.svg";
import Container from "../container/container";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="py-5">
      <Container>
        <div className="flex justify-between items-center">
          <div className="logo">
            <h1>
              Design<span className="text-[#F55F1D]">AGENCY</span>
            </h1>
          </div>
          <div className="menu-icon md:hidden">
            <Image src={menuIcon} alt="menu icon" />
          </div>
          <ul className="links hidden md:flex md:items-center md:gap-6 lg:gap-10">
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
