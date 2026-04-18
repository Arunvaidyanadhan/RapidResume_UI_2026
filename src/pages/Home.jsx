import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { AdSenseBanner } from '../components/AdSense';
import '../components/AdSense/AdSense.css';

function HomePage() {
  const regularPosts = blogPosts.filter(post => !post.featured).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <div className="hero" style={{ display: 'flex', gap: 60 }}>
        <div className="hero-content fade-up">
          <div className="hero-badge">
            <div className="hero-pulse"></div>
            Free · No Signup Required
          </div>
          <h1>Your dream job<br/>starts with a <em>great</em><br/>resume.</h1>
          <p>Pick a template, fill in your details, and download a polished, ATS-friendly resume in under 5 minutes.</p>
          <div className="benefit-row">
            <div className="benefit"><div className="benefit-dot"></div>5 professional templates for every industry</div>
            <div className="benefit"><div className="benefit-dot"></div>Instant PDF download — no watermarks</div>
            <div className="benefit"><div className="benefit-dot"></div>ATS-optimized formatting that gets past filters</div>
            <div className="benefit"><div className="benefit-dot"></div>Works on any device, completely free</div>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/builder" className="btn-primary btn-lg">Start Building Resume</Link>
            <Link to="/blog" className="btn-secondary btn-lg">Resume Tips</Link>
          </div>
          <div style={{ color: 'rgba(255,255,255,.3)', fontSize: 12, marginTop: 12 }}>
            No account · No credit card · Just download
          </div>
        </div>

        <div className="hero-side fade-up-2">
          <div className="hero-preview">
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,.4)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 14 }}>
              Resume Preview
            </div>
            <div className="hero-resume-line" style={{ height: 12, background: 'rgba(255,255,255,.7)', width: '60%', marginBottom: 8 }}></div>
            <div className="hero-resume-line" style={{ height: 7, background: 'rgba(82,183,136,.5)', width: '38%', marginBottom: 12 }}></div>
            <div className="hero-resume-line" style={{ height: 6, background: 'rgba(255,255,255,.2)', marginBottom: 5 }}></div>
            <div className="hero-resume-line" style={{ height: 6, background: 'rgba(255,255,255,.12)', width: '80%', marginBottom: 5 }}></div>
            <div className="hero-resume-line" style={{ height: 6, background: 'rgba(255,255,255,.2)', marginBottom: 5 }}></div>
            <div className="hero-resume-line" style={{ height: 6, background: 'rgba(255,255,255,.12)', width: '90%', marginBottom: 10 }}></div>
            <div style={{ height: 10 }}></div>
            <div style={{ height: 1, background: 'rgba(255,255,255,.1)', marginBottom: 10 }}></div>
            <div className="hero-resume-line" style={{ height: 7, background: 'rgba(82,183,136,.3)', width: '35%', marginBottom: 8 }}></div>
            <div className="hero-resume-line" style={{ height: 5, background: 'rgba(255,255,255,.12)', marginBottom: 3 }}></div>
            <div className="hero-resume-line" style={{ height: 5, background: 'rgba(255,255,255,.12)', width: '85%', marginBottom: 8 }}></div>
            <div style={{ height: 10 }}></div>
            <div style={{ height: 1, background: 'rgba(255,255,255,.1)', marginBottom: 10 }}></div>
            <div className="hero-resume-line" style={{ height: 7, background: 'rgba(82,183,136,.3)', width: '25%', marginBottom: 8 }}></div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              <div style={{ height: 18, width: 50, background: 'rgba(82,183,136,.25)', borderRadius: 3 }}></div>
              <div style={{ height: 18, width: 40, background: 'rgba(82,183,136,.25)', borderRadius: 3 }}></div>
              <div style={{ height: 18, width: 55, background: 'rgba(82,183,136,.25)', borderRadius: 3 }}></div>
            </div>
            <div style={{ marginTop: 14, textAlign: 'center' }}>
              <div style={{ display: 'inline-block', background: 'var(--accent)', color: 'white', fontSize: 11, fontWeight: 600, padding: 6, borderRadius: 6 }}>
                Download PDF ↓
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Built for strip */}
      <div style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)', padding: 18, display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
        <div style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase' }}>
          PERFECT FOR
        </div>
        <div className="chip">🎓 Fresh Graduates</div>
        <div className="chip">🔄 Career Changers</div>
        <div className="chip">⬆️ Getting Promoted</div>
        <div className="chip">🌍 International Applications</div>
        <div className="chip">💼 Executive Roles</div>
      </div>

      {/* How it works */}
      <div style={{ padding: 72, background: 'var(--bg)' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="section-label" style={{ textAlign: 'center' }}>How it works</div>
          <h2 style={{ fontSize: 38 }}>Resume ready in<br/><em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>3 simple steps</em></h2>
        </div>
        <div className="how-grid">
          <div className="how-card">
            <div className="how-num">1</div>
            <div className="how-icon">🎨</div>
            <h4 style={{ fontSize: 18, marginBottom: 8 }}>Pick your template</h4>
            <p className="text-secondary text-sm">Choose from 5 professionally designed templates — Classic, Modern, Minimal, Executive, or Creative.</p>
          </div>
          <div className="how-card featured">
            <div className="how-num" style={{ background: 'var(--accent)', color: 'white' }}>2</div>
            <div className="how-icon">✏️</div>
            <h4 style={{ fontSize: 18, marginBottom: 8 }}>Fill in your details</h4>
            <p className="text-secondary text-sm">Enter your experience, education, skills, and contact info in our clean guided form. See it update live.</p>
          </div>
          <div className="how-card">
            <div className="how-num">3</div>
            <div className="how-icon">⬇️</div>
            <h4 style={{ fontSize: 18, marginBottom: 8 }}>Download & apply</h4>
            <p className="text-secondary text-sm">Download your resume as a polished PDF instantly. No watermarks, no email required.</p>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <Link to="/builder" className="btn-primary btn-lg">Start Building for Free</Link>
        </div>
      </div>

      {/* Templates preview */}
      <div style={{ padding: 60, background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div className="section-label" style={{ textAlign: 'center' }}>5 Templates</div>
          <h2 style={{ fontSize: 34 }}>For every career & style</h2>
          <p className="text-secondary mt-8" style={{ fontSize: 15 }}>All templates are ATS-friendly and recruiter-approved.</p>
        </div>
        <div className="template-grid">
          <div className="template-card" onClick={() => window.location.href = '/templates'}>
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
            <div className="template-name">Classic <span className="template-tag badge badge-green">Popular</span></div>
          </div>
          <div className="template-card" onClick={() => window.location.href = '/templates'}>
            <div className="template-thumb" style={{ background: '#F7F6F2', display: 'grid', gridTemplateColumns: '35% 1fr', gap: 0, padding: 0 }}>
              <div style={{ background: '#2D6A4F', padding: 8 }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(255,255,255,.2)', margin: '0 auto 6' }}></div>
                <div style={{ height: 5, background: 'rgba(255,255,255,.5)', borderRadius: 2, marginBottom: 3 }}></div>
                <div style={{ height: 4, background: 'rgba(255,255,255,.3)', borderRadius: 2, width: '70%', margin: '0 auto 10' }}></div>
                <div style={{ height: 3, background: 'rgba(255,255,255,.2)', borderRadius: 2, marginBottom: 3 }}></div>
                <div style={{ height: 3, background: 'rgba(255,255,255,.2)', borderRadius: 2, width: '80%', marginBottom: 3 }}></div>
                <div style={{ height: 3, background: 'rgba(255,255,255,.2)', borderRadius: 2, width: '60%' }}></div>
              </div>
              <div style={{ padding: 8 }}>
                <div style={{ height: 5, background: '#2D6A4F', borderRadius: 2, width: '55%', marginBottom: 6 }}></div>
                <div style={{ height: 4, background: '#E5E3DB', borderRadius: 2, marginBottom: 3 }}></div>
                <div style={{ height: 4, background: '#E5E3DB', borderRadius: 2, width: '85%', marginBottom: 3 }}></div>
                <div style={{ height: 4, background: '#F0EFE9', borderRadius: 2, width: '90%', marginBottom: 10 }}></div>
                <div style={{ height: 5, background: '#2D6A4F', borderRadius: 2, width: '45%', marginBottom: 6 }}></div>
                <div style={{ height: 4, background: '#E5E3DB', borderRadius: 2, marginBottom: 3 }}></div>
                <div style={{ height: 4, background: '#F0EFE9', borderRadius: 2, width: '75%' }}></div>
              </div>
            </div>
            <div className="template-name">Modern <span className="template-tag">Sidebar</span></div>
          </div>
          <div className="template-card" onClick={() => window.location.href = '/templates'}>
            <div className="template-thumb" style={{ background: 'white', padding: 10 }}>
              <div style={{ height: 14, background: '#1A1916', borderRadius: 2, width: '65%', marginBottom: 5 }}></div>
              <div style={{ height: 6, background: '#A09E98', borderRadius: 2, width: '40%', marginBottom: 4 }}></div>
              <div style={{ height: 2, background: '#1A1916', margin: '6px 0' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '35% 1fr', gap: 8, marginTop: 8 }}>
                <div style={{ height: 5, background: '#A09E98', borderRadius: 2 }}></div>
                <div>
                  <div style={{ height: 4, background: '#E5E3DB', borderRadius: 2, marginBottom: 3 }}></div>
                  <div style={{ height: 4, background: '#F0EFE9', borderRadius: 2, width: '80%', marginBottom: 3 }}></div>
                  <div style={{ height: 4, background: '#F0EFE9', borderRadius: 2, width: '90%' }}></div>
                </div>
              </div>
            </div>
            <div className="template-name">Minimal <span className="template-tag">Clean</span></div>
          </div>
          <div className="template-card" onClick={() => window.location.href = '/templates'}>
            <div className="template-thumb" style={{ background: '#F7F6F2' }}>
              <div style={{ height: 48, background: '#1A1916', borderRadius: 4, margin: -12, marginBottom: 10, padding: 10, borderBottom: 3, borderColor: '#2D6A4F' }}>
                <div style={{ height: 10, background: 'white', borderRadius: 2, width: '60%', marginBottom: 5 }}></div>
                <div style={{ height: 4, background: '#52B788', borderRadius: 2, width: '35%' }}></div>
              </div>
              <div style={{ height: 4, background: '#D8EDDF', borderRadius: 2, marginBottom: 2 }}></div>
              <div style={{ height: 4, background: '#F0EFE9', borderRadius: 2, width: '90%', marginBottom: 8 }}></div>
              <div style={{ height: 6, background: '#1A1916', borderRadius: 2, display: 'inline-block', width: '45%', marginBottom: 6 }}></div>
              <div style={{ height: 4, background: '#E5E3DB', borderRadius: 2, marginBottom: 3 }}></div>
              <div style={{ height: 4, background: '#F0EFE9', borderRadius: 2, width: '80%' }}></div>
            </div>
            <div className="template-name">Executive <span className="template-tag badge" style={{ background: 'var(--amber-light)', color: 'var(--amber)' }}>Premium</span></div>
          </div>
          <div className="template-card" onClick={() => window.location.href = '/templates'}>
            <div className="template-thumb" style={{ background: 'white', borderLeft: 5, borderColor: '#2D6A4F', padding: 10 }}>
              <div style={{ background: 'linear-gradient(135deg,#D8EDDF,#EAF5EF)', padding: 8, margin: -10, marginBottom: 8, borderLeft: 3, borderColor: '#2D6A4F' }}>
                <div style={{ height: 8, background: '#1A1916', borderRadius: 2, width: '60%', marginBottom: 4 }}></div>
                <div style={{ height: 5, background: '#2D6A4F', borderRadius: 2, width: '40%' }}></div>
              </div>
              <div style={{ height: 16, fontFamily: 'var(--font-serif)', fontSize: 12, color: '#2D6A4F', marginBottom: 5 }}></div>
              <div style={{ height: 4, background: '#E5E3DB', borderRadius: 2, marginBottom: 3 }}></div>
              <div style={{ height: 4, background: '#F0EFE9', borderRadius: 2, width: '85%', marginBottom: 8 }}></div>
              <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                <div style={{ height: 12, width: 36, background: '#D8EDDF', border: 1, borderColor: '#2D6A4F', borderRadius: 10 }}></div>
                <div style={{ height: 12, width: 28, background: '#D8EDDF', border: 1, borderColor: '#2D6A4F', borderRadius: 10 }}></div>
                <div style={{ height: 12, width: 40, background: '#D8EDDF', border: 1, borderColor: '#2D6A4F', borderRadius: 10 }}></div>
              </div>
            </div>
            <div className="template-name">Creative <span className="template-tag">Bold</span></div>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: 28 }}>
          <Link to="/builder" className="btn-outline">Open Builder</Link>
        </div>
      </div>

      {/* Testimonials */}
      <div style={{ padding: 72, background: 'var(--bg)' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div className="section-label" style={{ textAlign: 'center' }}>Testimonials</div>
          <h2 style={{ fontSize: 34 }}>People who got the job</h2>
        </div>
        <div className="grid-3">
          <div className="testi-card">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">"I applied to 12 jobs and got 8 callbacks in two weeks. The template was clean and the whole thing took me 10 minutes."</p>
            <div className="testi-author">
              <div className="testi-avatar" style={{ background: '#2D6A4F' }}>P</div>
              <div><div style={{ fontWeight: 600, fontSize: 13 }}>Priya S.</div><div className="text-xs text-muted">Software Engineer, Bangalore</div></div>
            </div>
          </div>
          <div className="testi-card">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">"Finally a resume builder that doesn’t ask me to pay to download. The Executive template is 🔥. Got an interview at Deloitte."</p>
            <div className="testi-author">
              <div className="testi-avatar" style={{ background: '#3B7DD8' }}>A</div>
              <div><div style={{ fontWeight: 600, fontSize: 13 }}>Arun K.</div><div className="text-xs text-muted">Finance Analyst, Chennai</div></div>
            </div>
          </div>
          <div className="testi-card">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">"Switched careers from teaching to UX. The Creative template stood out perfectly. Landed my first design job within a month."</p>
            <div className="testi-author">
              <div className="testi-avatar" style={{ background: '#E9A825' }}>M</div>
              <div><div style={{ fontWeight: 600, fontSize: 13 }}>Meera R.</div><div className="text-xs text-muted">UX Designer, Hyderabad</div></div>
            </div>
          </div>
        </div>
      </div>

      {/* AdSense Banner */}
      <div style={{ padding: '0 72px', background: 'var(--bg)' }}>
        <AdSenseBanner slot="1234567890" />
      </div>

      {/* Blog teaser */}
      <div style={{ padding: 72, background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div className="section-label" style={{ textAlign: 'center' }}>Resume Tips</div>
          <h2 style={{ fontSize: 34 }}>From our blog</h2>
        </div>
        <div className="blog-grid">
          {regularPosts.map(post => (
            <div key={post.id} className="blog-card" onClick={() => window.location.href = `/blog/${post.id}`}>
              <div className="blog-thumb" style={{ background: getBlogColor(post.category) }}>
                {getBlogEmoji(post.category)}
              </div>
              <div className="blog-body">
                <div className="blog-meta">
                  <span className="blog-cat">{post.category}</span>
                  <span className="blog-date">{post.date}</span>
                </div>
                <div className="blog-title">
                  <Link to={`/blog/${post.id}`} style={{ textDecoration: 'none', color: 'var(--text)' }}>
                    {post.title}
                  </Link>
                </div>
                <div className="blog-excerpt mt-4">{post.excerpt}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 28 }}>
          <Link to="/blog" className="btn-outline">Read All Articles</Link>
        </div>
      </div>
    </>
  );
}

function getBlogColor(category) {
  const colors = {
    'ATS Tips': 'var(--accent-light)',
    'Writing': 'var(--amber-light)',
    'Strategy': 'var(--blue-light)',
    'Templates': 'var(--accent-light)',
    'Data': 'var(--accent-light)',
    'International': 'var(--amber-light)',
    'Keywords': 'var(--blue-light)'
  };
  return colors[category] || 'var(--surface2)';
}

function getBlogEmoji(category) {
  const emojis = {
    'ATS Tips': '📄',
    'Writing': '✍️',
    'Strategy': '🎯',
    'Templates': '💡',
    'Data': '📊',
    'International': '🌍',
    'Keywords': '🔍'
  };
  return emojis[category] || '📝';
}

export default HomePage;
