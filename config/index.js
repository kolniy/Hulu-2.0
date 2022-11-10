const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "https://hulu-2-0-p2h85im4c-kolniy.vercel.app";
