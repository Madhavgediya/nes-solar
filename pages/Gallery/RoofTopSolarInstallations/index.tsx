import React from "react";
import ScrollToTop from "@/components/ScrollToTop";
import HeroImageSection from "@/components/common/HeroImageSection";
import MultipleImageComponent from "@/components/common/MultipleImageComponent";
import { RoofTopSolarInstallation } from "@/data/Project/RoofTopSolarInstallations/RoofTopSolarInstallations";

export default function RoofTopSolarInstallations() {
  return (
    <div>
      <ScrollToTop />
      <div className="flex flex-col">
        <div className="relative">
          <HeroImageSection
            title="RoofTop Solar Installations"
          />
        </div>
      </div>

      <MultipleImageComponent
        imageData={RoofTopSolarInstallation}
        title="RoofTop Solar Installations"
      />
    </div>
  );
}
