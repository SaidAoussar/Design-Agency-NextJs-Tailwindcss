"use client";
import Image from "next/image";
import googleIcon from "@/public/img/partners/google-icon.svg";
import trelloIcon from "@/public/img/partners/trello-icon.svg";
import notionIcon from "@/public/img/partners/notion-icon.svg";
import mondayIcon from "@/public/img/partners/monday-icon.svg";
import slackIcon from "@/public/img/partners/slack-icon.svg";

const Partners = () => {
  return (
    <>
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <Image src={googleIcon} alt="google icon" />
          </div>
          <div className="slide">
            <Image src={trelloIcon} alt="trello icon" />
          </div>
          <div className="slide">
            <Image src={mondayIcon} alt="monday icon" />
          </div>
          <div className="slide">
            <Image src={notionIcon} alt="notion icon" />
          </div>
          <div className="slide">
            <Image src={slackIcon} alt="slack icon" />
          </div>
          <div className="slide">
            <Image src={googleIcon} alt="google icon" />
          </div>
          <div className="slide">
            <Image src={trelloIcon} alt="trello icon" />
          </div>
          <div className="slide">
            <Image src={mondayIcon} alt="monday icon" />
          </div>
          <div className="slide">
            <Image src={notionIcon} alt="notion icon" />
          </div>
          <div className="slide">
            <Image src={slackIcon} alt="slack icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
