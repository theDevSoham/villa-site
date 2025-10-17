import { createClient } from "@/prismicio";

const getSettings = async () => {
  const client = createClient();
  return await client.getSingle("settings");
};

export { getSettings };
