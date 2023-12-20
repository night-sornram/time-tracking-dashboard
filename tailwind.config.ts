import { url } from 'inspector'
import type { Config } from 'tailwindcss'

const {colors :  defaultColors} = require("tailwindcss/defaultTheme")

const colors = {
  ...defaultColors,
  ...{
    "custom" : {
      "blue" : "hsl(246, 80%, 60%)",
      "work" : "hsl(15, 100%, 70%)",
      "play" : "hsl(195, 74%, 62%)",
      "study" : "hsl(348, 100%, 68%)",
      "exercise" : "hsl(145, 58%, 55%)",
      "social" : "hsl(264, 64%, 52%)",
      "self" : "hsl(43, 84%, 65%)",
      "100" : "hsl(226, 43%, 10%)",
      "200" : "hsl(235, 46%, 20%)",
      "300" : "hsl(235, 45%, 61%)",
      "400" : "hsl(236, 100%, 87%)",
      "500" : "hsl(237, 40%, 34%)",
    }
  }
}

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
        'work' : "url('/images/icon-work.svg')",
        'exercise' : "url('/images/icon-exercise.svg')",
        'play' : "url('/images/icon-play.svg')",
        'social' : "url('/images/icon-social.svg')",
        'study' : "url('/images/icon-study.svg')",
        'self-care' : "url('/images/icon-self-care.svg')",
      },
      colors : colors,
      backgroundPosition: {
        bottom: 'bottom',
        'bottom-4': 'center bottom 1rem',
        center: 'center',
        left: 'left',
        'left-bottom': 'left bottom',
        'left-top': 'left top',
        right: 'right',
        'right-bottom': 'right bottom',
        'right-top': 'right top',
        'right-top-4': 'right top -0.5rem',
        top: 'top',
        'top-4': 'center top 1rem',
        
    },
  }
  },
  plugins: [],
}
export default config
