/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        'px': '1px',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem', 
        8: '2rem',
        10: '2.5rem',
      },

      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
      },

      fontWeight: {
        regular: '400',
        medium: '500',
        bold: '700',
      },

      lineHeight: {
        shorter: '125%',
        short: '140%',
        base: '160%',
        tall: '180%',
      },

      colors: {
        white: '#FFFFFF',
        black: '#000000',
  
        green: {
          50: '#7FD1CC',
          100: '#50B2C0',
          200: '#255D6A',
          300: '#0A313C',
        },

        blue: {
          50: '#9694F5',
        },
  
        purple: {
          
          100: '#8381D9',
          200: '#2A2879',
        },
  
        gray: {
          100: '#F8F9FC',
          200: '#E6E8F2',
          300: '#D1D6E4',
          400: '#8D95AF',
          500: '#303F73',
          600: '#252D4A',
          700: '#181C2A',
          800: '#0E1116',
        }, 
       
      },

      borderRadius: {
        xs: '2.5px',
        sm: '5px',
        md: '10px',
        lg: '20px',
        full: '99999px',
      },
      
      backgroundImage: {
        'hero': 'url("/public/hero_image.jpg")',
      }
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.custom-fixed-height': {
          height: 'calc(100vh - 2.5rem)',
        },
      });
    },
  ],
}
