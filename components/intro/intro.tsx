import ladyIntroImg from "@/public/img/lady-intro.png";
import Image from "next/image";
import Container from "../container/container";
const Intro = () => {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-2 justify-center">
          <div className="intro-text self-center">
            <h1 className="text-5xl font-extrabold leading-[55px] mb-3">
              Increase Your Customers Loyalty and Satisfaction
            </h1>
            <p className="text-1xl font-medium mb-8">
              We help businesses like yours earn more customers, standout from
              competitors, make more money
            </p>
            <button className="font-bold bg-[#20B15A] text-white py-4 px-7 rounded-2xl">
              Get Started
            </button>
          </div>
          <div className="intro-img">
            <Image src={ladyIntroImg} alt="lady intro image" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Intro;
