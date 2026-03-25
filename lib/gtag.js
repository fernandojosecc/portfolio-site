// Google Analytics 4 Integration
// Replace G-XXXXXXXXXX with your actual GA4 Measurement ID

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-7P17P23BMK";

// Check if GA is enabled (not the placeholder)
export const isGAEnabled = GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== "G-7P17P23BMK";

// Page view tracking
export const pageview = (url) => {
  if (!isGAEnabled || typeof window === "undefined" || !window.gtag) return;
  
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// Event tracking helper
export const event = ({ action, category, label, value }) => {
  if (!isGAEnabled || typeof window === "undefined" || !window.gtag) return;
  
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Predefined events for common actions
export const track = {
  // Project interactions
  projectView: (projectName) =>
    event({
      action: "view_project",
      category: "engagement",
      label: projectName,
    }),
  
  // Contact interactions  
  emailClick: () =>
    event({
      action: "click_email",
      category: "contact",
      label: "email_link",
    }),
  
  githubClick: () =>
    event({
      action: "click_github",
      category: "contact",
      label: "github_link",
    }),
  
  websiteClick: () =>
    event({
      action: "click_website",
      category: "contact",
      label: "website_link",
    }),
  
  // Navigation
  navClick: (section) =>
    event({
      action: "navigate",
      category: "navigation",
      label: section,
    }),
};
