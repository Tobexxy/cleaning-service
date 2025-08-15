import React from "react";

import wImg1 from "/public/images/work/4.jpeg";
import wImg2 from "/public/images/work/5.jpeg";
import wImg3 from "/public/images/work/6.jpeg";
import Image from "next/image";

const WorkSection = (props) => {
  return (
    <section className="wpo-work-section section-padding">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-5">
            <div className="wpo-section-title">
              <h2>How It Works</h2>
              <p>
                We make cleaning effortless with a quick, three-step process
                designed for your convenience.
              </p>
            </div>
          </div>
        </div>
        <div className="wpo-work-wrap">
          <div className="row">
            <div className="col col-lg-4 col-md-6 col-12">
              <div className="wpo-work-item">
                <div className="wpo-work-img">
                  <img src="/images/work/4.jpeg" alt="" />
                </div>
                <div className="wpo-work-text">
                  <h2>Book Your Service</h2>
                </div>
                <div className="visible-text">
                  <span>1</span>
                </div>
              </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-12">
              <div className="wpo-work-item">
                <div className="wpo-work-text">
                  <h2>
                    We Get to <br />
                    Work
                  </h2>
                </div>
                <div className="visible-text">
                  <span>2</span>
                </div>
                <div className="wpo-work-img">
                  <img src="/images/work/5.jpeg" alt="" />
                </div>
              </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-12">
              <div className="wpo-work-item">
                <div className="wpo-work-img">
                  <img src="/images/work/6.jpeg" alt="" />
                </div>
                <div className="wpo-work-text">
                  <h2>You Relax & Enjoy</h2>
                </div>
                <div className="visible-text">
                  <span>3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
