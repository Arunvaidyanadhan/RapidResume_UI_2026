# Theming System

## Overview

The application supports Light and Dark themes with automatic system preference detection, manual toggle, and localStorage persistence.

## Architecture

### ThemeContext

Located at `src/context/ThemeContext.jsx`, provides:

- `theme`: Current theme ('light' | 'dark')
- `isDark`: Boolean for dark mode
- `toggleTheme()`: Switch between themes
- `setTheme(mode)`: Set specific theme

### Theme Provider Setup

Wrap your app with `ThemeProvider`:

```jsx
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      {/* Your app */}
    </ThemeProvider>
  );
}
```

### Using Theme in Components

```jsx
import { useTheme } from '../context/ThemeContext';

function MyComponent() {
  const { theme, isDark, toggleTheme } = useTheme();
  
  return (
    <div className={isDark ? 'dark-mode' : 'light-mode'}>
      Current theme: {theme}
    </div>
  );
}
```

## CSS Variables System

### Theme Variables

All colors, shadows, and styling use CSS variables defined in `src/index.css`:

#### Light Theme (`:root` or `[data-theme="light"]`)

```css
:root {
  /* Colors */
  --primary-color: #4f46e5;
  --primary-dark: #4338ca;
  --primary-light: #6366f1;
  
  /* Backgrounds */
  --background: #f8fafc;
  --surface: #ffffff;
  --surface-hover: #f1f5f9;
  
  /* Text */
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  
  /* Borders */
  --border-color: #e2e8f0;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  
  /* Radius */
  --radius-md: 0.5rem;
}
```

#### Dark Theme (`[data-theme="dark"]`)

```css
[data-theme="dark"] {
  --primary-color: #6366f1;
  --background: #0f172a;
  --surface: #1e293b;
  --text-primary: #f1f5f9;
  /* ... */
}
```

### Using Variables in CSS

```css
.my-component {
  background: var(--surface);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-md);
  border-radius: var(--radius-md);
}

.my-component:hover {
  background: var(--surface-hover);
  border-color: var(--border-hover);
}
```

## Theme Toggle Component

### Usage

```jsx
import ThemeToggle from './components/ThemeToggle';

function Navbar() {
  return (
    <nav>
      <ThemeToggle />
    </nav>
  );
}
```

### Customization

The toggle can accept a `className` prop:

```jsx
<ThemeToggle className="my-custom-class" />
```

## Theme Application

### Automatic Application

The theme is applied to `document.documentElement` via `data-theme` attribute:

```javascript
// In ThemeContext
useEffect(() => {
  const root = document.documentElement;
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}, [theme]);
```

### System Preference Detection

On first load, if no saved theme exists:

```javascript
const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) return savedTheme;
  
  // Check system preference
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
};
```

### Listening to System Changes

The theme automatically updates if system preference changes (only if user hasn't manually set a preference):

```javascript
useEffect(() => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const handleChange = (e) => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  };
  
  mediaQuery.addEventListener('change', handleChange);
  return () => mediaQuery.removeEventListener('change', handleChange);
}, []);
```

## Adding New Themes

### Step 1: Add Theme Variables

In `src/index.css`, add a new theme block:

```css
[data-theme="custom"] {
  --primary-color: #your-color;
  --background: #your-bg;
  /* ... all variables */
}
```

### Step 2: Update ThemeContext

Add the new theme to the context:

```javascript
const [theme, setTheme] = useState(getInitialTheme);

const setThemeMode = (mode) => {
  if (mode === 'light' || mode === 'dark' || mode === 'custom') {
    setTheme(mode);
  }
};
```

### Step 3: Update Theme Toggle (if needed)

Modify `ThemeToggle` to support multiple themes or create a theme selector dropdown.

## Theme Transitions

### Smooth Transitions

All elements transition smoothly when theme changes:

```css
* {
  transition: background-color 0.2s ease, 
              border-color 0.2s ease, 
              color 0.2s ease;
}
```

### Preventing Flash

The theme is applied immediately on mount, preventing flash of unstyled content:

```javascript
useEffect(() => {
  const root = document.documentElement;
  root.setAttribute('data-theme', theme);
}, [theme]);
```

## Best Practices

1. **Always use CSS variables** - Never hardcode colors
2. **Test both themes** - Ensure contrast and readability
3. **Use semantic names** - `--text-primary` not `--color-gray-900`
4. **Consider accessibility** - Maintain WCAG contrast ratios
5. **Smooth transitions** - Use CSS transitions for theme changes
6. **System preference** - Respect user's OS preference by default

## Common Patterns

### Conditional Styling

```css
/* Use variables, not conditionals */
.component {
  background: var(--surface);
}

/* If you need theme-specific styles */
[data-theme="dark"] .component {
  /* Dark-specific overrides */
}
```

### Component-Level Theme

```jsx
function Component() {
  const { isDark } = useTheme();
  
  return (
    <div className={isDark ? 'dark' : 'light'}>
      {/* Content */}
    </div>
  );
}
```

### Theme-Aware Images

```jsx
function Logo() {
  const { isDark } = useTheme();
  
  return (
    <img 
      src={isDark ? '/logo-dark.png' : '/logo-light.png'} 
      alt="Logo" 
    />
  );
}
```

## Troubleshooting

### Theme Not Applying

1. Check `ThemeProvider` wraps your app
2. Verify `data-theme` attribute on `<html>`
3. Check CSS variable names match
4. Clear localStorage and reload

### Flash of Wrong Theme

1. Ensure theme is set before first render
2. Use SSR-friendly theme detection
3. Add inline script to set theme early

### Variables Not Working

1. Check variable names (case-sensitive)
2. Verify theme attribute is set
3. Use browser DevTools to inspect computed values
