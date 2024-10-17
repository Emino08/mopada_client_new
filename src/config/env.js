const isDevelopment = import.meta.env.MODE === "development";

export const BASE_URL = isDevelopment
  ? "http://localhost:5000"
  : "https://mopadasl-backend.onrender.com";

export const IS_DEV = isDevelopment;
