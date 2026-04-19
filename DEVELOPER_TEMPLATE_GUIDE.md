# Developer Guide: Adding New Resume Templates

This guide provides complete steps for developers to add new resume templates to Rapid Resume without changing the existing flow.

## Overview

The template system consists of:
- **Frontend Components**: React components for live preview and rendering
- **Unique CSS Files**: Individual styling for each template
- **Template Registry**: Central configuration for all templates
- **Theme Configuration**: Color schemes and typography
- **PDF Renderer**: Client-side PDF generation
- **Dynamic Live Previews**: Template components rendered with sample data in selection UI
- **Backend Handlebars Templates**: Server-side PDF generation (optional)

## Complete Backend-to-Frontend Flow

```
1. Template Registry (templates.js)
   ↓
2. Template Options (resumeSchema.js)
   ↓
3. Theme Configuration (resumeTemplateEngine.jsx)
   ↓
4. Frontend Component + CSS (templates/template*.jsx + template*.css)
   ↓
5. Export in Index (templates/index.js)
   ↓
6. TemplateSelection Integration (TemplateSelection.jsx)
   ↓
7. PDF Renderer (pdfTemplates.jsx)
   ↓
8. Backend Handlebars (resume-pdf-service/templates/*.hbs) [Optional]
```

## Step-by-Step Template Creation

### Step 1: Add Template to Registry

**File**: `src/config/templates.js`

Add a new object to the `TEMPLATE_REGISTRY` array:

```javascript
{
  id: 'your-template-id',
  displayName: 'Template Display Name',
  description: 'Brief description of the template',
  backendTemplate: 'your-template.hbs',
  category: 'professional', // or 'creative', 'executive', 'minimal'
}
```

**Important**:
- `id`: Must be unique, lowercase, kebab-case
- `backendTemplate`: Matches backend Handlebars filename (for PDF generation)
- `category`: Determines template grouping in UI
- No `preview` field needed - live preview is generated automatically

### Step 2: Add Template Options

**File**: `src/lib/resumeSchema.js`

Add a new object to the `TEMPLATE_OPTIONS` array:

```javascript
{
  id: 'your-template-id',
  name: 'Template Display Name',
  tone: 'Style description',
  accent: '#hex-color-code',
  useCase: 'Target use cases',
  description: 'Detailed description',
}
```

**Important**:
- `id`: Must match registry `id` exactly
- `accent`: Primary color for the template

### Step 3: Add Theme Configuration

**File**: `src/lib/resumeTemplateEngine.jsx`

Add a new theme object to the `templateThemes` object:

```javascript
templateThemes = {
  // ... existing themes
  'your-template-id': {
    canvas: '#background-color',
    surface: '#card-background',
    text: '#primary-text-color',
    muted: '#secondary-text-color',
    accent: '#accent-color',
    hairline: '#border-color',
    headingFont: '"Font Name", fallback, sans-serif',
    bodyFont: '"Font Name", fallback, sans-serif',
    type: 'classic' // or 'split', 'executive', 'minimal', 'creative'
  }
}
```

**Important**:
- Key must match registry `id` exactly
- `type`: Determines PDF layout structure

### Step 4: Create Frontend Template Component

**File**: `src/components/templates/templateYourTemplate.jsx`

Create a new React component:

```javascript
import React from 'react';
import './templateYourTemplate.css';

const TemplateYourTemplate = ({ data }) => {
  const {
    personalDetails = {},
    summary = '',
    skills = [],
    workExperience = [],
    education = [],
  } = data;

  const { firstName, lastName, email, phone, linkedin, location } = personalDetails;

  return (
    <div className="resume-container your-template">
      {/* Header */}
      <div className="resume-header your-header">
        <h1 className="resume-name your-name">{firstName} {lastName}</h1>
        <div className="resume-contact your-contact">
          {email && <span>{email}</span>}
          {phone && <span>{phone}</span>}
          {location && <span>{location}</span>}
          {linkedin && <span>{linkedin}</span>}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div className="resume-section your-section">
          <h2 className="section-title your-title">Summary</h2>
          <p className="section-content your-content">{summary}</p>
        </div>
      )}

      {/* Experience */}
      {workExperience.length > 0 && (
        <div className="resume-section your-section">
          <h2 className="section-title your-title">Experience</h2>
          {workExperience.map((exp) => (
            <div key={exp.id} className="experience-item your-experience">
              <div className="experience-header your-header">
                <h3 className="experience-title your-title">{exp.role}</h3>
                <span className="experience-date your-date">{exp.startDate} - {exp.endDate || 'Present'}</span>
              </div>
              <div className="experience-company your-company">{exp.company}</div>
              {exp.description && <p className="experience-description your-description">{exp.description}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="resume-section your-section">
          <h2 className="section-title your-title">Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="education-item your-education">
              <div className="education-header your-header">
                <h3 className="education-degree your-degree">{edu.degree}</h3>
                <span className="education-year your-year">{edu.graduationYear}</span>
              </div>
              <div className="education-school your-school">{edu.school}</div>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="resume-section your-section">
          <h2 className="section-title your-title">Skills</h2>
          <div className="skills-list your-skills">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag your-skill">{skill}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateYourTemplate;
```

