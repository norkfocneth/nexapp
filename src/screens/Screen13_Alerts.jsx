import React, { useState } from 'react';
import {
  Search,
  Bell,
  ChevronDown,
  ChevronRight,
  AlertTriangle,
  Building,
  ShieldAlert,
  ArrowLeftRight,
  FileText,
  Globe,
  Sparkles,
  SlidersHorizontal,
  ArrowRight
} from 'lucide-react';
import '../dashboard_screens.css';

export default function Screen13_Alerts({ onNavigate }) {
  const [activeSeverity, setActiveSeverity] = useState('All');
  const [selectedChain, setSelectedChain] = useState('All Chains');

  const severityPills = [
    { id: 'All', label: 'All Alerts', count: '12', activeClass: 'active' },
    { id: 'High', label: 'High Risk', count: '4', icon: '⚠️' },
    { id: 'Medium', label: 'Medium', count: '5', icon: '!' },
    { id: 'Low', label: 'Low', count: '3', icon: 'ℹ' },
  ];

  const alertsData = [
    {
      id: 1,
      title: 'Suspicious Fund Movement',
      riskBadge: 'High Risk',
      riskClass: 'high',
      time: '12 min ago',
      desc: '0x7a3...9f2c moved 1,250 ETH to a mixer (Tornado Cash).',
      iconBoxClass: 'red',
      icon: <AlertTriangle size={17} />,
      tags: [
        { label: 'Ethereum', icon: '⟠' },
        { label: 'Transfer', icon: '⇄' },
        { label: '1,250 ETH', icon: '🪙' },
      ],
      targetScreen: 5,
    },
    {
      id: 2,
      title: 'Linked to Sanctioned Entity',
      riskBadge: 'High Risk',
      riskClass: 'high',
      time: '32 min ago',
      desc: 'Address 0x8f4...3d2e interacted with a sanctioned address.',
      iconBoxClass: 'amber',
      icon: <Building size={17} />,
      tags: [
        { label: 'Ethereum', icon: '⟠' },
        { label: 'Known Entity', icon: '🕸️' },
        { label: 'OFAC', icon: '👥' },
      ],
      targetScreen: 10,
    },
    {
      id: 3,
      title: 'Possible Phishing Interaction',
      riskBadge: 'Medium',
      riskClass: 'monitor',
      time: '1 hour ago',
      desc: '0x6e1...5b7c interacted with a known phishing contract.',
      iconBoxClass: 'pink',
      icon: <ShieldAlert size={17} />,
      tags: [
        { label: 'BNB Chain', icon: '🪙' },
        { label: 'Smart Contract', icon: '📄' },
        { label: 'Phishing', icon: '⚠️' },
      ],
      targetScreen: 7,
    },
    {
      id: 4,
      title: 'Unusual Token Swap',
      riskBadge: 'Medium',
      riskClass: 'monitor',
      time: '2 hours ago',
      desc: 'Large swap detected: 500,000 USDT → 298.7 WBTC',
      iconBoxClass: 'blue',
      icon: <ArrowLeftRight size={17} />,
      tags: [
        { label: 'Solana', icon: '◎' },
        { label: 'Token Swap', icon: '⇄' },
        { label: '500,000 USDT', icon: '💵' },
      ],
      targetScreen: 6,
    },
    {
      id: 5,
      title: 'New Entity Detected',
      riskBadge: 'Low',
      riskClass: 'low',
      time: '4 hours ago',
      desc: 'A new cluster of 12 addresses linked together.',
      iconBoxClass: 'purple',
      icon: <FileText size={17} />,
      tags: [
        { label: 'Polygon', icon: '⬡' },
        { label: 'Cluster', icon: '🕸️' },
        { label: '12 Addresses', icon: '📦' },
      ],
      targetScreen: 11,
    },
    {
      id: 6,
      title: 'Cross-Chain Bridge Activity',
      riskBadge: 'Low',
      riskClass: 'low',
      time: '5 hours ago',
      desc: '0x9d1...8e3f moved assets across 3 chains.',
      iconBoxClass: 'blue',
      icon: <Globe size={17} />,
      tags: [
        { label: 'Arbitrum', icon: '🔵' },
        { label: 'Bridge', icon: '🌉' },
        { label: '3 Chains', icon: '🔄' },
      ],
      targetScreen: 9,
    },
  ];

  const filteredAlerts = alertsData.filter((a) => {
    if (activeSeverity === 'All') return true;
    if (activeSeverity === 'High') return a.riskBadge === 'High Risk';
    if (activeSeverity === 'Medium') return a.riskBadge === 'Medium';
    if (activeSeverity === 'Low') return a.riskBadge === 'Low';
    return true;
  });

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
          <span className="hero-label-top">ALERTS</span>
          <h1 className="hero-editorial-title" style={{ fontSize: '28px' }}>
            Stay Ahead<br />of Risk.
          </h1>
          <p className="hero-editorial-desc" style={{ fontSize: '11px', maxWidth: '240px' }}>
            Real-time monitoring. Smarter alerts. A safer blockchain tomorrow.
          </p>
        </div>

        <div className="hero-visual-col" style={{ width: '130px', height: '130px' }}>
          <div className="hero-side-micro-text">
            FROM<br />DATA<br />TO<br />JUSTICE
          </div>
          <img
            src="/assets/nexchain_shield_3d.png"
            alt="Shield 3D"
            className="hero-3d-img"
          />
        </div>
      </div>

      {/* Severity Filter Pills Row */}
      <div className="filter-pills-row" style={{ marginBottom: '10px' }}>
        {severityPills.map((pill) => (
          <button
            key={pill.id}
            className={`filter-pill-btn ${activeSeverity === pill.id ? 'active' : ''}`}
            onClick={() => setActiveSeverity(pill.id)}
          >
            {pill.icon && <span>{pill.icon}</span>}
            <span>{pill.label}</span>
            <span className="filter-pill-badge-num">{pill.count}</span>
          </button>
        ))}
      </div>

      {/* Filter Dropdowns Bar */}
      <div className="filter-dropdowns-bar" style={{ marginBottom: '12px' }}>
        <div className="dropdown-chip">
          <span>🔗 All Chains</span>
          <ChevronDown size={11} color="#64748b" />
        </div>
        <div className="dropdown-chip">
          <span>🔲 All Types</span>
          <ChevronDown size={11} color="#64748b" />
        </div>
        <div className="dropdown-chip">
          <span>📅 Last 7 Days</span>
          <ChevronDown size={11} color="#64748b" />
        </div>
      </div>

      {/* Alert Feed Cards List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
        {filteredAlerts.map((alert) => (
          <div
            key={alert.id}
            className="alert-feed-card"
            onClick={() => onNavigate(alert.targetScreen)}
          >
            <div className="alert-card-top-row">
              <div className="alert-card-title-group">
                <div className={`alert-icon-box ${alert.iconBoxClass}`}>
                  {alert.icon}
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span className="alert-card-title">{alert.title}</span>
                    <span className={`risk-tag-badge ${alert.riskClass}`} style={{ fontSize: '8.5px', padding: '2px 6px' }}>
                      {alert.riskBadge}
                    </span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="item-time-text">{alert.time}</span>
                <ChevronRight size={13} color="#94a3b8" />
              </div>
            </div>

            <p className="alert-card-desc">{alert.desc}</p>

            <div className="alert-tags-row">
              {alert.tags.map((t, idx) => (
                <div key={idx} className="alert-micro-tag">
                  <span>{t.icon}</span>
                  <span>{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Smarter Alerts Bottom Luminous Banner */}
      <div className="luminous-banner-card" style={{ marginTop: 'auto', marginBottom: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: '#fce7f3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ec4899',
              flexShrink: 0
            }}
          >
            <Sparkles size={16} />
          </div>
          <div className="banner-left-content">
            <h3 style={{ fontSize: '13px' }}>Smarter Alerts. Stronger Decisions.</h3>
            <p style={{ fontSize: '9px', maxWidth: '210px' }}>
              Customize your alert preferences and never miss what matters.
            </p>
          </div>
        </div>

        <button
          className="banner-action-btn"
          style={{ background: '#1e293b', color: '#ffffff', padding: '6px 12px', fontSize: '9.5px' }}
          onClick={() => onNavigate(12)}
        >
          <span>Manage Alerts</span>
          <ArrowRight size={11} />
        </button>
      </div>
    </div>
  );
}
