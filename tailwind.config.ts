import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        goat: {
          background: '#050506',
          panel: '#0c0c0f',
          panel2: '#141419',
          surface: '#101014',
          elevated: '#18181f',
          text: '#f4f0e8',
          text2: '#c7c0b4',
          muted: '#81796c',
          line: 'rgba(255,255,255,.12)',
          gold: '#d8b45d',
          silver: '#c9c7bd',
          bronze: '#a7754d',
          danger: '#dd2438'
        }
      },
      fontFamily: {
        display: ['Anton', 'Impact', 'sans-serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['Space Mono', 'monospace']
      },
      borderRadius: {
        goat: '24px',
        mythic: '34px'
      },
      boxShadow: {
        mythic: '0 24px 90px rgba(0,0,0,.45)',
        gold: '0 18px 80px rgba(216,180,93,.18)'
      },
      transitionTimingFunction: {
        goat: 'cubic-bezier(.22,1,.36,1)'
      },
      transitionDuration: {
        fast: '140ms',
        normal: '240ms',
        slow: '520ms'
      },
      backgroundImage: {
        'mythic-panel': 'linear-gradient(180deg,rgba(255,255,255,.04),rgba(255,255,255,.015))',
        'mythic-stage': 'linear-gradient(135deg,#050506,#09090c)'
      }
    }
  },
  plugins: []
};

export default config;
