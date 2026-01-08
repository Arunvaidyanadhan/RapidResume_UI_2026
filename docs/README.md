# Rapid Resume - Frontend Documentation

## Overview

This documentation provides comprehensive guides for understanding, customizing, and extending the Rapid Resume frontend application.

## Documentation Structure

### 📋 [Form Page Architecture](./FORM_PAGE_ARCHITECTURE.md)
Complete guide to the Form Page component structure, state management, data flow, and section handling.

**Key Topics:**
- Component structure and hierarchy
- State management patterns
- Section selection and data clearing
- Save functionality
- Responsive behavior

### 🎨 [Theming System](./THEMING_SYSTEM.md)
Comprehensive guide to the Light/Dark theme system, CSS variables, and theme customization.

**Key Topics:**
- ThemeContext usage
- CSS variable system
- Theme toggle component
- Adding new themes
- Best practices

### 🛠️ [UI Customization Guide](./UI_CUSTOMIZATION_GUIDE.md)
Practical guide for customizing spacing, colors, typography, and extending components.

**Key Topics:**
- Spacing system
- Color customization
- Typography
- Component styling
- Adding new form sections
- Responsive design patterns

## Quick Start

### Understanding the Codebase

1. **Start with Form Page Architecture** - Understand how the main form works
2. **Review Theming System** - Learn how themes are implemented
3. **Explore UI Customization** - Customize the look and feel

### Common Tasks

#### Adding a New Form Section

1. Create component in `src/components/`
2. Add to `sectionOptions` in `FormPage.jsx`
3. Update `clearSectionData` if needed
4. See [UI Customization Guide - Extending Form Sections](./UI_CUSTOMIZATION_GUIDE.md#extending-form-sections)

#### Customizing Colors

1. Modify CSS variables in `src/index.css`
2. Update both light and dark themes
3. See [UI Customization Guide - Color Customization](./UI_CUSTOMIZATION_GUIDE.md#color-customization)

#### Adding a New Theme

1. Add theme variables in `src/index.css`
2. Update `ThemeContext.jsx`
3. See [Theming System - Adding New Themes](./THEMING_SYSTEM.md#adding-new-themes)

## Architecture Overview

```
RR_fronendonly/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ThemeToggle.jsx  # Theme switcher
│   │   ├── SaveButton.jsx   # Save button component
│   │   └── ...              # Other components
│   ├── context/             # React Context providers
│   │   ├── ThemeContext.jsx # Theme management
│   │   └── resumecontext.jsx # Resume data management
│   ├── pages/                # Page components
│   │   ├── FormPage.jsx     # Main form page
│   │   └── ...              # Other pages
│   ├── utils/               # Utility functions
│   │   └── api.js          # API client
│   └── index.css            # Global styles & theme variables
└── docs/                    # Documentation
    ├── README.md           # This file
    ├── FORM_PAGE_ARCHITECTURE.md
    ├── THEMING_SYSTEM.md
    └── UI_CUSTOMIZATION_GUIDE.md
```

## Key Concepts

### Theme System

The application uses a CSS variable-based theme system that supports:
- Light and Dark modes
- System preference detection
- Manual theme toggle
- localStorage persistence
- Smooth transitions

### Form Management

The Form Page uses:
- Section-based organization
- Context-based state management
- Dynamic section selection
- Automatic data clearing
- Progress tracking

### Component Patterns

Components follow these patterns:
- CSS variable usage (no hardcoded colors)
- Theme-aware styling
- Responsive design
- Accessibility support
- Loading and error states

## Best Practices

1. **Always use CSS variables** - Never hardcode colors or spacing
2. **Support both themes** - Test in light and dark modes
3. **Mobile-first** - Design for mobile, enhance for desktop
4. **Accessibility** - Maintain WCAG contrast ratios
5. **Performance** - Use memoization and lazy loading
6. **Documentation** - Document complex logic and patterns

## Getting Help

- Review the specific documentation files for detailed guides
- Check component source code for implementation examples
- Test changes in both light and dark themes
- Verify responsive behavior on different screen sizes

## Contributing

When adding new features:

1. Follow existing patterns and conventions
2. Update relevant documentation
3. Test in both themes
4. Ensure responsive design
5. Maintain accessibility standards
6. Add appropriate loading/error states

---

**Last Updated**: January 2026
**Version**: 2.0.0
