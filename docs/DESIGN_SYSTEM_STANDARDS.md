# Rapid Resume - Premium Design System
# Color, Typography, Spacing, and Component Standards

## 1. COLOR PALETTE

### Primary Colors (Purple Gradient)
```
Primary 50:   #f5f3ff
Primary 100:  #ede9fe
Primary 200:  #ddd6fe
Primary 300:  #c4b5fd
Primary 400:  #a78bfa
Primary 500:  #8b5cf6  ← Main accent
Primary 600:  #7c3aed  ← CTA buttons
Primary 700:  #6d28d9  ← Hover state
Primary 800:  #5b21b6
Primary 900:  #4c1d95
Primary 950:  #2e1065  ← Darkest (dark mode)
```

### Secondary Colors (Neutral Gray)
```
Gray 50:   #f9fafb    ← Lightest background
Gray 100:  #f3f4f6
Gray 200:  #e5e7eb
Gray 300:  #d1d5db
Gray 400:  #9ca3af
Gray 500:  #6b7280
Gray 600:  #4b5563
Gray 700:  #374151
Gray 800:  #1f2937
Gray 900:  #111827    ← Text
Gray 950:  #030712
```

### Semantic Colors
```
Success:   #10b981    (Emerald)
Warning:   #f59e0b    (Amber)
Error:     #ef4444    (Red)
Info:      #3b82f6    (Blue)
```

