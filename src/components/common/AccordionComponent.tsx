import { Key, useState } from "react";

interface AccordionProps {
  title: string;
  answer?: string;
}

type AccordionItem = {
  id: string;
  ques: string;
  ans: string;
};

type MyComponentProps = {
  accordionData: AccordionItem[];
};

const AccordionComponent: React.FC<MyComponentProps> = ({
  accordionData = [],
}) => {
  return (
    <div className="w-full">
      <div className="accordion-wrapper">
        {accordionData?.map(
          (
            d: {
              id: Key | null | undefined;
              ques: string;
              ans: string | undefined;
            },
            index: number
          ) => {
            return (
              <div
                className={` rounded-sm bg-white px-8 py-2 shadow-three dark:bg-gray-dark  lg:px-8`}
                data-wow-delay=".15s"
                key={d.id}
              >
                <Accordion title={d.ques} answer={d.ans} />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default AccordionComponent;

const Accordion: React.FC<AccordionProps> = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="accordion-item border-b-2 border-gray-200">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="w-full flex items-center text-left"
      >
        <div
          className={`shrink-0 flex items-center justify-center w-6 h-6 bg-[#203f69] transition-transform duration-200 ease-out ${
            accordionOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            className="fill-white"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`origin-center transform transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
          </svg>
        </div>

        <span className="text-base font-semibold ml-2">{title}</span>
      </button>
      <div
        className={` overflow-hidden text-sm text-body-color transition-all duration-300 ease-in-out dark:text-body-color-dark mb-4 ${
          accordionOpen ? "max-h-screen my-4" : "max-h-0"
        }`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
};
