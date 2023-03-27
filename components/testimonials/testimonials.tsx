"use client";
import Image from "next/image";
import Container from "../container/container";
import arrowLeftIcon from "@/public/img/testimonials/arrow-left.svg";
import arrowRightIcon from "@/public/img/testimonials/arrow-right.svg";
import "./testimonials.css";
import { useEffect, useRef } from "react";

const Testimonials = () => {
  const sliderRef = useRef();
  const leftBtn = useRef()
  const rightBtn = useRef()
  useEffect(() => {}, []);

  const handleClick = (type) => {
    const sliderIndex = parseInt(
      window
        .getComputedStyle(sliderRef.current)
        .getPropertyValue("--slider-index")
    );
    const itemsPerScreen = 2;
    const itemCount = sliderRef.current.children.length;
    const areaCount = Math.ceil(itemCount / 2)



    if (type === "left") {
      
      console.log('left :' , sliderIndex - 1)
      if(sliderIndex - 1 < 0){
      }else if(sliderIndex - 1 <= areaCount-1){
        console.log("hello")
        rightBtn.current.classList.add("active");
        rightBtn.current.classList.remove("disabled");
        rightBtn.current.disabled = false;
        sliderRef.current.style.setProperty("--slider-index", sliderIndex - 1);
      }
    }

    if (type === "right") {
      console.log('right :' , sliderIndex + 1)
      console.log("area count", areaCount -1)

      if(sliderIndex + 1 === areaCount - 1){
        rightBtn.current.classList.add("disabled");
        rightBtn.current.classList.remove("active");
        rightBtn.current.disabled = true;
        sliderRef.current.style.setProperty("--slider-index", sliderIndex + 1);
      }else if(sliderIndex + 1 < areaCount - 1){
        console.log("second if :", sliderIndex + 1,areaCount +1)
        sliderRef.current.style.setProperty("--slider-index", sliderIndex + 1);
      }
    }

  };
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
            <button
              ref={leftBtn}
              className="disabled rounded-full text-center h-[60px] w-[60px]"
              onClick={() => handleClick("left")}
            >
              <Image
                className="inline-block w-[12px] h-[20px]"
                src={arrowLeftIcon}
                alt="arrow left image"
              />
            </button>
            <button
              ref={rightBtn}
              className="active rounded-full text-center h-[60px] w-[60px]"
              onClick={() => handleClick("right")}
            >
              <Image
                className="inline-block w-[12px] h-[20px]"
                src={arrowRightIcon}
                alt="arrow right image"
              />
            </button>
          </div>
        </div>
        <div className="testimonials-content flex">
          <div className="slider-track" ref={sliderRef}>
            <article className="inline-block p-2">
              <div className="p-[30px] rounded-2xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
              <p className="text-sm mb-6">
                Thank You for your service. I am very pleased with the result. I
                have seen exponencial growth in my business and its all thanks
                to your amazing service
              </p>
              <div className="flex gap-3">
                <div className="avatar bg-[#e6e4ff] inline-block bg-[url('../../public/img/testimonials/avatar.png')] bg-no-repeat bg-cover bg-center h-16 w-16 rounded-full"></div>
                <div className="self-center">
                  <h4 className="text-xl font-semibold">Emily Stones</h4>
                  <p>CEO, Marketing Guru</p>
                </div>
              </div>
              </div>
            </article>
            <article className="inline-block p-2">
              <div className="p-[30px] rounded-2xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
              <p className="text-sm mb-6">
                Thank You for your service. I am very pleased with the result. I
                have seen exponencial growth in my business and its all thanks
                to your amazing service
              </p>
              <div className="flex gap-3">
                <div className="avatar bg-[#e6e4ff] inline-block bg-[url('../../public/img/testimonials/avatar.png')] bg-no-repeat bg-cover bg-center h-16 w-16 rounded-full"></div>
                <div className="self-center">
                  <h4 className="text-xl font-semibold">Emily Stones</h4>
                  <p>CEO, Marketing Guru</p>
                </div>
              </div>
              </div>

            </article>

            <article className="inline-block p-2">
              <div className="p-[30px] rounded-2xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
              <p className="text-sm mb-6">
                Thank You for your service. I am very pleased with the result. I
                have seen exponencial growth in my business and its all thanks
                to your amazing service
              </p>
              <div className="flex gap-3">
                <div className="avatar bg-[#e6e4ff] inline-block bg-[url('../../public/img/testimonials/avatar.png')] bg-no-repeat bg-cover bg-center h-16 w-16 rounded-full"></div>
                <div className="self-center">
                  <h4 className="text-xl font-semibold">Emily Stones</h4>
                  <p>CEO, Marketing Guru</p>
                </div>
              </div>
              </div>
            </article>
            <article className="inline-block p-2">
              <div className="p-[30px] rounded-2xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
              <p className="text-sm mb-6">
                Thank You for your service. I am very pleased with the result. I
                have seen exponencial growth in my business and its all thanks
                to your amazing service
              </p>
              <div className="flex gap-3">
                <div className="avatar bg-[#e6e4ff] inline-block bg-[url('../../public/img/testimonials/avatar.png')] bg-no-repeat bg-cover bg-center h-16 w-16 rounded-full"></div>
                <div className="self-center">
                  <h4 className="text-xl font-semibold">Emily Stones</h4>
                  <p>CEO, Marketing Guru</p>
                </div>
              </div>
              </div>
            </article>
            
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
