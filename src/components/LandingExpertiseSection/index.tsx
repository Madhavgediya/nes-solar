import Link from "next/link";
import React from "react";
import Image from 'next/image';

export default function LandingExpertiseSection() {
  return (
    <div id="c_static_001_P_5019-1666710560533" className="response-animated">
      <div className="e_container-1 s_layout fa_wrapper response-transition">
        <div className="mb-14 text-center">
          <h2 className="text-5xl">
            <span
              className="text-line"
              style={{ color: "black", fontWeight: "bold" }}
            >
              Expertise
            </span>
          </h2>
          <p className="title_line">
            <span></span>
            <span></span>
          </p>
        </div>
        <ul className="cards-Expertise">
          <li>
            <Link href="/SolarPlanningInstallation" className="cardExpert">
              <img
                src="/assets/Expertise/expertise-39520221107.webp"
                className="card__image"
                alt=""
                width={100} height={100}
              />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img
                    className="card__thumb"
                    src="/assets/Expertise/6802629-landing.webp"
                    alt=""
                    width={100} height={100}
                  />

                  <div className="card__header-text">
                    <h3 className="card__title">
                      Solar Planning & Installation
                    </h3>
                  </div>
                </div>
                <p className="card__description">
                  From idea to installation,our engineering team will help
                  customer to give best rooftop solar solutions as per site
                  condition.
                </p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/SolarOperationAndMaintenance" className="cardExpert">
              <img
                src="/assets/Expertise/expertise-80720220414.webp"
                className="card__image"
                alt=""
                width={100} height={100}
              />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img
                    className="card__thumb"
                    src="/assets/Expertise/sol-pl-01.webp"
                    alt=""
                    width={100} height={100}
                  />
                  <div className="card__header-text">
                    <h3 className="card__title">
                      {" "}
                      Solar Operations & Maintenance
                    </h3>
                  </div>
                </div>
                <p className="card__description">
                  Our team can operate and maintain rooftop solar power plant,
                  ensuring uninterrupted functionality of solar power plant to
                  get maximum output
                </p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/ProjectFinance" className="cardExpert">
              <img
                src="/assets/Expertise/expertise-88720220415.webp"
                className="card__image"
                alt=""
                width={100} height={100}
              />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img
                    className="card__thumb"
                    src="/assets/Expertise/2086345-200-landing.webp"
                    alt=""
                    width={100} height={100}
                  />
                  <div className="card__header-text">
                    <h3 className="card__title">Project Finance</h3>
                  </div>
                </div>
                <p className="card__description">
                  We provide an end-to-end platform for digital and hassle-free
                  journey to the loan applicants for financing Solar projects.
                </p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
