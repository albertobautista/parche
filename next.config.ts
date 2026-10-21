import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The reservation route attaches the product photo to the email, so ship those files with it.
  outputFileTracingIncludes: {
    "/api/reserve": ["./public/img/email/**/*"],
  },
};

export default nextConfig;
