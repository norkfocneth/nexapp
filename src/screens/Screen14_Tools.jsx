import React, { useState } from 'react';
import {
  Search,
  Bell,
  ArrowRight,
  Sparkles,
  SearchCheck,
  Box,
  Share2,
  ShieldCheck,
  GitFork,
  FileSpreadsheet,
  Layers,
  Repeat,
  BellRing,
  Code2,
  ChevronRight
} from 'lucide-react';
import '../dashboard_screens.css';

export default function Screen14_Tools({ onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('All Tools');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'All Tools', label: 'All Tools', icon: '📦' },
    { id: 'Investigation', label: 'Investigation', icon: '🔍' },
    { id: 'Analysis', label: 'Analysis', icon: '📊' },
    { id: 'Security', label: 'Security', icon: '🛡️' },
    { id: 'Data', label: 'Data', icon: '💾' },
  ];

  const toolsList = [
    {
      id: 'address-lookup',
      title: 'Address Lookup',
      desc: 'Get detailed information about any wallet address.',
      category: 'Investigation',
      icon: <SearchCheck size={18} color="#0284c7" />,
      tags: ['On-chain Data', 'Risk Score'],
      screen: 3,
    },
    {
      id: 'tx-explorer',
      title: 'Transaction Explorer',
      desc: 'Analyze and visualize transaction flows.',
      category: 'Investigation',
      icon: <Box size={18} color="#2563eb" />,
      tags: ['Graph View', 'Entity Detection'],
      screen: 6,
    },
    {
      id: 'entity-analysis',
      title: 'Entity Analysis',
      desc: 'Identify and cluster related addresses.',
      category: 'Analysis',
      icon: <Share2 size={18} color="#0d9488" />,
      tags: ['AI Powered', 'Cluster Analysis'],
      screen: 10,
    },
    {
      id: 'risk-scanner',
      title: 'Risk Scanner',
      desc: 'Detect suspicious patterns and threats.',
      category: 'Security',
      icon: <ShieldCheck size={18} color="#6366f1" />,
      tags: ['Real-time', 'Risk Score'],
      screen: 7,
    },
    {
      id: 'graph-visualizer',
      title: 'Graph Visualizer',
      desc: 'Interactive blockchain graphs and insights.',
      category: 'Analysis',
      icon: <GitFork size={18} color="#ec4899" />,
      tags: ['3D Graph', 'Export', 'Beta'],
      screen: 11,
      isBeta: true,
    },
    {
      id: 'report-generator',
      title: 'Report Generator',
      desc: 'Create detailed investigation reports.',
      category: 'Data',
      icon: <FileSpreadsheet size={18} color="#2563eb" />,
      tags: ['PDF/JSON', 'Custom Templates'],
      screen: 8,
    },
    {
      id: 'batch-analysis',
      title: 'Batch Analysis',
      desc: 'Analyze multiple addresses or transactions.',
      category: 'Data',
      icon: <Layers size={18} color="#8b5cf6" />,
      tags: ['Bulk Scan', 'CSV Upload'],
      screen: 9,
    },
    {
      id: 'cross-chain',
      title: 'Cross-Chain Tracker',
      desc: 'Trace assets across multiple blockchains.',
      category: 'Analysis',
      icon: <Repeat size={18} color="#0284c7" />,
      tags: ['Multi-Chain', 'Bridge Detection'],
      screen: 11,
    },
    {
      id: 'alert-manager',
      title: 'Alert Manager',
      desc: 'Configure and manage real-time alerts.',
      category: 'Security',
      icon: <BellRing size={18} color="#f43f5e" />,
      tags: ['Custom Rules', 'Notifications'],
      screen: 12,
    },
    {
      id: 'api-access',
      title: 'API Access',
      desc: 'Integrate NexChain into your workflow.',
      category: 'Data',
      icon: <Code2 size={18} color="#3b82f6" />,
      tags: ['REST API', 'Documentation'],
      screen: 15,
    },
  ];

  const filteredTools = toolsList.filter((tool) => {
    const matchesCat = activeCategory === 'All Tools' || tool.category === activeCategory;
    const matchesSearch =
      tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
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

      {/* Hero Editorial Row */}
      <div className="hero-editorial-row" style={{ marginTop: '2px', marginBottom: '8px' }}>
        <div className="hero-text-col">
          <span className="hero-label-top">TOOLS</span>
          <h1 className="hero-editorial-title" style={{ fontSize: '26px' }}>
            Powerful<br />Tools for<br />a Safer Tomorrow.
          </h1>
          <p className="hero-editorial-desc" style={{ fontSize: '11px', maxWidth: '240px' }}>
            Analyze. Investigate. Uncover. Prevent.
          </p>
        </div>

        <div className="hero-visual-col" style={{ width: '130px', height: '130px' }}>
          <div className="hero-side-micro-text">
            FROM<br />DATA<br />TO<br />JUSTICE
          </div>
          <img
            src="/assets/nexchain_briefcase_3d.png"
            alt="Briefcase 3D"
            className="hero-3d-img"
          />
        </div>
      </div>

      {/* Search Input Bar with Command-K */}
      <div className="search-input-pill-wrap" style={{ marginBottom: '10px', background: 'rgba(255,255,255,0.75)' }}>
        <Search size={14} color="#64748b" />
        <input
          type="text"
          className="search-text-input"
          placeholder="Search tools, utilities, or guides..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ fontFamily: 'inherit', fontSize: '11.5px' }}
        />
        <div
          style={{
            padding: '2px 6px',
            borderRadius: '6px',
            background: 'rgba(15, 23, 42, 0.06)',
            fontSize: '9.5px',
            fontWeight: 700,
            color: '#64748b',
            display: 'flex',
            alignItems: 'center',
            gap: '2px'
          }}
        >
          <span>⌘</span>
          <span>K</span>
        </div>
      </div>

      {/* Categories Filter Pills */}
      <div className="filter-pills-row" style={{ marginBottom: '12px' }}>
        {categories.map((c) => (
          <button
            key={c.id}
            className={`filter-pill-btn ${activeCategory === c.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(c.id)}
          >
            <span>{c.icon}</span>
            <span>{c.label}</span>
          </button>
        ))}
      </div>

      {/* 2-Column Tools Grid */}
      <div className="tools-two-col-grid">
        {filteredTools.map((tool) => (
          <div
            key={tool.id}
            className="tool-card-box"
            onClick={() => onNavigate(tool.screen)}
          >
            <div>
              <div className="tool-card-top">
                <div className="tool-icon-circle">
                  {tool.icon}
                </div>
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    background: 'rgba(15, 23, 42, 0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#64748b'
                  }}
                >
                  <ArrowRight size={11} />
                </div>
              </div>

              <h4 className="tool-card-title">{tool.title}</h4>
              <p className="tool-card-desc">{tool.desc}</p>
            </div>

            <div className="tool-tags-wrap">
              {tool.tags.map((t, idx) => (
                <span
                  key={idx}
                  className={`tool-pill-tag ${t === 'Beta' ? 'beta' : ''}`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Luminous Banner */}
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
            <h3 style={{ fontSize: '13px' }}>Build a Safer Digital Tomorrow.</h3>
            <p style={{ fontSize: '9px', maxWidth: '200px' }}>
              Advanced tools. Deeper insights. Greater impact.
            </p>
          </div>
        </div>

        <button
          className="banner-action-btn"
          style={{ background: '#1e293b', color: '#ffffff', padding: '6px 12px', fontSize: '9.5px' }}
          onClick={() => onNavigate(3)}
        >
          <span>Request a New Tool</span>
          <ArrowRight size={11} />
        </button>
      </div>
    </div>
  );
}
