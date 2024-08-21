import React from "react";
import ScrollToTop from "@/components/ScrollToTop";
import HeroImageSection from "@/components/common/HeroImageSection";
import MultipleImageComponent from "@/components/common/MultipleImageComponent";
import { MountingStructureInstallations } from "@/data/Project/Mounting Structure Installation/MountingStructureInstallation";

export default function MountingStructureInstallation() {
  return (
    <div>
      <ScrollToTop />

      <div className="flex flex-col">
        <div className="relative">
          <HeroImageSection
            title="Mounting Structure Installation"
          />
        </div>
      
      </div>
      <MultipleImageComponent
        imageData={MountingStructureInstallations}
        title="Mounting Structure Installation"
      />
    </div>
  );
}
