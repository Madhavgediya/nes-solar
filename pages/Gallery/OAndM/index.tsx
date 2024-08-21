import React from "react";
import ScrollToTop from "@/components/ScrollToTop";
import HeroImageSection from "@/components/common/HeroImageSection";
import MultipleImageComponent from "@/components/common/MultipleImageComponent";
import { OAndMData } from "@/data/Project/O&M/O&M";

export default function OAndM() {
  return (
    <div>
      <ScrollToTop />
      <div className="flex flex-col">
        <div className="relative">
          <HeroImageSection
            title="O&M"
          />
        </div>
      </div>

      <MultipleImageComponent
        imageData={OAndMData}
        title="O&M"
      />
    </div>
  );
}
