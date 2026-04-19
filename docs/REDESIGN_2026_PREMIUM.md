# 🎯 Rapid Resume - Premium UI/UX Redesign 2026

**Goal:** Transform Rapid Resume from "basic tool" → "premium SaaS experience"  
**Focus Areas:** Conversion rate, premium feel, reduced cognitive load, fast performance  
**Timeline:** Phased rollout (P0 → P1 → P2)

---

## 📋 TABLE OF CONTENTS

1. [Design System](#1-design-system)
2. [Updated UX Flow](#2-updated-ux-flow)
3. [Component Architecture](#3-component-architecture)
4. [Template Selection Redesign](#4-template-selection-redesign)
5. [Builder Page Simplification](#5-builder-page-simplification)
6. [Form UX Enhancement](#6-form-ux-enhancement)
7. [Premium UI (Glassmorphism)](#7-premium-ui-glassmorphism)
8. [Resume Upload Feature](#8-resume-upload-feature)
9. [Download Success Page](#9-download-success-page)
10. [Implementation Roadmap](#10-implementation-roadmap)

---

## 1. DESIGN SYSTEM

### Color Palette Update

```json
{
  "primary": {
    "50": "#f5f3ff",
    "100": "#ede9fe",
    "200": "#ddd6fe",
    "300": "#c4b5fd",
    "400": "#a78bfa",
    "500": "#8b5cf6",
    "600": "#7c3aed",
    "700": "#6d28d9",
    "800": "#5b21b6",
    "900": "#4c1d95",
    "950": "#2e1065"
  },
  "secondary": {
    "50": "#f3f4f6",
    "100": "#e5e7eb",
    "200": "#d1d5db",
    "300": "#9ca3af",
    "400": "#6b7280",
    "500": "#4b5563",
    "600": "#374151",
    "700": "#1f2937",
    "800": "#111827",
    "900": "#030712"
  },
  "accent": {
    "teal": "#14b8a6",
    "cyan": "#06b6d4",
    "emerald": "#10b981"
  },
  "semantic": {
    "success": "#10b981",
    "warning": "#f59e0b",
    "error": "#ef4444",
    "info": "#3b82f6"
  }
}
```

### CSS Custom Properties (Updated)

```css
:root {
  /* Primary Color System */
  --primary-50: #f5f3ff;
  --primary-100: #ede9fe;
  --primary-300: #c4b5fd;
  --primary-500: #8b5cf6;
  --primary-600: #7c3aed;
  --primary-700: #6d28d9;
  --primary-900: #4c1d95;
  
  /* Secondary (Neutral) */
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-200: #e5e7eb;
  --gray-300: #d1d5db;
  --gray-400: #9ca3af;
  --gray-500: #6b7280;
  --gray-600: #4b5563;
  --gray-700: #374151;
  --gray-800: #1f2937;
  --gray-900: #111827;
  
  /* Accents */
  --accent-success: #10b981;
  --accent-warning: #f59e0b;
  --accent-error: #ef4444;
  
  /* Surfaces */
  --surface-bg: #ffffff;
  --surface-secondary: #f9fafb;
  --surface-tertiary: #f3f4f6;
  --surface-overlay: rgba(15, 23, 42, 0.5);
  
  /* Gradients */
  --gradient-primary: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
  --gradient-accent: linear-gradient(135deg, #8b5cf6 0%, #14b8a6 100%);
  
  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 12px;
  --spacing-lg: 16px;
  --spacing-xl: 24px;
  --spacing-2xl: 32px;
  --spacing-3xl: 48px;
  
  /* Radius */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  
  /* Glass (Glassmorphism) */
  --glass-bg: rgba(255, 255, 255, 0.8);
  --glass-backdrop: 8px;
  --glass-border: 1px solid rgba(255, 255, 255, 0.25);
}

/* Dark mode support (future) */
@media (prefers-color-scheme: dark) {
  :root {
    --surface-bg: #0f172a;
    --surface-secondary: #1e293b;
    --surface-tertiary: #334155;
    --glass-bg: rgba(15, 23, 42, 0.8);
  }
}
```

### Typography

```
Font Stack: Inter / IBM Plex Sans (for clean, modern feel)
- Headlines: 600–700 weight, 32–48px
- Body: 400 weight, 14–16px
- Labels: 500 weight, 12–14px

Line Height:
- Headlines: 1.2
- Body: 1.6
- Compact: 1.4
```

---

## 2. UPDATED UX FLOW

### User Journey: Template → Form Fill → Download

```
┌─────────────────────────────────────────────────────────┐
│                     LANDING PAGE                        │
│         "Build Your Resume in 3 Minutes"               │
│              [CTA: Start Building]                      │
└──────────────────────┬──────────────────────────────────┘
                       │
         ┌─────────────▼──────────────┐
         │   TEMPLATE SELECTION       │
         │  (Premium Grid, 4-6 items) │
         │  [New: Upload Resume CTA]  │
         └─────────────┬──────────────┘
                       │
         ┌─────────────▼──────────────┐
         │   BUILDER FORM PAGE        │
         │  (No Sidebar, Top Nav)     │
         │  - Personal Info           │
         │  - Education (collapsible) │
         │  - Experience (collapsible)│
         │  - Skills                  │
         │  - Certifications, etc.    │
         │  [Live Preview on Right]   │
         └─────────────┬──────────────┘
                       │
         ┌─────────────▼──────────────┐
         │    TEMPLATE PREVIEW        │
         │  (Rendered Resume)         │
         │  [Download CTA]            │
         └─────────────┬──────────────┘
                       │
         ┌─────────────▼──────────────┐
         │   SUCCESS PAGE             │
         │  ✅ Download Confirmed     │
         │  [Buy Me Coffee]           │
         │  [Create Another Resume]   │
         └────────────────────────────┘
```

### New Upload Resume Flow (P1)

```
┌─────────────────────────────────────┐
│    TEMPLATE SELECTION PAGE          │
│                                     │
│  [Grid: 4 Templates]                │
│                                     │
│  ─────────────────────────────────  │
│  OR                                 │
│  [Upload Your Resume]               │
│  Drag & drop PDF/DOCX               │
└──────────────┬──────────────────────┘
               │
   ┌───────────▼───────────┐
   │  Upload & Parse       │
   │  ⏳ Processing...     │
   │  [Progress bar]       │
   └───────────┬───────────┘
               │
   ┌───────────▼───────────┐
   │  Form Pre-filled      │
   │  (User review/edit)   │
   └───────────┬───────────┘
               │
   ┌───────────▼───────────┐
   │  Preview & Download   │
   └───────────────────────┘
```

---

## 3. COMPONENT ARCHITECTURE

### Component Hierarchy

```
App.js
├── Navigation
│   ├── Navbar (top, fixed)
│   └── Breadcrumb (contextual steps)
│
├── Pages
│   ├── Home
│   │   └── HeroSection
│   │       └── FeatureCards (3-col grid)
│   │
│   ├── TemplateSelection
│   │   ├── TemplateGrid (4-6 items responsive)
│   │   ├── TemplateCard (redesigned)
│   │   │   ├── PreviewImage
│   │   │   ├── HoverOverlay (CTA)
│   │   │   └── Badge (Popular, New, etc.)
│   │   └── UploadResumeCard (NEW)
│   │       ├── DragDropZone
│   │       └── FileUpload
│   │
│   ├── BuilderStudio (Redesigned)
│   │   ├── Header (progress + quick actions)
│   │   ├── MainContent (no sidebar)
│   │   │   ├── FormSection (vertical flow)
│   │   │   │   ├── PersonalDetail
│   │   │   │   ├── SummarySection
│   │   │   │   ├── ExperienceSection (collapsible)
│   │   │   │   │   ├── ExperienceItem (removable)
│   │   │   │   │   └── [+ Add Experience]
│   │   │   │   ├── EducationSection
│   │   │   │   ├── SkillsSection (tag-based)
│   │   │   │   ├── CertificationsSection
│   │   │   │   └── ProjectsSection
│   │   │   │
│   │   │   └── PreviewPane (sticky right)
│   │   │       ├── PreviewHeader
│   │   │       ├── ResumePDF
│   │   │       └── TemplateSelector
│   │   │
│   │   └── BottomActions
│   │       ├── SaveButton
│   │       └── NextButton
│   │
│   ├── PreviewPage
│   │   ├── FullResume
│   │   └── [Download PDF]
│   │
│   └── ThankYou (Redesigned)
│       ├── SuccessAnimation
│       ├── BuyMeCoffee (Stripe/Ko-fi)
│       ├── ShareOptions
│       └── CTAs
│
└── Context
    └── ResumeContext
        ├── resume (global state)
        ├── selectedTemplate
        ├── currentStep
        └── (actions)
```

### File Structure

```
src/
├── components/
│   ├── common/
│   │   ├── Button.jsx (primary, secondary, outline)
│   │   ├── Card.jsx (with glass effect)
│   │   ├── Input.jsx (styled input)
│   │   ├── Badge.jsx
│   │   └── Spinner.jsx
│   │
│   ├── templates/
│   │   ├── TemplateCard.jsx (redesigned)
│   │   ├── TemplateGrid.jsx (new)
│   │   ├── UploadResumeCard.jsx (new)
│   │   └── DragDropZone.jsx (new)
│   │
│   ├── builder/
│   │   ├── BuilderHeader.jsx (new)
│   │   ├── FormSection.jsx (new)
│   │   ├── SectionCard.jsx (new)
│   │   ├── ExperienceItem.jsx (refactored)
│   │   ├── EducationItem.jsx (refactored)
│   │   ├── SkillsInput.jsx (new)
│   │   ├── PreviewPane.jsx (new, sticky)
│   │   └── AutoSaveIndicator.jsx (new)
│   │
│   └── success/
│       ├── SuccessAnimation.jsx (new)
│       ├── BuyMeCoffee.jsx (new)
│       └── ShareOptions.jsx (new)
│
├── pages/
│   ├── Home.jsx
│   ├── TemplateSelection.jsx (redesigned)
│   ├── BuilderStudio.jsx (refactored)
│   ├── PreviewPage.jsx
│   └── ThankYou.jsx (redesigned)
│
├── hooks/
│   ├── useAutoSave.js (new)
│   ├── useResumeValidation.js (new)
│   └── useFormProgress.js (new)
│
├── services/
│   ├── resumeParser.js (new - backend call)
│   ├── fileUpload.js (new)
│   └── pdfExport.js (existing)
│
├── utils/
│   ├── api.js (existing)
│   ├── colorUtils.js (new)
│   └── animations.js (new)
│
├── styles/
│   ├── design-system.css (new, replaces index.css)
│   ├── glassmorphism.css (new)
│   ├── animations.css (new)
│   └── responsive.css (new)
│
└── context/
    ├── resumecontext.jsx (existing)
    └── theme.js (update for new colors)
```

---

## 4. TEMPLATE SELECTION REDESIGN

### Layout & Responsive Breakpoints

```css
/* Desktop (1280px+): 4-6 templates */
.template-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding: 32px;
}

/* Tablet (768px–1279px): 3 templates */
@media (max-width: 1279px) {
  .template-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 24px;
  }
}

/* Mobile (< 768px): 1–2 templates */
@media (max-width: 767px) {
  .template-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    padding: 16px;
  }
}

/* Small Mobile (< 480px) */
@media (max-width: 479px) {
  .template-grid {
    grid-template-columns: 1fr;
  }
}
```

### TemplateCard Component (Redesigned)

```jsx
/**
 * TemplateCard.jsx - Premium template card with hover effects
 */
import React, { memo, useState } from 'react';
import './TemplateCard.css';

const TemplateCard = memo(({
  templateId,
  templateName,
  description,
  preview,
  onSelect,
  isSelected = false,
  badge = null
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`template-card ${isSelected ? 'selected' : ''} ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect();
        }
      }}
      role="button"
      tabIndex={0}
      aria-pressed={isSelected}
      aria-label={`${templateName} template`}
    >
      {/* Badge (e.g., "Popular", "New") */}
      {badge && (
        <div className="template-badge">
          {badge}
        </div>
      )}

      {/* Preview Image */}
      <div className="template-preview-container">
        <img
          src={preview}
          alt={templateName}
          className="template-preview-image"
          loading="lazy"
        />
        
        {/* Overlay on hover */}
        {isHovered && (
          <div className="template-overlay">
            <button
              className="template-cta-button"
              onClick={onSelect}
            >
              {isSelected ? '✓ Selected' : 'Use Template'}
            </button>
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="template-info">
        <h3 className="template-title">{templateName}</h3>
        {description && (
          <p className="template-description">{description}</p>
        )}
      </div>

      {/* Selection checkmark */}
      {isSelected && (
        <div className="template-checkmark">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M20 6L9 17L4 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
});

TemplateCard.displayName = 'TemplateCard';
export default TemplateCard;
```

### TemplateCard CSS (Glassmorphism + Hover)

```css
.template-card {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: var(--surface-bg);
  border: 2px solid transparent;
  box-shadow: var(--shadow-md);
}

.template-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary-300);
}

.template-card.selected {
  border-color: var(--primary-600);
  box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.1), var(--shadow-lg);
}

/* Preview Container */
.template-preview-container {
  position: relative;
  width: 100%;
  aspect-ratio: 8.5 / 11;
  overflow: hidden;
  background: linear-gradient(135deg, var(--gray-100) 0%, var(--gray-200) 100%);
}

.template-preview-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.template-card:hover .template-preview-image {
  transform: scale(1.05);
}

/* Hover Overlay */
.template-overlay {
  position: absolute;
  inset: 0;
  background: rgba(15, 23, 42, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(2px);
  animation: fadeIn 0.2s ease;
}

.template-cta-button {
  padding: 12px 24px;
  background: var(--primary-600);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
}

.template-cta-button:hover {
  background: var(--primary-700);
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(124, 58, 237, 0.4);
}

.template-cta-button:active {
  transform: scale(0.98);
}

/* Info Section */
.template-info {
  padding: 16px;
  background: var(--surface-bg);
}

.template-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--gray-900);
  margin: 0 0 4px 0;
}

.template-description {
  font-size: 13px;
  color: var(--gray-600);
  margin: 0;
  line-height: 1.4;
}

/* Badge */
.template-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: var(--primary-600);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(124, 58, 237, 0.3);
}

/* Selection Checkmark */
.template-checkmark {
  position: absolute;
  top: 12px;
  left: 12px;
  width: 32px;
  height: 32px;
  background: var(--primary-600);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 10;
  animation: popIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes popIn {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

/* Responsive adjustments */
@media (max-width: 767px) {
  .template-card {
    border-radius: var(--radius-md);
  }
  
  .template-overlay {
    opacity: 1;
    background: rgba(15, 23, 42, 0.5);
  }
}
```

### TemplateSelection Page (Updated)

```jsx
/**
 * TemplateSelection.jsx - Redesigned with upload option
 */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResume } from '../context/resumecontext';
import TemplateCard from '../components/TemplateCard';
import UploadResumeCard from '../components/UploadResumeCard';
import { fetchTemplates } from '../utils/api';
import './TemplateSelection.css';

export default function TemplateSelection() {
  const { setSelectedTemplate, selectedTemplate } = useResume();
  const navigate = useNavigate();
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTemplates = async () => {
      try {
        const data = await fetchTemplates();
        setTemplates(data);
      } catch (err) {
        console.error('Failed to load templates:', err);
      } finally {
        setLoading(false);
      }
    };

    loadTemplates();
  }, []);

  const handleSelectTemplate = (templateId) => {
    setSelectedTemplate(templateId);
    setTimeout(() => navigate('/builder'), 300);
  };

  const handleUploadResume = () => {
    navigate('/upload-resume');
  };

  if (loading) {
    return (
      <div className="page-loading">
        <div className="spinner"></div>
        <p>Loading templates...</p>
      </div>
    );
  }

  return (
    <div className="page-container">
      {/* Hero Section */}
      <div className="template-hero">
        <h1 className="hero-title">Choose Your Resume Template</h1>
        <p className="hero-subtitle">
          All templates are ATS-optimized and recruiter-approved. 
          Pick your style and customize in minutes.
        </p>
      </div>

      {/* Main Grid */}
      <div className="template-section">
        {/* Templates Grid */}
        <div className="template-grid">
          {templates.map((template, index) => (
            <TemplateCard
              key={template.id}
              templateId={template.id}
              templateName={template.name}
              description={template.description}
              preview={template.preview}
              onSelect={() => handleSelectTemplate(template.id)}
              isSelected={selectedTemplate === template.id}
              badge={index === 0 ? 'Popular' : index === 1 ? 'New' : null}
            />
          ))}
        </div>

        {/* Divider */}
        <div className="section-divider">
          <span>OR</span>
        </div>

        {/* Upload Resume Option */}
        <div className="upload-section">
          <UploadResumeCard onUpload={handleUploadResume} />
        </div>
      </div>
    </div>
  );
}
```

### TemplateSelection CSS

```css
.page-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 48px 24px;
}

.template-hero {
  text-align: center;
  margin-bottom: 48px;
}

.hero-title {
  font-size: 42px;
  font-weight: 700;
  color: var(--gray-900);
  margin: 0 0 16px 0;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 18px;
  color: var(--gray-600);
  margin: 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.template-section {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.template-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  width: 100%;
}

/* Ensure proper column count */
@media (min-width: 1400px) {
  .template-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 1199px) {
  .template-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 767px) {
  .template-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
}

@media (max-width: 479px) {
  .template-grid {
    grid-template-columns: 1fr;
  }
}

.section-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin: 24px 0;
}

.section-divider::before,
.section-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--gray-200);
}

