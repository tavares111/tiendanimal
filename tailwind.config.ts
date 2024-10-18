import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'limeade': {
        '50': '#faffe5',
        '100': '#f3ffc6',
        '200': '#e5ff94',
        '300': '#cfff56',
        '400': '#b8f724',
        '500': '#99de04',
        '600': '#76b100',
        '700': '#639605',
        '800': '#486a0a',
        '900': '#3c590e',
        '950': '#1e3201',
    },
      },
    },
  },
  plugins: [],
};
export default config;
