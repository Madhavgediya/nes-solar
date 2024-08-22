import React from "react";
import Link from "next/link";
import ScrollToTop from "@/components/ScrollToTop";
import HeroImageSection from "@/components/common/HeroImageSection";
import Image from "next/image";

export default function Gallery() {
  return (
    <>
      <section>
        <ScrollToTop />
        <div className="flex flex-col">
          <div className="relative">
            <HeroImageSection title="Gallery" path={"/assets/Gallery/solar planning & Installation.webp"}/>
          </div>
        </div>
        <section className="main-project-area v3 font-custom">
          <div className="container">
            <div className="row justify-center m-0">
              <div className="grid sm:grid-cols-4 gap-5 md:gap-10 mt-24 px-4 max-sm:hidden">
                <div className="grid sm:grid-cols-2 sm:col-span-2 gap-5 md:gap-10">
                  <div className="relative sm:col-span-1">
                    <ProjectCard
                      title="Civil Work"
                      imgSrc="/assets/Gallery/civil work/IMG-20170819-WA0004.webp"
                      link="/Gallery/CivilWork"
                    />
                  </div>
                  <div className="relative sm:col-span-1">
                    <ProjectCard
                      title="Mounting Structure Installation"
                      imgSrc="/assets/Gallery/Mounting structure Installation/20201231_125419.webp"
                      link="/Gallery/MountingStructureInstallation"
                    />
                  </div>
                  <div className="relative sm:col-span-2">
                    <ProjectCard
                      title="Rooftop solar installations"
                      imgSrc="/assets/Gallery/Rooftop solar installations/DSC04626 (1).webp"
                      link="/Gallery/RoofTopSolarInstallations"
                    />
                  </div>
                </div>
                <div className="grid sm:col-span-2 grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10">
                  <div className="relative sm:col-span-2">
                    <ProjectCard
                      title="Robotic Cleaning System"
                      imgSrc="/assets/Gallery/cleaning system/CleaningRobots.webp"
                      link="/Gallery/CleaningSystem"
                    />
                  </div>
                  <div className="relative sm:col-span-1">
                    <ProjectCard
                      title="Electrical Work"
                      imgSrc="/assets/Gallery/electrical work/projects-40920220123.webp"
                      link="/Gallery/ElectricalWork"
                    />
                  </div>
                  <div className="relative sm:col-span-1">
                    <ProjectCard
                      title="O&M"
                      imgSrc="/assets/Gallery/O&M/O&M-image-7.webp"
                      link="/Gallery/OAndM"
                    />
                  </div>
                </div>
              </div>
              <div className="grid sm:grid-cols-4 gap-5 md:gap-10 mt-24 px-4 lg:hidden md:hidden">
                <div className="grid sm:grid-cols-2 sm:col-span-2 gap-5 md:gap-10">
                  <div className="relative sm:col-span-2">
                    <ProjectCard
                      title="Rooftop solar installations"
                      imgSrc="/assets/Gallery/Rooftop solar installations/DSC04626 (1).webp"
                      link="/Gallery/RoofTopSolarInstallations"
                    />
                  </div>
                  <div className="relative sm:col-span-2">
                    <ProjectCard
                      title="Robotic Cleaning System"
                      imgSrc="/assets/Gallery/cleaning system/CleaningRobots.webp"
                      link="/Gallery/CleaningSystem"
                    />
                  </div>
                  <div className="relative sm:col-span-1">
                    <ProjectCard
                      title="O&M"
                      imgSrc="/assets/Gallery/O&M/O&M-image-7.webp"
                      link="/Gallery/OAndM"
                    />
                  </div>
                </div>
                <div className="grid sm:col-span-2 grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10">
                  <div className="relative sm:col-span-1">
                    <ProjectCard
                      title="Civil Work"
                      imgSrc="/assets/Gallery/civil work/IMG-20170819-WA0004.webp"
                      link="/Gallery/CivilWork"
                    />
                  </div>
                  <div className="relative sm:col-span-1">
                    <ProjectCard
                      title="Electrical Work"
                      imgSrc="/assets/Gallery/electrical work/projects-40920220123.webp"
                      link="/Gallery/ElectricalWork"
                    />
                  </div>
                  <div className="relative sm:col-span-1">
                    <ProjectCard
                      title="Mounting Structure Installation"
                      imgSrc="/assets/Gallery/Mounting structure Installation/20201231_125419.webp"
                      link="/Gallery/MountingStructureInstallation"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
const ProjectCard = ({ title, imgSrc, link }: any) => {
  return (
    <div className="relative aspect-square overflow-hidden max-w-[700px] group bg-sand">
      <Image
        alt={title}
        fetchPriority="high"
        decoding="async"
        data-nimg="fill"
        className="z-0"
        sizes="100vw"
        src={imgSrc}
        style={{
          height: "100%",
          width: "100%",
          inset: "0px",
          objectFit: "cover",
          color: "transparent",
        }}
        height={100}
        width={100}
      />
      <div className="gradient-overlay absolute bottom-0 left-0 right-0 flex flex-col justify-between h-full z-[1] p-3 sm:p-5">
        <div className="opacity-0 transition-opacity duration-1000 group-hover:opacity-100"></div>
        <div>
          <h2 className="text-xl font-semibold leading-tight sm:font-extrabold lg:line-clamp-2 xl:line-clamp-3 text-white">
            {title}
          </h2>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-corn opacity-0 transition-all duration-1000 group-hover:scale-[1500%] group-hover:opacity-[100%]"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-corn transition-all duration-1000 group-hover:-rotate-180 group-hover:opacity-0">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 lg:w-16 lg:h-16 text-white transition-all duration-1000"
            fill="currentColor"
          >
            <path d="m18.3 12c0 .14-.06.27-.15.37-.1.1-.23.15-.37.15h-5.25v5.25c0 .14-.06.27-.15.37-.1.1-.23.15-.37.15s-.27-.06-.37-.15-.15-.23-.15-.37v-5.25h-5.25c-.14 0-.27-.06-.37-.15-.1-.1-.15-.23-.15-.37s.06-.27.15-.37.23-.15.37-.15h5.25v-5.25c0-.14.06-.27.15-.37s.23-.15.37-.15.27.06.37.15c.1.1.15.23.15.37v5.25h5.25c.14 0 .27.06.37.15s.15.23.15.37z"></path>
          </svg>
        </div>
      </div>
      <Link
        className="absolute z-[1] inset-0 flex items-center justify-center"
        href={link}
      >
        <div className="w-16 h-16 rounded-full bg-white opacity-0 transition-all duration-1000 rotate-180 group-hover:opacity-100 group-hover:rotate-0">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 text-corn"
            fill="currentColor"
          >
            <path d="m9.77 16.99c-.05.06-.1.12-.12.2-.03.07-.04.15-.04.23s.02.16.05.23.08.14.14.19.12.1.2.12c.07.03.15.04.23.04s.16-.02.23-.05.14-.08.19-.14l5.1-5.4c.11-.11.16-.26.16-.41s-.06-.3-.16-.41l-5.1-5.4c-.05-.06-.12-.11-.19-.14s-.15-.05-.23-.05-.16.01-.23.04-.14.07-.2.13c-.06.05-.1.12-.14.19-.03.07-.05.15-.05.23s.01.16.04.23.07.14.13.2l4.71 4.99-4.71 4.99z"></path>
          </svg>
        </div>
      </Link>
    </div>
  );
};
