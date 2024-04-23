/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        font: "Inter",
        fontHeading: "Neurial Grotesk Extrabold",
        barmo: "Barmo",
      },
      colors: {
        primary: "#ED6B3B",
        secondary: "#FDC60B",
        color: "#000",
        colorOpacity: "rgba(255,255,255,0.73)",
        heading: "#000",
        bg: "#000",
        bgTable: "rgba(255,255,255,0.04)",
        bgBox: "#F7F9FB",
        bgButton: "#F79548",
        border: "#48494B",
        borderOpacity: "rgba(255,255,255,0.07)",
        borderOpacity2: "rgba(255,255,255,0.14)",
        textOpacity: "rgba(255,255,255,0.70)",
        bgOpacity: "rgba(255,255,255,0.08)",
        bgBlock:"rgba(255, 255, 255, 0.10)",
        bgBlock2:"rgba(255, 255, 255, 0.02)",
      },
      flex: {
        auto: "0 0 auto",
      },
      screens: {
        lg: "991px",
        // => @media (min-width: 991px) { ... }
        "3xl": "1650px",
        // => @media (min-width: 1650px) { ... }
      },
      backgroundImage: {
        edgeButton: "url('/public/images/common/edge-button.png')",
        bgFooter: "url('/public/images/common/bg-footer.png)",
        dashboardPattern: "url('/public/images/dashboard/bg-pattern.png')",
        dashboardEdgeSection:
          "url('/public/images/dashboard/edge-section.png')",
      },
    },
  },
  plugins: [],
};
