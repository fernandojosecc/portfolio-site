// Reusable style utilities to reduce code duplication across components

// Common padding values
export const padding = {
  section: "64px 48px",
  sectionMobile: "32px 24px",
  card: "32px",
  cardLarge: "48px",
};

// Common gap values
export const gap = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  xxl: "48px",
};

// Border styles
export const border = {
  standard: "1.5px solid var(--ink)",
  light: "1px solid var(--ink-light)",
  darkThin: "1px solid var(--ink)",
};

// Typography styles
export const typography = {
  eyebrow: {
    fontSize: "12px",
    textTransform: "uppercase",
    letterSpacing: "1px",
    color: "var(--ink-light)",
  },
  label: {
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    color: "var(--ink-light)",
  },
  body: {
    fontSize: "14px",
    lineHeight: 1.7,
    color: "var(--ink-mid)",
  },
  small: {
    fontSize: "13px",
    lineHeight: 1.6,
  },
};

// Hover handlers for consistent link styling
export const hoverHandlers = {
  inkToDark: {
    onMouseEnter: (e) => (e.target.style.color = "var(--ink)"),
    onMouseLeave: (e) => (e.target.style.color = "var(--ink-mid)"),
  },
  borderToDark: {
    onMouseEnter: (e) => (e.target.style.borderColor = "var(--ink)"),
    onMouseLeave: (e) => (e.target.style.borderColor = "var(--ink-light)"),
  },
  buttonPrimary: {
    onMouseEnter: (e) => {
      e.target.style.backgroundColor = "var(--yellow)";
      e.target.style.color = "var(--ink)";
    },
    onMouseLeave: (e) => {
      e.target.style.backgroundColor = "var(--ink)";
      e.target.style.color = "var(--cream)";
    },
  },
  cardHover: {
    onMouseEnter: (e) => {
      e.currentTarget.style.borderColor = "var(--yellow)";
      e.currentTarget.style.backgroundColor = "var(--yellow-pale)";
    },
    onMouseLeave: (e) => {
      e.currentTarget.style.borderColor = "var(--ink-light)";
      e.currentTarget.style.backgroundColor = "transparent";
    },
  },
};

// Divider component styles
export const divider = {
  standard: {
    height: "1px",
    backgroundColor: "var(--ink-light)",
    opacity: 0.3,
  },
  vertical: {
    width: "1px",
    backgroundColor: "var(--ink)",
  },
  yellow: {
    width: "16px",
    height: "2px",
    backgroundColor: "var(--yellow)",
  },
};

// Responsive breakpoints
export const breakpoints = {
  mobile: "768px",
  tablet: "1024px",
};

// Media query helpers
export const media = {
  mobile: `@media (max-width: ${breakpoints.mobile})`,
  tablet: `@media (max-width: ${breakpoints.tablet})`,
};

// Grid layouts
export const grid = {
  twoColumn: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
  twoColumnMobile: {
    display: "grid",
    gridTemplateColumns: "1fr",
  },
};
