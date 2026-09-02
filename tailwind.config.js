/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1E3A8A",
          darkblue: "#0F172A",
          light: "#F8FAFC",
          accent: "#2563EB",
          raghib: "#1D4ED8",
          rizzo: "#B91C1C",
          emerald: "#059669",
        },
      },
    },
  },
  plugins: [],
};
