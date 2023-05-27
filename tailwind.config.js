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
				slideUp: 'slideUp 0.5s ease-in-out forwards',
			},
			keyframes: {
				slideUp: {
					'0%, 100%': {
						transform: 'translateY(-25%)',
						'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
					},
					'50%': {
						transform: 'translateY(100%)',
						'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
					},
				},
			},
		},
	},
	plugins: [],
};
