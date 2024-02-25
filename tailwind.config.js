export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-banner": "url('./src/assets/banner/bg-banner.jpg')",
        "bg-share": "url('./src/assets/banner/shareImg.jpg')",
        "bg-shop": "url('./src/assets/banner/bannerShop.jpg')",
      },
      animation: {
        "scale-in-ver-top":
          "scale-in-ver-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "scale-out-ver-top":
          "scale-out-ver-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both",
      },
      keyframes: {
        "scale-in-ver-top": {
          "0%": {
            transform: "scaleY(0)",
            "transform-origin": "100% 0%",
            opacity: "1",
          },
          to: {
            transform: "scaleY(1)",
            "transform-origin": "100% 0%",
            opacity: "1",
          },
        },
        "scale-out-ver-top": {
          "0%": {
            transform: "scaleY(1)",
            "transform-origin": "100% 0%",
            opacity: "1",
          },
          to: {
            transform: "scaleY(0)",
            "transform-origin": "100% 0%",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
