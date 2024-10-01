import React from "react";
import ScrollToTop from "@/components/ScrollToTop";
import HeroImageSection from "@/components/common/HeroImageSection";
import Image from 'next/image';

export default function Awards() {
  const milestones = [
    {
      id: 1,
      image: "/assets/Awards/platinum-rated-solar-company-89820220911.webp",
      title:
        "Nes Energy Solutions Awarded as PLATINUM RATED SOLAR EPC COMPANY YEAR 2020 BY INDIAN GREEN BUILDING ORGANIZATION",
    },
    {
      id: 2,
      image: "/assets/Awards/leader-of-future-award-2021-29520220912.webp",
      title:
        "Awarded to Nes Energy Solutions Innovative Business Technology and Application in the field of Solar power plant Year 2018",
    },
    {
      id: 3,
      image: "/assets/Awards/best-solar-epc-16220220912.webp",
      title:
        "Nes Energy Solutions Leader of future award - 2021 JITO Panasonic for first installation of Panasonic Japan make HIT solar panels in Ahmedabad",
    },
    {
      id: 4,
      image: "/assets/Awards/solar-epc-7-award-52720220913.webp",
      title:
        "NES Energy Solutions Awarded as Best 3 Solar EPC by India SME Excellence Year 2016",
    },
    {
      id: 5,
      image: "/assets/Awards/innovative-business-award-57920220913.webp",
      title:
        "NES ENERGY SOLUTIONS awarded TOP SOLAR EPC -7 Forever green india by INDIAN OIl HALDIA",
    },
  ];
  return (
    <div>
      <ScrollToTop />

      <div className="flex flex-col">
      <div className="relative">
          <HeroImageSection
            title="Awards"
            path={"/assets/Awards/awards-banner.webp"}
          />
        </div>
      </div>
      <div className="py-16 font-custom">
        <div
          className="relative bg-cover bg-center py-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(32, 53, 96, 0.6), rgba(32, 53, 96, 0.6)), url("/assets/Awards/awards.webp")',
          }}
        >
          <div className="relative py-10">
            <div className="container mx-auto text-center text-white px-4">
              <h2 className="text-4xl font-bold mb-5 text-white">
                Honoring Excellence
              </h2>
              <p className="mb-10 text-xl">
                Honoring Our Achievements and Milestones in Market Leadership
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                {milestones.map((milestone) => (
                  <div
                    key={milestone.id}
                    className="bg-white text-black font-medium p-5 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-95"
                  >
                    <Image
                      src={milestone.image}
                      alt={milestone.title}
                      className="mx-auto mb-5 w-32 h-32 object-contain transform transition-transform duration-300 hover:scale-110"
                      width={100} height={100}
                    />
                    <p className="text-sm md:text-base">{milestone.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
