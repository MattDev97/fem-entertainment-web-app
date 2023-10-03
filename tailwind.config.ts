import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans'] // 'Outfit' as the primary font, and 'sans' as the fallback.
      },
      backgroundColor: {
        "primary": "#FC4747",
        "secondary": "#161D2F",
        "accent": "#5A698F",
        "neutral": "#FFFFFF",
        "base-100": "#10141E",
      },
      colors: {
        "primary": "#FC4747",
        "secondary": "#161D2F",
        "accent": "#5A698F",
        "neutral": "#FFFFFF",
        "base-100": "#10141E",
      }
    },
  },
  plugins: [],
}
export default config
