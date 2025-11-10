const config = {
  plugins: ["@tailwindcss/postcss"],
  images: {
    // Allow the external hosts used in your products page
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      // add your own CDN(s) here if needed:
      // { protocol: "https", hostname: "cdn.yourdomain.com" },
    ],
  },
};

export default config;