**Important**:
- Import CSS file at the top: `import './templateYourTemplate.css';`
- Use consistent class naming: `your-template`, `your-header`, `your-title`, etc.
- Destructure all data fields with default empty values
- Handle null/undefined values gracefully
- Use the same data structure as existing templates

### Step 5: Create Unique CSS File

**File**: `src/components/templates/templateYourTemplate.css`

Create a CSS file with unique styling for your template:

```css
/* Base Resume Container */
.your-template {
  font-family: 'Your Font Family', sans-serif;
  background: #ffffff;
  color: #333333;
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
}

/* Header Styling */
.your-template .your-header {
  border-bottom: 3px solid #accent-color;
  padding-bottom: 20px;
  margin-bottom: 30px;
}

.your-template .your-name {
  font-size: 28px;
  font-weight: 700;
  color: #accent-color;
  margin: 0 0 10px 0;
}

.your-template .your-contact {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  font-size: 14px;
  color: #666666;
}

/* Section Styling */
.your-template .your-section {
  margin-bottom: 30px;
}

.your-template .your-title {
  font-size: 18px;
  font-weight: 700;
  color: #accent-color;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0 0 15px 0;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 8px;
}

.your-template .your-content {
  font-size: 14px;
  line-height: 1.6;
  color: #555555;
}

/* Experience Items */
.your-template .your-experience {
  margin-bottom: 20px;
}

.your-template .your-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 5px;
}

.your-template .your-title {
  font-size: 16px;
  font-weight: 600;
  color: #333333;
}

.your-template .your-date {
  font-size: 14px;
  color: #888888;
}

.your-template .your-company {
  font-size: 14px;
  font-weight: 500;
  color: #accent-color;
  margin-bottom: 8px;
}

.your-template .your-description {
  font-size: 14px;
  line-height: 1.5;
  color: #666666;
}

/* Education Items */
.your-template .your-education {
  margin-bottom: 15px;
}

.your-template .your-degree {
  font-size: 16px;
  font-weight: 600;
  color: #333333;
}

.your-template .your-year {
  font-size: 14px;
  color: #888888;
}

.your-template .your-school {
  font-size: 14px;
  color: #666666;
}

/* Skills */
.your-template .your-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.your-template .your-skill {
  background: #f0f0f0;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 13px;
  color: #555555;
}

/* Responsive */
@media (max-width: 768px) {
  .your-template {
    padding: 20px;
  }
  
  .your-template .your-name {
    font-size: 24px;
  }
}
```

**Important**:
- Use template-specific class prefix (e.g., `your-template`) to avoid conflicts
- Define colors, fonts, and spacing based on your template's theme
- Include responsive design for mobile devices
- Use CSS variables for easy theming: `var(--accent-color)`

### Step 6: Export Template Component

**File**: `src/components/templates/index.js`

Add the export:

```javascript
export { default as TemplateYourTemplate } from './templateYourTemplate';
```

**Important**:
- Export name should follow pattern: `TemplateYourTemplate`
- File path must match component filename

### Step 7: Add Template to TemplateSelection

**File**: `src/pages/TemplateSelection.jsx`

Add your template to the imports:

```javascript
import {
  TemplateProfessional,
  TemplateElegant,
  TemplateModern,
  // ... existing templates
  TemplateYourTemplate,  // Add this line
} from '../components/templates';
```

Add your template to the `templateComponents` object:

```javascript
const templateComponents = {
  professional: TemplateProfessional,
  elegant: TemplateElegant,
  modern: TemplateModern,
  // ... existing templates
  'your-template-id': TemplateYourTemplate,  // Add this line
};
```