### Usage Rules
- **Backgrounds:** Gray 50, Gray 100 (not pure white #fff)
- **Text:** Gray 900 for headings, Gray 700 for body, Gray 600 for secondary
- **Borders:** Gray 200, Gray 300
- **CTAs:** Primary 600 (hover: Primary 700)
- **Accents:** Teal (#14b8a6), Cyan (#06b6d4), Emerald (#10b981)

---

## 2. TYPOGRAPHY

### Font Stack
```
sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", "IBM Plex Sans", sans-serif
serif: "Cormorant Garamond", Georgia, serif (headlines only)
mono: "Monaco", "Courier New", monospace (code/technical text)
```

### Type Scale
```
H1: 42-48px, weight 700, line-height 1.2
H2: 32-36px, weight 700, line-height 1.2
H3: 24-28px, weight 600, line-height 1.3
H4: 18-20px, weight 600, line-height 1.3
Body: 14-16px, weight 400, line-height 1.6
Label: 12-14px, weight 500, line-height 1.4
Caption: 11-12px, weight 400, line-height 1.4
Button: 14px, weight 600, line-height 1.4
```

### Line Heights
```
Headings: 1.2
Body: 1.6
Compact: 1.4
```

---

## 3. SPACING SYSTEM

```
2px   (xs)    → Fine adjustments
4px   (xs)    → Component gaps
8px   (sm)    → Small spacing
12px  (md)    → Standard spacing
16px  (lg)    → Section spacing
24px  (xl)    → Page spacing
32px  (2xl)   → Large gaps
48px  (3xl)   → Hero/section spacing
```

### Padding Scale (Card, Button, Input)
```
Button:        12px 24px (top/bottom: md, left/right: lg)
Input/Label:   8px 12px (top/bottom: sm, left/right: md)
Card:          20px (lg)
Section:       32-48px (2xl-3xl)
Page margin:   24px mobile, 32px tablet, 48px desktop
```

---

## 4. SHADOWS

```
Shadow SM:  0 1px 2px 0 rgba(0, 0, 0, 0.05)
Shadow MD:  0 4px 6px -1px rgba(0, 0, 0, 0.1)
Shadow LG:  0 10px 15px -3px rgba(0, 0, 0, 0.1)
Shadow XL:  0 20px 25px -5px rgba(0, 0, 0, 0.1)
```

### Shadow Usage
- **Hover:** Shadow MD
- **Elevated:** Shadow LG
- **Modal:** Shadow XL
- **Cards:** Shadow SM (at rest), Shadow MD (hover)

---

## 5. BORDER RADIUS

```
SM:  6px     → Input fields, small components
MD:  8px     → Badges, chips
LG:  12px    → Cards, modals
XL:  16px    → Large sections, headers
```

---

## 6. GLASSMORPHISM EFFECTS

### Backdrop Blur
```
Subtle:  blur(4px)
Medium:  blur(8px)
Heavy:   blur(12px)
```

### Glass Background
```
Primary:    rgba(255, 255, 255, 0.8) + blur(8px)
Secondary:  rgba(15, 23, 42, 0.05) + blur(10px)
Border:     1px solid rgba(255, 255, 255, 0.25)
```

### Example CSS
```css
.glass-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
}
```

---

## 7. GRADIENTS

### Primary Gradient
```css
background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
```

### Accent Gradient
```css
background: linear-gradient(135deg, #8b5cf6 0%, #14b8a6 100%);
```

### Soft Gradient (Hero)
```css
background: linear-gradient(135deg, #f5f3ff 0%, #f3f4f6 100%);
```

---

## 8. ANIMATION SPECIFICATIONS

### Timing Functions
```
Ease:       cubic-bezier(0.25, 0.46, 0.45, 0.94)
EaseInOut:  cubic-bezier(0.4, 0, 0.2, 1)
EaseOut:    cubic-bezier(0.0, 0, 0.2, 1)
EaseIn:     cubic-bezier(0.4, 0, 1, 1)
Spring:     cubic-bezier(0.34, 1.56, 0.64, 1)
```

### Durations
```
Fast:       0.15s  → Hover states
Standard:   0.3s   → Transitions
Slow:       0.5s   → Full page animations
```

### Common Animations
```css
/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Slide Up */
@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(20px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

/* Pop In */
@keyframes popIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Scale Hover */
@keyframes scaleHover {
  from { transform: scale(1); }
  to { transform: scale(1.05); }
}
```

---

## 9. BUTTON STYLES

### Primary Button
```
Background: Primary 600
Text: White
Padding: 12px 24px
Border-radius: 8px
Font-weight: 600
Font-size: 14px
Hover: Primary 700, translateY(-2px), shadow-lg
Active: Primary 800, translateY(0)
```

### Secondary Button
```
Background: Gray 100
Text: Gray 700
Border: 1px solid Gray 300
Padding: 12px 24px
Border-radius: 8px
Hover: Gray 200, border-color Gray 400
```

### Outline Button
```
Background: Transparent
Border: 1px solid Gray 300
Text: Gray 700
Padding: 12px 24px
Hover: Background Gray 50
```

### Disabled State (All)
```
Opacity: 0.5
Cursor: not-allowed
No hover effect
```

---

## 10. INPUT FIELDS

### Standard Input
```
Border: 1px solid Gray 300
Background: White
Padding: 8px 12px
Border-radius: 6px
Font-size: 14px
Focus: 
  - Border-color: Primary 500
  - Box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1)
  - Outline: none
Disabled:
  - Background: Gray 50
  - Color: Gray 400
  - Cursor: not-allowed
```

### Textarea
```
Same as input
Min-height: 80px
Resize: vertical
Font-family: inherit
```

---

## 11. FORM LABELS

```
Font-size: 13px
Font-weight: 500
Color: Gray 700
Margin-bottom: 4px
Display: block
```

### Required Indicator
```
Add "*" after label
Color: Error color or Primary color
Font-weight: 600
```

---

## 12. BADGES & CHIPS

### Badge (Small labels)
```
Padding: 4px 8px
Font-size: 11px
Font-weight: 600
Border-radius: 12px
Background: Primary 100
Color: Primary 700
Text-transform: uppercase
Letter-spacing: 0.5px
```

### Chip (Larger, interactive)
```
Padding: 8px 16px
Font-size: 13px
Font-weight: 500
Border-radius: 20px
Background: Gray 100
Color: Gray 700
Border: 1px solid Gray 300
Hover: Gray 200
```

---

## 13. CARDS

### Standard Card
```
Background: White
Border: 1px solid Gray 200
Border-radius: 12px
Padding: 20px
Box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
Hover: 
  - Box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
  - Border-color: Gray 300
```

### Glass Card
```
Background: rgba(255, 255, 255, 0.8)
Backdrop-filter: blur(8px)
Border: 1px solid rgba(255, 255, 255, 0.25)
Box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15)
```

---

## 14. BREAKPOINTS

```
Mobile:       < 480px
Tablet-sm:    480px - 767px
Tablet:       768px - 1023px
Desktop:      1024px - 1279px
Desktop-lg:   ≥ 1280px
```

### Responsive Patterns

**Layout:**
```
Mobile:    1 column
Tablet:    2-3 columns
Desktop:   3-4 columns
```

**Type Scale:**
```
Mobile:    Reduce by ~10%
Tablet:    Standard scale
Desktop:   +5% for headings
```

**Padding:**
```
Mobile:    16px
Tablet:    24px
Desktop:   32-48px
```

---

## 15. DARK MODE (Future Support)

### Root Variables
```css
@media (prefers-color-scheme: dark) {
  :root {
    --surface-bg: #0f172a;           /* Deep blue */
    --surface-secondary: #1e293b;    /* Slightly lighter */
    --surface-tertiary: #334155;     /* Even lighter */
    --text-primary: #f1f5f9;         /* Off-white */
    --text-secondary: #cbd5e1;       /* Light gray */
    --glass-bg: rgba(15, 23, 42, 0.8);
    --glass-border: 1px solid rgba(148, 163, 184, 0.2);
  }
}
```

---

## 16. ACCESSIBILITY STANDARDS

### Contrast Ratios
```
Text on Background: ≥ 4.5:1 (WCAG AA)
Large Text:         ≥ 3:1
UI Components:      ≥ 3:1
```

### Focus States
```
All interactive: 2px solid Primary 600
Outline-offset: 2px
Visible at all times
```

### Colors Not Alone
- Don't use color alone to convey meaning
- Add icons, text, or patterns
- Example: ✓ (success), ✕ (error)

---

## 17. COMPONENT-SPECIFIC RULES

### TemplateCard
```
Size: Varies by breakpoint
   - Desktop: 4-6 per row
   - Tablet: 3 per row
   - Mobile: 2 per row

Aspect Ratio: 8.5:11 (letter size)
Hover Effect: 
   - translateY(-4px)
   - shadow-lg
   - overlay with CTA button

Active State:
   - Border: 2px solid Primary 600
   - Background glow: rgba(124, 58, 237, 0.1)
```

### SectionCard (Form)
```
Background: White
Border: 1px solid Gray 200
Margin: 16px 0
Header: 16px padding, hover: Gray 50
Content: 16px padding, background: Gray 50
Chevron: Rotate 180° when expanded
```

### PreviewPane (Sticky)
```
Position: sticky
Top: 100px
Max-height: 80vh
Overflow-y: auto
Width: 380px (fixed)
Responsive: Full-width tablet/mobile
```

---

## 18. VALIDATION & ERROR STATES

### Input Error
```
Border: 1px solid Error color
Background: rgba(239, 68, 68, 0.05)
Error text: 12px, Error color, margin-top: 4px
```

### Disabled
```
Opacity: 0.5
Background: Gray 100
Cursor: not-allowed
Color: Gray 400
```

### Loading
```
Opacity: 0.7
Cursor: wait
Spinner: 16px, Primary 600
```

---

## 19. RESPONSIVE CONSIDERATIONS

### Grid Layout
```css
/* Desktop: 4 columns */
@media (min-width: 1280px) {
  grid-template-columns: repeat(4, 1fr);
}

/* Tablet: 3 columns */
@media (max-width: 1023px) {
  grid-template-columns: repeat(3, 1fr);
}

/* Mobile: 2 columns */
@media (max-width: 767px) {
  grid-template-columns: repeat(2, 1fr);
}

/* Small mobile: 1 column */
@media (max-width: 479px) {
  grid-template-columns: 1fr;
}
```

### Touch Targets
```
Minimum: 44x44px
Recommended: 48x48px
Spacing: 8px minimum between targets
```

---

## 20. IMPLEMENTATION CHECKLIST

- [ ] Update CSS variables in `src/styles/design-system.css`
- [ ] Create `src/styles/glassmorphism.css` for glass effects
- [ ] Create `src/styles/animations.css` for keyframes
- [ ] Update `tailwind.config.cjs` with new color palette
- [ ] Create `src/styles/responsive.css` for breakpoints
- [ ] Review all components against these standards
- [ ] Test accessibility contrast ratios
- [ ] Test on all breakpoints
- [ ] Validate keyboard navigation
- [ ] Test with screen readers

---

**Last Updated:** April 2026  
**Version:** 1.0 (Design System Baseline)
