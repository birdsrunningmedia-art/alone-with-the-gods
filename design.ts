// const plugin = require("tailwindcss/plugin");

// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx}",
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}"
//   ],

//   theme: {
//     extend: {
//       colors: {
//         primary: "#4e6300",
//         primary_container: "#cafd00",
//         secondary: "#6b1ef3",
//         secondary_fixed: "#d9caff",

//         background: "#f5f5f5",
//         surface: "#ffffff",
//         surface_dim: "#d3d5d5",

//         on_surface: "#2d2f2f",
//         on_surface_variant: "#5a5c5c",

//         outline: "#767777",

//         tertiary_container: "#ff9479"
//       },

//       spacing: {
//         "1.5": "0.5rem",
//         "2": "0.7rem",
//         "3": "1rem",
//         "6": "1.5rem",
//         "8": "2.75rem",
//         "10": "3.5rem"
//       },

//       borderWidth: {
//         DEFAULT: "2px",
//         heavy: "4px"
//       },

//       borderRadius: {
//         none: "0px"
//       },

//       fontFamily: {
//         display: ["Newsreader", "serif"],
//         mono: ["Space Grotesk", "monospace"]
//       },

//       fontSize: {
//         "display-lg": ["3.5rem", { lineHeight: "1.1" }],
//         body: ["0.95rem", { lineHeight: "1.6" }],
//         label: ["0.6875rem", { lineHeight: "1.2" }]
//       },

//       boxShadow: {
//         brutal: "6px 6px 0px #d9caff",
//         hard: "8px 8px 0px #6b1ef3",
//         lime: "8px 8px 0px #cafd00"
//       },

//       backgroundImage: {
//         "gradient-liquid":
//           "linear-gradient(to right, #4e6300, #cafd00)"
//       },

//       backdropBlur: {
//         brutal: "20px"
//       }
//     }
//   },

//   plugins: [
//     plugin(function ({ addUtilities }) {
//       addUtilities({
//         /* === CORE RULES === */

//         ".brutal-border": {
//           border: "2px solid #2d2f2f"
//         },

//         ".brutal-border-heavy": {
//           border: "4px solid #2d2f2f"
//         },

//         ".no-radius": {
//           borderRadius: "0px"
//         },

//         /* === OFFSETS === */

//         ".offset-sm": {
//           transform: "translate(-0.7rem, -0.7rem)"
//         },

//         ".offset-card": {
//           position: "relative",
//           boxShadow: "6px 6px 0px #d9caff"
//         },

//         ".offset-hard": {
//           boxShadow: "8px 8px 0px #6b1ef3"
//         },

//         /* === INTERACTIONS === */

//         ".hover-shift": {
//           transition: "all 0.2s ease"
//         },

//         ".hover-shift:hover": {
//           transform: "translate(6px, 6px)"
//         },

//         /* === INPUT STYLE === */

//         ".input-brutal": {
//           background: "#ffffff",
//           borderBottom: "2px solid #2d2f2f",
//           borderTop: "none",
//           borderLeft: "none",
//           borderRight: "none",
//           borderRadius: "0px"
//         },

//         ".input-brutal:focus": {
//           outline: "none",
//           background: "#beee00"
//         },

//         /* === GLASS NAV === */

//         ".glass-nav": {
//           background: "rgba(255,255,255,0.8)",
//           backdropFilter: "blur(20px)",
//           border: "2px solid #2d2f2f"
//         }
//       });
//     })
//   ]
// };
