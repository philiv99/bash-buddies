/**
 * Bash Buddies — LinkittyDo Theme Tokens
 */

export const linkittydoTheme = {
  colors: {
    cream: '#FDEC92',
    mint: '#A9EAD2',
    ink: '#161813',
    pop: '#FB2B57',
    paper: '#EEEDE5',
    mutedGreen: '#5E6554',
    mutedGold: '#A29A61',
    mutedPeach: '#E7A790',
    white: '#FFFFFF',
  },
  fonts: {
    headline: "'Luckiest Guy', cursive",
    body: "'Nunito', sans-serif",
  },
  borderRadius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
  },
  shadows: {
    chunky: '4px 4px 0 #161813',
    chunkySmall: '3px 3px 0 #161813',
    soft: '0 2px 8px rgba(22, 24, 19, 0.15)',
  },
  borders: {
    thick: '3px solid #161813',
    medium: '2px solid #161813',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
} as const;

export type LinkittyDoTheme = typeof linkittydoTheme;