**Important**:
- Key must match registry `id` exactly
- Component name must match export name
- This enables dynamic live preview in template selection

### Step 8: Add Template Display Data

**File**: `src/pages/TemplateSelection.jsx`

Add your template to the `getTemplateDisplayData` function:

```javascript
const getTemplateDisplayData = (template) => {
  const data = {
    // ... existing templates
    'your-template-id': {
      name: 'Template Display Name',
      badge: 'Popular', // or null, 'New', 'Premium', 'ATS', etc.
      description: 'Brief description for UI'
    }
  };
  
  const key = template.id?.toLowerCase() || 'professional';
  return data[key] || data.professional;
};
```

**Important**:
- Key must match registry `id` exactly
- Badge is optional (can be null)
- Description appears in template card

### Step 9: Update PDF Renderer

**File**: `src/lib/pdfTemplates.jsx`

Add your template to the `ResumePdfDocument` component:

```javascript
export function ResumePdfDocument({ resume, templateId }) {
  const contacts = [resume.profile.email, resume.profile.phone, resume.profile.location, resume.profile.linkedin, resume.profile.website].filter(Boolean).join(' | ');
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{[resume.profile.firstName, resume.profile.lastName].filter(Boolean).join(' ') || 'Your Name'}</Text>
          {resume.profile.headline ? <Text style={styles.headline}>{resume.profile.headline}</Text> : null}
          {contacts ? <Text style={styles.contact}>{contacts}</Text> : null}
        </View>
        {templateId === 'your-template-id' ? <YourPdfLayout resume={resume} /> : null}
        {/* ... existing templates */}
      </Page>
    </Document>
  );
}
```

**Important**:
- Choose appropriate PDF layout function based on your template type:
  - `ClassicPdf` for single-column layouts
  - `SplitPdf` for two-column layouts
  - `ExecutivePdf` for leadership-focused layouts
  - `CreativePdf` for card-based layouts

### Step 10: (Optional) Create Backend Handlebars Template

**File**: `resume-pdf-service/templates/your-template.hbs`

If you're using the backend PDF service, create a Handlebars template:

```handlebars
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    /* Add your CSS styles here */
    body { 
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 40px;
      background: #ffffff;
    }
    .header { 
      border-bottom: 3px solid #16685d;
      padding-bottom: 20px;
      margin-bottom: 30px;
    }
    .name {
      font-size: 28px;
      font-weight: 700;
      color: #16685d;
      margin: 0 0 10px 0;
    }
    .contact {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      font-size: 14px;
      color: #666666;
    }
    .section {
      margin-bottom: 30px;
    }
    .section-title {
      font-size: 18px;
      font-weight: 700;
      color: #16685d;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin: 0 0 15px 0;
      border-bottom: 1px solid #e0e0e0;
      padding-bottom: 8px;
    }
    .experience-item {
      margin-bottom: 20px;
    }
    .experience-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 5px;
    }
    .experience-title {
      font-size: 16px;
      font-weight: 600;
      color: #333333;
    }
    .experience-date {
      font-size: 14px;
      color: #888888;
    }
    .experience-company {
      font-size: 14px;
      font-weight: 500;
      color: #16685d;
      margin-bottom: 8px;
    }
    .experience-description {
      font-size: 14px;
      line-height: 1.5;
      color: #666666;
    }
  </style>
</head>
<body>
  <div class="resume">
    <div class="header">
      <h1 class="name">{{profile.firstName}} {{profile.lastName}}</h1>
      <div class="contact">
        {{#if profile.email}}{{profile.email}}{{/if}}
        {{#if profile.phone}} | {{profile.phone}}{{/if}}
        {{#if profile.location}} | {{profile.location}}{{/if}}
        {{#if profile.linkedin}} | {{profile.linkedin}}{{/if}}
      </div>
    </div>
    
    {{#if profile.summary}}
    <div class="section">
      <h2 class="section-title">Summary</h2>
      <p>{{profile.summary}}</p>
    </div>
    {{/if}}
    
    {{#if experience}}
    <div class="section">
      <h2 class="section-title">Experience</h2>
      {{#each experience}}
      <div class="experience-item">
        <div class="experience-header">
          <h3 class="experience-title">{{role}}</h3>
          <span class="experience-date">{{startDate}} - {{#if endDate}}{{endDate}}{{else}}Present{{/if}}</span>
        </div>
        <div class="experience-company">{{company}}</div>
        {{#if description}}
        <p class="experience-description">{{description}}</p>
        {{/if}}
      </div>
      {{/each}}
    </div>
    {{/if}}
    
    {{#if education}}
    <div class="section">
      <h2 class="section-title">Education</h2>
      {{#each education}}
      <div class="education-item">
        <div class="education-header">
          <h3 class="education-degree">{{degree}}</h3>
          <span class="education-year">{{graduationYear}}</span>
        </div>
        <div class="education-school">{{school}}</div>
      </div>
      {{/each}}
    </div>
    {{/if}}
    
    {{#if skills}}
    <div class="section">
      <h2 class="section-title">Skills</h2>
      <div class="skills-list">
        {{#each skills}}
        <span class="skill-tag">{{this}}</span>
        {{/each}}
      </div>
    </div>
    {{/if}}
  </div>
</body>
</html>
```

