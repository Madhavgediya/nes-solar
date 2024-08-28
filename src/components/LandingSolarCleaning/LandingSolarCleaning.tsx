import Image from "next/image";
import React from "react";
import { useEffect, useRef } from "react";
import CleaningSliderComponent from "../CleaningSliderComponent";

export default function LandingSolarCleaning() {
  const items = [
    {
      title: "Payback",
      text: "12-18 months",
      path: "/assets/products/timetable.webp",
    },
    {
      title: "Cleaning time",
      text: "5 seconds per panel",
      path: "/assets/products/sparkling.webp",
    },
    {
      title: "Different options",
      text: "Of brush up to 6 m",
      path: "/assets/products/brush.webp",
    },
    {
      title: "Remote controlled ",
      text: "and battery operated",
      path: "/assets/products/device_wireless.webp",
    },
    {
      title: "Self-adaption to ",
      text: "height and inclination",
      path: "/assets/products/inclination.webp",
    },
  ];

  const itemsMobile = [
    {
      title: "Payback",
      text: "12-18 months",
    },
    {
      title: "Cleaning time",
      text: "5 seconds per panel",
    },
    {
      title: "Robots Length",
      text: "up to 6 m",
    },
    {
      title: "Operating ",
      text: "Fully Automatic",
    },
  ];
  const listItemRefs = useRef<HTMLLIElement[]>([]);

  const handleIntersection = (
    entries: any[],
    observer: {
      unobserve: (arg0: any) => void;
      observe: (arg0: HTMLLIElement) => void;
    }
  ) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const targetIndex = parseInt(
          entry.target.getAttribute("data-index"),
          10
        );
        entry.target.classList.add("active");
        observer.unobserve(entry.target);

        const nextIndex = targetIndex + 1;
        if (nextIndex < listItemRefs.current.length) {
          observer.observe(listItemRefs.current[nextIndex]);
        }
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.3,
    });

    listItemRefs.current.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  const listItems = [
    { number: "1", text: "Increased daily power output up to 17%" },
    {
      number: "2",
      text: "No labor required",
    },
    {
      number: "3",
      text: "Water free cleaning",
    },
    { number: "4", text: "Protection of solar panel warranty" },
  ];
  return (
    <section className="response-animated mt-10 font-custom cleaning-section">
      <div className="linear-bg-solar">
        <div className="mt-10 text-center">
          <h2 className="text-4xl">
            <span
              className="text-line"
              style={{ color: "black", fontWeight: "normal" }}
            >
              Solar Panel{" "}
              <span
                className="text-bold"
                style={{ color: "black", fontWeight: "bold" }}
              >
                Cleaning Robots
              </span>
            </span>
          </h2>
          <p className="title_line">
            <span></span>
            <span></span>
          </p>
        </div>

        <div className="p-4">
          <div className="mb-5">
            <div className="bg-acp-gray md:bg-transparent ">
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 gap-[1px] align-items-center justify-center md:flex md:justify-center">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="
  aspect-auto 
  sm:aspect-square 
  p-3 
  sm:p-4 
  md:p-5 
  text-center 
  border-b-[0px]      
  md:border-r-[1px] 
  flex 
  flex-col 
  justify-center 
  items-center
  "
                  >
                    <a
                      id="83c8f8f7-f37c-43a1-be4d-9517ac37417d"
                      type="external"
                      href="https://denkerwulf.de/"
                      className="h-auto md:w-auto md:h-auto flex justify-center items-center"
                    >
                      <Image
                        alt="icons"
                        fetchPriority="high"
                        width="300"
                        height="300"
                        decoding="async"
                        data-nimg="1"
                        className="max-h-14"
                        src={item.path}
                        style={{
                          color: "transparent",
                          objectFit: "contain",
                        }}
                      />
                    </a>
                    <div className="mt-4 max-w-[300px] mx-auto">
                      <div className="font-medium">{item.title}</div>
                      <div className="font-medium">{item.text}</div>
                    </div>
                  </div>
                ))}
              </div>
              {/* <div className="circle-container lg:!hidden md:!hidden">
                {itemsMobile.map((item, index) => (
                  <div className="circle" key={index}>
                    <h2>{item.title}</h2>
                    <div className="circle-content">
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div> */}
            </div>
          </div>

          <div className="flex flex-col items-center relative mt-10 max-sm:mt-20  lg:justify-end lg:pb-12 ">
            <div
              className={`
              left-0 h-[65vh] w-full md:h-[60vh] sm:h-[70vh] lg:h-[80vh]`}
            >
              <video
                style={{
                  background: "black",
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                autoPlay
                muted
                ref={(videoRef) => {
                  if (videoRef) {
                    videoRef.playbackRate = 0.5;
                    videoRef.addEventListener("timeupdate", () => {
                      if (videoRef.currentTime < 39) {
                        videoRef.currentTime = 39;
                      }
                      if (videoRef.currentTime >= 59) {
                        videoRef.currentTime = 39;
                      }
                    });
                  }
                }}
              >
                <source
                  src="/assets/products/Cleaning_Video.mp4"
                  type="video/mp4"
                />
                Your browser does not support this video.
              </video>
            </div>
            <h1 className="absolute top-10 left-10 text-white lg:text-5xl sm:text-sm md:text-6xl text-left z-10">
              Why Robotic Cleaning for Solar Panel?
            </h1>
            <div className="cleaning-info-box-dot-indicators cleaning-info-box-dot-indicators-display  overflow-x-auto w-auto">
              <ul className="flex space-x-6 w-full sm:w-full px-4 max-sm:hidden">
                <ListItem
                  ref={(el) => el && (listItemRefs.current[0] = el)}
                  number="1"
                  text="Increased daily power output up to 17%"
                  dataIndex={0}
                />
                <div className="border-r-2 border-r-[#FFFFFF33]"></div>

                <ListItem
                  ref={(el) => el && (listItemRefs.current[1] = el)}
                  number="2"
                  text="No labor required"
                  dataIndex={1}
                />
                <div className="border-r-2 border-r-[#FFFFFF33]"></div>

                <ListItem
                  ref={(el) => el && (listItemRefs.current[2] = el)}
                  number="3"
                  text="Water free cleaning"
                  dataIndex={2}
                />
                <div className="border-r-2 border-r-[#FFFFFF33]"></div>

                <ListItem
                  ref={(el) => el && (listItemRefs.current[3] = el)}
                  number="4"
                  text="Protection of solar panel warranty"
                  dataIndex={3}
                />
              </ul>
            </div>
            <div className="cleaning-info-box-dot-indicators overflow-x-auto w-full sm:w-auto lg:hidden">
              <CleaningSliderComponent
                listItems={listItems}
                listItemRefs={listItemRefs}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// eslint-disable-next-line react/display-name
const ListItem = React.forwardRef<
  HTMLLIElement,
  { number: string; text: string; dataIndex: number }
>(({ number, text, dataIndex }, ref) => {
  return (
    <>
      <li
        className="cleaning-text-thumbnail-list transition-all duration-500 ease-linear flex-shrink-0 cursor-pointer"
        ref={ref}
        data-index={dataIndex}
        style={{ transitionDelay: `${dataIndex * 0.1}s` }}
      >
        <div className="cleaning-info-text-thumb-number text-white">
          {number}
        </div>
        <div className="cleaning-info-wrap">
          <span className="dot-indicator"></span>
        </div>
        <div className="cleaning-info-text-thumb-caption">
          <div className="cleaning-info-number-text cleaning-info-key-1">
            {text}
          </div>
          <div className="cleaning-info-number-text cleaning-info-key-2"></div>
        </div>
      </li>
    </>
  );
});
