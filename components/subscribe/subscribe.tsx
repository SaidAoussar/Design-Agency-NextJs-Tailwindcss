import Container from "../container/container";
const Subscribe = () => {
  return (
    <section className="py-36">
      <Container>
        <div className="text-center">
          <h1 className="text-[#20B15A] mb-9 uppercase">subscribe</h1>
          <p className="inline-block text-3xl font-semibold mb-3 w-[495px]">
            Subscribe To Get The Lastest New About Us
          </p>
          <span className="block text-[#8B8B8B] text-sm mb-11">
            Please drop your email below to get daily update about what we do
          </span>
          <div className="relative inline-block w-[550px] h-[62px]">
            <input
              className="absolute border border-black top-0 right-0 left-0 bottom-0 pl-4 pr-36 rounded-2xl"
              type="text"
              placeholder="Enter Your Email Adress"
            />
            <button className="absolute top-1/2 right-1 -translate-y-1/2 bg-[#F55F1D] text-white w-[130px] h-[52px] rounded-2xl">
              Subscribe
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Subscribe;
