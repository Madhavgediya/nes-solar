import { db } from "./config";
import { collection, addDoc, getDocs, DocumentData } from "firebase/firestore";
import { uploadFile } from "./storageHelper";

interface FormData {
  [key: string]: any;
  file?: File;
  fileUrl?: string;
}

const saveFormData = async (formData: FormData): Promise<void> => {
  if (formData.file) {
    try {
      const fileUrl = await uploadFile(formData.file);
      formData.fileUrl = fileUrl;
      delete formData.file;
    } catch (error) {
      console.error("File upload failed: ", error);
      return;
    }
  }
  try {
    await addDoc(collection(db, "inquiryForms"), formData);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

const getFormData = async (): Promise<FormData[]> => {
  const querySnapshot = await getDocs(collection(db, "inquiryForms"));
  const data: FormData[] = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
};

export { saveFormData, getFormData };
