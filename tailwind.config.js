const { spacing, fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.tsx", "./components/**/*.tsx", "./layouts/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "blue-opaque": "rgb(13 42 148 / 18%)",
        gray: {
          0: "#fff",
          100: "#fafafa",
          200: "#eaeaea",
          300: "#999999",
          400: "#888888",
          500: "#666666",
          600: "#444444",
          700: "#333333",
          800: "#222222",
          900: "#0D0F12"
        },
        // for code
        "dark-gray": "#13171B",
        "light-blue": "#E6E8F0",
        "day-purple": "#661FFF",
        "night-purple": "#9A6BFF",
        "night-pink": "#FF38F9",
        "night-blue": "#00BFFF",
        "day-blue": "#3E5BFE",
        "day-pink": "#DB0079"
      },
      fontFamily: {
        sans: ["Futura", ...fontFamily.sans]
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.700"),
            a: {
              color: theme("colors.blue.500"),
              "&:hover": {
                color: theme("colors.blue.700")
              },
              code: { color: theme("colors.blue.400") }
            },
            "h1,h2,h3,h4": {
              "scroll-margin-top": spacing[32]
            },
            thead: {
              borderBottomColor: theme("colors.gray.200")
            },
            "code::before": {
              content: "none" // don’t generate the pseudo-element
              //                content: '""', // this is an alternative: generate pseudo element using an empty string
            },
            "code::after": {
              content: "none"
            }
          }
        },
        dark: {
          css: {
            color: theme("colors.gray.200"),
            a: {
              color: theme("colors.blue.400"),
              "&:hover": {
                color: theme("colors.blue.600")
              },
              code: { color: theme("colors.blue.400") }
            },
            blockquote: {
              borderLeftColor: theme("colors.gray.700"),
              color: theme("colors.gray.300")
            },
            "h1,h2,h3,h4": {
              "scroll-margin-top": spacing[32]
            },
            hr: { borderColor: theme("colors.gray.700") },
            ol: {
              li: {
                "&:before": { color: theme("colors.gray.500") }
              }
            },
            ul: {
              li: {
                "&:before": { backgroundColor: theme("colors.gray.500") }
              }
            },
            strong: { color: theme("colors.gray.100") },
            thead: {
              th: {
                color: theme("colors.gray.100")
              },
              borderBottomColor: theme("colors.gray.600")
            },
            tbody: {
              tr: {
                borderBottomColor: theme("colors.gray.700")
              }
            }
          }
        }
      })
    }
  },
  variants: {
    typography: ["dark"]
  },
  plugins: [require("@tailwindcss/typography")]
};
