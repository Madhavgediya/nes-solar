import React from "react";
import ScrollToTop from "@/components/ScrollToTop";
import HeroImageSection from "@/components/common/HeroImageSection";
import OurClient from "../../src/components/OurClient/index";
import Image from 'next/image'

const OfferData = [
  {
    logo: "../assets/About/what-we-offer-70520220620.webp",
    title: "Quality",
    text1:
      "Structure - GI box pipe <b><u> to withstand high wind velocity </u></b> & SS 304 bolts & nuts",
    text2:
      "Cabling - EN type double insulated DC cable for maximum power output",
    text3:
      "Civil work - Epoxy resin material for waterproofing & PCC for structure strength",
  },
  {
    logo: "../assets/About/what-we-offer-37920220621.webp",
    title: "After Sales Service",
    text1:
      "Communication with customers for <b><u> plant remote monitoring and efficiency </u></b>",
    text2:
      "<b><u> Quick response</u></b>  to customer service calls and on-site visit",
    text3:
      "<b><u> Service report</u></b> preparation and submission to the customer",
  },
  {
    logo: "../assets/About/what-we-offer-30920221203.webp",
    title: "Innovations , Commitment & Safety",
    text1:
      "<b><u>Power optimization</u></b> technology for any roof orientations and directions",
    text2:
      "<b><u>Maximum energy output</u></b> through the selection of PERC and bi-facial solar cell technology",
    text3:
      "AC-DC <b><u>separate and parallel earthing</u></b> for the highest safety",
    text4:
      "<b><u>Robotic thermography</u></b> - voltage current tracing, electroluminescence testing for solar panels",
  },
  {
    logo: "../assets/About/what-we-offer-46920220620.webp",
    title: "Skill",
    text1:
      "Pre site visit- <b><u>feasibility study</u></b> with solar module placement drawing as rooftop area",
    text2: "<b><u>3D</u></b> modeling <b><u>design</u></b>",
    text3: "<b><u>Shadow analysis</u></b> report",
    text4: "Month-wise solar energy generation report with <b><u>payback calculation</u></b>",
  },
  {
    logo: "../assets/About/what-we-offer-11420221200.webp",
    title: "Return on Investment",
    text1: "Committed to achieving <b><u>3-4 years</u></b> of system <b><u>Payback</u></b> period",
    text2: "<b><u>Savings</u></b> on electricity bills <b><u>for the next 22 years</u></b>",
    text3: "Material selection for <b><u>25 years of performance</u></b>",
  },
  {
    logo: "../assets/About/what-we-offer-79020220620.webp",
    title: "Competence",
    text1: "Technically competent & <b><u>experienced engineering team</u></b>",
    text2: "Quick troubleshooting by a <b><u>trained service team</u></b>",
    text3: "Organizations <b><u>prudent business policies</u></b>",
  },
];
export default function About() {
  return (
    <div>
      <ScrollToTop />
      <div className="flex flex-col">
        <div className="relative">
          <HeroImageSection title="About Us"  path={"/assets/About/about-us.webp"} />
        </div>
      </div>

      <section className="relative block px-4 sm:pt-20 md:pt-32 pb-12 font-custom">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mr-4 -ml-4">
            <div className="col-xl-6 relative w-full pr-4 pl-4 md:flex-1 max-w-4xl max-sm:hidden">
              <div className="relative block mt-2.5">
                <Image
                  src="../assets/About/about-image-59220220128.webp"
                  alt="Awesome Image"
                  style={{
                    height: "500px",
                    width: "100%",
                    borderTopLeftRadius: "20%",
                    borderBottomRightRadius: "20%",
                    boxShadow: `rgba(16, 33, 62, 1) -5px 5px, rgba(16, 33, 62, 0.8) -10px 10px, rgba(16, 33, 62, 0.6) -15px 15px, rgba(16, 33, 62, 0.4) -20px 20px, rgba(16, 33, 62, 0.3) -25px 25px`,
                  }}
                />
              </div>
            </div>
            <div className="col-xl-6 relative w-full pr-4 pl-4 md:flex-1 max-w-4xl">
              <div className="relative block mt-12">
                <div className="relative block">
                  <div className="table-cell align-middle">
                    <h2 className="text-black font-bold m-0 text-3xl before:absolute before:w-60 before:pt-6 before:left-0 before:right-0 ">
                      Commitment to excellence
                      <p className="title_line">
                        <span></span>
                        <span></span>
                      </p>
                    </h2>
                  </div>
                </div>
                <div className="relative block pt-8 pb-4">
                  <ul>
                    <li style={{ textAlign: "justify", color: "#333" }}>
                      Our team’s collective understanding of the solar industry,
                      the financial advantages &amp; nuances of solar investment
                      allows us to{" "}
                      <strong>
                        design, construct, and maintain large, complex solar
                        projects.
                      </strong>
                    </li>
                    <li style={{ textAlign: "justify" }}>&nbsp;</li>
                    <li style={{ textAlign: "justify", color: "#333" }}>
                      It’s our mission to provide every client with
                      competitively-priced renewable energy systems paired with{" "}
                      <strong>top-quality service.</strong>
                    </li>
                    <li style={{ textAlign: "justify" }}>&nbsp;</li>
                    <li style={{ textAlign: "justify", color: "#333" }}>
                      Every project we take on is assigned a{" "}
                      <strong>designated professional </strong>to ensure we
                      continually meet all of our clients needs and
                      expectations.
                    </li>
                    <li style={{ textAlign: "justify" }}>&nbsp;</li>
                    <li style={{ textAlign: "justify", color: "#333" }}>
                      <strong>Safety </strong>is one of our top priorities. No
                      job is more important than the safety of our employees and
                      partners. Our moral obligation and organizational
                      standards &amp; employ only the industry best practices
                      for safety.
                    </li>
                  </ul>

                  <p style={{ textAlign: "justify" }}>&nbsp;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative block py-24 px-0  font-custom">
        <div className="container pr-4 pl-4 mr-auto ml-auto md:max-w-7xl ">
          <div className="flex flex-wrap -mr-4 -ml-4 justify-center">
            <div className="relative w-full pr-4 pl-4 md:basis-full md:max-w-sm xl:basis-1/3 xl:max-w-sm lg:basis-1/3 lg:max-w-sm sm:basis-full sm:max-w-sm ">
              <div className="relative block py-0 px-8 mb-10 text-center">
                <div className="relative block">
                  <Image
                    src="../assets/mission.webp"
                    alt="Mission"
                    className="h-24 w-24 m-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:duration-300"
                  />
                  <span className="font-normal transform-none antialiased before:text-[#002f63] text-7xl leading-10 "></span>
                </div>
                <div className="relative block ">
                  <h3 className="mt-6 mb-4 mx-0 text-xl text-[#002f63] font-bold">
                    Mission
                  </h3>
                  <p className="m-0 text-black">
                    We take pride in delivering reliable, efficient and cost
                    effective solar solutions with agility.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-full pr-4 pl-4 md:basis-full md:max-w-sm xl:basis-1/3 xl:max-w-sm lg:basis-1/3 lg:max-w-sm sm:basis-full sm:max-w-sm ">
              <div className="relative block py-0 px-8 mb-10 text-center">
                <div className="relative block">
                  <Image
                    src="../assets/vision.webp"
                    alt="Vision"
                    className="h-24 w-24 m-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:duration-300"
                  />
                  <span className="font-normal transform-none antialiased before:text-[#002f63] text-7xl leading-10"></span>
                </div>
                <div className="relative block ">
                  <h3 className="mt-6 mb-4 mx-0 text-xl text-[#002f63] font-bold">
                    Vision
                  </h3>
                  <p className="m-0 text-black">
                    To be the preferred destination for comprehensive solar
                    power plant solutions at large scale.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-full pr-4 pl-4 md:basis-full md:max-w-sm xl:basis-1/3 xl:max-w-sm lg:basis-1/3 lg:max-w-sm sm:basis-full sm:max-w-sm">
              <div className="relative block py-0 px-8 mb-10 text-center">
                <div className="relative block ">
                  <Image
                    src="../assets/work.webp"
                    alt="Work"
                    className="h-24 w-24 m-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:duration-300"
                  />
                  <span className="font-normal transform-none antialiased before:text-[#002f63] text-7xl leading-10"></span>
                </div>
                <div className="relative block ">
                  <h3 className="mt-6 mb-4 mx-0 text-xl text-[#002f63] font-bold">
                    Core Value
                  </h3>
                  <p className="m-0 text-black">
                    Committed to highest customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="relative block pt-16 pb-24 px-0 font-custom"
        style={{ background: "#002f630a" }}
      >
        <div className="container pr-4 pl-4 mr-auto ml-auto md:max-w-7xl">
          <div className="flex flex-wrap -mr-4 -ml-4 justify-center">
            <div className="relative w-full pr-4 pl-4">
              <div className="relative block">
                <div className="pb-9 relative block -mt-1 text-center">
                  <p
                    style={{ color: "#333" }}
                    className="text-sm leading-5 font-bold uppercase mx-0 mb-3 mt-0"
                  >
                    Offering
                  </p>
                  <div
                    style={{ color: "#333" }}
                    className="relative block text-[#002f63] text-5xl leading-10 font-bold capitalize z-10 mb-5 mx-0 mt-0"
                  >
                    What We Offer
                    <p className="title_line">
                      <span></span>
                      <span></span>
                    </p>
                  </div>
                  <div className="relative block w-20 h-2"></div>
                </div>
              </div>
            </div>
            <div className="relative w-full">
              <div className="relative block">
                <div className="flex flex-wrap  justify-center">
                  <div className="flex items-center justify-center w-full">
                    <div className="grid  grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
                      {OfferData.map((data, index) => (
                        <div
                          key={index}
                          className="relative bg-gradient-to-r from-blue-950 to-blue-900 py-8 px-8 rounded-3xl w-full max-sm:w-72 lg:w-80 my-4 shadow-xl mt-10"
                        >
                          <div className="text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-white left-4 -top-16">
                            <Image
                              className="w-20 h-20 object-cover mx-auto"
                              src={data.logo}
                              alt="User avatar"
                            />
                          </div>
                          <div className="mt-8">
                            <p className="text-xl font-semibold my-2 text-gray-100">
                              {data.title}
                            </p>
                            <div className=" text-gray-200 text-sm leading-5 tracking-wider">
                              <p
                                className="mb-4"
                                dangerouslySetInnerHTML={{ __html: data.text1 }}
                              ></p>
                              <p
                                className="mb-4"
                                dangerouslySetInnerHTML={{ __html: data.text2 }}
                              ></p>
                              <p
                                className="mb-4"
                                dangerouslySetInnerHTML={{ __html: data.text3 }}
                              ></p>
                              {data.text4 ? (
                                <p
                                  className="mb-4"
                                  dangerouslySetInnerHTML={{
                                    __html: data.text4,
                                  }}
                                ></p>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OurClient />
    </div>
  );
}
