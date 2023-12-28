import { Config } from 'tailwindcss/types/config';

const preset = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Nunito Sans',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
        body: [
          'Nunito Sans',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
      fontSize: {
        h1: [
          '30px',
          {
            lineHeight: '36px',
            fontWeight: '600',
          },
        ],
        h2: [
          '22px',
          {
            lineHeight: '30px',
            fontWeight: '600',
          },
        ],
        h3: [
          '18px',
          {
            lineHeight: '24px',
            fontWeight: '600',
          },
        ],
        h4: [
          '16px',
          {
            lineHeight: '24px',
            fontWeight: '400',
          },
        ],
        h5: [
          '14px',
          {
            lineHeight: '24px',
            fontWeight: '700',
          },
        ],
        h6: [
          '14px',
          {
            lineHeight: '24px',
            fontWeight: '600',
          },
        ],
        p1: [
          '14px',
          {
            lineHeight: '24px',
            fontWeight: '400',
          },
        ],
        p2: [
          '14px',
          {
            lineHeight: '24px',
            fontWeight: '400',
          },
        ],
        p3: [
          '13px',
          {
            lineHeight: '18px',
            fontWeight: '700',
          },
        ],
        p4: [
          '13px',
          {
            lineHeight: '18px',
            fontWeight: '400',
          },
        ],
        p5: [
          '13px',
          {
            lineHeight: '18px',
            fontWeight: '400',
          },
        ],
        p6: [
          '12px',
          {
            lineHeight: '18px',
            fontWeight: '600',
          },
        ],
        p7: [
          '12px',
          {
            lineHeight: '18px',
            fontWeight: '400',
          },
        ],
        p8: [
          '11px',
          {
            lineHeight: '16px',
            fontWeight: '400',
          },
        ],
        p9: [
          '10px',
          {
            lineHeight: '13px',
            fontWeight: '400',
          },
        ],
        t1: [
          '12px',
          {
            lineHeight: '16px',
            fontWeight: '800',
            letterSpacing: '0.1em',
          },
        ],
        t2: [
          '12px',
          {
            lineHeight: '16px',
            fontWeight: '700',
            letterSpacing: '0.1em',
          },
        ],
        t3: [
          '11px',
          {
            lineHeight: '16px',
            fontWeight: '800',
            letterSpacing: '0.1em',
          },
        ],
        t4: [
          '11px',
          {
            lineHeight: '16px',
            fontWeight: '600',
            letterSpacing: '0.05em',
          },
        ],
        t5: [
          '10px',
          {
            lineHeight: '16px',
            fontWeight: '600',
            letterSpacing: '0.05em',
          },
        ],
      },
      colors: {
        transparent: 'transparent',
        white: '#ffffff',
        black: '#000000',
        'brand-light': {
          blue: 'var(--brand-blue)',
          magenta: 'var(--brand-magenta)',
          purple: 'var(--brand-purple)',
        },
        'brand-dark': {
          blue: 'var(--brand-blue)',
          magenta: 'var(--brand-magenta)',
          purple: 'var(--brand-purple)',
        },
        text: {
          'text-and-icon': 'var(--text-text-and-icon)',
          'input-value': 'var(--text-input-value)',
          'text-inverse': 'var(--text-text-inverse)',
          link: 'var(--text-link)',
        },
        accent: {
          accent: 'var(--accent-accent)',
        },
        bg: {
          page: 'var(--bg-page)',
          'grid-border': 'var(--bg-grid-border)',
          tooltip: 'var(--bg-tooltip)',
          'grid-header': 'var(--bg-grid-header)',
          'top-header': 'var(--bg-top-header)',
          'left-nav': 'var(--bg-left-nav)',
          'breadcrumb-bar': 'var(--bg-breadcrumb-bar)',
          'grid-default': 'var(--bg-grid-default)',
          'grid-border-light': 'var(--bg-grid-border-light)',
          'map-cluster': 'var(--bg-map-cluster)',
          card: 'var(--bg-card)',
          'map-node': 'var(--bg-map-node)',
          'active-selection': 'var(--bg-active-selection)',
          'hover-1': 'var(--bg-hover-1)',
          'hover-2': 'var(--bg-hover-2)',
          'hover-3': 'var(--bg-hover-3)',
          'side-panel': 'var(--bg-side-panel)',
        },
        status: {
          success: 'var(--status-success)',
          error: 'var(--status-error)',
          warning: 'var(--status-warning)',
          info: 'var(--status-info)',
        },
        clarity: {
          border: '#0F171C',
          'page-bg': '#1B2A32',
          'component-bg': '#22343C',
          'active-bg': '#324F61',
          action: '#31A1D7',
        },
        chart: {
          pink1: '#F1428A',
          pink2: '#C7527E',
          pink3: '#E3749E',
          red: '#F55B47',
          orange: '#F57600',
          yellow1: '#E5C354',
          yellow2: '#F6C24F',
          lime: '#62C655',
          green: '#2FBF9E',
          blue1: '#0095D3',
          blue2: '#3478EB',
          blue3: '#1C64F2',
          purple1: '#6870C4',
          purple2: '#8451ED',
        },
        'df-gray': {
          100: '#F3F6FA',
          200: '#D9E4EA',
          300: '#C1CDD4',
          400: '#A9B6BE',
          500: '#919FA8',
          600: '#61717D',
          700: '#495A67',
          800: '#314351',
          900: '#25333D',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        red: {
          50: '#FDF2F2',
          100: '#FDE8E8',
          200: '#FBD5D5',
          300: '#F8B4B4',
          400: '#F98080',
          500: '#F05252',
          600: '#E02424',
          700: '#C81E1E',
          800: '#9B1C1C',
          900: '#771D1D',
        },
        orange: {
          50: '#FFF8F1',
          100: '#FEECDC',
          200: '#FCD9BD',
          300: '#FDBA8C',
          400: '#FF8A4C',
          500: '#FF5A1F',
          600: '#D03801',
          700: '#B43403',
          800: '#8A2C0D',
          900: '#771D1D',
        },
        yellow: {
          50: '#FDFDEA',
          100: '#FDF6B2',
          200: '#FCE96A',
          300: '#FACA15',
          400: '#E3A008',
          500: '#C27803',
          600: '#9F580A',
          700: '#8E4B10',
          800: '#723B13',
          900: '#633112',
        },
        green: {
          50: '#F3FAF7',
          100: '#DEF7EC',
          200: '#BCF0DA',
          300: '#84E1BC',
          400: '#31C48D',
          500: '#0E9F6E',
          600: '#057A55',
          700: '#046C4E',
          800: '#03543F',
          900: '#014737',
        },
        teal: {
          50: '#EDFAFA',
          100: '#D5F5F6',
          200: '#AFECEF',
          300: '#7EDCE2',
          400: '#16BDCA',
          500: '#0694A2',
          600: '#047481',
          700: '#036672',
          800: '#05505C',
          900: '#014451',
        },
        blue: {
          50: '#EBF5FF',
          100: '#E1EFFE',
          200: '#C3DDFD',
          300: '#A4CAFE',
          400: '#76A9FA',
          500: '#3F83F8',
          600: '#1C64F2',
          700: '#1A56DB',
          800: '#1E429F',
          900: '#233876',
        },
        indigo: {
          50: '#F0F5FF',
          100: '#E5EDFF',
          200: '#CDDBFE',
          300: '#B4C6FC',
          400: '#8DA2FB',
          500: '#6875F5',
          600: '#5850EC',
          700: '#5145CD',
          800: '#42389D',
          900: '#362F78',
        },
        purple: {
          50: '#F6F5FF',
          100: '#EDEBFE',
          200: '#DCD7FE',
          300: '#CABFFD',
          400: '#AC94FA',
          500: '#9061F9',
          600: '#7E3AF2',
          700: '#6C2BD9',
          800: '#5521B5',
          900: '#4A1D96',
        },
        pink: {
          50: '#FDF2F8',
          100: '#FCE8F3',
          200: '#FAD1E8',
          300: '#F8B4D9',
          400: '#F17EB8',
          500: '#E74694',
          600: '#D61F69',
          700: '#BF125D',
          800: '#99154B',
          900: '#751A3D',
        },
      },
      keyframes: {
        // tooltip
        'slide-up-fade': {
          '0%': { opacity: '0', transform: 'translateY(2px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-right-fade': {
          '0%': { opacity: '0', transform: 'translateX(-2px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-down-fade': {
          '0%': { opacity: '0', transform: 'translateY(-2px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-left-fade': {
          '0%': { opacity: '0', transform: 'translateX(2px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        // dropdown menu & select
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-right-in': {
          '100%': { right: '0' },
        },
        'slide-right-out': {
          '0%': { right: '0' },
        },
        'slide-left-in': {
          '100%': { left: '0' },
        },
        'slide-left-out': {
          '0%': { left: '0' },
        },
        'opacity-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'opacity-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'modal-slide-in': {
          '0%': { opacity: '1', transform: 'translateY(-24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pop-in': {
          '0%': { opacity: '0', transform: 'scale(.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'pop-out': {
          '100%': { opacity: '1', transform: 'scale(1)' },
          '0%': { opacity: '0', transform: 'scale(0.96)' },
        },
        'accordion-slide-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-slide-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        // tooltip
        'slide-up-fade': 'slide-up-fade 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-right-fade': 'slide-right-fade 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down-fade': 'slide-down-fade 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-left-fade': 'slide-left-fade 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        // dropdown menu & select
        'scale-in': 'scale-in 0.2s ease-in-out',
        'slide-down': 'slide-down 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up': 'slide-up 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        // modal
        'pop-in': 'pop-in 250ms ease',
        'pop-out': 'pop-out 250ms ease',
        'slide-right-in': 'slide-right-in 250ms forwards cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-right-out': 'slide-right-out 250ms forwards cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-left-in': 'slide-left-in 250ms forwards cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-left-out': 'slide-left-out 250ms forwards cubic-bezier(0.16, 1, 0.3, 1)',
        'opacity-out': 'opacity-out 250ms cubic-bezier(0.16, 1, 0.3, 1)',
        'opacity-in': 'opacity-in 250ms cubic-bezier(0.16, 1, 0.3, 1)',
        'modal-slide-in': 'modal-slide-in 300ms cubic-bezier(0.5, 1, 0.5, 1)',
        'accordion-open': 'accordion-slide-down 100ms cubic-bezier(0.16, 1, 0.3, 1)',
        'accordion-closed': 'accordion-slide-up 100ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
} satisfies Partial<Config>;

const colors = {
  transparent: 'transparent',
  white: '#ffffff',
  black: '#000000',
  dark: {
    brand: {
      blue: '#2742e7',
      magenta: '#e640a2',
      purple: '#753ee5',
      error: '#f56682',
    },
    text: {
      'text-and-icon': '#b2c0c9',
      'input-value': '#eeeeee',
      'text-inverse': '#000000',
      link: '#0ca7ff',
    },
    accent: {
      accent: '#489cff',
    },
    bg: {
      page: '#020617',
      'grid-border': '#2c375f',
      tooltip: '#233c7d',
      'grid-header': '#0f1e34',
      'top-header': '#0c1a33',
      'left-nav': '#0b121e',
      'breadcrumb-bar': '#11223b',
      'grid-default': '#0c182a',
      'grid-border-light': '#1c243f',
      'map-cluster': '#183867',
      card: '#16253b',
      'map-node': '#1b365e',
      'active-selection': '#183867',
      'hover-1': '#3777c2',
      'hover-2': '#0e1f33',
      'hover-3': '#0140e3',
      'side-panel': '#192c49',
    },
    status: {
      success: '#15b77e',
      error: '#f56682',
      warning: '#ff9c32',
      info: '#1d8ee6',
    },
    chart: {
      critical: preset.theme.extend.colors.status.error,
      high: preset.theme.extend.colors.chart.orange,
      medium: preset.theme.extend.colors.status.warning,
      low: preset.theme.extend.colors.chart.yellow1,
      unknown: preset.theme.extend.colors['df-gray'][600],
      axisLabel: preset.theme.extend.colors['df-gray'][400],
      splitLine: preset.theme.extend.colors['df-gray'][900],
    },
  },
  light: {
    brand: {
      blue: '#63a1ff',
      magenta: '#d91590',
      purple: '#6d32e5',
      error: '#f56682',
    },
    text: {
      'text-and-icon': '#565656',
      'input-value': '#000000',
      'text-inverse': '#ffffff',
      link: '#1c64f2',
    },
    accent: {
      accent: '#0079b8',
    },
    bg: {
      page: '#f6f9ff',
      'grid-border': '#e5e7eb',
      tooltip: '#f2f2f2',
      'grid-header': '#fbfbfb',
      'top-header': '#ffffff',
      'left-nav': '#fcfcfc',
      'breadcrumb-bar': '#fdfdfd',
      'grid-default': '#ffffff',
      'grid-border-light': '#e5e7eb',
      'map-cluster': '#183867',
      card: '#fcfcfc',
      'map-node': '#e4ecf2',
      'active-selection': '#f3f5f7',
      'hover-1': '#0072a3',
      'hover-2': '#f9fafb',
      'hover-3': '#0099e9',
      'side-panel': '#fefefe',
    },
    status: {
      success: '#3c8500',
      error: '#c81e1e',
      warning: '#e3a008',
      info: '#1d8ee6',
    },
    chart: {
      critical: preset.theme.extend.colors.status.error,
      high: preset.theme.extend.colors.chart.orange,
      medium: preset.theme.extend.colors.status.warning,
      low: preset.theme.extend.colors.chart.yellow1,
      unknown: preset.theme.extend.colors['df-gray'][400],
      axisLabel: preset.theme.extend.colors['df-gray'][600],
      splitLine: preset.theme.extend.colors['df-gray'][100],
    },
  },
  clarity: {
    border: '#0F171C',
    'page-bg': '#1B2A32',
    'component-bg': '#22343C',
    'active-bg': '#324F61',
    action: '#31A1D7',
  },
  chart: {
    pink1: '#F1428A',
    pink2: '#C7527E',
    pink3: '#E3749E',
    red: '#F55B47',
    orange: '#F57600',
    yellow1: '#E5C354',
    yellow2: '#F6C24F',
    lime: '#62C655',
    green: '#2FBF9E',
    blue1: '#0095D3',
    blue2: '#3478EB',
    blue3: '#1C64F2',
    purple1: '#6870C4',
    purple2: '#8451ED',
  },
  'df-gray': {
    100: '#F3F6FA',
    200: '#D9E4EA',
    300: '#C1CDD4',
    400: '#A9B6BE',
    500: '#919FA8',
    600: '#61717D',
    700: '#495A67',
    800: '#314351',
    900: '#25333D',
  },
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
  red: {
    50: '#FDF2F2',
    100: '#FDE8E8',
    200: '#FBD5D5',
    300: '#F8B4B4',
    400: '#F98080',
    500: '#F05252',
    600: '#E02424',
    700: '#C81E1E',
    800: '#9B1C1C',
    900: '#771D1D',
  },
  orange: {
    50: '#FFF8F1',
    100: '#FEECDC',
    200: '#FCD9BD',
    300: '#FDBA8C',
    400: '#FF8A4C',
    500: '#FF5A1F',
    600: '#D03801',
    700: '#B43403',
    800: '#8A2C0D',
    900: '#771D1D',
  },
  yellow: {
    50: '#FDFDEA',
    100: '#FDF6B2',
    200: '#FCE96A',
    300: '#FACA15',
    400: '#E3A008',
    500: '#C27803',
    600: '#9F580A',
    700: '#8E4B10',
    800: '#723B13',
    900: '#633112',
  },
  green: {
    50: '#F3FAF7',
    100: '#DEF7EC',
    200: '#BCF0DA',
    300: '#84E1BC',
    400: '#31C48D',
    500: '#0E9F6E',
    600: '#057A55',
    700: '#046C4E',
    800: '#03543F',
    900: '#014737',
  },
  teal: {
    50: '#EDFAFA',
    100: '#D5F5F6',
    200: '#AFECEF',
    300: '#7EDCE2',
    400: '#16BDCA',
    500: '#0694A2',
    600: '#047481',
    700: '#036672',
    800: '#05505C',
    900: '#014451',
  },
  blue: {
    50: '#EBF5FF',
    100: '#E1EFFE',
    200: '#C3DDFD',
    300: '#A4CAFE',
    400: '#76A9FA',
    500: '#3F83F8',
    600: '#1C64F2',
    700: '#1A56DB',
    800: '#1E429F',
    900: '#233876',
  },
  indigo: {
    50: '#F0F5FF',
    100: '#E5EDFF',
    200: '#CDDBFE',
    300: '#B4C6FC',
    400: '#8DA2FB',
    500: '#6875F5',
    600: '#5850EC',
    700: '#5145CD',
    800: '#42389D',
    900: '#362F78',
  },
  purple: {
    50: '#F6F5FF',
    100: '#EDEBFE',
    200: '#DCD7FE',
    300: '#CABFFD',
    400: '#AC94FA',
    500: '#9061F9',
    600: '#7E3AF2',
    700: '#6C2BD9',
    800: '#5521B5',
    900: '#4A1D96',
  },
  pink: {
    50: '#FDF2F8',
    100: '#FCE8F3',
    200: '#FAD1E8',
    300: '#F8B4D9',
    400: '#F17EB8',
    500: '#E74694',
    600: '#D61F69',
    700: '#BF125D',
    800: '#99154B',
    900: '#751A3D',
  },
};

export { colors, preset };
