import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ResumeProvider } from './context/resumecontext';
import Navbar from './components/Navbar';
import NewFooter from './components/NewFooter';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import './index.css';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const BuilderStudio = lazy(() => import('./pages/BuilderStudio'));
const ThankYou = lazy(() => import('./pages/ThankYou'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Legal = lazy(() => import('./pages/Legal'));

function App() {
  return (
    <ResumeProvider>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <Navbar />
          
          <div className="flex-grow-1">
            <ErrorBoundary>
              <Suspense fallback={
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
                  <LoadingSpinner size="large" text="Loading..." />
                </div>
              }>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/builder" element={<BuilderStudio />} />
                  <Route path="/template" element={<BuilderStudio />} />
                  <Route path="/templates" element={<BuilderStudio />} />
                  <Route path="/headings" element={<BuilderStudio />} />
                  <Route path="/form" element={<BuilderStudio />} />
                  <Route path="/thank-you" element={<ThankYou />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:id" element={<BlogPost />} />
                  <Route path="/legal" element={<Legal />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </div>

          <NewFooter />
        </div>
      </Router>
    </ResumeProvider>
  );
}

export default App;
