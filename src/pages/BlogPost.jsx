import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { AdSenseInArticle, AdSenseBanner } from '../components/AdSense';
import '../components/AdSense/AdSense.css';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <>
        <div className="page page-sm">
          <h2>Article not found</h2>
          <Link to="/blog" className="btn-secondary mt-16">← Back to Blog</Link>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="blog-detail-hero">
        <button className="btn-secondary" style={{ marginBottom: 20 }} onClick={() => window.history.back()}>
          ← Back to Blog
        </button>
        <div className="blog-meta" style={{ marginBottom: 14 }}>
          <span className="blog-cat">{post.category}</span>
          <span className="blog-date">{post.date}</span>
        </div>
        <h1 style={{ fontSize: 38, maxWidth: 700, lineHeight: 1.2, marginBottom: 14 }}>
          {post.title}
        </h1>
        <div className="blog-meta">
          <span className="text-secondary">By Rapid Resume Editorial</span>
          <span className="chip" style={{ fontSize: 11 }}>{post.readTime}</span>
        </div>
      </div>

      <div className="page-sm" style={{ paddingTop: 40, paddingBottom: 60 }}>
        <div 
          dangerouslySetInnerHTML={{ __html: post.content }}
          style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-secondary)' }}
        />
        
        {/* In-article AdSense */}
        <AdSenseInArticle slot="3456789012" style={{ margin: '2rem 0' }} />
        <hr className="divider" />
        <div style={{ 
          background: 'var(--accent-light)', 
          borderRadius: 'var(--radius)', 
          padding: 24, 
          textAlign: 'center' 
        }}>
          <h3 style={{ fontSize: 22, marginBottom: 8 }}>Ready to build your resume?</h3>
          <p className="text-secondary text-sm mb-16">
            Put these tips into practice with one of our 5 professional templates.
          </p>
          <Link to="/templates" className="btn-primary btn-lg">
            Build My Resume for Free →
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
