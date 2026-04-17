import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResume } from '../context/resumecontext';
import LoadingSpinner from '../components/LoadingSpinner';
import { fetchTemplates } from '../utils/api';
import { TEMPLATE_REGISTRY } from '../config/templates';

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
    setTimeout(() => {
      navigate('/headings');
    }, 180);
  };

  const getTemplateDisplayData = (template) => {
    const data = {
      'classic': { name: 'Classic', tag: 'Popular', badgeColor: 'badge-green', description: 'Clean, traditional layout' },
      'modern': { name: 'Modern', tag: 'Sidebar', badgeColor: '', description: 'Two-column with accent' },
      'minimal': { name: 'Minimal', tag: 'Clean', badgeColor: '', description: 'Ultra-clean grid layout' },
      'executive': { name: 'Executive', tag: 'Premium', badgeColor: 'badge-orange', description: 'Bold header for senior roles' },
      'creative': { name: 'Creative', tag: 'Bold', badgeColor: '', description: 'Unique, personality-driven' }
    };
    
    const key = template.id?.toLowerCase() || 'classic';
    return data[key] || data.classic;
  };

  if (loading) {
    return (
      <div className="page">
        <div style={{ textAlign: 'center', padding: 80 }}>
          <LoadingSpinner size="large" text="Loading templates..." />
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div style={{ textAlign: 'center', marginBottom: 36 }}>
        <div className="section-label" style={{ textAlign: 'center' }}>Choose Template</div>
        <h2 style={{ fontSize: 38 }}>Select your resume style</h2>
        <p className="text-secondary mt-8" style={{ fontSize: 15 }}>All templates are ATS-friendly and recruiter-approved.</p>
      </div>

      {notice && (
        <div style={{ 
          background: 'var(--amber-light)', 
          border: '1px solid var(--amber)', 
          borderRadius: 'var(--radius)', 
          padding: 12, 
          marginBottom: 24, 
          fontSize: 13, 
          color: 'var(--amber)' 
        }}>
          {notice}
        </div>
      )}

      {templates.length === 0 ? (
        <div className="card" style={{ textAlign: 'center', padding: 48 }}>
          <p>No templates available at the moment.</p>
        </div>
      ) : (
        <div className="template-grid">
          {templates.map((template) => {
            const displayData = getTemplateDisplayData(template);
            return (
              <div
                key={template.id}
                className={`template-card ${selectedTemplate === template.id ? 'selected' : ''}`}
                onClick={() => handleSelect(template.id)}
              >
                <div className="template-thumb" style={{ background: '#F7F6F2' }}>
                  <div style={{ height: 40, background: '#1A1916', borderRadius: 4, margin: -12, marginBottom: 10, padding: 8 }}>
                    <div style={{ height: 8, background: 'white', borderRadius: 2, width: '55%', marginBottom: 4 }}></div>
                    <div style={{ height: 5, background: '#52B788', borderRadius: 2, width: '38%' }}></div>
                  </div>
                  <div style={{ height: 5, background: '#E5E3DB', borderRadius: 2, marginBottom: 5 }}></div>
                  <div style={{ height: 5, background: '#E5E3DB', borderRadius: 2, width: '80%', marginBottom: 5 }}></div>
                  <div style={{ height: 4, background: '#F0EFE9', borderRadius: 2, marginBottom: 3 }}></div>
                  <div style={{ height: 4, background: '#F0EFE9', borderRadius: 2, width: '90%', marginBottom: 3 }}></div>
                  <div style={{ height: 1, background: '#E5E3DB', margin: '8px 0' }}></div>
                  <div style={{ height: 5, background: '#D8EDDF', borderRadius: 2, width: '40%', marginBottom: 6 }}></div>
                  <div style={{ height: 4, background: '#F0EFE9', borderRadius: 2, marginBottom: 3 }}></div>
                  <div style={{ height: 4, background: '#F0EFE9', borderRadius: 2, width: '85%' }}></div>
                </div>
                <div className="template-name">
                  {displayData.name}
                  {displayData.badgeColor && (
                    <span className={`template-tag badge ${displayData.badgeColor}`}>{displayData.tag}</span>
                  )}
                  {!displayData.badgeColor && (
                    <span className="template-tag">{displayData.tag}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div style={{ textAlign: 'center', marginTop: 28 }}>
        <button className="btn-secondary" onClick={() => navigate('/')}>
          ← Back to Home
        </button>
      </div>
    </div>
  );
};

export default TemplateSelection;
