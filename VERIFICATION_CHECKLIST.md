# Live Site Verification Checklist

## Performance & Loading
- [ ] Site loads in under 3 seconds
- [ ] No console errors in browser DevTools
- [ ] All images/resources load correctly (no 404s)
- [ ] Fonts render correctly (Playfair Display + DM Mono)

## Functionality
- [ ] All navigation links work (work → #projects, about → #about, contact → #contact)
- [ ] Smooth scroll to sections
- [ ] Terminal animation plays on load
- [ ] Custom cursor appears on desktop (yellow dot follows mouse)
- [ ] Cursor expands when hovering links/buttons
- [ ] Mobile menu button appears on <768px screens
- [ ] Mobile menu opens/closes correctly
- [ ] All external links open in new tab:
  - [ ] GitHub link in hero
  - [ ] GitHub link in projects header
  - [ ] Email link in contact
  - [ ] GitHub link in contact
  - [ ] Website link in contact

## Responsive Design
- [ ] Desktop (>1024px): Two-column layout visible
- [ ] Tablet (768-1024px): Layout adapts gracefully
- [ ] Mobile (<768px):
  - [ ] Single column layout
  - [ ] Headlines scale down (not cut off)
  - [ ] Terminal section readable
  - [ ] Projects cards stack vertically
  - [ ] Contact form/info accessible
  - [ ] No horizontal scrolling

## Visual Design
- [ ] Yellow highlight appears on "systems." and "great."
- [ ] Status dot pulses in navbar and contact card
- [ ] Border lines render at 1.5px consistently
- [ ] Colors match design system:
  - [ ] Cream background (#F8F5EE)
  - [ ] Ink text (#1A1A16)
  - [ ] Yellow accent (#F5C842)
- [ ] Glass card effect visible in contact section
- [ ] Hover effects work on project cards (yellow underline)

## SEO & Meta
- [ ] Page title shows: "Fernando Contreras — AI Tools Specialist"
- [ ] Meta description appears in search results snippet
- [ ] Favicon displays in browser tab

## Accessibility
- [ ] All interactive elements have focus states
- [ ] Color contrast meets WCAG standards
- [ ] Animations respect prefers-reduced-motion

## Google Analytics (after setup)
- [ ] GA script loads (check Network tab)
- [ ] Pageview events fire on load
- [ ] Real-time visitors show in GA dashboard

---

## How to Test
1. Open fernandocontreras.dev in Chrome/Edge
2. Open DevTools (F12) → Console tab → verify no red errors
3. Test responsive: DevTools → Toggle device toolbar → test mobile/tablet
4. Test all links by clicking
5. Check Google Analytics Real-time report
