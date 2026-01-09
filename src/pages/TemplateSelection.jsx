import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResume } from '../context/resumecontext';
import Breadcrumb from '../components/Breadcrumb';
import LoadingSpinner from '../components/LoadingSpinner';
import TemplateCard from '../components/TemplateCard';
import { fetchTemplates } from '../utils/api';
import { TEMPLATE_REGISTRY } from '../config/templates';
import './TemplateSelection.css';

const TemplateSelection = () => {
  const { setSelectedTemplate, selectedTemplate } = useResume();
  const navigate = useNavigate();
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    const loadTemplates = async () => {
      try {
        setLoading(true);
        setNotice(null);
        const fetchedTemplates = await fetchTemplates();
        setTemplates(fetchedTemplates);
      } catch (err) {
        setNotice('Showing built-in templates (backend unavailable).');
        setTemplates(
          TEMPLATE_REGISTRY.map((t) => ({
            id: t.id,
            name: t.displayName,
            description: t.description,
            preview: '',
          }))
        );
      } finally {
        setLoading(false);
      }
    };

    loadTemplates();
  }, []);

  const handleSelect = (templateId) => {
    setSelectedTemplate(templateId);
    navigate('/form');
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

  return (
    <>
      <Breadcrumb />
      <div className="template-selection">
        <div className="template-header">
          <h2>Select a Resume Template</h2>
          <p className="template-subtitle">Choose from our professional, ATS-friendly templates</p>
        </div>
        {notice && (
          <div className="template-notice" role="status">
            {notice}
          </div>
        )}
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
