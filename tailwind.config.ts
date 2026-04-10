import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#1a1a1a',
        'charcoal-light': '#242424',
        'charcoal-mid': '#2e2e2e',
        offwhite: '#f5f5f0',
        amber: '#d4763b',
        'amber-dark': '#b85e28',
        'amber-light': '#e8905a',
      },
      fontFamily: {
        display: ['var(--font-barlow)', 'Barlow Condensed', 'Impact', 'sans-serif'],
        body: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
