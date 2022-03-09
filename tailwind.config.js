module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        curvybg: "url('/src/images/layer1.svg')",
        curvybg2: "url('/src/images/layer2.svg')",
        curvybg3: "url('/src/images/layer3.svg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
