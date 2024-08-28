/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

type CounterKeys = {
  retentionRate: number;
  foundation: number;
  totalClients: number;
  residentialClients: number;
  industrialClients: number;
  deliveryCenters: number;
  cleaningSystemsInstalled: number;
  unitsSavedPerWeek: number;
  panelsCleanedPerWeek: number;
};

export default function CounterSection() {
  const [hovered, setHovered] = useState(false);
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [countUpKeys, setCountUpKeys] = useState({
    retentionRate: 0,
    foundation: 0,
    totalClients: 0,
    residentialClients: 0,
    industrialClients: 0,
    deliveryCenters: 0,
    cleaningSystemsInstalled: 0,
    unitsSavedPerWeek: 0,
    panelsCleanedPerWeek: 0,
  });

  const handleMouseEnter = (counterName: keyof CounterKeys) => {
    setAnimationPlayed(true);
    setHovered(true);
    setCountUpKeys((prevKeys) => ({
      ...prevKeys,
      [counterName]: prevKeys[counterName] + 1,
    }));
  };

  const handleMouseLeave = (counterName: keyof CounterKeys) => {
    if (!animationPlayed) {
      setCountUpKeys((prevKeys) => ({
        ...prevKeys,
        [counterName]: 0,
      }));
      setHovered(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("count-up-element");
      if (element) {
        const rect = element.getBoundingClientRect();
        const visible = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsInView(visible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isInView && !animationPlayed) {
      setCountUpKeys((prevKeys) => ({
        retentionRate: prevKeys.retentionRate + 1,
        foundation: prevKeys.foundation + 1,
        totalClients: prevKeys.totalClients + 1,
        residentialClients: prevKeys.residentialClients + 1,
        industrialClients: prevKeys.industrialClients + 1,
        deliveryCenters: prevKeys.deliveryCenters + 1,
        cleaningSystemsInstalled: prevKeys.cleaningSystemsInstalled + 1,
        unitsSavedPerWeek: prevKeys.unitsSavedPerWeek + 1,
        panelsCleanedPerWeek: prevKeys.panelsCleanedPerWeek + 1,
      }));
      setAnimationPlayed(true);
    }
  }, [isInView, animationPlayed]);

  useEffect(() => {
    if (hovered && !animationPlayed) {
      setCountUpKeys((prevKeys) => ({
        retentionRate: prevKeys.retentionRate + 1,
        foundation: prevKeys.foundation + 1,
        totalClients: prevKeys.totalClients + 1,
        residentialClients: prevKeys.residentialClients + 1,
        industrialClients: prevKeys.industrialClients + 1,
        deliveryCenters: prevKeys.deliveryCenters + 1,
        cleaningSystemsInstalled: prevKeys.cleaningSystemsInstalled + 1,
        unitsSavedPerWeek: prevKeys.unitsSavedPerWeek + 1,
        panelsCleanedPerWeek: prevKeys.panelsCleanedPerWeek + 1,
      }));
      setAnimationPlayed(true);
    }
  }, [hovered, animationPlayed]);

  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const fadeLeftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const subFadeLeftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="mt-10 mb-8 text-center font-custom">
        <h2 className="text-4xl">
          <span
            className="text-line"
            style={{ color: "black", fontWeight: "normal" }}
          >
            Welcome to {""}
            <span
              className="text-bold"
              style={{ color: "black", fontWeight: "bold" }}
            >
              NES ENERGY SOLUTIONS
            </span>
          </span>
        </h2>
        <p className="title_line">
          <span></span>
          <span></span>
        </p>
      </div>
      <section
        className="relative number-bg lg:py-16 py-20 font-custom"
        style={{ backgroundImage: "url(/assets/IMG20240625162328.webp)" }}
      >
        <div className="container w-full ">
          <div className="w-full text-center my-4">
            <h2 className="text-2xl font-bold">
              10+ Years of Experience - Trust
            </h2>
          </div>
          <div className="block lg:flex items-center ">
            <div className="w-full">
              <div className="sm:w-11/12 lg:w-full pt-4 text-center sm:text-left">
                <ul className="list-none mb-4 text-center sm:text-left">
                  <motion.ul
                    ref={sectionRef}
                    className="ml-2 mb-4"
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    variants={listContainerVariants}
                  >
                    <motion.li variants={fadeLeftVariants}>
                      <motion.strong variants={fadeLeftVariants}>
                        Steadfast Ally in Sustainable Energy
                      </motion.strong>
                      <motion.ul
                        className="ml-4 list-none "
                        variants={subFadeLeftVariants}
                      >
                        <motion.li
                          className="list-none "
                          variants={subFadeLeftVariants}
                        >
                          Dedicated to providing top-notch solar solutions.
                        </motion.li>
                        <motion.li
                          className="list-none "
                          variants={subFadeLeftVariants}
                        >
                          Focused on Solar Panel Installation, Robotic Cleaning
                          & Operation Maintenance.
                        </motion.li>
                      </motion.ul>
                    </motion.li>
                    <motion.li variants={fadeLeftVariants}>
                      <motion.strong variants={fadeLeftVariants}>
                        Strategic Partnership
                      </motion.strong>
                      <motion.ul
                        className="ml-4 list-none "
                        variants={subFadeLeftVariants}
                      >
                        <motion.li
                          className="list-none "
                          variants={subFadeLeftVariants}
                        >
                          More than just a service provider.
                        </motion.li>
                        <motion.li
                          className="list-none "
                          variants={subFadeLeftVariants}
                        >
                          Committed to harnessing solar power for a sustainable
                          future.
                        </motion.li>
                      </motion.ul>
                    </motion.li>
                    <motion.li variants={fadeLeftVariants}>
                      <motion.strong variants={fadeLeftVariants}>
                        Impressive Track Record
                      </motion.strong>
                      <motion.ul
                        className="ml-4 list-none "
                        variants={subFadeLeftVariants}
                      >
                        <motion.li
                          className="list-none "
                          variants={subFadeLeftVariants}
                        >
                          Success and innovation reflected in our numbers.
                        </motion.li>
                        <motion.li
                          className="list-none "
                          variants={subFadeLeftVariants}
                        >
                          Ensuring quality, efficiency, and sustainability.
                        </motion.li>
                      </motion.ul>
                    </motion.li>
                    <motion.li variants={fadeLeftVariants}>
                      <motion.strong variants={fadeLeftVariants}>
                        Mission-Driven
                      </motion.strong>
                      <motion.ul
                        className="ml-4 list-none "
                        variants={subFadeLeftVariants}
                      >
                        <motion.li
                          className="list-none "
                          variants={subFadeLeftVariants}
                        >
                          Belief in the transformative power of solar energy.
                        </motion.li>
                        <motion.li
                          className="list-none "
                          variants={subFadeLeftVariants}
                        >
                          Aiming to create a brighter, greener future.
                        </motion.li>
                      </motion.ul>
                    </motion.li>
                    <motion.li variants={fadeLeftVariants}>
                      <motion.strong variants={fadeLeftVariants}>
                        Be a part of us
                      </motion.strong>
                      <motion.ul
                        className="ml-4 list-none "
                        variants={subFadeLeftVariants}
                      >
                        <motion.li
                          className="list-none "
                          variants={subFadeLeftVariants}
                        >
                          Partner with us to illuminate a sustainable tomorrow.
                        </motion.li>
                        <motion.li
                          className="list-none "
                          variants={subFadeLeftVariants}
                        >
                          Together, let's turn the promise of solar energy into
                          reality.
                        </motion.li>
                      </motion.ul>
                    </motion.li>
                  </motion.ul>
                </ul>

                <div className="text-center sm:text-left">
                  <Link
                    className="rounded font-custom font-medium overflow-hidden btn-primary text-white counter-joinBtn px-2 inline-flex items-center mt-3 lg:my-2"
                    href="/LeaderShip"
                  >
                    About Leadership
                    <svg
                      className="ms-3 arrow-icon"
                      width="16"
                      height="10"
                      viewBox="0 0 16 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5L15 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M11 1L15 5L11 9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-7 flex flex-wrap m-auto ks-counter-mobile mt-10"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="ks-growth-num w-40 offset-1 col-count-2 col-body col-primary text-white flex flex-col justify-between p-3 relative rounded-tl-xl">
                <div
                  className="text-5xl font-semibold"
                  id="count-up-element"
                  onMouseEnter={() => handleMouseEnter("retentionRate")}
                  onMouseLeave={() => handleMouseLeave("retentionRate")}
                >
                  <CountUp
                    key={countUpKeys.retentionRate}
                    start={0}
                    end={90}
                    duration={3}
                    useEasing={true}
                    enableScrollSpy={animationPlayed}
                    scrollSpyOnce={true}
                  />
                  <span style={{ transform: "none" }}></span>%
                </div>
                <div className="text-base font-medium uppercase whitespace-nowrap">
                  Client <br />
                  Retention Rate
                </div>
              </div>
              <div className="ks-growth-num col-count-2 w-40 col-body col-light flex flex-col justify-between p-3 relative">
                <div
                  className="text-5xl font-semibold "
                  id="count-up-element"
                  onMouseEnter={() => handleMouseEnter("foundation")}
                  onMouseLeave={() => handleMouseLeave("foundation")}
                >
                  <CountUp
                    key={countUpKeys.foundation}
                    start={0}
                    end={2012}
                    separator=""
                    enableScrollSpy={true}
                    useEasing={true}
                    scrollSpyOnce={true}
                    duration={3}
                  ></CountUp>
                  <span style={{ transform: "none" }}></span>
                </div>
                <div className="font-medium text-base uppercase">
                  Foundation
                </div>
              </div>
              <div className="ks-growth-num col-count-3 col-body col-dark text-white flex flex-col justify-between p-3 relative rounded-tr-xl">
                <div
                  className="font-medium text-4xl
               text-white-gradient"
                  onMouseEnter={() => handleMouseEnter("totalClients")}
                  onMouseLeave={() => handleMouseLeave("totalClients")}
                >
                  <CountUp
                    key={countUpKeys.totalClients}
                    end={2000}
                    separator=""
                    start={0}
                    enableScrollSpy={true}
                    useEasing={true}
                    scrollSpyOnce={true}
                    duration={3}
                  ></CountUp>
                  <span style={{ transform: "none" }}></span>
                  <span className="text-primary">+</span>
                </div>
                <div className="font-medium text-base uppercase">
                  Total Clients
                </div>
              </div>
              <div className="ks-growth-num col-count-6 col-body col-dark text-white flex flex-col justify-between p-3 relative rounded-tl-xl rounded-bl-xl">
                <div
                  className=" text-5xl font-semibold text-right text-white-gradient"
                  onMouseEnter={() => handleMouseEnter("residentialClients")}
                  onMouseLeave={() => handleMouseLeave("residentialClients")}
                >
                  <CountUp
                    key={countUpKeys.residentialClients}
                    start={0}
                    enableScrollSpy={true}
                    useEasing={true}
                    scrollSpyOnce={true}
                    duration={3}
                    end={1200}
                    separator=""
                  ></CountUp>
                  <span style={{ transform: "none" }}></span>
                  <span className="text-primary">+</span>
                </div>
                <div className="text-xl font-medium uppercase">
                  Residential Clients
                </div>
                <div className="text-sm relative workforce-arrow">
                  and still growing
                </div>
              </div>
              <div className="ks-growth-num col-count-3 col-body col-light flex flex-col justify-between p-3 relative">
                <div
                  className="text-5xl font-semibold "
                  onMouseEnter={() => handleMouseEnter("industrialClients")}
                  onMouseLeave={() => handleMouseLeave("industrialClients")}
                >
                  <CountUp
                    key={countUpKeys.industrialClients}
                    start={0}
                    enableScrollSpy={true}
                    useEasing={true}
                    scrollSpyOnce={true}
                    duration={3}
                    end={800}
                    separator=""
                  ></CountUp>
                  <span style={{ transform: "none" }}></span>
                  <span className="text-primary">+</span>
                </div>
                <div className="text-sm font-medium text-center uppercase">
                  Industrial / Commercial Clients
                </div>
              </div>
              <div className="ks-growth-num col-count-3 col-body col-dark text-white flex flex-col justify-between p-3 relative rounded-tr-xl">
                <div
                  className="font-semibold text-right text-5xl display-3 text-white-gradient"
                  onMouseEnter={() => handleMouseEnter("deliveryCenters")}
                  onMouseLeave={() => handleMouseLeave("deliveryCenters")}
                >
                  <CountUp
                    key={countUpKeys.deliveryCenters}
                    start={0}
                    enableScrollSpy={true}
                    useEasing={true}
                    scrollSpyOnce={true}
                    duration={3}
                    end={4}
                    separator=""
                  ></CountUp>
                  <span style={{ transform: "none" }}></span>
                </div>
                <div className="text-base font-medium text-right max-sm:text-center max-sm:text-sm uppercase space-xl-nowrap">
                  Delivery Centers
                </div>
                <div className="mt-4 md:hidden lg:hidden d-block globe-mobile">
                  <img
                    alt="earth"
                    width="90"
                    height="90"
                    decoding="async"
                    data-nimg="1"
                    src="/assets/Pointers/earth4.gif"
                    data-lazy-src="/wp-content/uploads/2023/12/earth-2024.webp"
                    data-ll-status="loaded"
                    className="entered lazyloaded"
                  />
                  <noscript>
                    <img
                      alt="earth"
                      loading="lazy"
                      width="90"
                      height="90"
                      decoding="async"
                      data-nimg="1"
                      src="/wp-content/uploads/2023/12/earth-2024.webp"
                    />
                  </noscript>
                </div>
               
                <div className="mt-2 md:none block globe-mobile"></div>
              </div>
              <div className="ks-growth-num offset-2  col-count-3 col-body col-light flex flex-col justify-between p-3  relative rounded-bl-xl">
                <div
                  className="font-semibold text-4xl"
                  id="count-up-element"
                  onMouseEnter={() =>
                    handleMouseEnter("cleaningSystemsInstalled")
                  }
                  onMouseLeave={() =>
                    handleMouseLeave("cleaningSystemsInstalled")
                  }
                >
                  <CountUp
                    key={countUpKeys.cleaningSystemsInstalled}
                    start={0}
                    enableScrollSpy={true}
                    useEasing={true}
                    scrollSpyOnce={true}
                    duration={3}
                    end={100}
                    separator=""
                  ></CountUp>
                  <span style={{ transform: "none" }}></span>
                  <span className="text-primary">+</span>
                </div>
                <div className="font-medium text-sm text-right uppercase">
                  Robotics Cleaning system Installed
                </div>
              </div>

              <div className="ks-growth-num  w-2/6  flex-shrink-0 flex-grow-0  col-body col-light   flex flex-col justify-between p-3 relative">
                <div
                  className="font-semibold text-4xl "
                  id="count-up-element"
                  onMouseEnter={() => handleMouseEnter("panelsCleanedPerWeek")}
                  onMouseLeave={() => handleMouseLeave("panelsCleanedPerWeek")}
                >
                  <CountUp
                    key={countUpKeys.panelsCleanedPerWeek}
                    start={0}
                    enableScrollSpy={true}
                    useEasing={true}
                    scrollSpyOnce={true}
                    duration={3}
                    end={7000}
                    separator=""
                  ></CountUp>
                  <span style={{ transform: "none" }}></span>
                  <span className="text-primary">+</span>
                </div>
                <div className="font-medium text-xl text-right uppercase ">
                  Solar Panel Cleaned per Week
                </div>
              </div>
              <div className=" md:flex justify-center ks-growth-num col-count-3 col-dark col-dark-2 rounded-br-xl border-0 max-sm:hidden">
                <img
                  alt="earth"
                  loading="lazy"
                  width={140}
                  height={140}
                  decoding="async"
                  data-nimg="1"
                  className="mx-auto"
                  src="/assets/Pointers/earth4.gif"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