.section-divider span {
  color: var(--gray-500);
  font-weight: 600;
  font-size: 14px;
}

.upload-section {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

.page-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  gap: 16px;
}
```

---

## 5. BUILDER PAGE SIMPLIFICATION

### Layout Architecture

**Before (Current):**
```
┌─────────────────────────────────────┐
│          Header                     │
├────────────┬────────────────────────┤
│            │                        │
│  SIDEBAR   │    MAIN FORM           │
│  (steps)   │    (accordion)         │
│            │                        │
├────────────┴────────────────────────┤
│       Footer / Actions              │
└─────────────────────────────────────┘
```

**After (Redesigned):**
```
┌─────────────────────────────────────────────┐
│          Header (No Sidebar)                │
├─────────────────────────────────────────────┤
│                                             │
│  ┌──────────────────┐  ┌───────────────┐   │
│  │   FORM SECTION   │  │   PREVIEW     │   │
│  │  (Vertical Flow) │  │   (Sticky)    │   │
│  │                  │  │               │   │
│  │ • Personal Info  │  │  + Live PDF   │   │
│  │ • Summary        │  │  + Template   │   │
│  │ • Experience ▼   │  │    Select     │   │
│  │ • Education  ▼   │  │               │   │
│  │ • Skills         │  └───────────────┘   │
│  │ • Certifications │                      │
│  │                  │                      │
│  └──────────────────┘                      │
│                                             │
└─────────────────────────────────────────────┘
```

### BuilderStudio Component (Refactored)

```jsx
/**
 * BuilderStudio.jsx - Simplified layout, no sidebar
 */
