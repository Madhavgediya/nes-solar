import React from "react";
import ScrollToTop from "@/components/ScrollToTop";
import HeroImageSection from "@/components/common/HeroImageSection";
import ConsultComponent from "@/components/common/ConsultComponent";

export default function SolarPanelCleaningRobot() {
  return (
    <div>
      <ScrollToTop />
      <div className="flex flex-col">
        <div className="relative">
          <HeroImageSection
            title="Solar Panel Cleaning Robot"
            imgSrc={"../assets/Our+Approach.webp"}
          />
        </div>
      </div>

      <section className="single-service-area py-10 sm:py-20  md:py-32 2xl:py-56 px-8 font-custom">
        <div className="container">
          <div className="row">
            <div className=" xl:basis-4/6 xl:grow-0 xl:shrink-0 px-8 lg:basis-full md:basis-full sm:basis-full">
              <div className="single-service-top font-custom">
                <h1> Solar Panel Cleaning Robot</h1>
                <div className="remove_li text mt-2">
                  <div>
                    <b>Minimize Manpower & Operating Costs</b>
                  </div>
                  <ul>
                    <li>
                      Robotics cleaning to increase solar power efficiency and
                      reduce maintenance costs
                    </li>
                  </ul>
                  <div>
                    <b>Maximize Profitability</b>
                  </div>
                  <ul>
                    <li>
                      Frequent solar panel cleaning reports submission to
                      achieve early payback cycle.
                    </li>
                  </ul>
                  <div>
                    <b>Secured cloud based platform</b>
                  </div>
                  <ul>
                    <li>
                    Our own administered server for regularly monitor cleaning cycles ,efficiency and computing abilities as per the site.
                    </li>
                  </ul>
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
