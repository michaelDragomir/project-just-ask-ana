/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				blue: '#1fb6ff',
				purple: '#7e5bef',
				green: '#13ce66',
				yellow: '#ffc82c',
				grey: '#EAECEE',
				darkGrey: '#ABB2B9',
				passionBlue: '#617073',
				lightGrey: '#D0D3D4',
			},
		},
	},
	plugins: [],
};
