import { createClient } from "@/prismicio";

const getEventProperties = async (uid: string) => {
  const client = createClient();
  return await client.getByUID("event_property", uid);
};

export { getEventProperties };
