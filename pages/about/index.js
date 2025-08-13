import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import About from "../../components/about/about";
import ServiceSectionS2 from "../../components/ServiceSectionS2/ServiceSectionS2";
import WorkSection from "../../components/WorkSection/WorkSection";
import TeamSection from "../../components/TeamSection/TeamSection";
import Testimonial from "../../components/Testimonial/Testimonial";
import FunFact from "../../components/FunFact/FunFact";
import PartnerSection from "../../components/PartnerSection/PartnerSection";
import Footer from "../../components/footer/Footer.js";
import Scrollbar from "../../components/scrollbar/scrollbar";

const AboutPage = () => {
  return (
    <Fragment>
      <Navbar topbarNone={"topbar-none"} />
      <PageTitle pageTitle={"About Us"} pagesub={"About"} />
      <About />
      <ServiceSectionS2 />
      <WorkSection />
      {/* <TeamSection /> */}
      <Testimonial />
      <FunFact />
      <PartnerSection />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default AboutPage;
