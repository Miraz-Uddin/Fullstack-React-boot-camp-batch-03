import React from "react";
import About from "../sections/About/About";
import Banner from "../sections/Banner/Banner";
// import Blogs from "../sections/Blogs";
// import Contact from "../sections/Contact";
// import Faq from "../sections/Faq";
import Features from "../sections/Features/Features";
// import Services from "../sections/Services";
// import Testimonials from "../sections/Testimonials";
// import WatchVideo from "../sections/WatchVideo";

export default function Home() {
  return (
    <>
      <Banner />
      <Features />
      <About />
      {/* <Faq />
      <WatchVideo />
      <Services />
      <Testimonials />
      <Blogs />
      <Contact /> */}
    </>
  );
}
