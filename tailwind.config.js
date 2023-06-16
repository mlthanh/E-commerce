/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["var(--font-qs)"],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#fff",
        wrapper: "#f1f4f5",
        wrapperDark: "#000",
        primary: "#CACCD9", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "offset-left":
          "10px 0px 10px -5px rgba(0, 0, 0, 0.1), 0 8px 8px -6px rgb(0 0 0 / 0.1)",
      },
    },
  },
};
