import Image from "next/image";
import Container from "../container/container";
import arrowLeftIcon from "@/public/img/testimonials/arrow-left.svg";
import arrowRightIcon from "@/public/img/testimonials/arrow-right.svg";
import avatarImg from "@/public/img/testimonials/avatar.png";

const Testimonials = () => {
  return (
    <section className="py-10">
      <Container>
        <div className="testimonials-top flex justify-between">
          <div className="mb-20">
            <h1 className="text-[#20B15A] mb-3 uppercase">Testimonials</h1>
            <p className="text-3xl font-semibold w-[495px]">
              See What our Customer Say About Us
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button className="border border-black rounded-full text-center h-[60px] w-[60px]">
              <Image
                className="inline-block w-[12px] h-[20px]"
                src={arrowLeftIcon}
                alt="arrow left image"
              />
            </button>
            <button className="bg-[#D7F5DC] rounded-full text-center h-[60px] w-[60px]">
              <Image
                className="inline-block w-[12px] h-[20px]"
                src={arrowRightIcon}
                alt="arrow right image"
              />
            </button>
          </div>
        </div>
        <div className="testimonials-content">
          <article className="inline-block w-[470px] p-[40px] mr-5 rounded-2xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            <p className="text-sm mb-6">
              Thank You for your service. I am very pleased with the result. I
              have seen exponencial growth in my business and its all thanks to
              your amazing service
            </p>
            <div className="flex gap-3">
              <div className="avatar bg-[#e6e4ff] inline-block bg-[url('../../public/img/testimonials/avatar.png')] bg-no-repeat bg-cover bg-center h-16 w-16 rounded-full"></div>
              <div className="self-center">
                <h4 className="text-xl font-semibold">Emily Stones</h4>
                <p>CEO, Marketing Guru</p>
              </div>
            </div>
          </article>
          <article className="inline-block w-[470px] p-[40px] rounded-2xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            <p className="text-sm mb-6">
              Thank You for your service. I am very pleased with the result. I
              have seen exponencial growth in my business and its all thanks to
              your amazing service
            </p>
            <div className="flex gap-3">
              <div className="avatar bg-[#e6e4ff] inline-block bg-[url('../../public/img/testimonials/avatar.png')] bg-no-repeat bg-cover bg-center h-16 w-16 rounded-full"></div>
              <div className="self-center">
                <h4 className="text-xl font-semibold">Emily Stones</h4>
                <p>CEO, Marketing Guru</p>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
