import Container from "../container/container";
const Subscribe = () => {
  return (
    <section className="py-14 md:py-24 lg:py-36">
      <Container>
        <div className="text-center">
          <h1 className="text-[#20B15A] mb-9 uppercase">subscribe</h1>
          <p className="inline-block text-xl font-semibold mb-3 md:text-2xl lg:text-3xl  md:md:w-[495px]">
            Subscribe To Get The Lastest New About Us
          </p>
          <span className="block text-[#8B8B8B] text-sm mb-11">
            Please drop your email below to get daily update about what we do
          </span>
          <div className="relative flex h-[62px] md:mx-4 lg:mx-52">
            <input
              className="absolute border border-black top-0 right-0 left-0 bottom-0 pl-4 pr-36 rounded-2xl"
              type="text"
              placeholder="Enter Your Email Adress"
            />
            <button className="text-sm absolute top-1/2 right-1 -translate-y-1/2 bg-[#F55F1D] text-white w-[130px] h-[52px] rounded-2xl">
              Subscribe
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Subscribe;
