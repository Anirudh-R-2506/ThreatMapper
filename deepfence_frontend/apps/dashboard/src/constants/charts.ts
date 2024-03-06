import { colors } from 'tailwind-preset';

import { Mode } from '@/theme/ThemeContext';

export const getSeverityColorMap = (theme: Mode) => {
  const color = colors[theme === 'light' ? 'variables' : 'darkVariables'].DEFAULT;
  return {
    critical: color['severity-critical'],
    high: color['severity-high'],
    medium: color['severity-medium'],
    low: color['severity-low'],
    unknown: color['severity-unknown'],
  };
};

// TODO: take theme into account
export function getColorForCVSSScore(theme: Mode, score: number | undefined): string {
  const color = colors[theme === 'light' ? 'variables' : 'darkVariables'].DEFAULT;
  if (!score) return color['df-gray']['600'];
  if (score > 0 && score <= 3.9) return color.chart['yellow1'];
  if (score >= 4 && score <= 6.9) return color['status-warning'];
  if (score >= 7 && score <= 8.9) return color.chart['orange'];
  if (score >= 9 && score <= 10) return color['status-error'];
  return color['df-gray']['600'];
}

export const getPostureColor = (theme: Mode) => {
  const color = colors[theme === 'light' ? 'variables' : 'darkVariables'].DEFAULT;
  const grayCode = theme === 'light' ? '400' : '600';

  return {
    alarm: color['status-error'],
    info: color['status-info'],
    ok: color['status-success'],
    skip: color['df-gray'][grayCode],

    pass: color['status-success'],
    warn: color['status-warning'],
    note: color['df-gray'][grayCode],
    delete: color['status-error'],
  };
};

export function getColorForCompliancePercent(
  theme: Mode,
  percent: number | undefined | null,
): string {
  const color = colors[theme === 'light' ? 'variables' : 'darkVariables'].DEFAULT;
  if (percent === undefined || percent === null) {
    return color['severity-unknown'];
  }
  if (percent >= 80 && percent <= 100) {
    return color['status-success'];
  } else if (percent >= 30 && percent < 80) {
    return color['severity-medium'];
  } else if (percent < 30) {
    return color['status-error'];
  }
  return color['severity-unknown'];
}