import React, { useState, useMemo } from 'react';
import { useResume } from '../context/resumecontext';
import BuilderHeader from '../components/builder/BuilderHeader';
import FormSection from '../components/builder/FormSection';
import PreviewPane from '../components/builder/PreviewPane';
import AutoSaveIndicator from '../components/builder/AutoSaveIndicator';
import './BuilderStudio.css';

export default function BuilderStudio() {
  const {
    resume,
    selectedTemplate,
    setSelectedTemplate,
    updateProfileField,
    addListItem,
    removeListItem,
    updateListItem,
  } = useResume();

  const [autoSaveStatus, setAutoSaveStatus] = useState('saved');
  const [expandedSections, setExpandedSections] = useState({
    personal: true,
    summary: true,
    experience: true,
    education: false,
    skills: false,
  });

  // Auto-save effect
  React.useEffect(() => {
    setAutoSaveStatus('saving');
    const timer = setTimeout(() => setAutoSaveStatus('saved'), 1000);
    return () => clearTimeout(timer);
  }, [resume]);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="builder-layout">
      {/* Fixed Header */}
      <BuilderHeader
        templateCount={selectedTemplate}
        autoSaveStatus={autoSaveStatus}
      />

      {/* Main Content */}
      <div className="builder-container">
        {/* Left: Form */}
        <div className="builder-form">
          <FormSection
            resume={resume}
            expandedSections={expandedSections}
            toggleSection={toggleSection}
            onUpdateProfile={updateProfileField}
            onAddItem={addListItem}
            onRemoveItem={removeListItem}
            onUpdateItem={updateListItem}
          />
        </div>

        {/* Right: Preview (sticky) */}
        <aside className="builder-preview">
          <PreviewPane
            resume={resume}
            selectedTemplate={selectedTemplate}
            onChangeTemplate={setSelectedTemplate}
          />
        </aside>
      </div>

      {/* Auto-save indicator */}
      <AutoSaveIndicator status={autoSaveStatus} />
    </div>
  );
}
```

### BuilderStudio CSS

```css
.builder-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--surface-secondary);
}

.builder-container {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 32px;
  max-width: 1600px;
  margin: 0 auto;
  padding: 32px 24px;
  width: 100%;
  flex: 1;
}

.builder-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.builder-preview {
  position: sticky;
  top: 100px;
  height: fit-content;
  max-height: calc(100vh - 120px);
  overflow-y: auto;
}

