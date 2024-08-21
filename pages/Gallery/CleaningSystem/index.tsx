import React from "react";
import MultipleImageComponent from "@/components/common/MultipleImageComponent";
import ScrollToTop from "@/components/ScrollToTop";
import HeroImageSection from "@/components/common/HeroImageSection";
import { CleaningSystems } from "@/data/Project/CleaningSystem/CleaningSystem";

export default function CleaningSystem() {
  return (
    <div>
      <ScrollToTop />
      <div className="flex flex-col">
        <div className="relative">
          <HeroImageSection
            title="Robotic Cleaning System"
          />
        </div>
      </div>
      <MultipleImageComponent
        imageData={CleaningSystems}
        title="Robotic Cleaning System"
      />
    </div>
  );
}
