/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        atendy: {
          green: "#25D366",
          blue: "#2563EB",
          gray: "#6B7280"
        },
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #2563EB 0%, #25D366 100%)"
      }
    },
  },
  plugins: [],
};
