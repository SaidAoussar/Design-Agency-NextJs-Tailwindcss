import googleIcon from "@/public/img/partners/google-icon.svg";
import trelloIcon from "@/public/img/partners/trello-icon.svg";
import notionIcon from "@/public/img/partners/notion-icon.svg";
import mondayIcon from "@/public/img/partners/monday-icon.svg";
import slackIcon from "@/public/img/partners/slack-icon.svg";

import Image from "next/image";

const Partners = () => {
  return (
    <div className="bg-[#F8FFF9] flex justify-evenly py-8">
      <Image src={googleIcon} alt="google icon" />
      <Image src={trelloIcon} alt="trello icon" />
      <Image src={mondayIcon} alt="monday icon" />
      <Image src={notionIcon} alt="notion icon" />
      <Image src={slackIcon} alt="slack icon" />
    </div>
  );
};

export default Partners;
