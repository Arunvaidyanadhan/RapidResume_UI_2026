import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResume } from '../context/resumecontext';
import Breadcrumb from '../components/Breadcrumb';
import SaveButton from '../components/SaveButton';
import './HeadingsSelection.css';

const AVAILABLE_HEADINGS = [
  { id: 'personal', label: 'Personal', icon: '👤' },
  { id: 'education', label: 'Education', icon: '🎓' },
  { id: 'skills', label: 'Skills', icon: '⚡' },
  { id: 'work', label: 'Experience', icon: '💼' },
  { id: 'projects', label: 'Projects', icon: '🚀' },
  { id: 'summary', label: 'Summary', icon: '📝' },
  { id: 'certifications', label: 'Certifications', icon: '🏆' },
  { id: 'languages', label: 'Languages', icon: '🌍' },
  { id: 'awards', label: 'Awards', icon: '🏅' },
  { id: 'volunteer', label: 'Volunteer', icon: '❤️' },
  { id: 'publications', label: 'Publications', icon: '📄' },
  { id: 'references', label: 'References', icon: '👥' },
];

function HeadingsSelection() {
  const navigate = useNavigate();
  const {
    selectedTemplate,
    selectedHeadings,
    setSelectedHeadings,
    customHeadings,
    setCustomHeadings,
    setCurrentStepIndex,
    clearSectionData,
  } = useResume();

  const [newCustomHeading, setNewCustomHeading] = useState('');

  useEffect(() => {
    if (!selectedTemplate) {
      navigate('/template');
    }
  }, [selectedTemplate, navigate]);

  const allHeadings = useMemo(() => {
    return [...AVAILABLE_HEADINGS, ...(customHeadings || [])];
  }, [customHeadings]);

  const selectedIds = useMemo(() => new Set((selectedHeadings || []).map((h) => h.id)), [selectedHeadings]);

  const handleSelect = (heading) => {
    if (!heading?.id) return;
    if (selectedIds.has(heading.id)) return;
    setSelectedHeadings((prev) => [...(prev || []), heading]);
  };

  const handleDeselect = (headingId) => {
    setSelectedHeadings((prev) => (prev || []).filter((h) => h.id !== headingId));
    clearSectionData(headingId);
  };

  const moveUp = (index) => {
    if (index <= 0) return;
    setSelectedHeadings((prev) => {
      const next = [...(prev || [])];
      [next[index - 1], next[index]] = [next[index], next[index - 1]];
      return next;
    });
  };

  const moveDown = (index) => {
    setSelectedHeadings((prev) => {
      const next = [...(prev || [])];
      if (index < 0 || index >= next.length - 1) return next;
      [next[index], next[index + 1]] = [next[index + 1], next[index]];
      return next;
    });
  };

  const handleAddCustomHeading = () => {
    const trimmed = newCustomHeading.trim();
    if (!trimmed) return;

    const custom = {
      id: `custom_${Date.now()}`,
      label: trimmed,
      icon: '📌',
      isCustom: true,
    };

    setCustomHeadings((prev) => [...(prev || []), custom]);
    setNewCustomHeading('');
  };

  const handleRemoveCustomHeading = (customId) => {
    setCustomHeadings((prev) => (prev || []).filter((h) => h.id !== customId));
    setSelectedHeadings((prev) => (prev || []).filter((h) => h.id !== customId));
    clearSectionData(customId);
  };

  const handleNext = () => {
    if (!selectedHeadings || selectedHeadings.length === 0) return;
    setCurrentStepIndex(0);
    navigate('/form');
  };

  return (
    <>
      <Breadcrumb />
      <div className="container rr-headings">
        <header className="rr-headings__header">
          <h2 className="rr-headings__title">Choose Resume Sections</h2>
          <p className="rr-headings__subtitle">
            Click to add sections, reorder them, and optionally add custom sections.
            <br />
            <small>At least one section is required. Experience is never mandatory.</small>
          </p>
        </header>

        <div className="rr-headings__grid">
          <section className="rr-headings__available">
            <h3 className="rr-headings__sectionTitle">Available Sections</h3>
            <div className="rr-headings__cards">
              {allHeadings.map((heading) => {
                const isSelected = selectedIds.has(heading.id);

                return (
                  <button
                    key={heading.id}
                    type="button"
                    className={`rr-headingCard ${isSelected ? 'selected' : ''}`}
                    onClick={() => (isSelected ? handleDeselect(heading.id) : handleSelect(heading))}
                  >
                    <span className="rr-headingCard__icon">{heading.icon}</span>
                    <span className="rr-headingCard__label">{heading.label}</span>

                    {heading.isCustom && (
                      <button
                        type="button"
                        className="rr-headingCard__remove"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveCustomHeading(heading.id);
                        }}
                        aria-label="Remove custom heading"
                      >
                        ×
                      </button>
                    )}
                  </button>
                );
              })}
            </div>
          </section>

          <section className="rr-headings__selected">
            <h3 className="rr-headings__sectionTitle">Selected Sections (in order)</h3>

            {!selectedHeadings || selectedHeadings.length === 0 ? (
              <div className="rr-headings__empty">No sections selected yet.</div>
            ) : (
              <div className="rr-headings__list">
                {selectedHeadings.map((heading, idx) => (
                  <div key={heading.id} className="rr-selectedRow">
                    <span className="rr-selectedRow__icon">{heading.icon}</span>
                    <span className="rr-selectedRow__label">{heading.label}</span>

                    <div className="rr-selectedRow__controls">
                      <button
                        type="button"
                        className="rr-selectedRow__btn"
                        onClick={() => moveUp(idx)}
                        disabled={idx === 0}
                        aria-label="Move up"
                      >
                        ↑
                      </button>
                      <button
                        type="button"
                        className="rr-selectedRow__btn"
                        onClick={() => moveDown(idx)}
                        disabled={idx === selectedHeadings.length - 1}
                        aria-label="Move down"
                      >
                        ↓
                      </button>
                      <button
                        type="button"
                        className="rr-selectedRow__btn danger"
                        onClick={() => handleDeselect(heading.id)}
                        aria-label="Remove"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>

        <section className="rr-headings__custom">
          <h3 className="rr-headings__sectionTitle">Add Custom Section</h3>
          <div className="rr-customInput">
            <input
              type="text"
              className="rr-customInput__field"
              value={newCustomHeading}
              onChange={(e) => setNewCustomHeading(e.target.value)}
              placeholder="e.g., Portfolio, Achievements"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleAddCustomHeading();
                }
              }}
            />
            <button
              type="button"
              className="rr-customInput__btn"
              onClick={handleAddCustomHeading}
              disabled={!newCustomHeading.trim()}
            >
              Add
            </button>
          </div>
        </section>

        <footer className="rr-headings__footer">
          <SaveButton type="button" onClick={handleNext} disabled={!selectedHeadings || selectedHeadings.length === 0} className="w-100">
            Next
          </SaveButton>
        </footer>
      </div>
    </>
  );
}

export default HeadingsSelection;
