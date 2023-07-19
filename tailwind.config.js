/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "var(--clr-primary)",
          secondary: "var(--clr-secondary)",
        },
        state: {
          info: "var(--clr-info)",
          success: "var(--clr-success)",
          warning: "var(--clr-warning)",
          error: "var(--clr-error)",
        },
        black: {
          DEFAULT: "var(--clr-black)",
          "earie-black": "var(--clr-earie-black)",
          "dire-wolf": "var(--clr-dire-wolf)",
          white: "var(--clr-white)",
        },
        grey: {
          carbon: "var(--clr-carbon)",
          oak: "var(--clr-oak)",
          trolley: "var(--clr-trolley)",
          christmas: "var(--clr-christmas)",
        },
      },
      fontSize: {
        heading1: [
          "var(--fs-h1)",
          {
            lineHeight: "var(--lh-h1)",
          },
        ],
        heading2: [
          "var(--fs-h2)",
          {
            lineHeight: "var(--lh-h2)",
          },
        ],
        heading3: [
          "var(--fs-h3)",
          {
            lineHeight: "var(--lh-h3)",
          },
        ],
        heading4: [
          "var(--fs-h4)",
          {
            lineHeight: "var(--lh-h4)",
          },
        ],
        heading5: [
          "var(--fs-h5)",
          {
            lineHeight: "var(--lh-h5)",
          },
        ],
        heading6: [
          "var(--fs-h6)",
          {
            lineHeight: "var(--lh-h6)",
          },
        ],
        lg: [
          "var(--fs-txt-lg)",
          {
            lineHeight: "var(--lh-txt-lg)",
          },
        ],
        md: [
          "var(--fs-txt-md)",
          {
            lineHeight: "var(--lh-txt-md)",
          },
        ],
        base: [
          "var(--fs-txt-normal)",
          {
            lineHeight: "var(--lh-txt-normal)",
          },
        ],
        sm: [
          "var(--fs-txt-sm)",
          {
            lineHeight: "var(--lh-txt-sm)",
          },
        ],
        xs: [
          "var(--fs-txt-xs)",
          {
            lineHeight: "var(--lh-txt-xs)",
          },
        ],
      },
    },
  },
  plugins: [],
};
