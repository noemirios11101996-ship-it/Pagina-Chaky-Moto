---
name: Commercial Automotive Precision
colors:
  surface: '#f9f9ff'
  surface-dim: '#d1daf4'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e9edff'
  surface-container-high: '#e1e8ff'
  surface-container-highest: '#d9e2fc'
  on-surface: '#121b2e'
  on-surface-variant: '#444651'
  inverse-surface: '#273044'
  inverse-on-surface: '#edf0ff'
  outline: '#747782'
  outline-variant: '#c4c6d3'
  surface-tint: '#395baa'
  primary: '#002565'
  on-primary: '#ffffff'
  primary-container: '#123b89'
  on-primary-container: '#89a9fe'
  inverse-primary: '#b2c5ff'
  secondary: '#a23f00'
  on-secondary: '#ffffff'
  secondary-container: '#ff752a'
  on-secondary-container: '#5f2200'
  tertiary: '#192a47'
  on-tertiary: '#ffffff'
  tertiary-container: '#30405f'
  on-tertiary-container: '#9cacd0'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b2c5ff'
  on-primary-fixed: '#001847'
  on-primary-fixed-variant: '#1d4290'
  secondary-fixed: '#ffdbcc'
  secondary-fixed-dim: '#ffb695'
  on-secondary-fixed: '#351000'
  on-secondary-fixed-variant: '#7c2e00'
  tertiary-fixed: '#d7e2ff'
  tertiary-fixed-dim: '#b6c7ec'
  on-tertiary-fixed: '#091b38'
  on-tertiary-fixed-variant: '#374766'
  background: '#f9f9ff'
  on-background: '#121b2e'
  surface-variant: '#d9e2fc'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
  display-lg-mobile:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
  headline-xl:
    fontFamily: Manrope
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-xl-mobile:
    fontFamily: Manrope
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
  headline-lg:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Manrope
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
  headline-sm:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
---

## Brand & Style

This design system establishes a robust, highly dependable commercial automotive visual identity. Designed for multi-service motorcycle centers, dealership hubs, and technical repair networks, it balances professional engineering with approachable retail clarity.

### Personality & Emotional Response
The interface communicates mechanical precision, commercial integrity, and prompt service execution. It evokes stability, certified technical expertise, and straightforward utility without unnecessary ornamentation or synthetic flashiness.

### Design Style
The system adopts a **Corporate / Modern Industrial** aesthetic:
- **Clean Structure:** High structural integrity through systematic grid alignment and disciplined spatial rhythm.
- **Physical Solidness:** Pure white card surfaces, slate stroke boundaries, and controlled navy foundations anchored by an energetic high-conversion orange.
- **Purposeful Functionalism:** Uncluttered layouts, immediate visual contrast for critical actions, and refined utility tags for technical certifications and vehicle specifications.

## Colors

The color architecture utilizes high-contrast technical pairings that balance commercial reliability with urgent transactional clarity.

- **Primary (`#123B89`):** Anchor navy representing certified mechanical engineering, authority, and institutional trust. Used for brand headers, primary navigation headers, major interactive states, and active segmented controls.
- **Secondary (`#F36C21`):** High-energy industrial orange designated exclusively for high-priority calls-to-action, operational alerts, promotional badges, and conversion triggers.
- **Tertiary / Deep Navy (`#0B1D3A`):** Deep mechanical shade used for dark structural footers, high-contrast hero surfaces, and primary typography anchors.
- **Neutral Core (`#172033`):** High-legibility charcoal navy for primary reading text, form input content, and dense data displays.
- **Canvas & Surface Palette:**
  - Base background canvas: `#F5F7FA` (cool industrial mist).
  - Surface cards & overlays: `#FFFFFF` (crisp optic white).
  - Structural borders: `#E2E8F0` (subtle divider) and `#CBD5E1` (active interactive stroke).

## Typography

The typographic hierarchy pairs **Manrope** for authoritative structural headers with **Inter** for clean, legible technical data.

- **Headlines (Manrope):** Geometric, solid, and modern. Conveys machine-tooled precision with wide horizontal clarity across inventory cards, service categories, and promotional headlines.
- **Body & Technical Data (Inter):** High x-height, neutral letterforms designed for legibility on dense vehicle spec sheets, pricing tables, maintenance logs, and commercial checkout forms.
- **Stylistic Conventions:** Numbers and price indications should utilize tabular numeric figures (`font-variant-numeric: tabular-nums`) to ensure strict alignment across inventory lists and commercial billing tables.

## Layout & Spacing

The layout operates on a standard 12-column responsive grid on desktop, scaling to 6 columns on tablet and 4 columns on mobile viewports.

