import React from 'react';
import {
  Search,
  Bell,
  ArrowRight,
  ShieldCheck,
  Share2,
  GitFork,
  Box,
  Layers,
  Sparkles,
  ArrowUpRight,
  ChevronRight
} from 'lucide-react';
import '../dashboard_screens.css';

export default function Screen02_Home({ onNavigate }) {
  const quickActions = [
    { label: 'Investigate', icon: <Search size={16} />, screen: 3 },
    { label: 'Network Graph', icon: <Share2 size={16} />, screen: 11 },
    { label: 'Active Alerts', icon: <Bell size={16} />, screen: 13 },
    { label: 'Forensic Tools', icon: <Box size={16} />, screen: 14 },
  ];

  const recentInvestigations = [
    {
      id: '0x7a3...9f2c',
      symbol: '⟠',
      coinClass: 'eth',
      subtext: '2 related entities • High risk',
      riskBadge: 'High Risk',
      riskClass: 'high',
      time: '2 min ago',
      screen: 5,
    },
    {
      id: 'Tornado Cash',
      symbol: '🪙',
      coinClass: 'bnb',
      subtext: '12 linked addresses • Mixer',
      riskBadge: 'Monitor',
      riskClass: 'monitor',
      time: '1 hour ago',
      screen: 10,
    },
    {
      id: '1A1zP1...QGefi',
      symbol: '₿',
      coinClass: 'btc',
      subtext: '5 outgoing transfers • Exchange',
      riskBadge: 'Low Risk',
      riskClass: 'low',
      time: '3 hours ago',
      screen: 9,
    },
    {
      id: 'binance.com',
      symbol: '₮',
      coinClass: 'usdt',
      subtext: 'Entity analysis • 3 clusters',
      riskBadge: 'Informational',
      riskClass: 'info',
      time: '5 hours ago',
      screen: 11,
    },
  ];

  return (
    <div className="main-screen-container">
      {/* Ambient Glows */}
      <div className="ambient-pink-top" />
      <div className="ambient-cyan-top" />

      {/* Brand Header */}
      <div className="brand-top-nav">
        <div className="brand-nav-left" onClick={() => onNavigate(2)}>
          <img
            src="/assets/nexchain_app_icon_1024.png"
            alt="NexChain"
            className="brand-logo-icon"
          />
          <div className="brand-title-stack">
            <span className="brand-main-title">NexChain</span>
            <span className="brand-sub-badge">INTELLIGENCE IN MOTION</span>
          </div>
        </div>

        <div className="brand-nav-right">
          <button className="nav-icon-circle-btn" onClick={() => onNavigate(3)} title="Search">
            <Search size={15} />
          </button>
          <button className="nav-icon-circle-btn" onClick={() => onNavigate(13)} title="Alerts">
            <Bell size={15} />
            <span className="notification-badge-red" />
          </button>
          <div className="nav-avatar-pill" onClick={() => onNavigate(15)}>
            <span className="avatar-initials-text">AS</span>
          </div>
        </div>
      </div>

      {/* Hero Editorial Section */}
      <div className="hero-editorial-row" style={{ marginTop: '2px', marginBottom: '8px' }}>
        <div className="hero-text-col">
          <span className="hero-label-top">OVERVIEW</span>
          <h1 className="hero-editorial-title" style={{ fontSize: '26px' }}>
            Forensics at<br />Scale.
          </h1>
          <p className="hero-editorial-desc" style={{ fontSize: '11px', maxWidth: '240px' }}>
            Autonomous forensics, real-time risk clustering, and transaction tracing.
          </p>
        </div>

        <div className="hero-visual-col" style={{ width: '130px', height: '130px' }}>
          <div className="hero-side-micro-text">
            FROM<br />DATA<br />TO<br />JUSTICE
          </div>
          <img
            src="/assets/nexchain_crystal_cubes.png"
            alt="Overview 3D"
            className="hero-3d-img"
          />
        </div>
      </div>

      {/* Search Input Bar */}
      <div
        className="search-input-pill-wrap"
        style={{ marginBottom: '14px', background: 'rgba(255,255,255,0.85)', cursor: 'pointer' }}
        onClick={() => onNavigate(3)}
      >
        <Search size={15} color="#64748b" />
        <span style={{ fontSize: '11.5px', color: '#64748b', flex: 1, padding: '2px 0' }}>
          Search address, transaction hash, or entity...
        </span>
        <div
          style={{
            padding: '4px 10px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #0d1522 0%, #1e293b 100%)',
            color: '#fff',
            fontSize: '10px',
            fontWeight: 700
          }}
        >
          Scan
        </div>
      </div>

      {/* 4 Quick Actions Grid */}
      <div className="section-header-row">
        <span className="section-title-bold">Quick Navigation</span>
        <span className="section-link-action" onClick={() => onNavigate(14)}>
          <span>All Tools</span>
          <ChevronRight size={12} />
        </span>
      </div>

      <div className="quick-actions-grid">
        {quickActions.map((action, idx) => (
          <div
            key={idx}
            className="quick-action-tile"
            onClick={() => onNavigate(action.screen)}
          >
            <div className="action-icon-wrap">
              {action.icon}
            </div>
            <span className="action-tile-label">{action.label}</span>
          </div>
        ))}
      </div>

      {/* 4 Key Metrics Stat Grid */}
      <div className="metrics-stat-grid" style={{ marginBottom: '12px' }}>
        <div className="metric-stat-card" onClick={() => onNavigate(11)}>
          <div className="metric-card-top">
            <Share2 size={13} color="#2563eb" />
          </div>
          <span className="metric-value-huge">128</span>
          <span className="metric-label-small">Active Nodes</span>
          <span className="metric-trend-badge up">↑ 12%</span>
        </div>

        <div className="metric-stat-card" onClick={() => onNavigate(7)}>
          <div className="metric-card-top">
            <Layers size={13} color="#0284c7" />
          </div>
          <span className="metric-value-huge">12,841</span>
          <span className="metric-label-small">Txs Analyzed</span>
          <span className="metric-trend-badge up">↑ 24%</span>
        </div>

        <div className="metric-stat-card" onClick={() => onNavigate(13)}>
          <div className="metric-card-top">
            <ShieldCheck size={13} color="#ef4444" />
          </div>
          <span className="metric-value-huge">4</span>
          <span className="metric-label-small">High-Risk Alerts</span>
          <span className="metric-trend-badge down">Live</span>
        </div>

        <div className="metric-stat-card" onClick={() => onNavigate(8)}>
          <div className="metric-card-top">
            <Sparkles size={13} color="#8b5cf6" />
          </div>
          <span className="metric-value-huge">99.8%</span>
          <span className="metric-label-small">Confidence</span>
          <span className="metric-trend-badge up">Verified</span>
        </div>
      </div>

      {/* Recent Investigations Feed */}
      <div className="section-header-row">
        <span className="section-title-bold">Recent Investigations</span>
        <span className="section-link-action" onClick={() => onNavigate(3)}>
          <span>View All</span>
          <ChevronRight size={12} />
        </span>
      </div>

      <div className="investigations-feed" style={{ marginBottom: '10px' }}>
        {recentInvestigations.map((inv) => (
          <div
            key={inv.id}
            className="investigation-card-item"
            onClick={() => onNavigate(inv.screen)}
          >
            <div className="investigation-item-left">
              <div className={`coin-symbol-circle ${inv.coinClass}`}>
                <span>{inv.symbol}</span>
              </div>
              <div className="investigation-title-col">
                <span className="investigation-title-text">{inv.id}</span>
                <span className="investigation-subtitle-text">{inv.subtext}</span>
              </div>
            </div>

            <div className="investigation-item-right">
              <span className={`risk-tag-badge ${inv.riskClass}`}>
                {inv.riskBadge}
              </span>
              <span className="item-time-text">{inv.time}</span>
              <ChevronRight size={13} color="#94a3b8" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
