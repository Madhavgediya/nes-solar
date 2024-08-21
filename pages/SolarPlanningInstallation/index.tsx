import React, { useEffect } from "react";
import ScrollToTop from "@/components/ScrollToTop";
import HeroImageSection from "@/components/common/HeroImageSection";
import ConsultComponent from "@/components/common/ConsultComponent";

export default function SolarPlanningInstallation() {
  return (
    <div>
      <ScrollToTop />
      <div className="flex flex-col">
        <div className="relative">
          <HeroImageSection title="Solar Planning & Installation" />
        </div>
      </div>

      {/* <section className="single-service-area md:py-32 px-8 xl:py-56 2xl:py-56"> */}
      <section className="single-service-area sm:py-20  md:py-32 2xl:py-56 px-12 font-custom">
        <div className="container">
          <div className="row">
            <div className=" xl:basis-4/6 xl:grow-0 px-8 xl:shrink-0 lg:basis-full md:basis-full sm:basis-full">
              <div className="single-service-top">
                <h1> Solar planning &amp; Installation</h1>
                <div className="remove_li text mt-2">
                  <div>
                    Our expertise in engineering, procurement, and construction
                    services&nbsp;
                    <span style={{ fontSize: "1rem" }}>
                      ensure your solar project is cohesively completed and
                      managed by the&nbsp;
                    </span>
                    <span style={{ fontSize: "1rem" }}>
                      same team of experts from design through implementation.
                    </span>
                  </div>

                  <div className="p-8">
                    <div>
                      <b>Engineering</b>
                    </div>
                    <ul>
                      <li>Site feasibility</li>
                      <li>Drawing submission</li>
                      <li>Structure design</li>
                      <li>Earthing ,cabling and electrical engineering</li>
                    </ul>
                    <div>
                      <b>Procurement</b>
                    </div>
                    <ul>
                      <li>
                        Proven capacity for full-scale project procurement
                      </li>
                      <li>Best in class Solar Panels &amp; Solar cells</li>
                    </ul>
                    <div>
                      <b>Construction</b>
                    </div>
                    <ul>
                      <li>Module Installation</li>
                      <li>Fixed mount</li>
                      <li>Tracking</li>
                      <li>Electrical Balance of System</li>
                      <li>Testing and Commissioning</li>
                    </ul>
                    <div>
                      <b>Payback</b>
                    </div>
                    <ul>
                      <li>Cost effective solar panel price</li>
                      <li>
                        Experienced to achieve minimum Solar plant installation
                        cost
                      </li>
                    </ul>
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
