import React from "react";
import ScrollToTop from "@/components/ScrollToTop";
import HeroImageSection from "@/components/common/HeroImageSection";
import MultipleImageComponent from "@/components/common/MultipleImageComponent";
import { CivilImages } from "@/data/Project/CivilWork/CivilImages";
export default function CivilWork() {
  return (
    <div>
      <ScrollToTop />
      <div className="flex flex-col">
        <div className="relative">
          <HeroImageSection
            title="Civil Work"
          />
        </div>{" "}
      </div>
      <MultipleImageComponent imageData={CivilImages} title="Civil Work" />
    </div>
  );
}
