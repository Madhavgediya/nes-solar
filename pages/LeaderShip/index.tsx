/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import ScrollToTop from "@/components/ScrollToTop";
import HeroImageSection from "@/components/common/HeroImageSection";
import Image from "next/image";

export default function LeaderShip() {
  return (
    <div>
      <ScrollToTop />
      <div className="flex flex-col">
        <div className="relative">
          <HeroImageSection title="LeaderShip" />
        </div>
      </div>

      <section className="py-32 px-8 font-custom">
        <div className="blog-slider">
          <div className="blog-slider__wrp swiper-wrapper">
            <div className="blog-slider__item swiper-slide !flex">
              <div
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="500"
                data-aos-mirror="true"
                data-aos-once="true"
              >
                <div className="blog-slider__img">
                  <img
                    src="/assets/Team/team-23620220703.webp"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="500"
                data-aos-mirror="true"
                data-aos-once="true"
              >
                <div className="blog-slider__content">
                  <div className="blog-slider__title">Hardik Shah</div>
                  <span className="blog-slider__code">Founder & CEO</span>
                  <div className="blog-slider__text">
                    Mr. Hardik Shah, the driving force behind NES Energy
                    Solutions, embarked on his journey into the realm of
                    renewable energy with a Bachelor's degree (Mechanical
                    Engineering) from India and further earned his expertise
                    with a Master's degree (Mechanical Engineering) from the
                    USA.
                  </div>
                  <div className="blog-slider__text">
                    In 2012, fueled by his passion for innovation and
                    sustainability, he established NES Energy Solutions,
                    initially focusing on pioneering solar technology. In 2021,
                    recognizing the burgeoning potential of solar robotics, Mr.
                    Shah spearheaded NES Energy Solutions into solar robot
                    manufacturing. Leveraging his extensive experience and
                    forward-thinking approach, he steered the company towards
                    developing cutting-edge solar panel cleaning robots,
                    revolutionizing the industry's approach to maintenance and
                    efficiency.
                  </div>{" "}
                  <div className="blog-slider__text">
                    {" "}
                    Over the years, his unwavering commitment to excellence and
                    innovation has firmly established NES Energy Solutions as a
                    leader in solar technology and manufacturing.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-slider__pagination"></div>
        </div>
      </section>
    </div>
  );
}
