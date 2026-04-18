import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { AdSenseBanner } from '../components/AdSense';
import '../components/AdSense/AdSense.css';

const Blog = () => {
  const featuredPost = blogPosts.find(post => post.featured) || blogPosts[0];
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <div className="page">
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div className="section-label" style={{ textAlign: 'center' }}>Resume Tips</div>
          <h2 style={{ fontSize: 34 }}>From our blog</h2>
        </div>

        {/* Featured Post */}
        <div 
          style={{ 
            background: 'var(--surface)', 
            border: '1px solid var(--border)', 
            borderRadius: 'var(--radius)', 
            overflow: 'hidden', 
            marginBottom: 32, 
            cursor: 'pointer' 
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px' }}>
            <div style={{ padding: 36 }}>
              <div className="blog-meta" style={{ marginBottom: 12 }}>
                <span style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--accent)' }}>
                  {featuredPost.category}
                </span>
                <span className="badge badge-green" style={{ marginLeft: 4 }}>Featured</span>
                <span style={{ fontSize: 11, color: 'var(--text-muted)', marginLeft: 12 }}>{featuredPost.date}</span>
              </div>
              <h2 style={{ fontSize: 28, marginBottom: 12, lineHeight: 1.25 }}>
                <Link to={`/blog/${featuredPost.id}`} style={{ textDecoration: 'none', color: 'var(--text)' }}>
                  {featuredPost.title}
                </Link>
              </h2>
              <p className="text-secondary" style={{ fontSize: 14, lineHeight: 1.65, marginBottom: 20 }}>
                {featuredPost.excerpt}
              </p>
              <Link to={`/blog/${featuredPost.id}`} className="btn-primary">
                Read Article →
              </Link>
            </div>
            <div style={{ 
              background: 'var(--accent-light)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              fontSize: 80 
            }}>
              📄
            </div>
          </div>
        </div>

        {/* AdSense Banner */}
        <AdSenseBanner slot="2345678901" />

        {/* Blog Grid */}
        <div className="blog-grid">
          {regularPosts.map(post => (
            <div 
              key={post.id} 
              className="blog-card"
              onClick={() => window.location.href = `/blog/${post.id}`}
              style={{ cursor: 'pointer' }}
            >
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
                <div style={{ marginTop: 12, fontSize: 12, color: 'var(--accent)', fontWeight: 500 }}>
                  {post.readTime} →
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 28 }}>
          <button className="btn-outline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Back to Top
          </button>
        </div>
      </div>
    </>
  );
};

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

export default Blog;
