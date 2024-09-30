import React, { useContext, useState } from "react";
import { TextInput } from "./TextInput";
import { FormProvider, useForm } from "react-hook-form";
import { InputLabel } from "@mui/material";
import { Button } from "./Button";
import FileUploadInput from "./FileUploadInput";
import { sendContactForm } from "../../lib/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type SelectFileType = {
  base64: string;
  file: File;
};
export default function ContactUsFormComponent() {
  const methods = useForm({});
  const [selectFile, setSelectFile] = useState<SelectFileType | undefined>();
  const [documentSizeError, setDocumentSizeError] = useState(false);
  const saveData = async (data: any) => {
    const formData = {
      ...data,
      file: selectFile?.base64,
      fileName: selectFile?.file.name,
      fileType: selectFile?.file.type,
    };
    try {
      await sendContactForm(formData);
      toast.success("Form submitted successfully");
      methods.reset();
      setSelectFile(undefined);
    } catch (error) {
      toast.error("Error submitting form");
    }
  };
  const handleChange = (event: any) => {
    const file = event?.target?.files?.[0];
    // Check if an image is selected
    if (!file) {
      return;
    }
    const reader = new FileReader();

    reader.onloadend = () => {
      // Convert image to Base64 string
      if (reader.result) {
        setSelectFile({
          file: event?.target?.files?.[0],
          base64: reader.result.toString(),
        });
      }
    };

    // Check the image size
    const fileSizeInMB = file.size / (1024 * 1024); // Convert bytes to megabytes
    if (fileSizeInMB > 10) {
      setDocumentSizeError(true);
      return;
    }
    setDocumentSizeError(false);
    setSelectFile(event?.target?.files?.[0]);
    reader.readAsDataURL(file);
  };
  return (
    <div className="w-full">
      <div className="contact_item font-custom max-sm:mt-8 xs:mt-4 lg:mt-0">
        <FormProvider {...methods}>
          <form
            className="contact_form_data contact_form_layout response-transition"
            onSubmit={methods.handleSubmit(saveData)}
            method="post"
          >
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              pauseOnHover
              draggable
              draggablePercent={60}
              closeButton={false}
              style={{ zIndex: 9999 }}
            />
            <div className="cbox-44-0 p_formItem p-3">
              <p className="e_text-50 s_title response-transition">
                Look forward to receiving your comments or feedback!
              </p>

              <div className="grid md:grid-cols-2 gap-2 ">
                <div className="e_clueName-45 s_form1 contact-form-group response-transition">
                  <label className="p_label">
                    <InputLabel className="s_label font-custom">
                      Name
                    </InputLabel>
                  </label>
                  <div className="input-group textarea">
                    <TextInput
                      variant="outlined"
                      label="Name"
                      size="small"
                      iName="Name"
                      type="text"
                      required={true}
                    />
                    <div className="invalid-feedback"></div>
                  </div>
                </div>
                <div className="e_clueMobile-47 s_form1 contact-form-group response-transition">
                  <label className="p_label">
                    <InputLabel className="s_label font-custom">
                      Phone Number
                    </InputLabel>
                  </label>
                  <div className="input-group textarea">
                    <TextInput
                      variant="outlined"
                      label="Phone"
                      size="small"
                      iName="Phone"
                      required={true}
                      maxLength={10}
                      patternInput={"[0-9]*"}
                      inputMode={"numeric"}
                    />

                    <div className="invalid-feedback"></div>
                  </div>
                </div>
                <div className="s_form1 contact-form-group">
                  <label className="p_label">
                    <InputLabel className="s_label font-custom">
                      Email
                    </InputLabel>
                  </label>
                  <div className="input-group textarea">
                    <TextInput
                      variant="outlined"
                      label="Email"
                      size="small"
                      iName="Email"
                      type="email"
                      required={true}
                    />
                  </div>
                </div>
                <div className="s_form1 contact-form-group">
                  <label className="p_label">
                    <InputLabel className="s_label font-custom">
                      Attach Light Bill
                    </InputLabel>
                  </label>
                  <div className="input-group textarea">
                    <FileUploadInput
                      label="light bill"
                      name={"file"}
                      required={true}
                      handleFileUpload={handleChange}
                      documentSizeError={documentSizeError}
                      selectFile={selectFile}
                      classes={undefined}
                    />
                  </div>
                </div>
                <div className="s_form1 contact-form-group">
                  <label className="p_label">
                    <InputLabel className="s_label font-custom">
                      Address
                    </InputLabel>
                  </label>
                  <div className="input-group textarea">
                    <TextInput
                      multiline
                      variant="filled"
                      label="Address"
                      size="small"
                      iName="Address"
                      type="text"
                      rows={4}
                      required={true}
                      className=""
                    />
                  </div>
                </div>{" "}
                <div className="s_form1 contact-form-group">
                  <label className="p_label">
                    <InputLabel className="s_label font-custom">
                      Details
                    </InputLabel>
                  </label>
                  <div className="">
                    <div className="input-group textarea">
                      <TextInput
                        multiline
                        variant="outlined"
                        label="Details"
                        size="small"
                        iName="Details"
                        type="text"
                        rows={4}
                        required={true}
                      />
                    </div>
                  </div>
                </div>{" "}
              </div>
              <Button
                variant="outlined"
                type="submit"
                className="e_formBtn-46 s_button1 btn-primary font-custom"
                label="Submit"
              ></Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
