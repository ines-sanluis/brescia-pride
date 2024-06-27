import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "purple": "#D9C4FF",
        "green": "#01624B",
        "red": "#A70027",
        "pink": "#FFD6E0",
        "light-red": "#AB5C5C",
        "orange": "#fa4c18",
        "cream": "#fbf6e5",
        "dark-blue": "#08263a",
        "light-green": "#dff1cb"
      },
    },
  },
  plugins: [],
}
export default config
