module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    backdropFilter: {
      none: 'none',
      blur: 'blur(20px)',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#fefbf6',
        black: '#000000',

        blooperGray: '#d1d2d4',
        blooperBlue: '#265E78',
        blooperBlue01: '#a2cfe4',
        blooperDarkBlue: '#294c61',

        moodLightRed: '#f3887d',
        moodMediumRed: '#f0606f',
        moodDarkRed: '#d24d67',
        moodBlue: '#2c306d',

        darkWorldGreen: '#009cae',
        darkWorldBlue: '#143b50',

        preampBlue: '#3d4d85',
        preampRed: '#8d4848',

        warpedVinylBlack: '#2a292f',
        warpedVinylGold: '#9a7a44',

        thermaeBlue: '#143751',
        thermaeLightBlue: '#8abfe7',
        thermaeGold: '#ba8e51',

        gravitasBlack: '#424036',
        gravitasGray: '#828582',
      },

      spacing: {
        128: '32rem',
        144: '36rem',
      },
      dropShadow: {
        cool: '0 1px 3px rgba(24, 53, 76, 0.11), 0 2px 9px rgba(11, 22, 99, 0.42)',
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
      },
    },
  },
  plugins: ['tailwindcss-filters'],
};
