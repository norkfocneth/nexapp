import React from 'react';
import { Search, BarChart3, Share2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Screen_Welcome({ onNext, onSkip, onSelectStep }) {
  return (
    <div className="onboarding-screen-wrapper">
      {/* Soft Ambient Pastel Glows */}
      <div className="onboarding-ambient-pink" />
      <div className="onboarding-ambient-cyan" />
      <div className="onboarding-ambient-bottom" />

      {/* Top Bar */}
      <div className="onboarding-top-bar">
        <div className="micro-header-text">
          TRUST<br />
          ANALYZE<br />
          PREVENT
        </div>

        <div className="onboarding-top-right">
          <div className="micro-header-text right-align">
            A SAFER<br />
            DIGITAL<br />
            TOMORROW
          </div>
          <button className="btn-skip-pill" onClick={onSkip} id="btn-welcome-skip">
            Skip
          </button>
        </div>
      </div>

      {/* Center Luxury Emblem & Brand Title */}
      <div className="welcome-content-center">
        <div className="welcome-icon-box">
          <img
            src="/assets/nexchain_app_icon_1024.png"
            alt="NexChain Luxury Emblem"
            className="welcome-icon-img"
          />
        </div>

        <h1 className="welcome-brand-title">
          <span className="serif-nex">Nex</span>
          <span className="serif-chain">Chain</span>
        </h1>

        <p className="welcome-brand-subtitle">
          BLOCKCHAIN INTELLIGENCE<br />
          FOR A SAFER TOMORROW
        </p>

        {/* 4 Feature Pillars */}
        <div className="welcome-features-bar">
          <div className="welcome-feature-item">
            <Search size={16} strokeWidth={2.4} />
            <span>TRACE</span>
          </div>
          <div className="welcome-feature-divider" />
          <div className="welcome-feature-item">
            <BarChart3 size={16} strokeWidth={2.4} />
            <span>ANALYZE</span>
          </div>
          <div className="welcome-feature-divider" />
          <div className="welcome-feature-item">
            <Share2 size={16} strokeWidth={2.4} />
            <span>UNCOVER</span>
          </div>
          <div className="welcome-feature-divider" />
          <div className="welcome-feature-item">
            <ShieldCheck size={16} strokeWidth={2.4} />
            <span>PROTECT</span>
          </div>
        </div>
      </div>

      {/* Side Micro Copy & 3D Crystal Cubes Decor */}
      <div className="welcome-lower-decor-section">
        <div className="micro-header-text">
          FROM<br />
          DATA<br />
          TO<br />
          JUSTICE
        </div>

        <div className="micro-header-text right-align">
          TRUSTED<br />
          BY THOSE<br />
          WHO INVESTIGATE
        </div>

        {/* Floating 3D Crystal Cubes in corner */}
        <div className="welcome-decor-cubes">
          <img src="/assets/nexchain_crystal_cubes.png" alt="Crystal Cubes" />
        </div>
      </div>

      {/* Bottom CTA Area */}
      <div className="onboarding-bottom-cta">
        {/* 3 Pagination Dots */}
        <div className="onboarding-pagination">
          <div className="page-dot active" onClick={() => onSelectStep(0)} />
          <div className="page-dot" onClick={() => onSelectStep(1)} />
          <div className="page-dot" onClick={() => onSelectStep(2)} />
        </div>

        {/* Dark Luxury Pill Button */}
        <button className="btn-onboarding-primary" onClick={onNext} id="btn-welcome-get-started">
          <span>Get Started</span>
          <ArrowRight size={18} strokeWidth={2.2} />
        </button>

        {/* Footer Tagline */}
        <div className="onboarding-tagline-center">
          Investigate &nbsp;•&nbsp; Trace &nbsp;•&nbsp; Uncover &nbsp;•&nbsp; Protect
        </div>
      </div>
    </div>
  );
}
