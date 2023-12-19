/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
	],
	mode: "jit",
	theme: {
		extend: {
			colors: {
				// primary: "#050816",
				primary: "#d9d9d9",
				secondary: "#aaa6c3",
				tertiary: "#151030",
				"black-100": "#100d25",
				"black-200": "#090325",
				"white-100": "#f3f3f3",
				orange: "#EF821E",
				backgroundColor: "rgba(217, 217, 217, 1)",
				contactColor: "rgba(49, 49, 49, 1)",
				musicColor: "rgba(91, 208, 72, 0.75)",
				art3dColor: "rgba(239, 130, 30, 0.8)",
				videogamesColor: "rgba(97, 31, 129, 0.75)",
				illustrationColor: "rgba(218, 35, 35, 0.75)",
				otherColor: "rgba(110, 110, 110, 0.75)"
			},
			boxShadow: {
				card: "0px 35px 120px -15px #211e35",
			},
			lineWeights: {
				thin: '1',
				light: '2',
				medium: '3',
				bold: '5',
			},
			screens: {
				xs: "450px",
			},
			fontFamily: {
				homeSections: 'Montserrat, sans-serif',
				titleSections: 'Inter, sans-serif',
				text: 'Reckless Neue, sans-serif',
			},
			fontWeight: {
				thin: '100',
				regular: '300',
				semibold: '500',
				extrabold: '800',
			}

			// backgroundImage: {
			// 	"hero-pattern": "url('/src/assets/herobg.png')",
			// },
		},
	},
	plugins: [
        require("tailwind-scrollbar-hide")
	],
};