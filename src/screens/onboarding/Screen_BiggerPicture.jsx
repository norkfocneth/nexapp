import React from 'react';
import { ArrowLeft, ArrowRight, AlertTriangle, Share2, FileWarning, ShieldCheck, MoreHorizontal, Shuffle, Building2, Download, Globe, ChevronRight } from 'lucide-react';

export default function Screen_BiggerPicture({ onNext, onBack, onSkip, onSelectStep }) {
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
          <span className="step-num-text">03 / 04</span>
          <div className="step-dash-track">
            <div className="step-dash" />
            <div className="step-dash" />
            <div className="step-dash active" />
            <div className="step-dash" />
          </div>
        </div>

        <div className="onboarding-top-right">
          <div className="micro-header-text right-align">
            DETECT<br />
            PREVENT<br />
            BUILD<br />
            TRUST
          </div>
          <button className="btn-skip-pill" onClick={onSkip} id="btn-bigger-skip">
            Skip
          </button>
        </div>
      </div>

      {/* Editorial Headline */}
      <div className="onboarding-headline-wrap">
        <h2 className="onboarding-headline">
          <span className="dark-serif">See the</span>
          <br />
          <span className="blue-serif">Bigger Picture.</span>
        </h2>
        <p className="onboarding-subtitle">
          Get risk insights, detect illicit activity and make informed decisions with confidence.
        </p>
      </div>

      {/* Interactive Main Stage */}
      <div className="bigger-stage-container">
        {/* Crystal Cubes backdrop at bottom-left */}
        <div className="bigger-cubes-bg">
          <img src="/assets/nexchain_crystal_cubes.png" alt="Crystal Cubes" />
        </div>

        {/* Left Column: Feature List */}
        <div className="features-stack-left">
          <div className="feature-stack-item">
            <div className="feature-icon-circle">
              <AlertTriangle size={13} color="#f43f5e" />
            </div>
            <div className="feature-text-block">
              <h4>Risk Scoring</h4>
              <p>Identify threats</p>
            </div>
          </div>

          <div className="feature-stack-item">
            <div className="feature-icon-circle">
              <Share2 size={13} color="#3b82f6" />
            </div>
            <div className="feature-text-block">
              <h4>Entity Mapping</h4>
              <p>Uncover networks</p>
            </div>
          </div>

          <div className="feature-stack-item">
            <div className="feature-icon-circle">
              <FileWarning size={13} color="#f59e0b" />
            </div>
            <div className="feature-text-block">
              <h4>Illicit Detection</h4>
              <p>Spot red flags</p>
            </div>
          </div>

          <div className="feature-stack-item">
            <div className="feature-icon-circle">
              <ShieldCheck size={13} color="#10b981" />
            </div>
            <div className="feature-text-block">
              <h4>Actionable Insights</h4>
              <p>Smarter decisions</p>
            </div>
          </div>
        </div>

        {/* Right Column: 3 Layered Frosted Glass Cards */}
        <div className="bigger-cards-right">
          {/* Card 1: Risk Assessment */}
          <div className="glass-card-risk-assessment">
            <div className="assessment-header">Risk Assessment</div>
            <div className="assessment-body">
              <div className="radial-risk-78">
                <svg width="56" height="56" viewBox="0 0 56 56">
                  <circle
                    cx="28"
                    cy="28"
                    r="22"
                    fill="none"
                    stroke="rgba(15, 23, 42, 0.08)"
                    strokeWidth="4"
                  />
                  <circle
                    cx="28"
                    cy="28"
                    r="22"
                    fill="none"
                    stroke="url(#riskGrad78)"
                    strokeWidth="4"
                    strokeDasharray="138.2"
                    strokeDashoffset="32"
                    strokeLinecap="round"
                    transform="rotate(-90 28 28)"
                  />
                  <defs>
                    <linearGradient id="riskGrad78" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#f43f5e" />
                    </linearGradient>
                  </defs>
                </svg>
                <div style={{ position: 'absolute', textAlign: 'center' }}>
                  <div className="gauge-score-large">78</div>
                  <div className="gauge-badge-high">High Risk</div>
                </div>
              </div>

              <div className="threat-factors-list">
                <div className="threat-factor-row">
                  <span>Sanction Exposure</span>
                  <span className="red-status-dot" />
                </div>
                <div className="threat-factor-row">
                  <span>Mixing Service</span>
                  <span className="red-status-dot" />
                </div>
                <div className="threat-factor-row">
                  <span>Dark Web Link</span>
                  <span className="red-status-dot" />
                </div>
                <div className="threat-factor-row">
                  <span>Suspicious Pattern</span>
                  <span className="red-status-dot" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Transaction Graph Mini */}
          <div className="glass-card-graph-mini">
            <div className="graph-mini-header">
              <span>Transaction Graph</span>
              <MoreHorizontal size={12} color="#64748b" />
            </div>

            <div className="graph-mini-canvas">
              {/* Radial branches around center red alert node */}
              <svg width="100%" height="52" viewBox="0 0 160 52" fill="none">
                {/* Connecting lines */}
                <path d="M80 26L30 14" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 2" />
                <path d="M80 26L130 14" stroke="#f43f5e" strokeWidth="1.5" />
                <path d="M80 26L135 38" stroke="#8b5cf6" strokeWidth="1.5" />
                <path d="M80 26L35 38" stroke="#06b6d4" strokeWidth="1.5" />

                {/* Left Node: Address */}
                <circle cx="30" cy="14" r="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
                <text x="30" y="17" textAnchor="middle" fontSize="8" fill="#475569">👤</text>

                {/* Bottom Left Node */}
                <circle cx="35" cy="38" r="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
                <text x="35" y="41" textAnchor="middle" fontSize="8" fill="#475569">👛</text>

                {/* Top Right Node: Exchange */}
                <circle cx="130" cy="14" r="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
                <text x="130" y="17" textAnchor="middle" fontSize="8" fill="#475569">🏛️</text>

                {/* Bottom Right Node: Mixer */}
                <circle cx="135" cy="38" r="8" fill="#ffffff" stroke="#f43f5e" strokeWidth="1" />
                <text x="135" y="41" textAnchor="middle" fontSize="8" fill="#475569">🌪️</text>

                {/* Center Pulsing Red Node */}
                <circle cx="80" cy="26" r="13" fill="#fee2e2" />
                <circle cx="80" cy="26" r="10" fill="#f43f5e" />
                <text x="80" y="30" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#ffffff">!</text>
              </svg>
            </div>
          </div>

          {/* Card 3: Behavior Insights */}
          <div className="glass-card-behavior">
            <div className="behavior-header">Behavior Insights</div>
            <div className="behavior-list">
              <div className="behavior-item">
                <div className="behavior-left">
                  <Shuffle size={10} color="#f43f5e" />
                  <span>Funds moved through 3 mixers</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                  <span className="behavior-time">2 min ago</span>
                  <ChevronRight size={10} color="#94a3b8" />
                </div>
              </div>

              <div className="behavior-item">
                <div className="behavior-left">
                  <Building2 size={10} color="#f59e0b" />
                  <span>Linked to sanctioned entity</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                  <span className="behavior-time">12 min ago</span>
                  <ChevronRight size={10} color="#94a3b8" />
                </div>
              </div>

              <div className="behavior-item">
                <div className="behavior-left">
                  <Download size={10} color="#3b82f6" />
                  <span>Received from high-risk address</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                  <span className="behavior-time">46 min ago</span>
                  <ChevronRight size={10} color="#94a3b8" />
                </div>
              </div>

              <div className="behavior-item">
                <div className="behavior-left">
                  <Globe size={10} color="#8b5cf6" />
                  <span>Interaction with dark web service</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                  <span className="behavior-time">1 hour ago</span>
                  <ChevronRight size={10} color="#94a3b8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intelligence Sub-text */}
      <div style={{ position: 'relative', zIndex: 6, margin: '2px 0 4px 4px' }}>
        <div className="micro-header-text">
          INTELLIGENCE<br />
          THAT TURNS<br />
          DATA INTO<br />
          IMPACT
        </div>
      </div>

      {/* Bottom CTA Area */}
      <div className="onboarding-bottom-cta">
        {/* Dark Luxury Pill Button */}
        <button className="btn-onboarding-primary" onClick={onNext} id="btn-bigger-next">
          <span>Get Started</span>
          <ArrowRight size={18} strokeWidth={2.2} />
        </button>

        {/* 4 Pagination Dots */}
        <div className="onboarding-pagination">
          <div className="page-dot" onClick={() => onSelectStep(1)} />
          <div className="page-dot" onClick={() => onSelectStep(2)} />
          <div className="page-dot active" onClick={() => onSelectStep(3)} />
          <div className="page-dot" onClick={() => onSelectStep(0)} />
        </div>

        {/* Micro Footer Text */}
        <div className="onboarding-micro-footer">
          <div>BLOCKCHAIN<br />FORENSICS<br />FOR A SAFER<br />TOMORROW</div>
          <div className="right-align">PEOPLE<br />TECHNOLOGY<br />A SAFER<br />DIGITAL WORLD</div>
        </div>
      </div>
    </div>
  );
}
