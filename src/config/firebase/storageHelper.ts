import { storage } from "./config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const uploadFile = async (file: File): Promise<string> => {
  const storageRef = ref(storage, `uploads/${file.name}`);
  const snapshot = await uploadBytes(storageRef, file);
  const url = await getDownloadURL(snapshot.ref);
  return url;
};

export { uploadFile };
