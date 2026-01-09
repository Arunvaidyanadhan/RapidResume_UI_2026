import React from "react";
import { Link } from "react-router-dom";
import "./AboutSlider.css";

const slides = [
  {
    icon: "🚀",
    title: "What is Rapid Resume?",
    points: [
      "Create a clean, professional resume in minutes",
      "No signup or login required",
      "Simple, distraction-free experience",
    ],
  },
  {
    icon: "🎯",
    title: "The Problem We Solve",
    points: [
      "Most resume builders block downloads with paywalls",
      "Long forms cause users to quit halfway",
      "Freshers struggle with mandatory experience fields",
    ],
  },
  {
    icon: "✨",
    title: "Key Features",
    points: [
      "Modern, print-ready templates",
      "Live preview while editing",
      "Auto-save in your browser",
      "Optional sections (Experience is NOT mandatory)",
    ],
  },
  {
    icon: "💡",
    title: "Why It’s Different",
    points: [
      "Focused flow: Template → Form → Download",
      "Empty sections never break your resume",
      "Consistent, clean PDF output every time",
    ],
  },
  {
    icon: "📄",
    title: "How to Use",
    points: [
      "Choose a template",
      "Fill only the sections that apply to you",
      "Preview anytime while editing",
      "Finish & download your resume PDF",
    ],
  },
  {
    icon: "🔒",
    title: "Your Data & Privacy",
    points: [
      "No account required",
      "No server-side storage",
      "All data stays safely in your browser",
    ],
  },
  {
    icon: "💸",
    title: "Pricing & Download",
    points: [
      "Resume creation is completely free",
      "You can download with a small watermark",
      "Optionally remove watermark for a small fee",
    ],
  },
];

export default function AboutSlider() {
  return (
    <div className="about-page">
      <div className="about-topbar">
        <Link to="/" className="btn btn-accent-outline">
          Home
        </Link>
        <Link to="/template" className="btn btn-accent">
          Create Resume
        </Link>
      </div>

      <div className="about-slider-container">
      {slides.map((slide, index) => (
        <div className="about-slide" key={index}>
          <div className="about-icon">{slide.icon}</div>
          <h3>{slide.title}</h3>

          <ul>
            {slide.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          {index === slides.length - 1 && (
            <div className="about-footer">
              <p className="muted">
                Built for students, freshers, and professionals who just want a
                resume — fast.
              </p>
            </div>
          )}
        </div>
      ))}
      </div>
    </div>
  );
}
