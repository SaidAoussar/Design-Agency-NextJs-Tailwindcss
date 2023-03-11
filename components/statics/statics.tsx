import Image from "next/image";
import projectPlanIcon from "@/public/img/statics/project-plan.svg";
import ratingIcon from "@/public/img/statics/rating.svg";
import raiseIcon from "@/public/img/statics/raise.svg";
import timelineIcon from "@/public/img/statics/timeline.svg";

import Container from "../container/container";
const Statics = () => {
  return (
    <section className="bg-[#FAFFFB] py-16">
      <Container>
        <div className="grid grid-cols-4 px-28">
          <div className="text-center p-9 border-r border-[#C4C4C4]">
            <Image
              className="inline-block mb-3"
              src={projectPlanIcon}
              alt="project plan icon"
            />
            <h2 className="font-semibold mb-5">Completed Projects</h2>
            <p className="text-[#20B15A] text-4xl font-extrabold">100 +</p>
          </div>
          <div className="text-center py-9 px-6 border-r border-[#C4C4C4]">
            <Image
              className="inline-block mb-3"
              src={ratingIcon}
              alt="project plan icon"
            />
            <h2 className="font-semibold mb-5">Customers Satisfaction</h2>
            <p className="text-[#20B15A] text-4xl font-extrabold">20 %</p>
          </div>
          <div className="text-center p-9 border-r border-[#C4C4C4]">
            <Image
              className="inline-block mb-3"
              src={raiseIcon}
              alt="project plan icon"
            />
            <h2 className="font-semibold mb-5">Raised By Client</h2>
            <p className="text-[#20B15A] text-4xl font-extrabold">$10M</p>
          </div>
          <div className="text-center p-9">
            <Image
              className="inline-block mb-3"
              src={timelineIcon}
              alt="project plan icon"
            />
            <h2 className="font-semibold mb-5">Years In Business</h2>
            <p className="text-[#20B15A] text-4xl font-extrabold">2 yrs</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Statics;
