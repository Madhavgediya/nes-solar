import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className=" bg-[#edf0f3] p-4 font-custom">
        <div className="mx-auto max-w-screen-xl px-4 pb-3 pt-16 sm:px-6 lg:px-8 lg:pt-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="flex  text-teal-600 sm:justify-start">
                <Image
                  // src="/assets/NES SVG.webp"
                  src="/assets/NES_Solar_logo_f.svg"
                  alt="solar logo"
                  width={100}
                  height={100}
                  className="w-32"
                />
              </div>

              <p className="mt-6 max-w-md  leading-relaxed sm:max-w-xs sm:text-left text-primary font-custom">
                10+ Years of Experience-Trust
              </p>
              <ul className="mt-8 flex  gap-7 sm:justify-start md:gap-5">
                <li className="w-10 h-10 text-primary border-solid border-2 border-[#203F69] rounded-full flex justify-center items-center font-bold transition-all delay-0.3 hover:bg-white hover:cursor-pointer hover:text-[#203F69]">
                  <a
                    href="https://www.facebook.com/NESEnergySolutions/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-facebook-f text-xl"></i>
                  </a>
                </li>
                <li className="w-10 h-10 text-primary border-solid border-2 border-[#203F69] rounded-full flex justify-center items-center font-bold transition-all delay-0.3 hover:bg-white hover:cursor-pointer hover:text-[#203F69]">
                  <a
                    href="https://www.linkedin.com/company/nes-energy-solutions/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-linkedin text-xl"></i>
                  </a>
                </li>
                <li className="w-10 h-10 text-primary border-solid border-2 border-[#203F69] rounded-full flex justify-center items-center font-bold transition-all delay-0.3 hover:bg-white hover:cursor-pointer hover:text-[#203F69]">
                  <a
                    href="https://www.instagram.com/nessolar.in/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-instagram text-xl"></i>
                  </a>
                </li>

                <li className="w-10 h-10 text-primary border-solid border-2 border-[#203F69] rounded-full flex justify-center items-center font-bold transition-all delay-0.3 hover:bg-white hover:cursor-pointer hover:text-[#203F69]">
                  <a
                    href="https://api.whatsapp.com/send?phone=919825071551&amp;text=Hello%20NES%20Solar%20I%20Am%20Looking%20For"
                    target="_blank"
                  >
                    <i className="fa-brands fa-whatsapp text-xl"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2 font-custom">
              <div className=" sm:text-left">
                <p className="text-lg font-bold text-primary">Expertise</p>

                <ul className="mt-4 space-y-2 text-sm">
                  <li>
                    <Link
                      className="text-primary transition hover:text-gray-700/75"
                      href="/SolarPlanningInstallation"
                    >
                      Solar EPC
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/SolarPanelCleaningRobot"
                      className="text-primary transition hover:text-gray-700/75"
                    >
                      Solar Panel Cleaning Robot
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-primary transition hover:text-gray-700/75"
                      href="/SolarOperationAndMaintenance"
                    >
                      Solar O&M
                    </Link>
                  </li>
                </ul>
              </div>

              <div className=" sm:text-left font-custom">
                <p className="text-lg font-bold text-primary">Useful Links</p>

                <ul className="mt-4 space-y-2 text-sm">
                  <li>
                    <Link
                      className="text-primary transition hover:text-gray-700/75"
                      href="/About"
                    >
                      Why Us
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-primary transition hover:text-gray-700/75"
                      href="/LeaderShip"
                    >
                      Leadership
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-primary transition hover:text-gray-700/75"
                      href="/Gallery"
                    >
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-primary transition hover:text-gray-700/75"
                      href="/Awards"
                    >
                      Awards
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="sm:text-left font-custom">
                <p className="text-lg font-bold text-primary">Contact Us</p>

                <ul className="mt-4 space-y-2 text-sm">
                  <li>
                    <a
                      className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                      href="mailto:sales@nessolar.in"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 shrink-0 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>

                      <span className="flex-1 text-primary">
                        sales@nessolar.in
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                      href="tel:9825071551"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 shrink-0 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>

                      <span className="flex-1 text-primary">
                        +91 9825071551
                      </span>
                    </a>
                  </li>

                  <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                    <a
                      href="https://www.google.com/maps/place/NES+Energy+Solutions/@23.0600407,72.5629188,136m/data=!3m1!1e3!4m5!3m4!1s0x395e851b56d1b85b:0x8dd658ce33cee08b!8m2!3d23.0602187!4d72.5628688"
                      className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 shrink-0 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>

                      <address className="-mt-0.5 flex-1 not-italic text-primary">
                        409 , Sakar - 3 , Opp. old high Court, Nr. Income tax
                        circle, Ashramroad , Ahmedabad - 380009
                      </address>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-4 border-t border-gray-100 pt-2 font-custom">
            <div className="text-center sm:flex sm:justify-center sm:text-left">
              <p className="mt-4 text-sm text-primary sm:order-first sm:mt-0">
                &copy; 2022 - 2023 All Rights Reserved by NES Energy Solutions.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
