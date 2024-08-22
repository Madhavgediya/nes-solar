/* eslint-disable react/no-unescaped-entities */
import { Dialog } from "@headlessui/react";
import Image from "next/image";
import { FC } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  onContinue: () => void;
}

const CustomModal: FC<ModalProps> = ({ open, onClose, onContinue }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="fixed z-10 inset-0 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen px-4 text-center">
        <div className="fixed inset-0 bg-black opacity-30" aria-hidden="true" />

        <span className="inline-block h-screen align-middle" aria-hidden="true">
          &#8203;
        </span>

        <div className="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all align-middle max-w-md w-full p-6">
          <div className="flex justify-end">
            <button
              type="button"
              className="text-gray-400 hover:text-gray-500"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="text-left md:text-center">
            <div className="flex justify-start md:justify-center">
              <Image
                src="/assets/exitIntentImage.d21f423.webp"
                alt="Illustration"
                width={100}
                height={100}
              />
            </div>
            <h2 className="mt-4 text-xl font-bold text-gray-900">
              Don't leave yet!
            </h2>
            <p className="mt-2 text-gray-600">
              You’re just a few steps away from personalized quotes from vetted
              solar panel installers in your area.
            </p>
            <button
              onClick={onContinue}
              className="mt-6 px-4 py-2 bg-[#002f63] text-white rounded-md hover:bg-[#002f63] focus:outline-none"
            >
              Let's keep going
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default CustomModal;
