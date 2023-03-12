import Navbar from "@/components/navbar/navbar";
import Intro from "@/components/intro/intro";
import Partners from "@/components/partners/partners";
import Services from "@/components/services/services";
import Statics from "@/components/statics/statics";
import Portfolio from "@/components/portfolio/portfolio";
import Testimonials from "@/components/testimonials/testimonials";
import Subscribe from "@/components/subscribe/subscribe";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <div>
      <header className="bg-[#D7F5DC] pb-9">
        <Navbar />
        <Intro />
        <Partners />
      </header>
      <Services />
      <Statics />
      <Portfolio />
      {/* <Testimonials /> */}
      <Subscribe />
      <Footer />
    </div>
  );
}
