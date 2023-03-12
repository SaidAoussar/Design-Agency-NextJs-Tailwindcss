import Image from "next/image";
import activityIcon from "@/public/img/services/activity.svg";
import heartIcon from "@/public/img/services/heart.svg";
import workIcon from "@/public/img/services/work.svg";

import rightArrowIcon from "@/public/img/services/right-arrow.svg";
import Container from "../container/container";

const Services = () => {
  return (
    <section className="py-20">
      <Container>
        <h1 className="text-[#20B15A] mb-3 uppercase">What we do</h1>
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-7 md:w-[495px]">
          We provide the Perfect Solution to your business growth
        </p>
        <div className="services-wrapper md:flex md:justify-between">
          <article className="py-10 px-7 text-center border-b border-b-gray-400 md:text-left md:border-none">
            <div className="bg-[#D7F5DC] inline-block p-6 mb-3 rounded-2xl">
              <Image
                src={activityIcon}
                alt="activity icon"
                height="30"
                width="30"
              />
            </div>
            <h2 className="text-xl font-semibold mb-5">Grow Your Business</h2>
            <p className="text-sm mb-8">
              We help identify the best ways to improve your business
            </p>
            <button className="inline-flex items-center gap-2 px-3 py-2">
              Learn More
              <Image src={rightArrowIcon} alt="right arrow icon" />
            </button>
          </article>
          <article className="py-10 px-7 text-center border-b border-b-gray-400 md:text-left md:border-none">
            <div className="bg-[#D7F5DC] inline-block p-6 mb-3 rounded-2xl">
              <Image src={heartIcon} alt="heart icon" height="30" width="30" />
            </div>
            <h2 className="text-xl font-semibold mb-5">
              Improve brand loyalty
            </h2>
            <p className="text-sm mb-8">
              We help identify the best ways to improve your business
            </p>
            <button className="inline-flex items-center gap-2 px-3 py-2">
              Learn More
              <Image src={rightArrowIcon} alt="right arrow icon" />
            </button>
          </article>
          <article className="py-10 px-7 text-center md:text-left">
            <div className="bg-[#D7F5DC] inline-block p-6 mb-3 rounded-2xl">
              <Image src={workIcon} alt="work icon" height="30" width="30" />
            </div>
            <h2 className="text-xl font-semibold mb-5">
              Improve Business Model
            </h2>
            <p className="text-sm mb-8">
              We help identify the best ways to improve your business
            </p>
            <button className="inline-flex items-center gap-2 px-3 py-2">
              Learn More
              <Image src={rightArrowIcon} alt="right arrow icon" />
            </button>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default Services;
