// tailwind.config.js
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        spaceBlack: '#080b12',
        nightSkyPurple: '#2e0057',
        deepTwilightBlue: '#123a73',
        starWhite: '#d1d1e9',
      },
      backgroundImage: {
        'space-gradient': 'linear-gradient(to bottom, #080b12, #123a73, #2e0057)',
      },
    },
  },
  plugins: [],
};
