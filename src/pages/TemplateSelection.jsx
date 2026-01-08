import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResume } from '../context/resumecontext';
import Breadcrumb from '../components/Breadcrumb';
import LoadingSpinner from '../components/LoadingSpinner';
import TemplateCard from '../components/TemplateCard';
import { fetchTemplates } from '../utils/api';
import './TemplateSelection.css';

const TemplateSelection = () => {
  const { setSelectedTemplate, selectedTemplate } = useResume();
  const navigate = useNavigate();
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadingTemplate, setLoadingTemplate] = useState(null);

  useEffect(() => {
    const loadTemplates = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedTemplates = await fetchTemplates();
        setTemplates(fetchedTemplates);
      } catch (err) {
        console.error('Failed to load templates:', err);
        setError(err.message || 'Failed to load templates. Please ensure the backend is running.');
      } finally {
        setLoading(false);
      }
    };

    loadTemplates();
  }, []);

  const handleSelect = (templateId) => {
    setLoadingTemplate(templateId);
    setSelectedTemplate(templateId);
    
    // Small delay for better UX
    setTimeout(() => {
      navigate('/form');
    }, 300);
  };

  if (loading) {
    return (
      <>
        <Breadcrumb />
        <div className="template-selection">
          <div className="template-loading">
            <LoadingSpinner size="large" text="Loading templates..." />
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Breadcrumb />
        <div className="template-selection">
          <div className="template-error">
            <div className="error-icon">⚠️</div>
            <h3>Unable to Load Templates</h3>
            <p>{error}</p>
            <button 
              className="retry-button"
              onClick={() => window.location.reload()}
            >
              Retry
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Breadcrumb />
      <div className="template-selection">
        <div className="template-header">
          <h2>Select a Resume Template</h2>
          <p className="template-subtitle">Choose from our professional, ATS-friendly templates</p>
        </div>
        {templates.length === 0 ? (
          <div className="template-empty">
            <p>No templates available at the moment.</p>
          </div>
        ) : (
          <div className="template-thumbnails">
            {templates.map((template) => (
              <TemplateCard
                key={template.id}
                templateId={template.id}
                templateName={template.name}
                description={template.description}
                preview={template.preview}
                onSelect={() => handleSelect(template.id)}
                isSelected={selectedTemplate === template.id}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default TemplateSelection;
