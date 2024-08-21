import React from "react";
import Link from "next/link";
import ScrollToTop from "@/components/ScrollToTop";
import HeroImageSection from "@/components/common/HeroImageSection";
import Image from "next/image";

const ExpertiseCard = ({
  frontImageSrc,
  frontTitle,
  backImageSrc,
  heading,
  description,
  link,
}: any) => (
  <>
    <div>
      <div className="max-w-screen-xl mx-auto px-4 pb-4">
        {/* Expertise Card for web view */}
        <div className="hidden md:block">
          <div className="expertise-card">
            <div className="expertise-flip-card">
              <div className="expertise-flip-card__container">
                <div className="expertise-card-front">
                  <div className="expertise-card-front__tp">
                    <img
                      src={frontImageSrc}
                      alt=""
                      className="h-3/6 w-6/12 object-fit-cover rounded-bl-lg"
                      height={50}
                      width={50}
                    />
                    <h2 className="expertise-card-front__heading text-center text-white">
                      {frontTitle}
                    </h2>
                  </div>
                  <div className="expertise-card-front__bt">
                    <p className="expertise-card-front__text-view">View me</p>
                  </div>
                </div>
                <div className="expertise-card-back">
                  <img
                    src={backImageSrc}
                    alt=""
                    className="object-fit-cover rounded-bl-lg expertise-video__container"
                    height={200}
                    width={200}
                  />
                </div>
              </div>
            </div>
            <div className="expertise-inside-page">
              <div className="expertise-inside-page__container">
                <h2 className="expertise-inside-page__heading">{heading}</h2>
                <p className="expertise-inside-page__text text-sm">
                  {description}
                </p>
                <Link
                  href={link}
                  className="expertise-inside-page__btn mt-2 font-custom"
                >
                  View More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Other Cards for mobile view */}
        <div className="block md:hidden">
          <div className="flex flex-col flex-wrap md:flex-row md:-mx-2">
            <div className="w-full mb-4 lg:mb-0">
              <div
                className="block group relative mx-2 overflow-hidden shadow-lg"
                onClick={(event) => event.preventDefault()}
              >
                <img
                  src={backImageSrc}
                  className="h-[400px] !w-[400px] object-none"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-full z-10"></div>
                <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
                  <div className="h-1/2 relative">
                    <div className="absolute bottom-0">
                      <h2 className="font-bold text-white leading-tight transition duration-300 text-xl pb-6 group-hover:underline">
                        {heading}
                      </h2>
                    </div>
                  </div>
                  <div className="h-1/2">
                    <p className="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">
                      {description}
                    </p>
                    <Link
                      href={link}
                      className="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default function Expertise() {
  return (
    <div>
      <ScrollToTop />
      <div className="flex flex-col">
        <div className="relative">
          <HeroImageSection
            title="Expertise"
            path={
              "/assets/Expertise/WhatsApp Image 2024-06-14 at 18.24.22.webp"
            }
          />
        </div>
      </div>
      <section className="expertise-card-area relative py-32 sm:py-20 md:py-32 2xl:py-56 px-8 font-custom">
        <section className="expertise-card-section">
          <ExpertiseCard
            frontImageSrc="/assets/Expertise/6802629.webp"
            frontTitle="Solar Planning & Installation"
            backImageSrc="/assets/Expertise/expertise-39520221107.webp"
            heading="Solar Planning & Installation"
            description="From idea to installation, our engineering team will help customers to give best rooftop solar solutions as per site condition."
            link="/SolarPlanningInstallation"
          />
        </section>
        <section className="expertise-card-section">
          <ExpertiseCard
            frontImageSrc="/assets/Expertise/cleaning-icon.webp"
            frontTitle="Solar Panel Cleaning Robot"
            backImageSrc="/assets/Expertise/CleaningRobots.webp"
            heading="Solar Panel Cleaning Robot"
            description="Robotics solar panel cleaning, O&M, Reporting In a single cloud based platform"
            link="/SolarPanelCleaningRobot"
          />
        </section>
        <section className="expertise-card-section">
          <ExpertiseCard
            frontImageSrc="/assets/Expertise/sol-pl-01.webp"
            frontTitle="Solar Operations and Maintenance"
            backImageSrc="/assets/Expertise/expertise-80720220414.webp"
            heading="Solar Operations and Maintenance"
            description="Our team can operate and maintain rooftop solar power plant, ensuring uninterrupted functionality of solar power plant to get maximum output..."
            link="/SolarOperationAndMaintenance"
          />
        </section>
      </section>
    </div>
  );
}
