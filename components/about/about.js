import React from "react";
import abimg from "/public/images/logo2.svg";
import sign from "/public/images/signeture.png";
import Image from "next/image";

const About = (props) => {
  return (
    <section className="wpo-about-section section-padding">
      <div className="container">
        <div className="wpo-about-section-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12 col-12">
              <div className="wpo-about-img">
                <Image src={abimg} alt="" />
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-12">
              <div className="wpo-about-content">
                <div className="wpo-section-title-s2">
                  <h2>Over 5+ Years Experience In Cleaning Service</h2>
                </div>
                <div className="wpo-about-content-inner">
                  <p>
                    At Sweep Clean Limited, we believe a clean space is a happy
                    space. We’re a team of dedicated cleaning professionals
                    passionate about transforming homes, offices, and commercial
                    spaces into spotless, inviting environments. With a
                    commitment to reliability, attention to detail, and
                    exceptional customer care, we go beyond surface cleaning
                    tackling the hidden dirt and leaving every corner fresh and
                    hygienic. We use safe, effective cleaning methods and, where
                    possible, eco-friendly products to protect both your space
                    and the environment.
                  </p>
                  <p>
                    Whether it’s carpets, kitchens, bathrooms, seasonal
                    refreshes, or complete office cleaning, we tailor our
                    services to meet your needs and schedule. Our mission is
                    simple: to make your life easier, your space cleaner, and
                    your day brighter. Your mess is our mission—and we get it
                    done right, every time.
                  </p>
                  {/* <div className="signeture">
                    <h4>Brubaker Nilka</h4>
                    <p>Vertex Chambers, CEO</p>
                    <span>
                      <Image src={sign} alt="" />
                    </span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
