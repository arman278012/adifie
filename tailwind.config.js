/** @type {import('tailwindcss').Config} */
export default {
  plugins: [
    ('flowbite/plugin')
  ],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      keyframes: {
        'move-around': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(20px, -20px)' },
          '50%': { transform: 'translate(-20px, 20px)' },
          '75%': { transform: 'translate(20px, 20px)' },
        },
      },
      animation: {
        'move-around': 'move-around 1s ease-in-out infinite',
      },
      variants: {
        extend: {
          animation: ['hover'],
        },
      },
    },
  },
}