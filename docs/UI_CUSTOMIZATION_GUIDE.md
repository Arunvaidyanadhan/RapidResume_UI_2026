# UI Customization Guide

## Overview

This guide explains how to customize the UI, including spacing, colors, typography, and extending form sections.

## Table of Contents

1. [Spacing System](#spacing-system)
2. [Color Customization](#color-customization)
3. [Typography](#typography)
4. [Component Styling](#component-styling)
5. [Extending Form Sections](#extending-form-sections)
6. [Adding New Components](#adding-new-components)

## Spacing System

### CSS Variables

The spacing system uses consistent values defined in CSS variables:

```css
/* Padding/Margin values */
--spacing-xs: 0.25rem;   /* 4px */
--spacing-sm: 0.5rem;    /* 8px */
--spacing-md: 1rem;      /* 16px */
--spacing-lg: 1.5rem;     /* 24px */
--spacing-xl: 2rem;       /* 32px */
--spacing-2xl: 3rem;      /* 48px */
```

### Usage

```css
.component {
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
  gap: var(--spacing-sm);
}
```

### Custom Spacing

Add custom spacing values:

```css
:root {
  --spacing-custom: 1.25rem; /* 20px */
}
```

## Color Customization

### Primary Colors

Modify primary brand colors in `src/index.css`:

```css
:root {
  --primary-color: #4f46e5;      /* Main brand color */
  --primary-dark: #4338ca;        /* Darker variant */
  --primary-light: #6366f1;       /* Lighter variant */
  --primary-hover: #5b52f0;       /* Hover state */
}
```

### Status Colors

```css
:root {
  --success-color: #10b981;
  --error-color: #ef4444;
  --warning-color: #f59e0b;
  --info-color: #3b82f6;
}
```

### Background Colors

```css
:root {
  --background: #f8fafc;          /* Page background */
  --surface: #ffffff;             /* Card/component background */
  --surface-hover: #f1f5f9;       /* Hover state */
  --surface-elevated: #ffffff;    /* Elevated surfaces */
}
```

### Text Colors

```css
:root {
  --text-primary: #1e293b;         /* Main text */
  --text-secondary: #64748b;       /* Secondary text */
  --text-tertiary: #94a3b8;        /* Tertiary text */
  --text-inverse: #ffffff;         /* Text on dark backgrounds */
}
```

### Border Colors

```css
:root {
  --border-color: #e2e8f0;         /* Default border */
  --border-hover: #cbd5e1;         /* Hover border */
  --border-focus: #4f46e5;         /* Focus border */
}
```

## Typography

### Font Family

Modify in `src/index.css`:

```css
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 
               'Segoe UI', 'Roboto', sans-serif;
}
```

### Font Sizes

```css
:root {
  --font-size-xs: 0.75rem;    /* 12px */
  --font-size-sm: 0.875rem;    /* 14px */
  --font-size-base: 1rem;      /* 16px */
  --font-size-lg: 1.125rem;    /* 18px */
  --font-size-xl: 1.25rem;     /* 20px */
  --font-size-2xl: 1.5rem;     /* 24px */
  --font-size-3xl: 1.875rem;   /* 30px */
}
```

### Font Weights

```css
:root {
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
}
```

### Usage

```css
.heading {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--text-primary);
}
```

## Component Styling

### Buttons

#### Primary Button

```css
.btn-primary {
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  color: var(--text-inverse);
  padding: 0.875rem 1.75rem;
  border-radius: var(--radius-md);
  font-weight: var(--font-weight-semibold);
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: linear-gradient(135deg, var(--primary-hover), var(--primary-color));
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}
```

#### Custom Button Variant

```css
.btn-custom {
  background: var(--surface);
  border: 2px solid var(--border-color);
  color: var(--text-primary);
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-md);
}

.btn-custom:hover {
  background: var(--surface-hover);
  border-color: var(--border-hover);
}
```

### Cards

```css
.card {
  background: var(--surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
  transition: all 0.2s ease;
}

.card:hover {
  box-shadow: var(--shadow-md);
  border-color: var(--border-hover);
}
```

### Form Inputs

```css
.form-input {
  width: 100%;
  padding: 0.625rem 0.875rem;
  background: var(--input-bg);
  border: 1px solid var(--input-border);
  border-radius: var(--radius-md);
  color: var(--text-primary);
  font-size: var(--font-size-base);
  transition: all 0.2s ease;
}

.form-input:focus {
  outline: none;
  border-color: var(--input-focus-border);
  box-shadow: var(--input-focus-shadow);
}

.form-input:disabled {
  background: var(--input-disabled-bg);
  opacity: 0.7;
  cursor: not-allowed;
}
```

## Extending Form Sections

### Adding a New Section

#### Step 1: Create Section Component

```jsx
// src/components/MyNewSection.jsx
import React, { useState } from 'react';
import { useResume } from '../context/resumecontext';
import './AccordionForm.css';

function MyNewSection() {
  const { resumeData, setResumeData } = useResume();
  const [formData, setFormData] = useState(resumeData.myNewSection || []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResumeData(prev => ({
      ...prev,
      myNewSection: formData
    }));
  };

  return (
    <div className="container my-3">
      <div className="accordion">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button">
              🎯 My New Section
            </button>
          </h2>
          <div className="accordion-collapse show">
            <div className="accordion-body">
              <form onSubmit={handleSubmit}>
                {/* Your form fields */}
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyNewSection;
```

#### Step 2: Add to FormPage

In `src/pages/FormPage.jsx`:

```jsx
import MyNewSection from '../components/MyNewSection';

const sectionOptions = [
  // ... existing sections
  {
    label: "My New Section",
    value: "mynewsection",
    icon: "🎯",
    required: false,
    component: <MyNewSection />,
  },
];
```

#### Step 3: Update ResumeContext (if needed)

If you need a dedicated update function:

```jsx
// In ResumeContext
const updateMyNewSection = (data) => {
  setResumeData((prev) => ({
    ...prev,
    myNewSection: data,
  }));
};

// Add to provider value
value={{
  // ... existing values
  updateMyNewSection,
}}
```

#### Step 4: Update Data Clearing

In `FormPage.jsx`, update `clearSectionData`:

```javascript
case 'mynewsection':
  newData.myNewSection = [];
  break;
```

## Adding New Components

### Component Structure

```jsx
// src/components/MyComponent.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './MyComponent.css';

function MyComponent({ prop1, prop2 }) {
  const { theme, isDark } = useTheme();

  return (
    <div className="my-component">
      {/* Component content */}
    </div>
  );
}

export default MyComponent;
```

### Component CSS

```css
/* src/components/MyComponent.css */
.my-component {
  background: var(--surface);
  color: var(--text-primary);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
  transition: all 0.2s ease;
}

.my-component:hover {
  background: var(--surface-hover);
  box-shadow: var(--shadow-sm);
}

/* Theme-specific styles */
[data-theme="dark"] .my-component {
  /* Dark mode overrides if needed */
}
```

## Responsive Design

### Breakpoints

```css
/* Mobile */
@media (max-width: 480px) { }

/* Tablet */
@media (max-width: 768px) { }

/* Desktop */
@media (max-width: 1024px) { }

/* Large Desktop */
@media (min-width: 1025px) { }
```

### Responsive Utilities

```css
.responsive-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-md);
}

@media (min-width: 768px) {
  .responsive-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .responsive-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## Animation Guidelines

### Transitions

```css
.component {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Specific properties */
.component {
  transition: 
    background-color 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;
}
```

### Animations

```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animated {
  animation: fadeIn 0.3s ease;
}
```

### Reduced Motion

Always respect user preferences:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Best Practices

1. **Use CSS Variables** - Never hardcode values
2. **Consistent Spacing** - Use the spacing system
3. **Theme Support** - Always support both themes
4. **Accessibility** - Maintain contrast ratios
5. **Responsive** - Mobile-first approach
6. **Performance** - Minimize CSS complexity
7. **Documentation** - Comment complex styles

## Common Patterns

### Loading State

```jsx
function Component() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="component">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Content />
      )}
    </div>
  );
}
```

### Empty State

```jsx
function Component({ items }) {
  if (items.length === 0) {
    return (
      <div className="empty-state">
        <EmptyIcon />
        <h3>No items</h3>
        <p>Add items to get started</p>
      </div>
    );
  }

  return <ItemList items={items} />;
}
```

### Error State

```jsx
function Component() {
  const [error, setError] = useState(null);

  if (error) {
    return (
      <div className="error-state">
        <ErrorIcon />
        <p>{error.message}</p>
        <button onClick={retry}>Retry</button>
      </div>
    );
  }

  return <Content />;
}
```
