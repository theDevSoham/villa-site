import { createClient } from "@/prismicio";

const getRentalProperties = async (uid: string) => {
  const client = createClient();
  return await client.getByUID("rental_properties", uid);
};

export { getRentalProperties };
