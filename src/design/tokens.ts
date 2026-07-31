export const tokens = {
  colors: {
    background: '#050506',
    panel: '#0c0c0f',
    panel2: '#141419',
    surface: '#101014',
    elevated: '#18181f',
    line: 'rgba(255,255,255,.12)',
    text: '#f4f0e8',
    text2: '#c7c0b4',
    muted: '#81796c',
    gold: '#d8b45d',
    silver: '#c9c7bd',
    bronze: '#a7754d',
    danger: '#dd2438'
  },
  radius: {
    sm: '10px',
    md: '16px',
    lg: '24px',
    xl: '34px',
    full: '999px'
  },
  spacing: {
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    6: '24px',
    8: '32px',
    10: '40px',
    12: '48px',
    16: '64px',
    20: '80px',
    24: '96px',
    32: '128px'
  },
  motion: {
    fast: '140ms',
    normal: '240ms',
    slow: '520ms',
    ease: 'cubic-bezier(.22,1,.36,1)'
  },
  typography: {
    display: 'Anton, Impact, sans-serif',
    body: 'DM Sans, system-ui, sans-serif',
    mono: 'Space Mono, monospace'
  }
} as const;

export type Tokens = typeof tokens;
