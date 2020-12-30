module.exports = {
	purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		screens: {
			sm: "640px",
			md: "1024px",
			lg: "1336px",
		},
		colors: {
			primary: "var(--primary)",
			secondary: "var(--secondary)",
			bg0: "var(--bg-0)",
			bg1: "var(--bg-1)",
			bg2: "var(--bg-2)",
			bg3: "var(--bg-3)",
			bg4: "var(--bg-4)",
			bg5: "var(--bg-5)",
			bg6: "var(--bg-6)",
			bg7: "var(--bg-7)",
			bg8: "var(--bg-8)",
			bg9: "var(--bg-9)",
			text: "var(--text)",
			success: "var(--green)",
			danger: "var(--red)",
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
