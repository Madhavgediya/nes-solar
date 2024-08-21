import ScrollToTop from "@/components/ScrollToTop";
import HeroImageSection from "@/components/common/HeroImageSection";
import React from "react";

export default function Patents() {
  return (
    <>
      <ScrollToTop />
  
        <div className="flex flex-col">
        <div className="relative">
          <HeroImageSection title="Patents" path={"/assets/Patents/iStock-1195604133.webp"} />
        </div>
      </div>
    
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold mb-2">
              Single brush solar panel cleaning robots
            </h2>
            <p className="text-gray-700">
              This is the content of the first box.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold mb-2">
              Dual brush solar panel cleaning robots
            </h2>
            <p className="text-gray-700">
              Dual brush solar panel cleaning robots
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold mb-2">Electronics </h2>
            <p className="text-gray-700">
              This is the content of the third box.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold mb-2">Global Patentss</h2>
            <p className="text-gray-700">
              This is the content of the fourth box.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
