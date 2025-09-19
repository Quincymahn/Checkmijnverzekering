/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "#333",
            h1: { color: "#1b7ced" },
            a: { color: "#00af76", "&:hover": { color: "#008055" } },
            code: { color: "#ff8800" },
          },
        },
        lg: {
          css: {
            h1: { fontSize: "2.25rem" }, // 36px
          },
        },
      },
    },
  },
};
