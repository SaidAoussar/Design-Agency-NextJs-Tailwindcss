import ladyIntroImg from "@/public/img/lady-intro.png";
import Image from "next/image";
import Container from "../container/container";
const Intro = () => {
  return (
    <section className="mt-[64px] pt-10 mb-8 md:mb-0">
      <Container>
        <div className="lg:grid lg:grid-cols-2 lg:justify-center">
          <div className="intro-text text-center md:mb-4 lg:text-left lg:mb-0 lg:self-center">
            <h1 className="text-3xl font-bold mb-3 lg:text-5xl lg:font-extrabold lg:leading-[55px] lg:mb-3">
              Increase Your Customers Loyalty and Satisfaction
            </h1>
            <p className="mb-6 lg:text-xl lg:font-medium lg:mb-8">
              We help businesses like yours earn more customers, standout from
              competitors, make more money
            </p>
            <button className="bg-[#20B15A] text-white font-medium py-3 px-5 rounded-xl lg:font-bold lg:py-4 lg:px-7 lg:rounded-2xl">
              Get Started
            </button>
          </div>
          <div className="intro-img hidden md:text-center md:block">
            <Image
              className="md:inline-block md:max-w-[68%] md:ml-32 lg:block lg:max-w-full lg:ml-0"
              src={ladyIntroImg}
              alt="lady intro image"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Intro;
