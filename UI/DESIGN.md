---
name: Kinetic Enterprise
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#434655'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#943700'
  on-tertiary: '#ffffff'
  tertiary-container: '#bc4800'
  on-tertiary-container: '#ffede6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

The design system is engineered for the modern workforce, balancing high-performance utility with an approachable, human-centric interface. It targets HR professionals, recruiters, and employees who require clarity and efficiency in data-heavy environments. 

The aesthetic is **Modern Minimalist with Tonal Depth**. It leverages expansive whitespace to reduce cognitive load while employing a sophisticated layering system to organize complex information. The goal is to evoke a sense of reliability, transparency, and forward-thinking professionalism. Visual interest is generated through precise typography and purposeful use of color, ensuring the product feels like a premium enterprise tool rather than a cold administrative database.

## Colors

The palette is anchored by a vibrant Blue primary, symbolizing trust and digital fluently. This is grounded by a deep Navy secondary used for navigation and high-level structural elements to provide a sense of authority.

- **Primary (#2563EB):** Reserved for primary actions, active states, and brand highlights.
- **Secondary (#0F172A):** Utilized for sidebars, headers, and text headings to establish hierarchy.
- **Accent (#22C55E):** A "success" green used for positive growth metrics, completed status, and "Hire" actions.
- **Surface (#F8FAFC):** A soft slate-grey used to differentiate content sections and card backgrounds from the main page white.
- **Functional Grays:** A range of slate and gray tones (from #F1F5F9 to #1E293B) are used for borders, secondary text, and disabled states.

## Typography

The typography strategy focuses on maximum legibility and systematic hierarchy. **Hanken Grotesk** is used for headlines to provide a modern, sharp, and contemporary feel. **Inter** is the workhorse font for all body, UI, and data elements due to its exceptional clarity at small sizes.

- **Scale:** A typographic scale of 1.25 (Major Third) ensures distinct differences between levels.
- **Weight:** Regular (400) for long-form reading, Medium (500) for labels/buttons, and Semi-Bold (600) for section titles.
- **Tracking:** Headings use slight negative letter spacing to feel tighter and more impactful, while small labels use increased tracking for better scanability.

## Layout & Spacing

The layout utilizes a **12-column fluid grid** for desktop, transitioning to a **4-column grid** for mobile devices. 

- **Grid System:** On desktop (1440px+), the maximum container width is 1280px. Gutters are fixed at 24px to maintain consistent "breathing room" between content cards.
- **Rhythm:** An 8px linear scale (4, 8, 16, 24, 32, 48, 64) governs all padding and margins. 
- **Sidebars:** Standard navigation sidebars are fixed at 280px on desktop and collapse to a 64px icon-only rail or a bottom-bar on mobile.
- **Data Densities:** This design system supports three density levels: "Comfortable" (24px cell padding) for dashboard views, and "Compact" (12px cell padding) for high-volume data tables and employee lists.

## Elevation & Depth

This design system uses **Tonal Layers and Ambient Shadows** to create a structured sense of height without visual clutter.

- **Level 0 (Floor):** The background (#FFFFFF) or Surface (#F8FAFC) color.
- **Level 1 (Cards):** Use a white background with a very soft, diffused shadow: `0px 1px 3px rgba(0, 0, 0, 0.05), 0px 10px 15px -5px rgba(0, 0, 0, 0.03)`.
- **Level 2 (Modals/Popovers):** Elevated with a more pronounced shadow to indicate focus: `0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)`.
- **Level 3 (Drag & Drop):** High-intensity shadow with a slight scale-up (1.02x) to indicate a "picked up" state.
- **Borders:** Subtle 1px borders (#E2E8F0) are used instead of shadows when elements are at the same elevation but need separation (e.g., table headers).

## Shapes

The shape language is characterized by **Generous Rounding**, which softens the professional nature of the tool and makes it feel more modern and accessible.

- **Base Radius:** 0.5rem (8px) for input fields, small buttons, and list items.
- **Large Radius (rounded-xl):** 1rem (16px) for main content cards, dashboard widgets, and large containers.
- **Pill Radius:** Used exclusively for Status Badges (Chips) and search bars to distinguish them from actionable buttons.

## Components

### Buttons
- **Primary:** Solid #2563EB with white text. 8px corner radius.
- **Secondary:** Surface #F1F5F9 with #0F172A text. Minimalist, flat appearance.
- **Ghost:** No background, #64748B text, appearing on hover with a light gray tint.

### Input Fields
- White background with a 1px #E2E8F0 border.
- On focus: border changes to #2563EB with a 3px soft blue outer glow.
- Labels are positioned above the field in `label-md` style.

### Cards
- White background, 16px corner radius, and Level 1 shadow.
- Padding should be 24px (lg) for standard content.

### Chips/Badges
- Used for "Status" (Active, Pending, Terminated). 
- Subtle, light-tint backgrounds with dark-tint text of the same hue (e.g., Success: Light Green bg, Dark Green text).

### Data Tables
- Header row uses Surface (#F8FAFC) with uppercase `label-md` text.
- Row hover state uses a subtle #F1F5F9 tint.
- Horizontal dividers only; no vertical borders to maintain a clean, breathable look.