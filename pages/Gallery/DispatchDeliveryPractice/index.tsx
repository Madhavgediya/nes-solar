import React from "react";
import ScrollToTop from "@/components/ScrollToTop";
import HeroImageSection from "@/components/common/HeroImageSection";
import MultipleImageComponent from "@/components/common/MultipleImageComponent";
import { DispatchDeliveryPractices } from "@/data/Project/DispatchDeliveryPractice/DispatchDeliveryPractice";

export default function DispatchDeliveryPractice() {
  return (
    <div>
      <ScrollToTop />
      <div className="flex flex-col">
        <div className="relative">
          <HeroImageSection
            title="Dispatch Delivery Practice"
          />
        </div>
     
      </div>
      <MultipleImageComponent
        imageData={DispatchDeliveryPractices}
        title="Dispatch Delivery Practice"
      />
    </div>
  );
}
