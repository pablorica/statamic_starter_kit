//--------------------------------------------------------------------------
// Tailwind site configuration
//--------------------------------------------------------------------------
//
// Use this file to completely define the current sites design system by
// adding and extending to Tailwinds default utility classes.
//

const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

module.exports = {
  presets: [],
  theme: {
    // Here we define the default colors available. If you want to include
    // all default Tailwind colors you should extend the colors instead.
    colors: {
        black:     '#000',
        blue:      '#0071CE',
        darkblue:  '#000F9F',
        green:     '#00AC69',
        grey:      '#D9D8D6',
        lightblue: '#65B2E8',
        orange:    '#FF6B00',
        pink:      '#E96BB0',
        yellow:    '#FFCD00',
        white:     '#fff',
        // Neutrals: neutral colors, with a default fallback if you don't need shades. Always set a DEFAULT when you use shades.
        neutral: {
            DEFAULT: colors.slate['800'],
            ...colors.slate
        },
        // Primary: primary brand color with a default fallback if you don't need shades. Always set a DEFAULT when you use shades.
        primary: {
            DEFAULT: 'oklch(53.24% 0.301 290.86 / <alpha-value>)'
        },
    },
    extend: {
        //Overwrite Peak colors
        colors: {
            blue:   '#0071CE',
            green:  '#00AC69',
            pink:   '#E96BB0',
            yellow: '#FFCD00',
        },
      // Set default transition durations and easing when using the transition utilities.
      transitionDuration: {
        DEFAULT: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      animation: {
        appearsin: 'appearsIn 1.2s ease forwards',
        appearsout: 'appearsOut 0.6s ease forwards',
      },
    },
    // that is actual animation
    keyframes: theme => ({
        appearsIn: {
            '0%': { 
              opacity: 0,
              transform: 'translateY(40px)',
              },
            '100%': { 
              opacity: 1,
              transform: 'translateY(0)',
            },
        },
        appearsOut: {
            '0%': { 
                opacity: 1,
                transform: 'translateY(0)',  
            },
            '100%': { 
                opacity: 0,
                transform: 'translateY(40px)',
            },
        },        
      }),
    // Remove the font families you don't want to use.
    fontFamily: {
      mono: [
        // Use a custom mono font for this site by changing 'Anonymous' to the
        // font name you want and uncommenting the following line.
        // 'Anonymous',
        ...defaultTheme.fontFamily.mono,
      ],
      sans: [
        // Use a custom sans serif font for this site by changing 'Gaultier' to the
        // font name you want and uncommenting the following line.
        'Neue Haas Grotesk Display Pro',
        ...defaultTheme.fontFamily.sans,
      ],
      serif: [
        // Use a custom serif font for this site by changing 'Lavigne' to the
        // font name you want and uncommenting the following line.
        // 'Lavigne',
        ...defaultTheme.fontFamily.serif,
      ],
    },
    // The font weights available for this site.
    fontWeight: {
      // hairline: 100,
      // thin: 200,
      // light: 300,
      normal: 450, // (original: 400),
      // medium: 500,
      // semibold: 600,
      bold: 700,
      // extrabold: 800,
      // black: 900,
    },
    fontSize: {
        sm: '0.8rem',
        base: '1rem', // 20px
        xl: '1.25rem', // 25px
        '2xl': '1.4rem', // 28px (original: 1.5rem')
        '3xl': '1.875rem', // 37.5px
        '4xl': '2.25rem', // 45px
        '5xl': '2.7rem', // 54px (original: 3rem)
        '6xl': '3.75rem', // 75px
        '7xl': '4.5rem', // 90px
        '8xl': '5.1rem', // 102px (original: 6rem),
        '9xl': '8rem', // 160 px,
    },
    letterSpacing: { //tracking
        //tightest: '-.075em',
        //tighter: '-.05em',
        tight: '-2.04px',// (original: -.025em),
        normal: '-0.2px', // (original: 0),
        '2xl': '-0.28px',  // custom,
        //wide: '.025em',
        //wider: '.05em',
        //widest: '.1em',
        //widest: '.25em',
    },
    lineHeight: { //leading
        none: '1',
        tight: '1.01',  // (original: 1.25),   
        snug: '1.2',    // (original: 1.375),
        '2xl': '32px',  // custom,
        '5xl': '58px',  // custom,
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        ':root': {
            // Fluid typography from 1 rem to 1.2 rem with fallback to 20px.
            fontSize: '20px',
            letterSpacing: '-0.2px',
            lineHeight: '1.2',
            fontWeight: '450',
            
            // Safari resize fix.
            minHeight: '0vw',
        },
        // Default color transition on links unless user prefers reduced motion.
        '@media (prefers-reduced-motion: no-preference)': {
          'a': {
            transition: 'color .3s ease-in-out',
          },
        },
        'html': {
            color: theme('colors.neutral.DEFAULT'),
            //--------------------------------------------------------------------------
            // Set sans, serif or mono stack with optional custom font as default.
            //--------------------------------------------------------------------------
            // fontFamily: theme('fontFamily.mono'),
            fontFamily: theme('fontFamily.sans'),
            // fontFamily: theme('fontFamily.serif'),
        },
        'mark': {
          backgroundColor: theme('colors.primary.DEFAULT'),
          color: theme('colors.white')
        },
      })
    }),

    // Custom components for this particular site.
    plugin(function({ addComponents, theme }) {
        const components = {
          // Overwrites .fluid-container defined in tailwind.config.peak.js
          '.fluid-container': {
              width: '100%',
              maxWidth: '100%',
              marginLeft: 'auto',
              marginRight: 'auto',
              // Use safe-area-inset together with default padding for Apple devices with a notch.
              paddingLeft: `calc(env(safe-area-inset-left, 0rem) + ${theme('padding.16')})`,
              paddingRight: `calc(env(safe-area-inset-right, 0rem) + ${theme('padding.16')})`,
          },
          // Overwrites .outer-grid defined in tailwind.config.peak.js
          '.outer-grid': {
              paddingTop: 0,
              paddingBottom: '240px',
              rowGap: 0,
          },
        }
        addComponents(components)
    }),

    // Custom utilities for this particular site.
    plugin(function({ addUtilities, theme, variants }) {
      const newUtilities = {
      }
      addUtilities(newUtilities)
    }),
  ]
}
