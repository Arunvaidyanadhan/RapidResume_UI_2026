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
          <h1>
            <em style={{ color: 'var(--accent)', fontWeight: 800 }}>Rapid Resume</em>
            <span style={{
              fontSize: '10px',
              background: 'rgba(29, 158, 117, 0.15)',
              color: 'var(--teal-200)',
              border: '1px solid rgba(93, 202, 165, 0.3)',
              borderRadius: '100px',
              padding: '2px 8px',
              marginLeft: '8px',
              verticalAlign: 'middle',
              fontWeight: '600',
              letterSpacing: '0.5px',
              textTransform: 'uppercase'
            }}>Beta</span>
            <br/>Your dream job<br/>starts with a <em>great</em><br/>resume.
          </h1>
          <p>Pick a template, fill in your details, and download a polished, ATS-friendly resume in under 5 minutes.</p>
          <div className="benefit-row">
            <div className="benefit"><div className="benefit-dot"></div>10 professional templates for every industry</div>
            <div className="benefit"><div className="benefit-dot"></div>Instant PDF download — no watermarks</div>
            <div className="benefit"><div className="benefit-dot"></div>ATS-optimized formatting that gets past filters</div>
            <div className="benefit"><div className="benefit-dot"></div>Works on any device, completely free</div>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/templates" className="btn-primary btn-lg">Start Building Resume</Link>
            <Link to="/blog" className="btn-secondary btn-lg">Resume Tips</Link>
          </div>
          <div style={{ color: 'rgba(255,255,255,.3)', fontSize: 12, marginTop: 12 }}>
            No account · No credit card · Just download
          </div>
        </div>
       
      </div>

      {/* Built for strip */}
      <div style={{ background: 'var(--surface2)', borderBottom: '1px solid var(--border)', padding: 18, display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
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

      {/* Why Rapid Resume */}
      <div style={{ padding: 72, background: 'var(--surface2)' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="section-label" style={{ textAlign: 'center' }}>Why Rapid Resume</div>
          <h2 style={{ fontSize: 38 }}>Built differently,<br/><em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>because it should be</em></h2>
        </div>
        <div style={{ maxWidth: 720, margin: '0 auto', background: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', borderRadius: '16px', padding: '32px', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)', border: '1px solid rgba(255, 255, 255, 0.5)' }}>
          <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 24 }}>
            Most resume builders today follow the same pattern.
          </p>
          <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 24 }}>
            You spend time filling everything, choose a template, and when you're ready to download… they ask you to pay.
          </p>
          <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 24, fontWeight: 600 }}>
            That never felt right.
          </p>
          <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 24, fontWeight: 700, color: 'var(--accent)' }}>
            Rapid Resume is built differently.
          </p>
          <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 24 }}>
            You can create, edit, and download your resume instantly — no signup, no hidden paywalls.
          </p>
          <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 24 }}>
            So how does it stay free?
          </p>
          <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 24 }}>
            We use simple, non-intrusive ads to support the platform. That's it.
          </p>
          <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 24 }}>
            No locked features. No forced upgrades. No tricks.
          </p>
          <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 24, fontWeight: 600 }}>
            The goal is simple:
          </p>
          <p style={{ fontSize: 16, color: 'var(--text)', lineHeight: 1.8, marginBottom: 24, fontWeight: 700 }}>
            Make a clean, professional resume accessible to everyone — without friction.
          </p>
          <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 24 }}>
            If it helps you land an opportunity, that's already a win.
          </p>
          <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 32 }}>
            And if you choose to support it later, that's just a bonus 🙌
          </p>
          <div style={{ textAlign: 'center' }}>
            <Link to="/templates" className="btn-primary btn-lg">Start Building Resume</Link>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div style={{ padding: 72, background: 'var(--bg)' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div className="section-label" style={{ textAlign: 'center' }}>Testimonials</div>
          <h2 style={{ fontSize: 34 }}>People who got the job</h2>
        </div>
        <div className="grid-3">
          <div className="testi-card glass-card">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">"I applied to 12 jobs and got 8 callbacks in two weeks. The template was clean and the whole thing took me 10 minutes."</p>
            <div className="testi-author">
              <div className="testi-avatar" style={{ background: '#2D6A4F' }}>P</div>
              <div><div style={{ fontWeight: 600, fontSize: 13 }}>Subiksha S.</div><div className="text-xs text-muted">Software Engineer, Bangalore</div></div>
            </div>
          </div>
          <div className="testi-card glass-card">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">"Finally a resume builder that doesn't ask me to pay to download. The Executive template is 🔥. Got an interview at Deloitte."</p>
            <div className="testi-author">
              <div className="testi-avatar" style={{ background: '#3B7DD8' }}>A</div>
              <div><div style={{ fontWeight: 600, fontSize: 13 }}>Rajesh S.</div><div className="text-xs text-muted">Finance Analyst, Chennai</div></div>
            </div>
          </div>
          <div className="testi-card glass-card">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">"Switched careers from teaching to UX. The Creative template stood out perfectly. Landed my first design job within a month."</p>
            <div className="testi-author">
              <div className="testi-avatar" style={{ background: '#E9A825' }}>V</div>
              <div><div style={{ fontWeight: 600, fontSize: 13 }}>Vijayalakshmi R</div><div className="text-xs text-muted">UX Designer, Hyderabad</div></div>
            </div>
          </div>
        </div>
      </div>

      {/* AdSense Banner */}
      <div style={{ padding: '0 72px', background: 'var(--bg)' }}>
        <AdSenseBanner slot="1234567890" />
      </div>

      {/* Blog teaser */}
      <div style={{ padding: 72, background: 'var(--surface2)', borderTop: '1px solid var(--border)' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div className="section-label" style={{ textAlign: 'center' }}>Resume Tips</div>
          <h2 style={{ fontSize: 34 }}>From our blog</h2>
        </div>
        <div className="blog-grid">
          {regularPosts.map(post => (
            <div key={post.id} className="blog-card glass-card" onClick={() => window.location.href = `/blog/${post.id}`}>
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