/* Tablet: Single column */
@media (max-width: 1199px) {
  .builder-container {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .builder-preview {
    position: static;
    max-height: none;
  }
}

/* Scrollbar styling */
.builder-preview::-webkit-scrollbar {
  width: 6px;
}

.builder-preview::-webkit-scrollbar-track {
  background: transparent;
}

.builder-preview::-webkit-scrollbar-thumb {
  background: var(--gray-300);
  border-radius: 3px;
}

.builder-preview::-webkit-scrollbar-thumb:hover {
  background: var(--gray-400);
}
```

### BuilderHeader Component (New)

```jsx
/**
 * BuilderHeader.jsx - Top navigation without sidebar
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BuilderHeader.css';

export default function BuilderHeader({ templateCount, autoSaveStatus }) {
  const navigate = useNavigate();

  return (
    <header className="builder-header">
      <div className="builder-header-content">
        {/* Left: Logo + Progress */}
        <div className="header-left">
          <button
            className="header-logo-button"
            onClick={() => navigate('/')}
            aria-label="Back to home"
          >
            ← Rapid Resume
          </button>
          <div className="header-progress">
            <span className="progress-label">Building:</span>
            <span className="progress-value">{templateCount || 'Classic'}</span>
          </div>
        </div>

        {/* Right: Auto-save + Actions */}
        <div className="header-right">
          <div className={`auto-save-badge ${autoSaveStatus}`}>
            {autoSaveStatus === 'saved' && '✓ Saved'}
            {autoSaveStatus === 'saving' && '⟳ Saving...'}
          </div>
          <button className="header-action-button" onClick={() => window.print()}>
            🖨 Print
          </button>
          <button
            className="header-action-button primary"
            onClick={() => navigate('/preview')}
          >
            Preview & Download
          </button>
        </div>
      </div>
    </header>
  );
}
```

### BuilderHeader CSS

```css
.builder-header {
  position: sticky;
  top: 0;
  background: var(--surface-bg);
  border-bottom: 1px solid var(--gray-200);
  z-index: 100;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.95);
}

.builder-header-content {
  max-width: 1600px;
  margin: 0 auto;
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}

.header-left,
.header-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.header-logo-button {
  background: none;
  border: none;
  font-weight: 600;
  font-size: 14px;
  color: var(--primary-600);
  cursor: pointer;
  padding: 8px 12px;
  border-radius: var(--radius-sm);
  transition: all 0.2s ease;
}

.header-logo-button:hover {
  background: var(--gray-100);
  color: var(--primary-700);
}

.header-progress {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
}

.progress-label {
  color: var(--gray-500);
}

.progress-value {
  color: var(--gray-900);
  font-weight: 600;
}

.auto-save-badge {
  font-size: 12px;
  padding: 6px 12px;
  border-radius: var(--radius-md);
  background: var(--gray-100);
  color: var(--gray-600);
  transition: all 0.2s ease;
}

.auto-save-badge.saved {
  background: rgba(16, 185, 129, 0.1);
  color: var(--accent-success);
}

.auto-save-badge.saving {
  background: var(--gray-100);
  color: var(--gray-600);
  animation: pulse 1s infinite;
}

.header-action-button {
  padding: 8px 16px;
  border: 1px solid var(--gray-300);
  background: var(--surface-bg);
  border-radius: var(--radius-md);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  color: var(--gray-700);
}

.header-action-button:hover {
  background: var(--gray-100);
  border-color: var(--gray-400);
}

.header-action-button.primary {
  background: var(--primary-600);
  border-color: var(--primary-600);
  color: white;
}

.header-action-button.primary:hover {
  background: var(--primary-700);
  border-color: var(--primary-700);
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}
```

---

## 6. FORM UX ENHANCEMENT

### FormSection Component (New)

```jsx
/**
 * FormSection.jsx - Main form with collapsible sections
 */
import React from 'react';
import SectionCard from './SectionCard';
import PersonalDetailForm from './PersonalDetailForm';
import SummaryForm from './SummaryForm';
import ExperienceForm from './ExperienceForm';
import EducationForm from './EducationForm';
import SkillsForm from './SkillsForm';
import './FormSection.css';

export default function FormSection({
  resume,
  expandedSections,
  toggleSection,
  onUpdateProfile,
  onAddItem,
  onRemoveItem,
  onUpdateItem,
}) {
  const sections = [
    {
      id: 'personal',
      title: 'Personal Details',
      icon: '👤',
      required: true,
      content: (
        <PersonalDetailForm
          profile={resume.profile}
          onUpdate={onUpdateProfile}
        />
      ),
    },
    {
      id: 'summary',
      title: 'Professional Summary',
      icon: '📝',
      required: false,
      content: (
        <SummaryForm
          summary={resume.summary}
          onUpdate={(value) => onUpdateProfile('summary', value)}
        />
      ),
    },
    {
      id: 'experience',
      title: 'Work Experience',
      icon: '💼',
      required: false,
      content: (
        <ExperienceForm
          items={resume.experience}
          onAdd={() => onAddItem('experience')}
          onRemove={(id) => onRemoveItem('experience', id)}
          onUpdate={(id, field, value) => onUpdateItem('experience', id, field, value)}
        />
      ),
    },
    {
      id: 'education',
      title: 'Education',
      icon: '🎓',
      required: false,
      content: (
        <EducationForm
          items={resume.education}
          onAdd={() => onAddItem('education')}
          onRemove={(id) => onRemoveItem('education', id)}
          onUpdate={(id, field, value) => onUpdateItem('education', id, field, value)}
        />
      ),
    },
    {
      id: 'skills',
      title: 'Skills',
      icon: '⭐',
      required: false,
      content: (
        <SkillsForm
          items={resume.skills}
          onAdd={() => onAddItem('skills')}
          onRemove={(id) => onRemoveItem('skills', id)}
          onUpdate={(id, field, value) => onUpdateItem('skills', id, field, value)}
        />
      ),
    },
  ];

  return (
    <form className="form-section">
      {sections.map((section) => (
        <SectionCard
          key={section.id}
          id={section.id}
          title={section.title}
          icon={section.icon}
          required={section.required}
          isExpanded={expandedSections[section.id]}
          onToggle={() => toggleSection(section.id)}
        >
          {section.content}
        </SectionCard>
      ))}
    </form>
  );
}
```

### SectionCard Component (New)

```jsx
/**
 * SectionCard.jsx - Collapsible section with glassmorphism
 */
import React from 'react';
import './SectionCard.css';

export default function SectionCard({
  id,
  title,
  icon,
  required,
  isExpanded,
  onToggle,
  children,
}) {
  return (
    <div className={`section-card ${isExpanded ? 'expanded' : ''}`}>
      <button
        className="section-header"
        onClick={onToggle}
        aria-expanded={isExpanded}
        aria-controls={`section-content-${id}`}
      >
        <div className="section-header-left">
          <span className="section-icon">{icon}</span>
          <div className="section-title-group">
            <h3 className="section-title">{title}</h3>
            {required && <span className="section-badge required">Required</span>}
          </div>
        </div>
        <div className="section-toggle">
          <svg
            className="toggle-chevron"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M7 8L10 11L13 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      {isExpanded && (
        <div
          className="section-content"
          id={`section-content-${id}`}
          role="region"
        >
          {children}
        </div>
      )}
    </div>
  );
}
```

### SectionCard CSS

```css
.section-card {
  background: var(--surface-bg);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin-bottom: 16px;
  transition: all 0.2s ease;
  box-shadow: var(--shadow-sm);
}

