import { sanitizeResume } from './resumeSchema';

function wordCount(text) {
  return (text || '').trim().split(/\s+/).filter(Boolean).length;
}

function looksLikeImpactBullet(text) {
  return /\d|%|x|reduced|increased|improved|launched|scaled|grew|saved|cut|boosted/i.test(text || '');
}

function looksLikeValidDate(text) {
  if (!text) return false;
  return /^(?:[A-Za-z]{3,9}\s+\d{4}|\d{4}|present)$/i.test(text.trim());
}

function looksLikeUrl(text) {
  if (!text) return true;
  return /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/i.test(text.trim());
}

export function analyzeResumeQuality(resume) {
  const safe = sanitizeResume(resume);
  const warnings = [];
  const suggestions = [];
  const improvementTips = [];

  if (wordCount(safe.profile.summary) < 24) {
    warnings.push({ field: 'summary', level: 'warning', message: 'Summary feels too short to communicate value clearly.' });
    suggestions.push('Expand the summary to 3 to 4 sentences covering scope, strengths, and impact.');
  }

  if (wordCount(safe.profile.summary) > 90) {
    warnings.push({ field: 'summary', level: 'warning', message: 'Summary is too long and may be skipped by recruiters.' });
    suggestions.push('Keep the summary under 90 words and front-load your strongest positioning.');
  }

  safe.experience.forEach((item) => {
    if (!looksLikeValidDate(item.startDate) || (!item.current && item.endDate && !looksLikeValidDate(item.endDate))) {
      warnings.push({ field: 'experience', level: 'warning', message: `Date format looks inconsistent in ${item.role || 'an experience entry'}.` });
    }
    if (!item.startDate || (!item.current && !item.endDate)) {
      warnings.push({ field: 'experience', level: 'warning', message: `Missing date information in ${item.role || 'an experience entry'}.` });
    }
    if (item.highlights.length && !item.highlights.some(looksLikeImpactBullet)) {
      warnings.push({ field: 'experience', level: 'info', message: `${item.role || 'Experience entry'} could use measurable outcomes.` });
      improvementTips.push(`Add numbers or outcomes to ${item.role || 'your experience'} bullets, such as growth, conversion, time saved, or revenue impact.`);
    }
    item.highlights.forEach((bullet) => {
      if (wordCount(bullet) > 30) {
        warnings.push({ field: 'experience', level: 'info', message: 'One or more bullets are too long for quick scanning.' });
      }
    });
  });

  if (safe.skills.length > 12) {
    warnings.push({ field: 'skills', level: 'warning', message: 'Too many skills can dilute positioning.' });
    suggestions.push('Trim the skills list to 8 to 12 strong, role-relevant skills.');
  }

  const duplicateSkills = safe.skills
    .map((item) => item.name.toLowerCase())
    .filter((item, index, array) => item && array.indexOf(item) !== index);
  if (duplicateSkills.length) {
    warnings.push({ field: 'skills', level: 'warning', message: 'Duplicate skills detected.' });
  }

  safe.projects.forEach((item) => {
    if (!looksLikeUrl(item.link)) {
      warnings.push({ field: 'projects', level: 'warning', message: `Project link looks invalid for ${item.name || 'a project'}.` });
    }
  });

  const score = Math.max(42, 100 - warnings.length * 6);

  if (!warnings.length) {
    improvementTips.push('Resume quality looks strong. Fine-tune template choice based on the target role and company style.');
  }

  return {
    score,
    warnings,
    suggestions,
    improvementTips
  };
}
