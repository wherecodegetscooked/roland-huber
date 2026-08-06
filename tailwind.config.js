/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Serifen-Schrift wie im Original (Ueberschriften + Fliesstext).
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Lora', 'Georgia', 'serif'],
      },
      colors: {
        background: '#080808',
        surface: '#121212',
        primary: '#eeeeee',
        secondary: '#888888',
        // Blaue Akzentfarbe (About-Us-Button des Originals).
        accent: '#3a4ba0',
        'accent-glow': '#4d5fc0',
      },
      backgroundImage: {
        'glow-gradient': 'radial-gradient(circle at center, rgba(58, 75, 160, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
      },
    },
  },
  plugins: [],
}