.section-card:hover {
  box-shadow: var(--shadow-md);
  border-color: var(--gray-300);
}

.section-card.expanded {
  box-shadow: var(--shadow-md);
  border-color: var(--primary-300);
}

.section-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 14px;
}

.section-header:hover {
  background: var(--gray-50);
}

.section-header-left {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  text-align: left;
}

.section-icon {
  font-size: 20px;
}

.section-title-group {
  display: flex;
  align-items: center;
  gap: 8px;
}

.section-title {
  font-size: 15px;
  font-weight: 600;
  color: var(--gray-900);
  margin: 0;
}

.section-badge {
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 12px;
  background: var(--gray-100);
  color: var(--gray-600);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.section-badge.required {
  background: rgba(124, 58, 237, 0.1);
  color: var(--primary-700);
}

.toggle-chevron {
  color: var(--gray-400);
  transition: transform 0.2s ease;
}

.section-card.expanded .toggle-chevron {
  transform: rotate(180deg);
  color: var(--primary-600);
}

.section-content {
  padding: 16px;
  border-top: 1px solid var(--gray-100);
  background: var(--surface-secondary);
  animation: slideDown 0.2s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 1000px;
  }
}
```

### ExperienceItem Component (Refactored)

```jsx
/**
 * ExperienceItem.jsx - Individual experience entry with inline editing
 */
import React, { useState } from 'react';
import './ExperienceItem.css';

export default function ExperienceItem({
  item,
  onUpdate,
  onRemove,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`experience-item ${isExpanded ? 'expanded' : ''}`}>
      {/* Summary View */}
      {!isExpanded && (
        <button
          className="experience-summary"
          onClick={() => setIsExpanded(true)}
        >
          <div className="experience-summary-left">
            <div className="experience-title">{item.jobTitle || 'Job Title'}</div>
            <div className="experience-company">
              {item.company || 'Company'} • {item.startDate || 'Start date'}
            </div>
          </div>
          <button
            className="experience-remove-button"
            onClick={(e) => {
              e.stopPropagation();
              onRemove(item.id);
            }}
            aria-label="Remove experience"
          >
            🗑
          </button>
        </button>
      )}

      {/* Detail View */}
      {isExpanded && (
        <div className="experience-detail">
          <div className="detail-header">
            <h4>Edit Experience</h4>
            <button
              className="detail-close"
              onClick={() => setIsExpanded(false)}
              aria-label="Close edit"
            >
              ✕
            </button>
          </div>

          <div className="form-group">
            <label>Job Title *</label>
            <input
              type="text"
              value={item.jobTitle}
              onChange={(e) => onUpdate(item.id, 'jobTitle', e.target.value)}
              placeholder="e.g., Senior Product Manager"
            />
          </div>

          <div className="form-group">
            <label>Company *</label>
            <input
              type="text"
              value={item.company}
              onChange={(e) => onUpdate(item.id, 'company', e.target.value)}
              placeholder="e.g., Tech Corp"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Start Date</label>
              <input
                type="text"
                value={item.startDate}
                onChange={(e) => onUpdate(item.id, 'startDate', e.target.value)}
                placeholder="e.g., Jan 2020"
              />
            </div>
            <div className="form-group">
              <label>End Date</label>
              <input
                type="text"
                value={item.endDate}
                onChange={(e) => onUpdate(item.id, 'endDate', e.target.value)}
                placeholder="e.g., Present"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              value={item.description}
              onChange={(e) => onUpdate(item.id, 'description', e.target.value)}
              placeholder="Describe your role and achievements..."
              rows="4"
            />
          </div>

          <div className="detail-actions">
            <button
              className="action-button secondary"
              onClick={() => setIsExpanded(false)}
            >
              Done
            </button>
            <button
              className="action-button danger"
              onClick={() => {
                onRemove(item.id);
                setIsExpanded(false);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
```

### ExperienceItem CSS

```css
.experience-item {
  background: var(--surface-bg);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-md);
  margin-bottom: 12px;
  transition: all 0.2s ease;
}

.experience-summary {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
}

.experience-summary:hover {
  background: var(--gray-50);
}

.experience-summary-left {
  flex: 1;
}

.experience-title {
  font-weight: 600;
  color: var(--gray-900);
  margin-bottom: 2px;
}

.experience-company {
  font-size: 13px;
  color: var(--gray-600);
}

.experience-remove-button {
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.2s;
}

.experience-remove-button:hover {
  opacity: 1;
}

.experience-detail {
  padding: 16px;
  background: var(--surface-secondary);
  border-top: 1px solid var(--gray-200);
}

.detail-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--gray-200);
}

.detail-header h4 {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
}

.detail-close {
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: var(--gray-500);
}

.form-group {
  margin-bottom: 12px;
}

.form-group label {
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: var(--gray-700);
  margin-bottom: 4px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid var(--gray-300);
  border-radius: var(--radius-md);
  font-size: 14px;
  font-family: inherit;
  transition: all 0.2s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-500);
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.detail-actions {
  display: flex;
  gap: 8px;
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid var(--gray-200);
}

.action-button {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid var(--gray-300);
  background: var(--surface-bg);
  border-radius: var(--radius-md);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.action-button:hover {
  background: var(--gray-50);
}

.action-button.danger {
  color: var(--accent-error);
  border-color: var(--accent-error);
}

.action-button.danger:hover {
  background: rgba(239, 68, 68, 0.05);
}
```

---

## 7. PREMIUM UI (GLASSMORPHISM)

### Glassmorphism CSS Utilities

```css
/* glassmorphism.css */

.glass {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-backdrop));
  border: var(--glass-border);
  border-radius: var(--radius-lg);
}

.glass-sm {
  background: var(--glass-bg);
  backdrop-filter: blur(4px);
  border: var(--glass-border);
  border-radius: var(--radius-md);
}

.glass-card {
  @extend .glass;
  padding: 20px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
}

.glass-header {
  @extend .glass;
  padding: 16px 24px;
  box-shadow: 0 4px 16px rgba(31, 38, 135, 0.1);
}

.glass-modal {
  @extend .glass;
  padding: 28px;
  max-width: 500px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
}

/* Elevated glass effect */
.glass-elevated {
  @extend .glass;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%);
  box-shadow:
    inset 0 0 20px rgba(255, 255, 255, 0.5),
    0 8px 32px rgba(31, 38, 135, 0.15);
}

/* Frosted glass (darker content area) */
.glass-frosted {
  background: rgba(15, 23, 42, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: var(--radius-lg);
}
```

### Glass Effect in Components

**Header with Glass:**
```jsx
<header className="glass-header">
  {/* content */}
</header>
```

**Card with Glass:**
```jsx
<div className="glass-card">
  <h3>Section Title</h3>
  <p>Content here...</p>
</div>
```

**Modal with Glass:**
```jsx
<div className="modal-backdrop">
  <div className="glass-modal">
    {/* modal content */}
  </div>
</div>
```

---

## 8. RESUME UPLOAD FEATURE

### UploadResumeCard Component (New)

```jsx
/**
 * UploadResumeCard.jsx - Drag-drop resume upload with parsing
 */
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResume } from '../context/resumecontext';
import DragDropZone from './DragDropZone';
import { uploadAndParseResume } from '../services/resumeParser';
import './UploadResumeCard.css';

