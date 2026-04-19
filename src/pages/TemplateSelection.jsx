/**
 * ============================================
 * TemplateSelection.jsx (REDESIGNED 2026)
 * ============================================
 * Premium template selection with hero section
 * Step 1 in the resume builder flow
 * Uses dynamic live previews instead of static images
 */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResume } from '../context/resumecontext';
import LoadingSpinner from '../components/LoadingSpinner';
import TemplateCard from '../components/TemplateCard';
import TemplateGrid from '../components/TemplateGrid';
import { fetchTemplates } from '../utils/api';
import { TEMPLATE_REGISTRY } from '../config/templates';
import {
  TemplateProfessional,
  TemplateElegant,
  TemplateModern,
  TemplateMinimalist,
  TemplateCreative,
  TemplateExecutive,
  TemplateBold,
  TemplateClassic,
  TemplateClean,
  TemplateSophisticated
} from '../components/templates';
import './TemplateSelection.css';

const TemplateSelection = () => {
  const { setSelectedTemplate, selectedTemplate } = useResume();
  const navigate = useNavigate();
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notice, setNotice] = useState(null);

  // Template components mapping
  const templateComponents = {
    professional: TemplateProfessional,
    elegant: TemplateElegant,
    modern: TemplateModern,
    minimalist: TemplateMinimalist,
    creative: TemplateCreative,
    executive: TemplateExecutive,
    bold: TemplateBold,
    classic: TemplateClassic,
    clean: TemplateClean,
    sophisticated: TemplateSophisticated,
  };

  // Sample data for live previews
  const sampleData = {
    personalDetails: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@email.com',
      phone: '(555) 123-4567',
      location: 'San Francisco, CA',
      linkedin: 'linkedin.com/in/johndoe'
    },
    summary: 'Results-driven professional with 5+ years of experience in delivering high-impact solutions. Proven track record of exceeding targets and driving innovation.',
    skills: ['Strategic Planning', 'Project Management', 'Data Analysis', 'Communication', 'Problem Solving'],
    workExperience: [
      {
        id: '1',
        role: 'Senior Manager',
        company: 'Tech Innovations Inc.',
        startDate: '2021',
        endDate: 'Present',
        description: 'Led cross-functional teams to deliver key initiatives on time and under budget.'
      },
      {
        id: '2',
        role: 'Team Lead',
        company: 'Digital Solutions LLC',
        startDate: '2019',
        endDate: '2021',
        description: 'Managed team of 5 developers and improved delivery efficiency by 40%.'
      }
    ],
    education: [
      {
        id: '1',
        degree: 'MBA',
        school: 'University of California',
        graduationYear: '2019'
      },
      {
        id: '2',
        degree: 'BS Business Administration',
        school: 'State University',
        graduationYear: '2017'
      }
    ]
  };

  useEffect(() => {
    const loadTemplates = async () => {
      try {
        setLoading(true);
        setNotice(null);
        // Use local templates directly
        setTemplates(
          TEMPLATE_REGISTRY.map((t) => ({
            id: t.id,
            name: t.displayName,
            description: t.description,
            preview: '',
          }))
        );
      } catch (err) {
        setNotice('Error loading templates.');
      } finally {
        setLoading(false);
      }
    };

    loadTemplates();
  }, []);

  const handleSelect = (templateId) => {
    setSelectedTemplate(templateId);
    setTimeout(() => {
      navigate('/builder');
    }, 180);
  };

  const getTemplateDisplayData = (template) => {
    const data = {
      'professional': {
        name: 'Professional',
        badge: 'Popular',
        description: 'Clean two-column layout with accent sidebar, perfect for corporate roles.'
      },
      'elegant': {
        name: 'Elegant',
        badge: null,
        description: 'Sophisticated single-column design with refined typography.'
      },
      'modern': {
        name: 'Modern',
        badge: null,
        description: 'Contemporary layout with bold headers and clean structure.'
      },
      'minimalist': {
        name: 'Minimalist',
        badge: 'Clean',
        description: 'Ultra-clean design with maximum white space and focus on content.'
      },
      'creative': {
        name: 'Creative',
        badge: null,
        description: 'Expressive layout with subtle visual elements for creative industries.'
      },
      'executive': {
        name: 'Executive',
        badge: 'Premium',
        description: 'Premium layout with strong hierarchy for senior leadership roles.'
      },
      'bold': {
        name: 'Bold',
        badge: null,
        description: 'High-contrast design with strong visual impact.'
      },
      'classic': {
        name: 'Classic',
        badge: 'ATS',
        description: 'Traditional ATS-optimized format for maximum compatibility.'
      },
      'clean': {
        name: 'Clean',
        badge: null,
        description: 'Simple, readable layout with subtle color accents.'
      },
      'sophisticated': {
        name: 'Sophisticated',
        badge: 'Premium',
        description: 'Refined design with elegant spacing and professional polish.'
      }
    };

    const key = template.id?.toLowerCase() || 'professional';
    return data[key] || data.professional;
  };

  const templateCards = templates.map((template) => {
    const displayData = getTemplateDisplayData(template);
    const TemplateComponent = templateComponents[template.id];
    return (
      <TemplateCard
        key={template.id}
        templateId={template.id}
        templateName={displayData.name}
        description={displayData.description}
        templateComponent={TemplateComponent}
        sampleData={sampleData}
        badge={displayData.badge}
        isSelected={selectedTemplate === template.id}
        onSelect={() => handleSelect(template.id)}
      />
    );
  });

  if (loading) {
    return (
      <div className="template-selection-loading">
        <LoadingSpinner size="large" text="Loading templates..." />
      </div>
    );
  }

  return (
    <div className="template-selection">
      {/* Hero Section */}
      <div className="template-hero">
        <div className="template-hero-content">
          <h1 className="template-hero-title">Choose Your Resume Template</h1>
          <p className="template-hero-subtitle">
            Select a professionally designed template to build your ATS-friendly resume
          </p>
          <div className="template-hero-features">
            <div className="hero-feature">
              <span className="hero-feature-icon">✓</span>
              <span>All templates ATS-friendly</span>
            </div>
            <div className="hero-feature">
              <span className="hero-feature-icon">✓</span>
              <span>Recruiter approved</span>
            </div>
            <div className="hero-feature">
              <span className="hero-feature-icon">✓</span>
              <span>Download as PDF</span>
            </div>
          </div>
        </div>
      </div>

      {/* Alerts */}
      {notice && (
        <div className="template-notice">
          <span className="notice-icon">ℹ</span>
          {notice}
        </div>
      )}

      {/* Templates Grid */}
      <div className="template-selection-content">
        {templates.length === 0 ? (
          <div className="template-empty">
            <p>No templates available at the moment.</p>
          </div>
        ) : (
          <>
            <div className="template-section-header">
              <h2>Available Templates</h2>
              <p>Click any template to see a preview and customize</p>
            </div>
            <TemplateGrid
              templates={templateCards}
              selectedTemplate={selectedTemplate}
              onSelectTemplate={handleSelect}
            />
          </>
        )}
      </div>

      {/* Call-to-Action */}
      <div className="template-selection-cta">
        {selectedTemplate ? (
          <div className="cta-actions">
            <button
              className="cta-button primary"
              onClick={() => handleSelect(selectedTemplate)}
            >
              Continue with {getTemplateDisplayData(templates.find(t => t.id === selectedTemplate) || {}).name}
            </button>
            <button
              className="cta-button secondary"
              onClick={() => navigate('/')}
            >
              Back to Home
            </button>
          </div>
        ) : (
          <div className="cta-empty">
            <p>Select a template above to begin building your resume</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplateSelection;
