/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blueprint: {
          DEFAULT: '#0E2A45',
          deep: '#0A2038',
          line: '#1D4568',
        },
        paper: '#EEF1F4',
        graphite: '#141B24',
        steel: '#7C8A99',
        signal: {
          DEFAULT: '#F2A33C',
          dim: '#C9832B',
        },
        circuit: {
          DEFAULT: '#1FA2A6',
          dim: '#177F82',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