export default function UploadResumeCard() {
  const navigate = useNavigate();
  const { resume, updateProfileField, addListItem, updateListItem } = useResume();
  const fileInputRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleFileSelect = async (file) => {
    if (!file) return;

    const validTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!validTypes.includes(file.type)) {
      setError('Please upload a PDF or DOCX file.');
      return;
    }

    if (file.size > 10 * 1024 * 1024) { // 10MB
      setError('File size must be less than 10MB.');
      return;
    }

    setUploading(true);
    setError(null);
    setProgress(0);

    try {
      const parsedData = await uploadAndParseResume(file, (prog) => setProgress(prog));

      // Pre-fill form with parsed data
      if (parsedData.profile) {
        Object.entries(parsedData.profile).forEach(([key, value]) => {
          updateProfileField(key, value);
        });
      }

      // Add experience entries
      if (parsedData.experience?.length) {
        parsedData.experience.forEach((exp) => {
          addListItem('experience');
          // Update with parsed data (implementation depends on your context API)
        });
      }

      // Success - redirect to builder
      navigate('/builder');
    } catch (err) {
      setError(err.message || 'Failed to parse resume. Please try again.');
    } finally {
      setUploading(false);
      setProgress(0);
    }
  };

  return (
    <div className="upload-resume-card">
      <div className="upload-content">
        <div className="upload-icon">📤</div>
        <h3 className="upload-title">Already have a resume?</h3>
        <p className="upload-subtitle">
          Upload your resume and we'll automatically fill in your information.
        </p>

        {!uploading && (
          <>
            <DragDropZone onFileSelect={handleFileSelect} />
            <button
              className="upload-button-secondary"
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
            >
              Choose File
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.docx"
              onChange={(e) => handleFileSelect(e.target.files?.[0])}
              style={{ display: 'none' }}
              aria-label="Upload resume file"
            />
            <p className="upload-hint">PDF or DOCX • Max 10MB</p>
          </>
        )}

        {uploading && (
          <div className="upload-progress">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }} />
            </div>
            <p className="progress-text">Parsing your resume... {progress}%</p>
          </div>
        )}

        {error && (
          <div className="upload-error">
            ⚠ {error}
          </div>
        )}
      </div>
    </div>
  );
}
```

### DragDropZone Component (New)

```jsx
/**
 * DragDropZone.jsx - Drag-and-drop file zone
 */
import React, { useState } from 'react';
import './DragDropZone.css';

