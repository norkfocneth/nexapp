import React, { useState } from 'react';
import {
  Search,
  Bell,
  ArrowLeft,
  Download,
  MoreHorizontal,
  ChevronDown,
  Maximize2,
  Plus,
  Minus,
  Layers,
  Crosshair,
  Copy,
  ArrowRight,
  Share2,
  ArrowUpRight,
  ArrowDownRight,
  ShieldAlert,
  Wallet,
  Building,
  RefreshCw
} from 'lucide-react';
import '../dashboard_screens.css';

export default function Screen11_NetworkGraph({ onNavigate }) {
  const [viewMode, setViewMode] = useState('Graph View');
  const [subTab, setSubTab] = useState('Overview');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [copied, setCopied] = useState(false);
  const [selectedNode, setSelectedNode] = useState('0x7a3...9f2c');

  const handleCopy = () => {
    navigator.clipboard?.writeText('0x7a3f82b1c4e9d0234a56b7890123456789abcdef');
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const handleZoom = (delta) => {
    setZoomLevel((prev) => Math.max(0.7, Math.min(1.6, prev + delta)));
  };

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

      {/* Back to Graph Analysis Sub-bar & Editorial Hero */}
      <div className="hero-editorial-row" style={{ marginTop: '2px', marginBottom: '8px' }}>
        <div className="hero-text-col">
          <div
            onClick={() => onNavigate(3)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '11px',
              fontWeight: '600',
              color: '#334155',
              cursor: 'pointer',
              marginBottom: '6px'
            }}
          >
            <ArrowLeft size={13} />
            <span>Graph Analysis</span>
          </div>
          <h1 className="hero-editorial-title" style={{ fontSize: '26px' }}>
            Visualize<br />Connections.
          </h1>
          <p className="hero-editorial-desc" style={{ fontSize: '11px', maxWidth: '240px' }}>
            Uncover relationships, trace fund flows, and identify hidden networks.
          </p>
        </div>

        <div className="hero-visual-col" style={{ width: '130px', height: '130px' }}>
          <div className="hero-side-micro-text">
            FROM<br />DATA<br />TO<br />JUSTICE
          </div>
          <img
            src="/assets/nexchain_graph_cubes.png"
            alt="Graph Cubes 3D"
            className="hero-3d-img"
          />
        </div>
      </div>

      {/* Segmented View Toggle & Action Buttons Bar */}
      <div className="graph-action-bar">
        <div className="segmented-toggle-wrap">
          <button
            className={`segment-btn ${viewMode === 'Graph View' ? 'active' : ''}`}
            onClick={() => setViewMode('Graph View')}
          >
            Graph View
          </button>
          <button
            className={`segment-btn ${viewMode === 'List View' ? 'active' : ''}`}
            onClick={() => setViewMode('List View')}
          >
            List View
          </button>
        </div>

        <div className="graph-top-buttons">
          <button className="icon-text-btn" onClick={() => onNavigate(8)}>
            <Download size={12} />
            <span>Export</span>
          </button>
          <button className="icon-text-btn" style={{ padding: '5px 8px' }}>
            <MoreHorizontal size={14} />
          </button>
        </div>
      </div>

      {/* Filter Dropdowns Bar */}
      <div className="filter-dropdowns-bar" style={{ marginBottom: '10px' }}>
        <div className="dropdown-chip">
          <span style={{ color: '#ea580c', fontWeight: 'bold' }}>₿</span>
          <span>BTC</span>
          <ChevronDown size={11} color="#64748b" />
        </div>
        <div className="dropdown-chip">
          <span>📅 Last 30 Days</span>
          <ChevronDown size={11} color="#64748b" />
        </div>
        <div className="dropdown-chip">
          <span>⬡ All Entities</span>
          <ChevronDown size={11} color="#64748b" />
        </div>
      </div>

      {/* 4 Key Metrics Stat Grid */}
      <div className="metrics-stat-grid">
        <div className="metric-stat-card">
          <div className="metric-card-top">
            <Share2 size={13} color="#2563eb" />
          </div>
          <span className="metric-value-huge">128</span>
          <span className="metric-label-small">Total Nodes</span>
          <span className="metric-trend-badge up">↑ 12%</span>
        </div>

        <div className="metric-stat-card">
          <div className="metric-card-top">
            <RefreshCw size={13} color="#0284c7" />
          </div>
          <span className="metric-value-huge">342</span>
          <span className="metric-label-small">Total Transactions</span>
          <span className="metric-trend-badge up">↑ 18%</span>
        </div>

        <div className="metric-stat-card">
          <div className="metric-card-top">
            <ShieldAlert size={13} color="#ef4444" />
          </div>
          <span className="metric-value-huge">5</span>
          <span className="metric-label-small">High-Risk Entities</span>
          <span className="metric-trend-badge down">↓ 25%</span>
        </div>

        <div className="metric-stat-card">
          <div className="metric-card-top">
            <Layers size={13} color="#475569" />
          </div>
          <span className="metric-value-huge">$2.4M</span>
          <span className="metric-label-small">Total Volume</span>
          <span className="metric-trend-badge up">↑ 42%</span>
        </div>
      </div>

      {/* Interactive Transaction Graph Card */}
      <div className="graph-canvas-card">
        <div className="graph-card-header-bar">
          <div>
            <h3 style={{ margin: 0, fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>
              Transaction Graph
            </h3>
            <p style={{ margin: '2px 0 0 0', fontSize: '9px', color: '#64748b' }}>
              Interactive visualization of on-chain relationships.
            </p>
          </div>
          <button
            className="icon-text-btn"
            style={{ padding: '4px 8px', fontSize: '9.5px' }}
            onClick={() => handleZoom(0.1)}
          >
            <Maximize2 size={11} />
            <span>Full Screen</span>
          </button>
        </div>

        {/* SVG Interactive Canvas */}
        <div className="graph-canvas-area">
          <svg
            viewBox="0 0 360 220"
            style={{
              width: '100%',
              height: '100%',
              transform: `scale(${zoomLevel})`,
              transition: 'transform 0.3s ease'
            }}
          >
            <defs>
              <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="highRiskGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
              </radialGradient>
              <filter id="shadowFilter" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
              </filter>
            </defs>

            {/* Glowing Rings for Center & High-Risk */}
            <circle cx="175" cy="115" r="36" fill="url(#centerGlow)" />
            <circle cx="245" cy="115" r="28" fill="url(#highRiskGlow)" />

            {/* Edges / Lines connecting nodes */}
            <g stroke="rgba(148, 163, 184, 0.45)" strokeWidth="1.2" strokeDasharray="2,2">
              <line x1="175" y1="115" x2="125" y2="100" />
              <line x1="175" y1="115" x2="195" y2="55" />
              <line x1="175" y1="115" x2="245" y2="115" />
              <line x1="175" y1="115" x2="290" y2="125" />
              <line x1="175" y1="115" x2="260" y2="175" />
              <line x1="175" y1="115" x2="110" y2="185" />
              <line x1="175" y1="115" x2="105" y2="135" />
              <line x1="105" y1="135" x2="55" y2="125" />
            </g>

            {/* Animated Stream Pulses (Dots moving along lines) */}
            <circle cx="150" cy="108" r="2" fill="#3b82f6" />
            <circle cx="210" cy="115" r="2" fill="#ef4444" />
            <circle cx="185" cy="85" r="2" fill="#64748b" />
            <circle cx="218" cy="145" r="2" fill="#8b5cf6" />
            <circle cx="142" cy="150" r="2" fill="#ea580c" />

            {/* Leftmost Node (0x4b2...1c9d) */}
            <g transform="translate(55, 125)" filter="url(#shadowFilter)" style={{ cursor: 'pointer' }}>
              <circle cx="0" cy="0" r="10" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1.5" />
              <text x="0" y="3" fontSize="8" textAnchor="middle" fill="#475569">📁</text>
              <text x="0" y="16" fontSize="6.5" textAnchor="middle" fill="#64748b" fontFamily="JetBrains Mono">0x4b2...1c9d</text>
            </g>

            {/* Bank / Institution Node */}
            <g transform="translate(105" y="135)" filter="url(#shadowFilter)" style={{ cursor: 'pointer' }}>
              <circle cx="105" cy="135" r="13" fill="#fee2e2" stroke="#f87171" strokeWidth="1.5" />
              <text x="105" y="139" fontSize="10" textAnchor="middle" fill="#b91c1c">🏛️</text>
            </g>

            {/* BTC Top Left Node */}
            <g filter="url(#shadowFilter)" style={{ cursor: 'pointer' }}>
              <circle cx="125" cy="100" r="13" fill="#ffedd5" stroke="#fb923c" strokeWidth="1.5" />
              <text x="125" y="104" fontSize="10" textAnchor="middle" fill="#c2410c" fontWeight="bold">₿</text>
            </g>

            {/* Node Top (0x9d1...8e3f) */}
            <g transform="translate(195, 55)" filter="url(#shadowFilter)" style={{ cursor: 'pointer' }}>
              <circle cx="0" cy="0" r="10" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1.5" />
              <text x="0" y="3" fontSize="8" textAnchor="middle" fill="#475569">📁</text>
              <text x="0" y="16" fontSize="6.5" textAnchor="middle" fill="#64748b" fontFamily="JetBrains Mono">0x9d1...8e3f</text>
            </g>

            {/* Center Master Wallet Node (0x7a3...9f2c) */}
            <g transform="translate(175, 115)" filter="url(#shadowFilter)" style={{ cursor: 'pointer' }}>
              <circle cx="0" cy="0" r="17" fill="#1e293b" stroke="#60a5fa" strokeWidth="2.5" />
              <text x="0" y="4" fontSize="10" textAnchor="middle" fill="#ffffff">💼</text>
              <text x="0" y="24" fontSize="7.5" textAnchor="middle" fill="#0f172a" fontWeight="bold" fontFamily="JetBrains Mono">0x7a3...9f2c</text>
            </g>

            {/* Red High-Risk BTC Node */}
            <g filter="url(#shadowFilter)" style={{ cursor: 'pointer' }}>
              <circle cx="245" cy="115" r="14" fill="#fee2e2" stroke="#ef4444" strokeWidth="2" />
              <text x="245" y="119" fontSize="10" textAnchor="middle" fill="#dc2626" fontWeight="bold">₿</text>
            </g>

            {/* Purple Ethereum Node */}
            <g filter="url(#shadowFilter)" style={{ cursor: 'pointer' }}>
              <circle cx="290" cy="125" r="12" fill="#ede9fe" stroke="#a78bfa" strokeWidth="1.5" />
              <text x="290" y="129" fontSize="9" textAnchor="middle" fill="#6d28d9" fontWeight="bold">⟠</text>
            </g>

            {/* Bottom Right Node (0x6e1...5b7c) */}
            <g transform="translate(260, 175)" filter="url(#shadowFilter)" style={{ cursor: 'pointer' }}>
              <circle cx="0" cy="0" r="10" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1.5" />
              <text x="0" y="3" fontSize="8" textAnchor="middle" fill="#475569">📁</text>
              <text x="0" y="16" fontSize="6.5" textAnchor="middle" fill="#64748b" fontFamily="JetBrains Mono">0x6e1...5b7c</text>
            </g>

            {/* Bottom Left Node (0x8f4...3d2e) */}
            <g transform="translate(110, 185)" filter="url(#shadowFilter)" style={{ cursor: 'pointer' }}>
              <circle cx="0" cy="0" r="10" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1.5" />
              <text x="0" y="3" fontSize="8" textAnchor="middle" fill="#475569">📁</text>
              <text x="0" y="16" fontSize="6.5" textAnchor="middle" fill="#64748b" fontFamily="JetBrains Mono">0x8f4...3d2e</text>
            </g>
          </svg>

          {/* Floating Canvas Control Toolbar */}
          <div className="graph-toolbar-floating">
            <button className="toolbar-btn" onClick={() => handleZoom(0.15)} title="Zoom In">
              <Plus size={13} />
            </button>
            <button className="toolbar-btn" onClick={() => handleZoom(-0.15)} title="Zoom Out">
              <Minus size={13} />
            </button>
            <button className="toolbar-btn" onClick={() => setZoomLevel(1)} title="Reset Scale">
              <Maximize2 size={12} />
            </button>
            <button className="toolbar-btn" title="Toggle Layers">
              <Layers size={12} />
            </button>
            <button className="toolbar-btn" title="Center Focus">
              <Crosshair size={12} />
            </button>
          </div>
        </div>

        {/* Legend Row below Graph */}
        <div className="graph-legend-row">
          <div className="legend-item">
            <span className="legend-dot exchange" />
            <span>Exchange</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot mixer" />
            <span>Mixer</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot wallet" />
            <span>Wallet</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot contract" />
            <span>Contract</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot highrisk" />
            <span>High Risk</span>
          </div>
        </div>
      </div>

      {/* Selected Entity Dossier Card */}
      <div className="entity-dossier-card">
        <div className="dossier-header-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                background: '#ede9fe',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '13px',
                color: '#6d28d9',
                fontWeight: 'bold'
              }}
            >
              ⟠
            </div>
            <span style={{ fontFamily: 'JetBrains Mono', fontSize: '11px', fontWeight: 700, color: '#0f172a' }}>
              0x7a3...9f2c
            </span>
            <button
              onClick={handleCopy}
              style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: 0 }}
              title="Copy Address"
            >
              <Copy size={11} />
            </button>
            <span className="risk-tag-badge high" style={{ fontSize: '8.5px', padding: '2px 6px' }}>
              High Risk
            </span>
          </div>

          <button
            className="icon-text-btn"
            style={{ fontSize: '10px', padding: '4px 10px', color: '#1e293b', fontWeight: 'bold' }}
            onClick={() => onNavigate(5)}
          >
            <span>View Details</span>
            <ArrowRight size={12} />
          </button>
        </div>

        {/* Sub-Tabs: Overview, Transactions, Connections, Risk Analysis */}
        <div className="dossier-sub-tabs">
          {['Overview', 'Transactions', 'Connections', 'Risk Analysis'].map((tab) => (
            <button
              key={tab}
              className={`dossier-tab-btn ${subTab === tab ? 'active' : ''}`}
              onClick={() => setSubTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 4 Inflow / Outflow / Tx / Entity Stats */}
        <div className="dossier-stat-grid">
          <div className="dossier-stat-tile">
            <span style={{ fontSize: '10px', color: '#0284c7' }}>⇄</span>
            <span className="dossier-stat-num">$843,220</span>
            <span className="dossier-stat-lbl">Total Inflow</span>
          </div>
          <div className="dossier-stat-tile">
            <span style={{ fontSize: '10px', color: '#ea580c' }}>⤸</span>
            <span className="dossier-stat-num">$791,430</span>
            <span className="dossier-stat-lbl">Total Outflow</span>
          </div>
          <div className="dossier-stat-tile">
            <span style={{ fontSize: '10px', color: '#3b82f6' }}>⇄</span>
            <span className="dossier-stat-num">56</span>
            <span className="dossier-stat-lbl">Transactions</span>
          </div>
          <div className="dossier-stat-tile">
            <span style={{ fontSize: '10px', color: '#8b5cf6' }}>👥</span>
            <span className="dossier-stat-num">3</span>
            <span className="dossier-stat-lbl">Connected Entities</span>
          </div>
        </div>
      </div>
    </div>
  );
}
