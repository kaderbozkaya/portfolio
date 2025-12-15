// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: "export", 
//   images: {
//     unoptimized: true,
//   },
//   basePath: "/portfolio",      // ⬅️ BURAYA REPO ADINI YAZ
//   assetPrefix: "/portfolio/",   // ⬅️ BURAYA DA AYNI
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/portfolio",
  assetPrefix: "/portfolio/",
};

export default nextConfig;
