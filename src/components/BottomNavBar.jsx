import React from 'react';
import { Home, Search, Share2, Bell, Box } from 'lucide-react';
import '../dashboard_screens.css';

export default function BottomNavBar({ currentScreen, onNavigate }) {
  const tabs = [
    { id: 2, label: 'Home', icon: Home },
    { id: 3, label: 'Investigate', icon: Search },
    { id: 11, label: 'Graph', icon: Share2 },
    { id: 13, label: 'Alerts', icon: Bell, hasBadge: true },
    { id: 14, label: 'Tools', icon: Box },
  ];

  return (
    <nav className="luxury-bottom-nav">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = currentScreen === tab.id;
        return (
          <button
            key={tab.id}
            className={`luxury-nav-item ${isActive ? 'active' : ''}`}
            onClick={() => onNavigate(tab.id)}
            title={tab.label}
          >
            <div className="nav-icon-box">
              <Icon size={19} strokeWidth={isActive ? 2.5 : 1.7} />
              {tab.hasBadge && <span className="nav-red-badge-dot" />}
            </div>
            <span>{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