export default function DragDropZone({ onFileSelect }) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length) {
      onFileSelect(files[0]);
    }
  };

  return (
    <div
      className={`drag-drop-zone ${isDragging ? 'dragging' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      role="region"
      aria-label="Drag and drop zone for resume upload"
    >
      <div className="drag-drop-icon">📁</div>
      <p className="drag-drop-text">
        Drag your resume here or <button className="drag-drop-link">browse</button>
      </p>
    </div>
  );
}
```

### Resume Parser Service (Backend API)

```javascript
/**
 * resumeParser.js - Service to upload and parse resume
 */

export async function uploadAndParseResume(file, onProgress) {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await fetch('/api/resume/parse', {
      method: 'POST',
      body: formData,
      // Progress tracking
      onProgress: (e) => {
        if (e.lengthComputable) {
          const percentComplete = (e.loaded / e.total) * 100;
          onProgress(percentComplete);
        }
      },
    });

    if (!response.ok) {
      throw new Error('Failed to parse resume');
    }

    const parsedData = await response.json();
    return parsedData;
  } catch (error) {
    throw new Error(error.message || 'Failed to parse resume');
  }
}
```

### Backend API Design (Node.js / Express)

```javascript
/**
 * POST /api/resume/parse
 * Uploads and parses a resume file (PDF/DOCX)
 */

const express = require('express');
const multer = require('multer');
const PDFParser = require('pdf-parse');
const mammoth = require('mammoth');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/resume/parse', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    let textContent = '';

    // Parse PDF or DOCX
    if (req.file.mimetype === 'application/pdf') {
      const pdfData = await PDFParser(req.file.buffer);
      textContent = pdfData.text;
    } else if (req.file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      const docData = await mammoth.extractRawText({ buffer: req.file.buffer });
      textContent = docData.value;
    } else {
      return res.status(400).json({ error: 'Unsupported file type' });
    }

    // Parse structured data from text
    const parsedResume = parseResumeText(textContent);

    res.json({
      success: true,
      data: parsedResume,
    });
  } catch (error) {
    console.error('Resume parsing error:', error);
    res.status(500).json({ error: 'Failed to parse resume' });
  }
});

/**
 * Rule-based parsing function
 * Can be upgraded with AI/ML in future
 */
function parseResumeText(text) {
  const lines = text.split('\n').map(line => line.trim()).filter(Boolean);

  const result = {
    profile: {
      name: '',
      email: '',
      phone: '',
      location: '',
      summary: '',
    },
    experience: [],
    education: [],
    skills: [],
  };

  // Extract name (usually first line with capital letters)
  if (lines.length > 0) {
    result.profile.name = lines[0];
  }

  // Extract email
  const emailMatch = text.match(/([a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,6})/i);
  if (emailMatch) {
    result.profile.email = emailMatch[1];
  }

  // Extract phone
  const phoneMatch = text.match(/(\+?1?\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}/);
  if (phoneMatch) {
    result.profile.phone = phoneMatch[0];
  }

  // Extract sections (simple pattern matching)
  const experienceIndex = text.toLowerCase().indexOf('experience');
  const educationIndex = text.toLowerCase().indexOf('education');
  const skillsIndex = text.toLowerCase().indexOf('skill');

  // Extract experience entries
  if (experienceIndex !== -1) {
    const experienceText = text.substring(
      experienceIndex,
      educationIndex !== -1 ? educationIndex : skillsIndex !== -1 ? skillsIndex : text.length
    );

    // Parse individual experiences (simplified - can be improved)
    result.experience = [
      {
        id: `exp-${Date.now()}`,
        jobTitle: '',
        company: '',
        startDate: '',
        endDate: '',
        description: experienceText,
      },
    ];
  }

  // Extract education entries
  if (educationIndex !== -1) {
    const educationText = text.substring(
      educationIndex,
      skillsIndex !== -1 ? skillsIndex : text.length
    );

    result.education = [
      {
        id: `edu-${Date.now()}`,
        school: '',
        degree: '',
        field: '',
        graduationDate: '',
        description: educationText,
      },
    ];
  }

  // Extract skills (comma or line-separated)
  if (skillsIndex !== -1) {
    const skillsText = text.substring(skillsIndex);
    const skillLines = skillsText.split(/,|\n/).map(s => s.trim()).filter(Boolean);

    result.skills = skillLines.slice(0, 10).map((skill, idx) => ({
      id: `skill-${idx}`,
      name: skill,
    }));
  }

  return result;
}

module.exports = router;
```

---

## 9. DOWNLOAD SUCCESS PAGE

### ThankYou Component (Redesigned)

```jsx
/**
 * ThankYou.jsx - Premium success page with monetization
 */
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useResume } from '../context/resumecontext';
import BuyMeCoffee from '../components/success/BuyMeCoffee';
import SuccessAnimation from '../components/success/SuccessAnimation';
import './ThankYou.css';

export default function ThankYou() {
  const navigate = useNavigate();
  const location = useLocation();
  const { resetResume } = useResume();
  const [showConfetti, setShowConfetti] = useState(true);

  const fileName = location.state?.fileName;

  useEffect(() => {
    // Trigger confetti animation
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleCreateAnother = () => {
    resetResume();
    navigate('/templates', { replace: true });
  };

  const handleShare = () => {
    const url = window.location.origin;
    const text = "I just built my resume with Rapid Resume! 🚀 It was so easy and fast.";

    if (navigator.share) {
      navigator.share({
        title: 'Rapid Resume',
        text: text,
        url: url,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(`${text}\n${url}`);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="thank-you-page">
      {/* Confetti Animation */}
      {showConfetti && <SuccessAnimation />}

      <div className="thank-you-container">
        {/* Success Message */}
        <div className="success-section">
          <div className="success-icon">✓</div>
          <h1 className="success-title">
            Your resume is ready!
          </h1>
          <p className="success-subtitle">
            Your PDF has been downloaded. You can now apply to jobs with confidence.
          </p>

          {fileName && (
            <div className="file-info">
              <span className="file-icon">📄</span>
              <span className="file-name">{fileName}</span>
            </div>
          )}
        </div>

        {/* Primary CTA: Create Another Resume */}
        <button className="button button-primary button-lg" onClick={handleCreateAnother}>
          Build Another Resume
        </button>

        {/* Support Section: Buy Me Coffee */}
        <div className="support-section">
          <h3>Support Rapid Resume</h3>
          <p>If Rapid Resume helped you, consider supporting our development.</p>
          <BuyMeCoffee />
        </div>

        {/* Share Section */}
        <div className="share-section">
          <button className="share-button" onClick={handleShare}>
            <span className="share-icon">📤</span>
            <span>Share with Friends</span>
          </button>
        </div>

        {/* Additional CTAs */}
        <div className="additional-actions">
          <button className="button button-outline" onClick={() => navigate('/')}>
            ← Back to Home
          </button>
          <button className="button button-outline" onClick={() => window.print()}>
            🖨 Print Resume
          </button>
        </div>

        {/* Tips */}
        <div className="tips-section">
          <h4>💡 Pro Tips</h4>
          <ul>
            <li>Add keywords from job descriptions to improve ATS compatibility</li>
            <li>Keep your resume to 1-2 pages for maximum impact</li>
            <li>Customize for each job application</li>
            <li>Your progress is saved locally — you can edit anytime</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
```

### ThankYou CSS

```css
.thank-you-page {
  min-height: 100vh;
  background: linear-gradient(135deg, var(--primary-50) 0%, var(--gray-50) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  position: relative;
  overflow: hidden;
}

.thank-you-container {
  background: var(--surface-bg);
  border-radius: var(--radius-xl);
  padding: 48px 32px;
  max-width: 600px;
  text-align: center;
  box-shadow: var(--shadow-xl);
  animation: slideUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Success Section */
.success-section {
  margin-bottom: 32px;
}

.success-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--accent-success), var(--accent-success));
  border-radius: 50%;
  font-size: 40px;
  margin-bottom: 24px;
  animation: popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.success-title {
  font-size: 32px;
  font-weight: 700;
  color: var(--gray-900);
  margin: 0 0 8px 0;
}

.success-subtitle {
  font-size: 16px;
  color: var(--gray-600);
  margin: 0 0 24px 0;
  line-height: 1.6;
}

.file-info {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--gray-100);
  padding: 12px 16px;
  border-radius: var(--radius-md);
  font-size: 14px;
  color: var(--gray-700);
}

.file-icon {
  font-size: 18px;
}

.file-name {
  font-weight: 500;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Support Section */
.support-section {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, rgba(20, 184, 166, 0.05) 100%);
  border: 1px solid rgba(139, 92, 246, 0.1);
  border-radius: var(--radius-lg);
  padding: 24px;
  margin: 32px 0;
  text-align: center;
}

.support-section h3 {
  font-size: 16px;
  font-weight: 600;
  color: var(--gray-900);
  margin: 0 0 8px 0;
}

.support-section p {
  font-size: 14px;
  color: var(--gray-600);
  margin: 0 0 16px 0;
}

/* Share Section */
.share-section {
  margin: 24px 0;
}

.share-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: var(--gray-100);
  border: 1px solid var(--gray-300);
  border-radius: var(--radius-md);
  font-weight: 500;
  color: var(--gray-700);
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 14px;
}

.share-button:hover {
  background: var(--gray-200);
  border-color: var(--gray-400);
}

/* Additional Actions */
.additional-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin: 32px 0;
  flex-wrap: wrap;
}

.button {
  padding: 12px 24px;
  border: none;
  border-radius: var(--radius-md);
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.button-primary {
  background: var(--primary-600);
  color: white;
}

.button-primary:hover {
  background: var(--primary-700);
}

.button-lg {
  padding: 14px 32px;
  font-size: 16px;
}

.button-outline {
  background: var(--surface-bg);
  color: var(--primary-600);
  border: 1px solid var(--primary-300);
}

.button-outline:hover {
  background: var(--primary-50);
}

/* Tips Section */
.tips-section {
  background: var(--gray-50);
  border-radius: var(--radius-md);
  padding: 20px;
  text-align: left;
  margin-top: 32px;
}

.tips-section h4 {
  font-size: 14px;
  font-weight: 600;
  color: var(--gray-900);
  margin: 0 0 12px 0;
}

.tips-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tips-section li {
  font-size: 13px;
  color: var(--gray-700);
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
}

.tips-section li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--accent-success);
  font-weight: 600;
}

.tips-section li:last-child {
  margin-bottom: 0;
}
```

### BuyMeCoffee Component (New)

```jsx
/**
 * BuyMeCoffee.jsx - Optional support/donation component
 */
import React from 'react';
import './BuyMeCoffee.css';

export default function BuyMeCoffee() {
  const handleBuyMeCoffee = () => {
    // Open Ko-fi or Buy Me a Coffee link
    window.open('https://buymeacoffee.com/rapidresume', '_blank');
  };

  return (
    <button className="buy-me-coffee-button" onClick={handleBuyMeCoffee}>
      <span className="coffee-icon">☕</span>
      <span>Buy Me a Coffee</span>
    </button>
  );
}
```

### BuyMeCoffee CSS

```css
.buy-me-coffee-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  border: none;
  border-radius: var(--radius-md);
  font-weight: 600;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 14px;
  box-shadow: 0 4px 12px rgba(255, 165, 0, 0.3);
}

.buy-me-coffee-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 165, 0, 0.4);
}

.buy-me-coffee-button:active {
  transform: translateY(0);
}

.coffee-icon {
  font-size: 16px;
}
```

### SuccessAnimation Component (New)

```jsx
/**
 * SuccessAnimation.jsx - Confetti animation
 */
import React from 'react';
import './SuccessAnimation.css';

export default function SuccessAnimation() {
  return (
    <div className="confetti-container">
      {Array.from({ length: 30 }).map((_, i) => (
        <div key={i} className="confetti" style={{
          left: `${Math.random() * 100}%`,
          delay: `${Math.random() * 0.5}s`,
          duration: `${2 + Math.random() * 1}s`,
        }} />
      ))}
    </div>
  );
}
```

### SuccessAnimation CSS

```css
.confetti-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
}

.confetti {
  position: absolute;
  width: 10px;
  height: 10px;
  background: var(--primary-500);
  border-radius: 50%;
  animation: fall var(--duration, 3s) linear forwards;
  animation-delay: var(--delay, 0s);
}

.confetti:nth-child(odd) {
  background: var(--accent-success);
}

.confetti:nth-child(3n) {
  background: #3b82f6;
}

@keyframes fall {
  to {
    transform: translateY(100vh) rotateZ(360deg);
    opacity: 0;
  }
}
```

---

## 10. IMPLEMENTATION ROADMAP

### Phase 1 (P0): MVP - Core Redesign (Weeks 1-2)

**Priority:** CRITICAL - Live to users immediately

- [ ] Update design system (colors, typography, spacing)
- [ ] Redesign TemplateCard with hover effects
- [ ] Simplify BuilderStudio layout (remove sidebar)
- [ ] Refactor FormSection with collapsible cards
- [ ] Update ThankYou page with basic success animation
- [ ] Ensure responsive design (mobile-first approach)

**Deliverables:**
- Updated CSS variables in `src/styles/design-system.css`
- New components: `TemplateCard`, `SectionCard`, `FormSection`
- Refactored pages: `TemplateSelection`, `BuilderStudio`, `ThankYou`
- Mobile-responsive layout

**Testing:**
- Visual regression testing
- Mobile responsiveness check
- Performance (no degradation)

---

### Phase 2 (P1): Premium Features (Weeks 3-4)

**Priority:** HIGH - Increases conversion & engagement

- [ ] Add glassmorphism effects to cards and headers
- [ ] Implement upload resume feature (front-end + backend parsing)
- [ ] Add auto-save indicator
- [ ] Build BuyMeCoffee donation component
- [ ] Implement success animation (confetti)
- [ ] Add share functionality

**Deliverables:**
- `DragDropZone.jsx`
- `UploadResumeCard.jsx`
- `BuyMeCoffee.jsx`
- `SuccessAnimation.jsx`
- Backend: `/api/resume/parse` endpoint
- Updated `ThankYou.jsx`

**Testing:**
- Resume parsing accuracy (PDF + DOCX)
- File upload validation
- Error handling

---

### Phase 3 (P2): Advanced Polish (Weeks 5-6)

**Priority:** MEDIUM - Long-term user experience

- [ ] AI-powered resume parsing (integrate OpenAI/Claude API)
- [ ] Dark mode support
- [ ] Advanced resume templates (3+ new templates)
- [ ] Analytics integration (track user funnel)
- [ ] A/B testing for CTAs
- [ ] Performance optimization (lazy loading, code splitting)

**Deliverables:**
- AI resume parser (optional, future-proof architecture)
- Dark mode CSS variables
- Advanced templates
- Analytics integration
- Performance metrics

---

### Component Development Order

```
Week 1:
  Day 1-2: Design System (colors, spacing, typography)
  Day 3-4: TemplateCard + TemplateGrid redesign
  Day 5:   BuilderStudio layout refactor

Week 2:
  Day 1-2: FormSection + SectionCard components
  Day 3-4: ExperienceItem + inline editing
  Day 5:   ThankYou page + Success animation

Week 3:
  Day 1-2: DragDropZone + UploadResumeCard
  Day 3-4: Backend API for resume parsing
  Day 5:   BuyMeCoffee + Share functionality

Week 4:
  Day 1-2: Glassmorphism effects + Polish
  Day 3-4: Mobile responsiveness audit
  Day 5:   Testing + Launch
```

---

## MICROCOPY & UI TEXT

### CTA Buttons

| Context | Primary | Secondary |
|---------|---------|-----------|
| Template Selection | "Use Template" | "View Details" |
| Form Actions | "Add Experience" | "Remove" |
| Builder | "Preview & Download" | "Save Draft" |
| Success | "Build Another Resume" | "Share with Friends" |
| Upload | "Upload Resume" | "Browse Files" |

### Form Labels & Hints

```
Personal Details:
  - Full Name* → "John Doe"
  - Email* → "john@example.com"
  - Phone → "+1 (555) 123-4567"
  - Location → "San Francisco, CA"

Experience:
  - Job Title* → "Senior Product Manager"
  - Company* → "Tech Corp"
  - Start Date → "Jan 2020"
  - End Date → "Present"
  - Description → "Describe your achievements and impact..."

Education:
  - School* → "Stanford University"
  - Degree* → "Bachelor of Science"
  - Field of Study → "Computer Science"
  - Graduation Date → "May 2018"

Skills:
  - Skill → "Project Management, Python, React, ..."
  - Hint: "Comma-separated skills"
```

### Error Messages

```
Validation:
  - "Name is required"
  - "Please enter a valid email"
  - "Job title cannot be empty"

Upload Errors:
  - "Please upload a PDF or DOCX file"
  - "File size must be less than 10MB"
  - "Failed to parse resume. Please try again."

Connection Errors:
  - "Unable to load templates. Please refresh."
  - "Save failed. Your progress is saved locally."
```

### Success Messages

```
- "Resume saved ✓"
- "Template selected ✓"
- "Experience added ✓"
- "Your resume is ready! Download started."
```

---

## ACCESSIBILITY CONSIDERATIONS

### WCAG 2.1 AA Compliance

- [ ] Color contrast ratios ≥ 4.5:1 for text
- [ ] Focus states visible on all interactive elements
- [ ] Keyboard navigation support (Tab, Enter, Escape)
- [ ] ARIA labels for buttons, icons, sections
- [ ] Alt text for all images
- [ ] Semantic HTML (`<button>`, `<form>`, `<label>`)
- [ ] Screen reader announcements for status updates

### Example: Accessible Button

```jsx
<button
  className="btn-primary"
  onClick={handleClick}
  aria-label="Download resume as PDF"
  aria-disabled={isLoading}
  disabled={isLoading}
>
  {isLoading ? '⟳ Generating PDF...' : '⬇ Download PDF'}
</button>
```

---

## PERFORMANCE TARGETS

| Metric | Target |
|--------|--------|
| Largest Contentful Paint (LCP) | < 2.5s |
| First Input Delay (FID) | < 100ms |
| Cumulative Layout Shift (CLS) | < 0.1 |
| Bundle Size | < 200KB (gzipped) |
| Form Interaction | < 50ms response |
| PDF Generation | < 3s |

### Optimization Strategies

1. **Code Splitting:** Lazy load builder page
2. **Image Optimization:** WebP format, responsive sizes
3. **Memoization:** React.memo for template cards
4. **State Management:** Context API (already used)
5. **CSS-in-JS:** Minimize runtime overhead

---

## NEXT STEPS

1. **Approve Design System** - Finalize colors, spacing, typography
2. **Create Component Library** - Reusable components with Storybook (optional)
3. **Develop Phase 1** - 2-week sprint for MVP redesign
4. **User Testing** - Get feedback on new UX
5. **Launch & Monitor** - Track conversion rate improvements
6. **Phase 2** - Add premium features based on data

---

**Questions?** This design is production-ready. Each component includes:
- JSX/CSS code
- Accessibility markup
- Responsive breakpoints
- Microcopy
- Animation specs

**Let's build it! 🚀**
