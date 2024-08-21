import React, { useEffect, useState } from "react";
import { useStepper } from "../../src/context/StepperContext";
import FileUploadInput from "../../src/components/common/FileUploadInput";
import { useForm, FormProvider } from "react-hook-form";
import { Button } from "@/components/common/Button";

type SelectFileType = {
  base64: string;
  file: File;
};

const AttachModule: React.FC = () => {
  const methods = useForm({});
  const { nextStep, updateFormData, formData } = useStepper();
  const [selectFile, setSelectFile] = useState<SelectFileType | undefined>(
    undefined
  );
  const [documentSizeError, setDocumentSizeError] = useState<boolean>(false);
  const [fileError, setFileError] = useState<string>("");
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  // Initialize the state with the value from formData
  useEffect(() => {
    if (formData.file) {
      setSelectFile(formData.file);
    }
  }, [formData.file]);

  useEffect(() => {
    // Check if a valid file has been selected and update isFormValid
    setIsFormValid(!!selectFile && !documentSizeError);
  }, [selectFile, documentSizeError]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Check the file size
    const fileSizeInMB = file.size / (1024 * 1024); // Convert bytes to megabytes
    if (fileSizeInMB > 10) {
      setDocumentSizeError(true);
      return;
    }
    setDocumentSizeError(false);

    // Convert file to Base64
    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.result) {
        setSelectFile({
          file: file,
          base64: reader.result.toString(),
        });
      }
    };
    setFileError("");
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if file is selected
    if (!selectFile) {
      setFileError("Please upload a valid file.");
      return;
    }
    setFileError("");

    // Update form data and proceed to next step
    updateFormData({ file: selectFile.file });
    nextStep();
  };

  return (
    <div className="pt-16 flex flex-col items-center w-full">
      <h1 className="text-center text-dark-blue text-5xl font-bold font-weight-bolder mb-6">
        Attach Solar Panel Module Placement Drawing
      </h1>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit}>
          <FileUploadInput
            label="Attach your file"
            name="file"
            required={true}
            handleFileUpload={handleChange}
            documentSizeError={documentSizeError}
            selectFile={selectFile}
            classes={undefined}
          />
          {fileError && (
            <p className="mt-2 text-sm text-red-500">{fileError}</p>
          )}
          <div className="justify-center flex m-0">
            <Button
              variant="outlined"
              type="submit"
              className={`font-custom !capitalize !mt-5 !px-10 !py-4 !bg-[#002f63] !text-white !border-0 !rounded-md hover:bg-[#002f63]  ${
                isFormValid ? "" : "opacity-50 cursor-not-allowed"
              }`}
              label="Next &rarr;"
              disabled={!isFormValid}
            ></Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default AttachModule;
