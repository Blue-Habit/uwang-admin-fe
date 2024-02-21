/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue:{
            1:"#E7ECF8"
          },
        },
        white: "#FFFFFF",
        //text
        heading: "#101828",
        main: "#101828",
        secondary: "#667085",
        disabled: "#D0D5DD",
        border: "#D0D5DD",
        separator: "#EAECF0",
        layoutBackground:"#F9FAFB",
        //end text
        state: {
          primary: {
            main: "#1041B7",
            surface: "#E7ECF8",
            border: "#C6D1EE",
            hover: "#0E379C",
            pressed: "#092568",
            focus: "#1041B733",
          },
          success: {
            main: "#179D5E",
            surface: "#E8F5EF",
            border: "#C7E7D8",
            hover: "#148550",
            pressed: "#106F43",
            focus: "#179D5E33",
          },
          warning: {
            main: "#F4D030",
            surface: "#FEFAEA",
            border: "#FCF4CD",
            hover: "#CFB129",
            pressed: "#8B771B",
            focus: "#F4D03033",
          },
          error: {
            main: "#DD2E2E",
            surface: "#FCEAEA",
            border: "#F7CDCD",
            hover: "#BC2727",
            pressed: "#7E1A1A",
            focus: "#DD2E2E33",
          },
        },
      },
    },
  },
  plugins: [],
};
