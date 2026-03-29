/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },

        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },

        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },

        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
      },

      spacing: {
        1.5: "0.5rem",
        2: "0.7rem",
        3: "1rem",
        6: "1.5rem",
        8: "2.75rem",
        10: "3.5rem",
      },

      borderWidth: {
        DEFAULT: "2px",
        heavy: "4px",
      },

      borderRadius: {
        none: "0px",
      },

      fontFamily: {
        sans: ["var(--font-sans)"],
        heading: ["var(--font-heading)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
      },

      fontSize: {
        "display-lg": ["3.5rem", { lineHeight: "1.1" }],
        body: ["0.95rem", { lineHeight: "1.6" }],
        label: ["0.6875rem", { lineHeight: "1.2" }],
      },

      boxShadow: {
        brutal: "6px 6px 0px #d9caff",
        hard: "8px 8px 0px #6b1ef3",
        lime: "8px 8px 0px #cafd00",
      },

      backgroundImage: {
        "gradient-liquid": "linear-gradient(to right, #4e6300, #cafd00)",
      },

      backdropBlur: {
        brutal: "20px",
      },
    },
  },

  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".brutal-border": {
          border: "2px solid #2d2f2f",
        },
        ".brutal-border-heavy": {
          border: "4px solid #2d2f2f",
        },
        ".no-radius": {
          borderRadius: "0px",
        },
        ".offset-sm": {
          transform: "translate(-0.7rem, -0.7rem)",
        },
        ".offset-card": {
          position: "relative",
          boxShadow: "6px 6px 0px #d9caff",
        },
        ".offset-hard": {
          boxShadow: "8px 8px 0px #6b1ef3",
        },
        ".hover-shift": {
          transition: "all 0.2s ease",
        },
        ".hover-shift:hover": {
          transform: "translate(6px, 6px)",
        },
        ".input-brutal": {
          background: "#ffffff",
          borderBottom: "2px solid #2d2f2f",
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none",
          borderRadius: "0px",
        },
        ".input-brutal:focus": {
          outline: "none",
          background: "#beee00",
        },
        ".glass-nav": {
          background: "rgba(255,255,255,0.8)",
          backdropFilter: "blur(20px)",
          border: "2px solid #2d2f2f",
        },
      });
    }),
  ],
};
