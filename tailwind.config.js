/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			poppins: ['Poppins', 'Arial', 'sans-serif'],
		},
		extend: {
			colors: {
				'light-beige': '#EFE8C7',
				'light-khaki': '#ECDA83',
				crimson: '#FF5C66',
				'light-red': 'rgb(252 165 165)',
			},
			backgroundImage: {
				painted: "url('/bg-paint.png')",
				pattern: "url('/bg-pattern.jpg')",
			},
		},
	},
	plugins: [],
}
