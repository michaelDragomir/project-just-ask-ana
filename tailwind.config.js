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
			animation: {
				slideUp: 'slideUp 1s ease-in-out infinite',
			},
			keyframes: {
				slideUp: {
					'0%': { transform: 'translateY(-100px)' },
					'50%': { transform: 'translateY(0px)' },
					'100%': { transform: 'translateY(-10px)' },
				},
			},
		},
	},
	plugins: [],
};
