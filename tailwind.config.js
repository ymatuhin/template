module.exports = {
  purge: {
    preserveHtmlElements: false,
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,svelte}"],
    options: {
      keyframes: true,
      variables: true,
    },
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    transform: false,
  },
};
