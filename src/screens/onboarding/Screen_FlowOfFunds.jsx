import React from 'react';
import { ArrowLeft, ArrowRight, Link2, Share2, FileWarning, ShieldCheck, ChevronDown, User, AlertTriangle } from 'lucide-react';

export default function Screen_FlowOfFunds({ onNext, onBack, onSkip, onSelectStep }) {
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
          <span className="step-num-text">02 / 04</span>
          <div className="step-dash-track">
            <div className="step-dash" />
            <div className="step-dash active" />
            <div className="step-dash" />
            <div className="step-dash" />
          </div>
        </div>

        <div className="onboarding-top-right">
          <div className="micro-header-text right-align">
            FROM<br />
            DATA<br />
            TO<br />
            JUSTICE
          </div>
          <button className="btn-skip-pill" onClick={onSkip} id="btn-flow-skip">
            Skip
          </button>
        </div>
      </div>

      {/* Editorial Headline */}
      <div className="onboarding-headline-wrap">
        <h2 className="onboarding-headline">
          <span className="dark-serif">Follow the</span>
          <br />
          <span className="blue-serif">Flow of Funds.</span>
        </h2>
        <p className="onboarding-subtitle">
          Visualize and trace transactions across chains. Uncover patterns, connections and hidden links.
        </p>
      </div>

      {/* Interactive Main Stage */}
      <div className="funds-stage-container">
        {/* Crystal Mountains backdrop at bottom-left */}
        <div className="funds-mountain-bg">
          <img src="/assets/nexchain_crystal_mountains.png" alt="Crystal Mountains" />
        </div>

        {/* Left Column: Vertical Timeline Track */}
        <div className="timeline-track-left">
          <div className="timeline-vertical-line" />

          <div className="timeline-item active">
            <div className="timeline-dot-pill">
              <Link2 size={14} />
            </div>
            <div className="timeline-item-title">
              Trace<br />Transactions
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot-pill">
              <Share2 size={14} />
            </div>
            <div className="timeline-item-title">
              Identify<br />Connections
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot-pill">
              <FileWarning size={14} />
            </div>
            <div className="timeline-item-title">
              Detect<br />Suspicious Activity
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot-pill">
              <ShieldCheck size={14} />
            </div>
            <div className="timeline-item-title">
              Multi-Chain<br />Support
            </div>
          </div>
        </div>

        {/* Right Column: Layered Frosted Glass Cards */}
        <div className="cards-column-right">
          {/* Card 1: Transaction Flow Tree */}
          <div className="glass-card-flow">
            <div className="flow-card-header">
              <span className="flow-card-title">Transaction Flow</span>
              <div className="flow-dropdown-pill">
                <span>All Chains</span>
                <ChevronDown size={11} />
              </div>
            </div>

            <div className="flow-tree-diagram">
              {/* Origin Source Node */}
              <div className="flow-node-source">
                <User size={12} color="#0f172a" />
                <span>0x3a...9f2c</span>
              </div>

              {/* Curved SVG Branch Connector */}
              <svg className="flow-branch-svg" viewBox="0 0 28 75" fill="none">
                <path
                  d="M0 37.5C14 37.5 14 12 28 12"
                  stroke="#f43f5e"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M0 37.5H28"
                  stroke="#38bdf8"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M0 37.5C14 37.5 14 63 28 63"
                  stroke="#0284c7"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <circle cx="28" cy="12" r="2.5" fill="#f43f5e" />
                <circle cx="28" cy="37.5" r="2.5" fill="#38bdf8" />
                <circle cx="28" cy="63" r="2.5" fill="#0284c7" />
              </svg>

              {/* Targets Stack */}
              <div className="flow-targets-stack">
                <div className="flow-target-pill">
                  <div className="target-pill-left">
                    <span style={{ fontSize: '11px' }}>🏛️</span>
                    <span>0x7b...1c4e</span>
                  </div>
                  <span className="target-pill-label">Binance</span>
                </div>

                <div className="flow-target-pill">
                  <div className="target-pill-left">
                    <span style={{ fontSize: '11px' }}>🦊</span>
                    <span>0x9d...8a21</span>
                  </div>
                  <span className="target-pill-label">MetaMask</span>
                </div>

                <div className="flow-target-pill">
                  <div className="target-pill-left">
                    <span style={{ fontSize: '11px' }}>📦</span>
                    <span>0x5e...2d9f</span>
                  </div>
                  <span className="target-pill-label">Arbitrum</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Risk Score Alert */}
          <div className="glass-card-risk-alert">
            <div className="risk-radial-gauge-mini">
              <svg width="48" height="48" viewBox="0 0 48 48">
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  fill="none"
                  stroke="rgba(15, 23, 42, 0.08)"
                  strokeWidth="4"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  fill="none"
                  stroke="url(#riskGrad72)"
                  strokeWidth="4"
                  strokeDasharray="125.6"
                  strokeDashoffset="35"
                  strokeLinecap="round"
                  transform="rotate(-90 24 24)"
                />
                <defs>
                  <linearGradient id="riskGrad72" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="70%" stopColor="#f43f5e" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="risk-gauge-score-number">72</div>
            </div>

            <div className="risk-alert-info">
              <div className="risk-alert-tag">
                <AlertTriangle size={11} />
                <span>Suspicious Pattern Detected</span>
              </div>
              <div className="risk-alert-text">
                Funds moved across 4 wallets and 2 exchanges in 12 minutes.
              </div>
            </div>

            <ArrowRight size={14} color="#64748b" />
          </div>
        </div>
      </div>

      {/* Mountain Sub-text */}
      <div style={{ position: 'relative', zIndex: 6, margin: '2px 0 6px 4px' }}>
        <div className="micro-header-text">
          BLOCKCHAIN<br />
          TRANSPARENT<br />
          SAFER
        </div>
      </div>

      {/* Bottom CTA Area */}
      <div className="onboarding-bottom-cta">
        {/* Dark Luxury Pill Button */}
        <button className="btn-onboarding-primary" onClick={onNext} id="btn-flow-next">
          <span>Next</span>
          <ArrowRight size={18} strokeWidth={2.2} />
        </button>

        {/* 4 Pagination Dots */}
        <div className="onboarding-pagination">
          <div className="page-dot" onClick={() => onSelectStep(1)} />
          <div className="page-dot active" onClick={() => onSelectStep(2)} />
          <div className="page-dot" onClick={() => onSelectStep(3)} />
          <div className="page-dot" onClick={() => onSelectStep(0)} />
        </div>

        {/* Micro Footer Text */}
        <div className="onboarding-micro-footer">
          <div>REAL<br />INSIGHTS<br />REAL IMPACT</div>
          <div className="right-align">TRUSTED<br />BY THOSE<br />WHO INVESTIGATE</div>
        </div>
      </div>
    </div>
  );
}