**Important**:
- Use Handlebars syntax: `{{variable}}` for variables
- Use `{{#if condition}}...{{/if}}` for conditionals
- Use `{{#each array}}...{{/each}}` for loops
- Data structure matches frontend
- Include inline CSS for PDF styling

## Dynamic Live Preview System

The template selection page uses dynamic live previews instead of static images:

**How it works:**
1. `TemplateSelection.jsx` imports all template components
2. Creates a mapping object: `templateComponents`
3. Defines sample resume data
4. Passes the component and data to `TemplateCard`
5. `TemplateCard` renders the actual template component with sample data
6. CSS scaling (0.7) fits the full resume in the preview card

**Benefits:**
- Always shows current template design
- No need to regenerate preview images
- Accurate representation of final output
- Easier maintenance

## Testing Your Template

1. **Frontend Preview**:
   - Navigate to `/templates` page
   - Your template should appear in the grid
   - Verify live preview shows correctly with sample data
   - Click to select and verify in builder

2. **CSS Styling**:
   - Ensure template has unique visual identity
   - Check responsive design on mobile
   - Verify colors match theme configuration
   - Test with different data lengths

3. **PDF Generation**:
   - Fill in sample resume data
   - Select your template
   - Click download/preview
   - Verify PDF renders correctly
   - Check client-side PDF (React-PDF) first
   - Then test backend PDF if using Handlebars

4. **ATS Compatibility**:
   - Ensure text is selectable (not images)
   - Use standard fonts
   - Avoid complex layouts that ATS parsers can't read
   - Test with common ATS parsers

## Common Pitfalls

1. **ID Mismatch**: Ensure template ID is identical across all files (registry, options, themes, renderer, selection)
2. **Missing CSS Import**: Don't forget to import CSS file in component
3. **CSS Conflicts**: Use unique class prefixes to avoid conflicts with other templates
4. **Missing Exports**: Don't forget to export component in `index.js`
5. **Data Structure**: Always destructure with default empty values
6. **Preview Scaling**: If preview shows half resume, adjust scale in `TemplateCard.css`

## Template Types Reference

- **classic**: Single-column, traditional layout
- **split**: Two-column layout with sidebar
- **executive**: Leadership-focused with premium spacing
- **minimal**: Maximum white space, clean typography
- **creative**: Card-based or unique layouts

## File Checklist

When adding a new template, ensure you've updated:

- [ ] `src/config/templates.js` - Add to registry
- [ ] `src/lib/resumeSchema.js` - Add to options
- [ ] `src/lib/resumeTemplateEngine.jsx` - Add theme
- [ ] `src/components/templates/templateYourTemplate.jsx` - Create component with CSS import
- [ ] `src/components/templates/templateYourTemplate.css` - Create unique CSS styling
- [ ] `src/components/templates/index.js` - Export component
- [ ] `src/pages/TemplateSelection.jsx` - Add to imports, templateComponents mapping, and display data
- [ ] `src/lib/pdfTemplates.jsx` - Add PDF renderer case
- [ ] `resume-pdf-service/templates/your-template.hbs` - (Optional) Backend template

## Support

For issues or questions:
1. Check existing templates for reference
2. Verify all IDs match across files
3. Ensure all CSS imports are present
4. Ensure all exports are present
5. Test with sample data before deploying
6. Adjust preview scaling if needed in `TemplateCard.css`
