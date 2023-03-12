import Link from "next/link";
import Image from "next/image";
import Container from "../container/container";
import facebookIcon from "@/public/img/footer/facebook.svg";
import twitterIcon from "@/public/img/footer/twitter.svg";
import linkedinIcon from "@/public/img/footer/linkedin.svg";
import instagramIcon from "@/public/img/footer/instagram.svg";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="bg-[#00CA72] pt-20 pb-8">
      <Container>
        <div className="footer-container mb-16">
          <div className="area">
            <h1 className="text-4xl font-bold ml-3 mb-8">Web Logo</h1>
            <p className="text-sm w-[316px] mb-5">
              Some footer text about the Agency. Just a little description to
              help people understand you better
            </p>
            <div className="flex gap-3">
              <span className="flex justify-center items-center bg-[#20B15A] w-9 h-9 rounded-full">
                <Image
                  src={facebookIcon}
                  alt="facebook icon"
                  className="inline-block"
                />
              </span>
              <span className="flex justify-center items-center bg-[#20B15A] w-9 h-9 rounded-full">
                <Image src={twitterIcon} alt="twitter icon" />
              </span>
              <span className="flex justify-center items-center bg-[#20B15A] w-9 h-9 rounded-full">
                <Image src={linkedinIcon} alt="linkedin icon" />
              </span>
              <span className="flex justify-center items-center bg-[#20B15A] w-9 h-9 rounded-full">
                <Image src={instagramIcon} alt="instagram icon" />
              </span>
            </div>
          </div>
          <div className="area1">
            <h2 className="text-xl font-semibold mb-6">Quick Links</h2>
            <ul>
              <li className="mb-7">
                <Link href="#services">Services</Link>
              </li>
              <li className="mb-7">
                <Link href="#portfolio">Portfolio</Link>
              </li>
              <li className="mb-7">
                <Link href="#about-us">About Us</Link>
              </li>
              <li>
                <Link href="#contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="area2">
            <h2 className="text-xl font-semibold mb-6">Adress</h2>
            <p className="text-lg font-medium">
              Design Agency Head Office.
              <br />
              Airport Road
              <br />
              United Arab Emirate
            </p>
          </div>
        </div>
        <p className="text-lg font-medium">Copyright Design Agency 2022</p>
      </Container>
    </footer>
  );
};

export default Footer;
