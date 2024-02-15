import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "0uktt22p8g",
  apiKey: import.meta.env.VITE_MICROCMS_API_KEY,
});
