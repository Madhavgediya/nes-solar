import React from "react";
import ScrollToTop from "@/components/ScrollToTop";
import HeroImageSection from "@/components/common/HeroImageSection";
import ConsultComponent from "@/components/common/ConsultComponent";

export default function SolarOperationAndMaintenance() {
  return (
    <div>
      <ScrollToTop />
      <div className="flex flex-col">
        <div className="relative">
          <HeroImageSection
            title="Solar Operations And Maintenance"
          />
        </div>
       
      </div>
      <section className="single-service-area py-10 sm:py-20  md:py-32 2xl:py-56 px-8 font-custom">
        <div className="container">
          <div className="row">
            <div className=" xl:basis-4/6 xl:grow-0 xl:shrink-0 px-8 lg:basis-full md:basis-full sm:basis-full">
              <div className="single-service-top">
                <h1> Solar Operations and maintenance</h1>
                <div className="remove_li text mt-2">
                  <div style={{ textAlign: "justify" }}>
                    A system’s lifetime operation and maintenance are just as
                    essential as its&nbsp;
                    <span style={{ fontSize: "1rem", textAlign: "left" }}>
                      construction. At NES Energy Solutions, we provide our
                      customers with a full&nbsp;
                    </span>
                    <span style={{ fontSize: "1rem", textAlign: "left" }}>
                      array of O&amp;M services.
                    </span>
                  </div>
                  <div style={{ textAlign: "justify" }}>
                    <span style={{ fontSize: "1rem", textAlign: "left" }}>
                      <br />
                    </span>
                  </div>
                  <div style={{ textAlign: "justify" }}>
                    <span style={{ fontSize: "1rem", textAlign: "left" }}>
                      <ul>
                        <b>Rapid Response</b>
                        <li style={{ textAlign: "justify" }}>
                          Our Rapid Response coverage helps reduce downtime,
                          increases ROI, and gives our&nbsp;
                          <span style={{ fontSize: "1rem" }}>
                            customers peace of mind.
                          </span>
                        </li>
                        <br />
                        <b>Scheduled Maintenance</b>
                        <li style={{ textAlign: "justify" }}>
                          We provide scheduled maintenance services to detect,
                          prevent, or proactively correct any&nbsp;
                          <span style={{ fontSize: "1rem" }}>
                            problem issues.
                          </span>
                        </li>
                        <br />
                        <b>Performance Optimization</b>
                        <li style={{ textAlign: "justify" }}>
                          To ensure we exceed our customers’ expectations, we
                          provide an overall balance of system&nbsp;
                          <span style={{ fontSize: "1rem" }}>
                            inspection/analysis, string circuit performance,
                            thermal imaging, and storm damage repairs.
                          </span>
                        </li>
                      </ul>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <ConsultComponent />
          </div>
        </div>
      </section>
    </div>
  );
}
