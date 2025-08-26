/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: { center: true, padding: "1.25rem" },
    extend: {
      fontFamily: {
        heading: ["var(--font-poppins)"],
        body: ["var(--font-nunito)"]
      },
      colors: {
        brand: {
          blue: "#2563EB",
          green: "#25D366",
          gray: "#6B7280",
          navy: "#0B1220",
        }
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #2563EB 0%, #25D366 100%)",
        "radial-fade": "radial-gradient(60% 40% at 20% 10%, rgba(37,99,235,.18), transparent), radial-gradient(50% 40% at 80% 20%, rgba(37,211,102,.18), transparent)"
      },
      boxShadow: {
        brand: "0 14px 40px rgba(37,99,235,.24), 0 14px 40px rgba(37,211,102,.2)",
        soft: "0 10px 30px rgba(2,6,23,.08)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    },
  },
  plugins: [],
};
