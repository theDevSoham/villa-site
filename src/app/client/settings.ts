import { createClient } from "@/prismicio";
import { AllDocumentTypes } from "../../../prismicio-types";

const getSettings = async (): Promise<AllDocumentTypes> => {
  const client = createClient();
  return await client.getSingle("settings");
};

export { getSettings };
