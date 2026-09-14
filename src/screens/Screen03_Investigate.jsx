import React, { useState } from 'react';
import {
  Search,
  Bell,
  X,
  ChevronDown,
  ChevronRight,
  Share2,
  ShieldCheck,
  User,
  Layers,
  ArrowRight,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import '../dashboard_screens.css';

export default function Screen03_Investigate({ onNavigate, setQueryAddress }) {
  const [activeFilter, setActiveFilter] = useState('Transaction');
  const [searchTerm, setSearchTerm] = useState('0x7a3...9f2c');
  const [chainSelect, setChainSelect] = useState('Auto Detect Chain');
  const [analysisType, setAnalysisType] = useState('Standard Analysis');

  const filterChips = [
    { id: 'Transaction', label: 'Transaction', icon: '📦' },
    { id: 'Address', label: 'Address', icon: '🔗' },
    { id: 'Entity', label: 'Entity', icon: '🏛️' },
    { id: 'Domain', label: 'Domain', icon: '🛡️' },
  ];

  const recentSearches = ['0x7a3...9f2c', 'Tornado Cash', 'binance.com'];

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

  const handleSearchSubmit = (term) => {
    const val = term || searchTerm;
    if (setQueryAddress) setQueryAddress(val);
    onNavigate(4); // Navigates to Analysing screen
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
            <span className="brand-sub-badge">INVESTIGATE</span>
          </div>
        </div>

        <div className="brand-nav-right">
          <button className="nav-icon-circle-btn" onClick={() => onNavigate(3)} title="Search">
            <Search size={15} />
          </button>
          <button className="nav-icon-circle-btn" onClick={() => onNavigate(13)} title="Alerts">
            <Bell size={15} />
            <div className="notification-badge-red" />
          </button>
          <div className="nav-avatar-pill" onClick={() => onNavigate(14)}>
            AS
          </div>
        </div>
      </div>

      {/* Hero Section with 3D Orbital Cubes */}
      <div className="screen-hero-section">
        <div className="hero-text-col">
          <div className="hero-section-tag">INVESTIGATE</div>
          <h1 className="hero-editorial-title">
            Trace Beyond<br />the Obvious.
          </h1>
          <p className="hero-editorial-desc">
            Analyze blockchain data, uncover hidden connections, and detect risky activity.
          </p>
        </div>

        <div className="hero-visual-col">
          <div className="hero-side-micro-text">
            FROM<br />
            DATA<br />
            TO<br />
            JUSTICE
          </div>
          <img
            src="/assets/nexchain_investigate_cubes.png"
            alt="3D Investigate Orbital Cubes"
            className="hero-3d-img"
          />
        </div>
      </div>

      {/* Filter Chips (Transaction, Address, Entity, Domain) */}
      <div className="filter-pills-row">
        {filterChips.map((chip) => (
          <button
            key={chip.id}
            className={`filter-pill-btn ${activeFilter === chip.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(chip.id)}
          >
            <span style={{ fontSize: '12px' }}>{chip.icon}</span>
            <span>{chip.label}</span>
          </button>
        ))}
      </div>

      {/* Master Search Box Card */}
      <div className="master-search-card">
        <div className="search-input-title">
          Enter transaction hash, address, or domain...
        </div>

        <div className="search-input-pill-wrap">
          <input
            type="text"
            className="search-text-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="0x... or domain"
          />
          {searchTerm && (
            <button className="search-clear-btn" onClick={() => setSearchTerm('')}>
              <X size={14} />
            </button>
          )}
          <button
            className="search-submit-circle-btn"
            onClick={() => handleSearchSubmit(searchTerm)}
            id="btn-investigate-search-submit"
          >
            <Search size={15} />
          </button>
        </div>

        {/* Dropdown Options */}
        <div className="search-options-row">
          <div className="search-option-pill" onClick={() => setChainSelect(chainSelect === 'Auto Detect Chain' ? 'Ethereum (ETH)' : 'Auto Detect Chain')}>
            <span>{chainSelect}</span>
            <ChevronDown size={12} color="#64748b" />
          </div>
          <div className="search-option-pill" onClick={() => setAnalysisType(analysisType === 'Standard Analysis' ? 'Deep Forensic Scan' : 'Standard Analysis')}>
            <span>{analysisType}</span>
            <ChevronDown size={12} color="#64748b" />
          </div>
        </div>

        {/* Recent Searches Row */}
        <div className="recent-searches-row">
          <span>Recent Searches:</span>
          {recentSearches.map((item) => (
            <div
              key={item}
              className="recent-chip"
              onClick={() => {
                setSearchTerm(item);
                handleSearchSubmit(item);
              }}
            >
              {item}
            </div>
          ))}
          <ChevronRight size={12} color="#94a3b8" />
        </div>
      </div>

      {/* Quick Actions Grid (4 Cards) */}
      <div className="section-header-row">
        <span className="section-title-bold">Quick Actions</span>
        <span className="section-link-action" onClick={() => onNavigate(14)}>
          <span>Tools</span>
          <ChevronRight size={12} />
        </span>
      </div>

      <div className="quick-actions-grid">
        <div className="quick-action-tile" onClick={() => onNavigate(11)} id="action-graph">
          <div className="action-icon-wrap" style={{ color: '#2563eb', background: '#eff6ff' }}>
            <Share2 size={16} />
          </div>
          <span className="action-tile-label">Transaction<br />Graph</span>
        </div>

        <div className="quick-action-tile" onClick={() => onNavigate(6)} id="action-risk-scan">
          <div className="action-icon-wrap" style={{ color: '#0284c7', background: '#f0f9ff' }}>
            <ShieldCheck size={16} />
          </div>
          <span className="action-tile-label">Risk<br />Scan</span>
        </div>

        <div className="quick-action-tile" onClick={() => onNavigate(9)} id="action-entity-lookup">
          <div className="action-icon-wrap" style={{ color: '#4f46e5', background: '#eef2ff' }}>
            <User size={16} />
          </div>
          <span className="action-tile-label">Entity<br />Lookup</span>
        </div>

        <div className="quick-action-tile" onClick={() => onNavigate(14)} id="action-batch-analysis">
          <div className="action-icon-wrap" style={{ color: '#059669', background: '#ecfdf5' }}>
            <Layers size={16} />
          </div>
          <span className="action-tile-label">Batch<br />Analysis</span>
        </div>
      </div>

      {/* Luminous Banner */}
      <div className="luminous-banner-card">
        <div className="banner-left-content">
          <h3>Paste. Analyze. Uncover.</h3>
          <p>Get instant insights into transactions, addresses, and entities across multiple blockchains.</p>
        </div>
        <button
          className="banner-action-btn"
          onClick={() => handleSearchSubmit('0x7a3fc894726e9c9d2e4b0113f89')}
          id="btn-analyze-now-banner"
        >
          <span>Analyze Now</span>
          <ArrowRight size={13} />
        </button>
      </div>

      {/* Recent Investigations */}
      <div className="section-header-row">
        <span className="section-title-bold">Recent Investigations</span>
        <span className="section-link-action" onClick={() => onNavigate(10)}>
          <span>View All</span>
        </span>
      </div>

      <div className="investigations-feed">
        {recentInvestigations.map((inv) => (
          <div
            key={inv.id}
            className="investigation-card-item"
            onClick={() => onNavigate(inv.screen)}
          >
            <div className="investigation-item-left">
              <div className={`coin-symbol-circle ${inv.coinClass}`}>
                {inv.symbol}
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
