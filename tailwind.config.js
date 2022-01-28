module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      "mn-blue": "#003865",
      "mn-green": "#78BE21",
      "gql-pink": "#E10098",
    },
    extend: {
      backgroundImage: {
        "main-header": "url('../assets/images/gql.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
