module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-header": "url('../assets/images/gql.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
