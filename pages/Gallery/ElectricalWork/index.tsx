import React from "react";
import ScrollToTop from "@/components/ScrollToTop";
import HeroImageSection from "@/components/common/HeroImageSection";
import MultipleImageComponent from "@/components/common/MultipleImageComponent";
import { ElectricalWorks } from "@/data/Project/ElectricalWork/ElectricalWork";

export default function ElectricalWork() {
  return (
    <div>
      <ScrollToTop />
      <div className="flex flex-col">
        <div className="relative">
          <HeroImageSection
            title="Electrical Work"
          />
        </div>
      </div>
      <MultipleImageComponent
        imageData={ElectricalWorks}
        title="Electrical Work"
      />
    </div>
  );
}
