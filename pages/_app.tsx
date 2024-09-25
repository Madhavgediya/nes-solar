import type { AppProps } from "next/app";
import { hotjar } from "react-hotjar";
import { useEffect } from "react";
import "../pages/globals.css";
import "../pages/SolarPlanningInstallation/SolarPlanningInstallation.css";
import "./LeaderShip/LeaderShip.css";
import "../pages/Gallery/Gallery.css";
import "../pages/Gallery/CivilWork/CivilWork.css";
import "../pages/Awards/Awards.css";
import "../src/components/ProductSection/ProductSection.css";
import "../src/components/LandingSolarCleaning/LandingSolarCleaning.css";
import "../src/components/CounterSection/CounterSection.css";
import "../src/components/Header/Header.css";
import "../pages/InquiryForm/Inquiry.css";
import "../pages/Patents/Patents.css";
import RootLayout from "@/components/Layout";
import "../public/fonts/fonts.css";
import "../pages/Expertise/Expertise.css";
import "../src/components/OurClient/OurClient.css";
import "../pages/Contact/Contact.css";
import "../src/components/Hero/Hero.css";
import Head from "next/head";
import { StepperProvider } from "../src/context/StepperContext";
// export const metadata = {
//   title: "NES Solar",
//   description:
//     "Welcome to NES Solar. Explore our innovative solar energy solutions and see how we can help you harness the power of the sun. Let's connect and discuss your sustainable energy needs!",
//   keywords: [
//     "solar energy",
//     "solar solutions",
//     "renewable energy",
//     "solar panels",
//     "clean energy",
//     "sustainable energy",
//     "solar power systems",
//     "green energy",
//     "solar technology",
//     "energy efficiency",
//   ],
//   icons: [
//     {
//       rel: "icon",
//       url: "../favicon.ico",
//     },
//   ],
// };

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    hotjar.initialize(3848934, 6);
  }, []);

  return (
    <>
      <Head>
        <title>NES Solar</title>
        <meta name="title" content="NES Solar" />
        <meta
          name="description"
          content="Welcome to NES Solar. Explore our innovative solar energy solutions and see how we can help you harness the power of the sun. Let's connect and discuss your sustainable energy needs!"
        />
        <meta
          name="keywords"
          content="solar energy, solar solutions, renewable energy, solar panels, clean energy, sustainable energy, solar power systems, green energy, solar technology, energy efficiency"
        />
        <meta name="image" content="/assets/nessolar_thum.png" />
        <meta name="thumbnail" content="/assets/nessolar_thum.png" />
        <meta property="og:image" content="/assets/nessolar_thum.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <link rel="icon" href="../favicon.ico" />
      </Head>
      <StepperProvider>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </StepperProvider>
    </>
  );
}
