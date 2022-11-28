/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#22c55e",

          secondary: "#bef264",

          accent: "#86efac",

          neutral: "#6ee7b7",

          "base-100": "#e5e7eb",

          info: "#3ABFF8",

          success: "#cffafe",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
