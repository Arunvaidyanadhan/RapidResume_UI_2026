# Form Page Architecture

## Overview

The Form Page (`FormPage.jsx`) is the core component for building resumes. It provides a modern, two-column layout with section management, theme support, and production-ready UX.

## Component Structure

```
FormPage
├── FormPageContent (Main component)
│   ├── Breadcrumb
│   ├── FormPageHeader
│   │   ├── Back Button
│   │   ├── Title & Progress
│   │   └── Preview Button
│   ├── FormPageLayout
│   │   ├── SectionSelector (Left Sidebar)
│   │   │   ├── Section List
│   │   │   └── Section Items
│   │   └── FormContentArea (Right)
│   │       ├── Section Wrappers
│   │       │   └── Accordion Components
│   │       └── SaveButton (Sticky)
│   └── PreviewPanel (Slide-out)
└── ResumeProvider (Context wrapper)
```

## State Management

### Local State

- `selectedSections`: Array of selected section values
- `activeSection`: Currently active/visible section
- `showPreview`: Boolean for preview panel visibility
- `isSaving`: Loading state for save operation
- `isInitialized`: Initial loading state

### Context State (ResumeContext)

- `resumeData`: Complete resume data object
- `selectedTemplate`: Currently selected template ID
- Update functions: `updatePersonalDetails`, `updateWorkExperience`, etc.
- `clearSectionData`: Function to clear section-specific data

## Section Management

### Section Options

Sections are defined in `sectionOptions` array with:

```javascript
{
  label: "Display Name",
  value: "unique-id",
  icon: "emoji",
  required: boolean,
  component: <Component />
}
```

### Section Selection Flow

1. **User clicks section checkbox**
   - If not selected: Adds to `selectedSections`, sets as `activeSection`
   - If selected: Removes from `selectedSections`, clears data via `clearSectionData`

2. **User clicks selected section**
   - Sets as `activeSection`
   - Scrolls to section in form area

3. **Required sections**
   - Cannot be deselected
   - Checkbox is disabled
   - Always included in `selectedSections`

### Section Data Clearing

When a section is deselected, `clearSectionData(sectionValue)` is called:

- `projects` → Clears `resumeData.projects`
- `certifications` → Clears `resumeData.certifications`
- `summary` → Clears `resumeData.summary`
- `work` → Clears `resumeData.workExperience`
- `education` → Clears `resumeData.education`
- `skills` → Clears `resumeData.skills`

**Note**: Personal details, languages, awards, etc. are NOT cleared as they may be used by other sections.

## Form Sections

Each section is rendered as an Accordion component:

- `PersonalDetailAccordion`
- `WorkHistoryAccordion`
- `EducationAccordion`
- `SkillsAccordion`
- `SummaryAccordion`
- `CertificationsAccordion`
- `ProjectsAccordion`
- `LanguagesAccordion`
- `AwardsAccordion`
- `VolunteerAccordion`
- `HobbiesAccordion`
- `PublicationsAccordion`
- `ReferencesAccordion`
- `FinallizeAccordion` (PDF generation)

## Data Flow

```
User Input
    ↓
Accordion Component
    ↓
Context Update Function (e.g., updatePersonalDetails)
    ↓
ResumeContext State Update
    ↓
resumeData Updated
    ↓
Available to Preview & PDF Generation
```

## Save Functionality

### Save Button

- **Location**: Sticky at bottom of form content area
- **States**: 
  - Enabled: When required fields are filled
  - Disabled: When required fields are missing
  - Loading: During save operation

### Required Fields Validation

```javascript
const canSave = useMemo(() => {
  const personal = resumeData.personalDetails || {};
  return !!(
    personal.firstName &&
    personal.lastName &&
    personal.email &&
    personal.phone
  );
}, [resumeData.personalDetails]);
```

### Save Flow

1. User clicks "Save & Continue"
2. `handleSave` is called
3. Validation check (`canSave`)
4. If valid:
   - Set `isSaving = true`
   - Perform save operation (async)
   - Set `isSaving = false`
   - Optionally navigate or show success

## Preview Panel

- **Trigger**: Preview button in header
- **Position**: Fixed right side, slides in from right
- **Content**: `PreviewSection` component
- **State**: Controlled by `showPreview`

## Responsive Behavior

### Desktop (>1024px)
- 2-column layout: Sidebar (300px) + Content (flex)
- Sticky sidebar
- Preview panel: 500px width

### Tablet (768px - 1024px)
- Single column layout
- Sidebar becomes static
- Preview panel: Full width

### Mobile (<768px)
- Single column layout
- Sidebar sections: 2-column grid
- Full-width buttons
- Compact spacing

## Performance Optimizations

1. **Memoization**: Progress calculation uses `useMemo`
2. **Lazy Loading**: Form sections loaded on demand
3. **Initialization**: Loading state prevents flash
4. **Smooth Scrolling**: `scrollIntoView` with smooth behavior

## Accessibility

- ARIA labels on interactive elements
- Keyboard navigation support
- Focus management
- Screen reader friendly
- Reduced motion support

## Future Enhancements

- Auto-save functionality
- Section completion indicators
- Draft saving to localStorage
- Undo/redo functionality
- Section reordering
