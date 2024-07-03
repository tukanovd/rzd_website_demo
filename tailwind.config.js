/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./Slices/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "text-2xl",
    { pattern: /text-./ },
    { pattern: /grid-cols-./ },
    "font-normal",
    "font-bold",
    "pt-4",
    "pt-5",
    "pt-8",
    "pt-10",
    "pb-2",
    "pb-32",
    "px-6",
    "md:px-0",
    "md:px-4",
    "py-10",
    "md:py-8",
    "p-5",
    "p-6",
    "mr-3",
    "mr-4",
    "mr-7",
    "mb-36",
    "md:mb-16",
    "mt-8",
    "md:mt-20",
    "gap-4",
    "gap-10",
    "gap-y-7",
    "gap-x-7",
    "gap-x-16",
    "md:flex-row",
    "6xl",
    "md:items-center",
  ],
  theme: {
    fontSize: {
      "m-5xl": "1.75rem", // 28px
      "5xl": "2.25rem", // 36px
      "4xl": "2.125rem", // 34px
      "2xl": "1.5rem", // 24px
      xl: "1rem",
      sm: "0.875rem", // 14px
    },
    extend: {
      lineHeight: {
        13: "2.25rem", // 36px
        12: "2.125rem", // 34px
        11: "0.875rem", // 14px
      },
    },
  },
  plugins: [],
};
