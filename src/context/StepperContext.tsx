import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useRef,
} from "react";
import { saveFormData, getFormData } from "../config/firebase/fireStoreHelpers";
import { useIsMobile } from "@/utils/useIsMobile";
import { useRouter } from "next/router";
import CustomModal from "@/components/common/CustomModal";

interface StepperContextProps {
  currentStep: number;
  nextStep: () => void;
  prevStep: (currentStep: number) => void;
  formData: Record<string, any>;
  updateFormData: (data: Record<string, any>) => void;
  setStepSequence: (requirement: string | number) => void;
  selectedOption: string;
  setSelectedOption: any;
  steps: number[];
  saveFormData: (data: Record<string, any>) => void;
  loadFormData: () => void;
}

const defaultContextValues: StepperContextProps = {
  currentStep: 1,
  nextStep: () => {},
  prevStep: () => {},
  formData: {},
  updateFormData: () => {},
  setStepSequence: () => {},
  selectedOption: "",
  setSelectedOption: "",
  steps: [],
  saveFormData: () => {},
  loadFormData: () => {},
};

const StepperContext = createContext<StepperContextProps>(defaultContextValues);

export const StepperProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const isMobile = useIsMobile();
  const [currentStep, setCurrentStep] = useState<number>(isMobile ? 0 : 1);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [steps, setSteps] = useState<number[]>(isMobile ? [0] : [1]);
  const stepSequences: Record<string, number[]> = {
    "Residential Solar": [2, 4, 5, 6, 13, 7, 9, 10, 11, 12],
    "Industrial or Commercial Solar": [3, 4, 5, 6, 13, 7, 9, 10, 11, 12],
    "Solar Panel Cleaning Robot": [4, 14, 16, 9, 10, 11, 12],
    "O&M": [4, 15, 9, 10, 11, 12],
  };
  const [selectedOption, setSelectedOption] = useState(
    formData.requirement || ""
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const inactivityTimer = useRef<any>(null);
  const INACTIVITY_LIMIT = 30000;
  const router = useRouter();

  useEffect(() => {
    const adjustStepsAndCurrentStep = () => {
      if (isMobile) {
        setSteps((prevSteps) => [0, ...prevSteps.filter((step) => step !== 0)]);
        setCurrentStep(0);
      } else {
        setSteps((prevSteps) => {
          const newSteps = prevSteps.filter((step) => step !== 0);
          return newSteps.length ? newSteps : [1];
        });
        setCurrentStep((prev) => (steps.includes(prev) ? prev : 1));
      }
    };

    adjustStepsAndCurrentStep();
  }, [isMobile]);

  useEffect(() => {
    const resetInactivityTimer = () => {
      if (inactivityTimer.current) {
        clearTimeout(inactivityTimer.current);
      }
      inactivityTimer.current = setTimeout(() => {
        setIsModalOpen(true);
      }, INACTIVITY_LIMIT);
    };

    const route = router.pathname;
    if (route.includes("/InquiryForm")) {
      window.addEventListener("mousemove", resetInactivityTimer);
      window.addEventListener("keydown", resetInactivityTimer);
      window.addEventListener("mousedown", resetInactivityTimer);
      window.addEventListener("touchstart", resetInactivityTimer);

      resetInactivityTimer();

      return () => {
        clearTimeout(inactivityTimer.current);
        window.removeEventListener("mousemove", resetInactivityTimer);
        window.removeEventListener("keydown", resetInactivityTimer);
        window.removeEventListener("mousedown", resetInactivityTimer);
        window.removeEventListener("touchstart", resetInactivityTimer);
      };
    }
  }, [router.pathname]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleContinue = () => {
    setIsModalOpen(false);
    clearTimeout(inactivityTimer.current);
  };

  const setStepSequence = (requirement: string | number) => {
    let stepSequence =
      stepSequences[requirement as string] || (isMobile ? [0] : [1]);

    if (isMobile) {
      stepSequence = [...stepSequence];
    }

    setSteps(stepSequence);
    setCurrentStep(stepSequence[0]);
  };

  const nextStep = () => {
    setCurrentStep((prev) => {
      const currentIndex = steps.indexOf(prev);
      if (currentIndex !== -1 && currentIndex < steps.length - 1) {
        return steps[currentIndex + 1];
      }
      return prev;
    });
  };

  const prevStep = (currentStep: number) => {
    const currentIndex = steps.indexOf(currentStep);

    if (isMobile) {
      if (currentIndex === 0) {
        setSteps([0, 1]);
        setCurrentStep(1);
        return 1;
      } else if (currentIndex > 0) {
        const newStep = steps[currentIndex - 1];
        setCurrentStep(newStep);
        return newStep;
      } else if (currentIndex === 1) {
        setSteps([0]);
        setCurrentStep(0);
        return 0;
      }
    } else {
      if (currentIndex === 0) {
        setSteps([1]);
        setCurrentStep(1);
        return 1;
      } else if (currentIndex > 0) {
        const newStep = steps[currentIndex - 1];
        setCurrentStep(newStep);
        return newStep;
      }
    }
  };

  const resetFormData = () => {
    setFormData({});
    setCurrentStep(1);
    setSteps([1]);
    setSelectedOption("");
  };
  const updateFormData = (data: Record<string, any>) =>
    setFormData((prev) => ({ ...prev, ...data }));

  const saveData = async (data: Record<string, any>) => {
    saveFormData(data).then((info: any) => {
      router.push("/");
      resetFormData();
    });
  };

  const loadData = async () => {
    try {
      const data = await getFormData();
      if (data.length > 0) {
        setFormData(data[0]);
      }
    } catch (error) {
      console.error("Error loading form data:", error);
    }
  };

  return (
    <StepperContext.Provider
      value={{
        currentStep,
        steps,
        nextStep,
        prevStep,
        formData,
        updateFormData,
        setStepSequence,
        selectedOption,
        setSelectedOption,
        saveFormData: saveData,
        loadFormData: loadData,
      }}
    >
      {children}
      {router.pathname.includes("/InquiryForm") && (
        <CustomModal
          open={isModalOpen}
          onClose={handleCloseModal}
          onContinue={handleContinue}
        />
      )}
    </StepperContext.Provider>
  );
};

export const useStepper = () => useContext(StepperContext);
