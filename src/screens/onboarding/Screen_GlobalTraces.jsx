import React from 'react';
import { ArrowLeft, ArrowRight, Building2, Layers, Wallet, Link2 } from 'lucide-react';

export default function Screen_GlobalTraces({ onNext, onBack, onSkip, onSelectStep }) {
  return (
    <div className="onboarding-screen-wrapper">
      {/* Soft Ambient Pastel Glows */}
      <div className="onboarding-ambient-pink" />
      <div className="onboarding-ambient-cyan" />

      {/* Top Header Bar */}
      <div className="onboarding-top-bar">
        <button className="onboarding-back-btn" onClick={onBack} title="Back">
          <ArrowLeft size={16} strokeWidth={2.5} />
        </button>

        <div className="onboarding-step-counter">
          <span className="step-num-text">01 / 04</span>
          <div className="step-dash-track">
            <div className="step-dash active" />
            <div className="step-dash" />
            <div className="step-dash" />
            <div className="step-dash" />
          </div>
        </div>

        <div className="onboarding-top-right">
          <div className="micro-header-text right-align">
            TRACE<br />
            ANALYZE<br />
            PREVENT
          </div>
          <button className="btn-skip-pill" onClick={onSkip} id="btn-traces-skip">
            Skip
          </button>
        </div>
      </div>

      {/* Editorial Headline */}
      <div className="onboarding-headline-wrap">
        <h2 className="onboarding-headline">
          <span className="dark-serif">Global Traces.</span>
          <br />
          <span className="blue-serif">Clearer Insights.</span>
        </h2>
        <p className="onboarding-subtitle">
          Follow the movement of digital assets across chains, exchanges and wallets — in real time.
        </p>
      </div>

      {/* Center 3D Translucent Globe Stage */}
      <div className="globe-stage-container">
        <img
          src="/assets/nexchain_globe_3d.png"
          alt="3D Translucent Holographic Globe"
          className="globe-center-img"
        />

        {/* Floating Node Pills around the globe */}
        <div className="globe-pill-badge pos-exchange">
          <Building2 size={13} color="#3b82f6" />
          <span>Exchange</span>
          <div className="node-pulse-dot pink" />
        </div>

        <div className="globe-pill-badge pos-defi">
          <Layers size={13} color="#8b5cf6" />
          <span>DeFi</span>
          <div className="node-pulse-dot" />
        </div>

        <div className="globe-pill-badge pos-wallet">
          <Wallet size={13} color="#06b6d4" />
          <span>Wallet</span>
          <div className="node-pulse-dot" />
        </div>

        <div className="globe-pill-badge pos-crosschain">
          <Link2 size={13} color="#3b82f6" />
          <span>Cross-Chain</span>
          <div className="node-pulse-dot" />
        </div>

        {/* Overlapping Frosted Glass Insight Card */}
        <div className="globe-insight-card">
          <div className="globe-insight-left">
            <div className="sparkline-box">
              <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
                <path
                  d="M2 18L10 12L17 15L26 6L33 11L38 4"
                  stroke="#0284c7"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="38" cy="4" r="3" fill="#0284c7" />
              </svg>
            </div>
            <div className="globe-insight-tagline">
              TURNING<br />
              BLOCKCHAIN DATA<br />
              INTO REAL-WORLD<br />
              ANSWERS
            </div>
          </div>

          <div className="globe-insight-divider" />

          <div className="globe-insight-right">
            <div className="metric-number-big">200+</div>
            <div className="metric-label-micro">CHAINS SUPPORTED</div>
            <div className="metric-number-big" style={{ fontSize: '14px', marginTop: '4px' }}>REAL-TIME</div>
            <div className="metric-label-micro">INTELLIGENCE</div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Area */}
      <div className="onboarding-bottom-cta">
        {/* Dark Luxury Pill Button */}
        <button className="btn-onboarding-primary" onClick={onNext} id="btn-traces-next">
          <span>Next</span>
          <ArrowRight size={18} strokeWidth={2.2} />
        </button>

        {/* 4 Pagination Dots */}
        <div className="onboarding-pagination">
          <div className="page-dot active" onClick={() => onSelectStep(1)} />
          <div className="page-dot" onClick={() => onSelectStep(2)} />
          <div className="page-dot" onClick={() => onSelectStep(3)} />
          <div className="page-dot" onClick={() => onSelectStep(0)} />
        </div>

        {/* Micro Footer Text */}
        <div className="onboarding-micro-footer">
          <div>A SAFER<br />DIGITAL<br />TOMORROW</div>
          <div className="right-align">BUILT FOR<br />INVESTIGATORS<br />BUILDING TRUST</div>
        </div>
      </div>
    </div>
  );
}
