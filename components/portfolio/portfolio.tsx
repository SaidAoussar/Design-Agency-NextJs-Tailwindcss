import Image from "next/image";
import projectOneImg from "@/public/img/portfolio/project-1.png";
import projectTwoImg from "@/public/img/portfolio/project-2.png";
import projectThreeImg from "@/public/img/portfolio/project-3.png";
import projectFourImg from "@/public/img/portfolio/project-4.png";
import Container from "../container/container";

const Portfolio = () => {
  return (
    <section className="py-20">
      <Container>
        <div>
          <h1 className="text-[#20B15A] mb-3 uppercase">our portfolio</h1>
          <p className="text-3xl font-semibold mb-16 w-[495px]">
            We provide the Perfect Solution to your business growth
          </p>
          <div className="grid grid-cols-2 gap-10">
            <article>
              <Image
                className="object-cover w-full mb-9"
                src={projectOneImg}
                alt="project 1 image"
              />
              <h2 className="text-xl font-semibold mb-3">
                Digital Marketing Agency Website
              </h2>
              <p>
                This is a website for a client who want to achieve their goals
                and meet their users needs while also increasing their reach.
                Accross all platforms. This is a website rebrand
              </p>
            </article>
            <article>
              <Image
                className="object-cover w-full mb-9"
                src={projectTwoImg}
                alt="project 1 image"
              />
              <h2 className="text-xl font-semibold mb-3">
                Digital Marketing Agency Website
              </h2>
              <p>
                This is a website for a client who want to achieve their goals
                and meet their users needs while also increasing their reach.
                Accross all platforms. This is a website rebrand
              </p>
            </article>
            <article>
              <Image
                className="object-cover w-full mb-9"
                src={projectThreeImg}
                alt="project 1 image"
              />
              <h2 className="text-xl font-semibold mb-3">
                Digital Marketing Agency Website
              </h2>
              <p>
                This is a website for a client who want to achieve their goals
                and meet their users needs while also increasing their reach.
                Accross all platforms. This is a website rebrand
              </p>
            </article>
            <article>
              <Image
                className="object-cover w-full mb-9"
                src={projectFourImg}
                alt="project 1 image"
              />
              <h2 className="text-xl font-semibold mb-3">
                Digital Marketing Agency Website
              </h2>
              <p>
                This is a website for a client who want to achieve their goals
                and meet their users needs while also increasing their reach.
                Accross all platforms. This is a website rebrand
              </p>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
