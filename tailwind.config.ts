import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/bg.jpeg')",
      },
      colors: {
        customPink: '#ff009d',
        customBlue: '#00baff',
      },
    },
  },
  plugins: [],
};
export default config;
