declare global {
  interface Window {
    particlesJS: any; // Adjust the type as per your usage
  }
}

import React, { useEffect } from "react";

const ParticlesComponent: React.FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!window.particlesJS) {
        console.error("particlesJS is not loaded.");
        return;
      }

      window.particlesJS("particles-js-service", {
        particles: {
          number: {
            value: 20,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: ["#0075bc", "#0075bc"],
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "red",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "img/github.webp",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.2,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 6,
            random: true,
            anim: {
              enable: false,
              speed: 20,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#002f63",
            opacity: 0.8,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
              parallax: {
                enable: false,
                force: 2,
                smooth: 10,
              },
            },
            // onclick: {
            //   enable: true,
            //   mode: "push",
            // },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  return <div id="particles-js-service" className="particles2"></div>;
};

export default ParticlesComponent;
