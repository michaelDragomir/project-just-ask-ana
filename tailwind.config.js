/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			keyframes: {
				slide: {
					'0%': {
						transform: 'translateX(100%)',
						opacity: 0,
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: 1,
					},
				},
			},
			animation: {
				slide: 'slide .15s linear',
			},

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