### Grid & Layout Rules
- **Desktop (1024px+):** 12 columns, 1.5rem (`24px`) gutters, centered layout container with a maximum width of `1280px` and `2rem` screen margins.
- **Tablet (768px – 1023px):** 6 columns, 1rem (`16px`) gutters, `1.5rem` horizontal margins.
- **Mobile (< 768px):** 4 columns, 1rem (`16px`) gutters, `1rem` edge margins. Inventory filters reflow into a clean off-canvas drawer.

### Spacing Rhythm
- Compact internal component padding defaults to `space-sm` (`8px`) or `space-md` (`16px`).
- Card containers and structural modules leverage `space-lg` (`24px`) padding on desktop, compacting to `space-md` (`16px`) on mobile viewports.
- Section-to-section transitions consistently employ `space-2xl` (`48px`) to ensure distinct visual separation without layout fragmentation.

## Elevation & Depth

Visual hierarchy is communicated through sharp contrast borders combined with restrained, highly diffused ambient drop shadows. Overly dramatic blurs, glass textures, and glowing halos are strictly avoided to preserve technical clarity.

### Depth Layers
- **Level 0 (Base / Canvas):** Surface color `#F5F7FA`. Serves as the canvas for all layout modules.
- **Level 1 (Card & Section Surfaces):** Solid `#FFFFFF` fill bounded by a crisp 1px stroke of `#E2E8F0`. Layered with a subtle ambient shadow: `0px 1px 3px rgba(11, 29, 58, 0.05), 0px 1px 2px rgba(11, 29, 58, 0.03)`.
- **Level 2 (Interactive Cards / Hover):** Elevated cards on hover shift up by `-2px` with border `#CBD5E1` and ambient shadow: `0px 4px 12px rgba(11, 29, 58, 0.08), 0px 2px 4px rgba(11, 29, 58, 0.04)`.
- **Level 3 (Dropdowns & Popovers):** Solid `#FFFFFF` with shadow `0px 10px 24px rgba(11, 29, 58, 0.12), 0px 4px 8px rgba(11, 29, 58, 0.04)`.
- **Level 4 (Modals & Off-Canvas Sheets):** Floating white containers paired with a 40% opacity navy backdrop veil (`#0B1D3A` at 0.40 alpha).

## Shapes

The design uses balanced, modern geometric curvature. Surfaces are neither harsh nor overly pill-rounded, conveying solid mechanical engineering.

- **Base Corner Radius (`rounded-md`):** `0.5rem` (`8px`). Used for text fields, primary and secondary action buttons, dropdowns, and micro-badges.
- **Card Radius (`rounded-lg`):** `1rem` (`16px`). Applied to content cards, inventory items, service packages, and technical spec panels.
- **Hero & Dialog Radius (`rounded-xl`):** `1.5rem` (`24px`). Reserved for primary hero promotional banners, modal dialogs, and feature announcement boxes.
- **Fully Rounded / Pill:** Restricted strictly to floating badge counters and compact pill status indicators (e.g., availability status badges).

## Components

### Buttons
- **Primary CTA Button:**
  - Background: `#F36C21` with high-contrast `#FFFFFF` text.
  - Border radius: `8px`. Padding: `12px 24px`. Font: `Inter`, 600 weight.
  - Hover state: Background `#DC5810`, transition `150ms ease-in-out`.
  - Active state: Background `#C24A08`, scale `0.98`.
- **Secondary Corporate Button:**
  - Background: `#FFFFFF` with 1.5px border `#123B89` and `#123B89` text.
  - Hover state: Background `#123B89`, text `#FFFFFF`.
- **Tertiary / Ghost Button:**
  - Transparent background, `#172033` text, hover with `#E2E8F0` fill.

### Input Fields & Controls
- **Text Inputs & Dropdowns:**
  - Height: `44px` on desktop, `48px` on mobile.
  - Background: `#FFFFFF`, border: `1px solid #CBD5E1`, radius: `8px`.
  - Focus state: Border `2px solid #123B89`, outline none, shadow ring `0 0 0 3px rgba(18, 59, 137, 0.15)`.
- **Checkboxes & Radios:**
  - Dimensions: `18px × 18px`.
  - Checked state: Fill `#123B89`, white checkmark or center pip. Focus ring in secondary orange tint.

### Cards & Technical Modules
- **Service & Inventory Cards:**
  - Background: `#FFFFFF`, radius: `16px`, border: `1px solid #E2E8F0`.
  - Content padding: `24px`.
  - Image ratio for motorcycle units and mechanical parts: `16:9` with subtle light gray containment background (`#F8FAFC`).

### Badges & Trust Seals
- **Trust & Warranty Badges:**
  - Subtle background fill `#EDF2F7` with `#123B89` border and label.
- **Promo / Alert Badges:**
  - Fill `#FEF0E8`, text `#F36C21`, border `1px solid #FCD4BE`.
- **Availability Chips:**
  - Green availability pill: Fill `#ECFDF5`, text `#065F46`, paired with a solid 6px indicator dot.