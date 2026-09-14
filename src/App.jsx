import React, { useState, useEffect } from 'react';
import './index.css';
import './screens.css';

import DeviceFrame from './components/DeviceFrame';
import ScreenSwitcher from './components/ScreenSwitcher';
import BottomNavBar from './components/BottomNavBar';

import Screen01_Splash from './screens/Screen01_Splash';
import Screen02_Home from './screens/Screen02_Home';
import Screen03_Investigate from './screens/Screen03_Investigate';
import Screen04_Analyzing from './screens/Screen04_Analyzing';
import Screen05_Result from './screens/Screen05_Result';
import Screen06_RiskAnalysis from './screens/Screen06_RiskAnalysis';
import Screen07_TxDetails from './screens/Screen07_TxDetails';
import Screen08_TxFlow from './screens/Screen08_TxFlow';
import Screen09_AddressDetails from './screens/Screen09_AddressDetails';
import Screen10_Patterns from './screens/Screen10_Patterns';
import Screen11_NetworkGraph from './screens/Screen11_NetworkGraph';
import Screen12_AIInvestigator from './screens/Screen12_AIInvestigator';
import Screen13_Alerts from './screens/Screen13_Alerts';
import Screen14_Tools from './screens/Screen14_Tools';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [viewMode, setViewMode] = useState('device'); // 'device' | 'gallery'
  const [isAutoTouring, setIsAutoTouring] = useState(false);
  const [queryAddress, setQueryAddress] = useState('0x7a3f...c9d2e4');

  // Auto Tour Timer
  useEffect(() => {
    let interval;
    if (isAutoTouring) {
      interval = setInterval(() => {
        setCurrentScreen((prev) => (prev >= 14 ? 1 : prev + 1));
      }, 4500);
    }
    return () => clearInterval(interval);
  }, [isAutoTouring]);

  const handleSelectScreen = (num) => {
    setIsAutoTouring(false);
    setCurrentScreen(num);
  };

  const renderScreenContent = (screenNum) => {
    switch (screenNum) {
      case 1:
        return <Screen01_Splash onNavigate={setCurrentScreen} initialStep={0} />;
      case 1.1:
        return <Screen01_Splash onNavigate={setCurrentScreen} initialStep={1} />;
      case 1.2:
        return <Screen01_Splash onNavigate={setCurrentScreen} initialStep={2} />;
      case 1.3:
        return <Screen01_Splash onNavigate={setCurrentScreen} initialStep={3} />;
      case 2:
        return <Screen02_Home onNavigate={setCurrentScreen} />;
      case 3:
        return (
          <Screen03_Investigate
            onNavigate={setCurrentScreen}
            setQueryAddress={setQueryAddress}
          />
        );
      case 4:
        return <Screen04_Analyzing onNavigate={setCurrentScreen} />;
      case 5:
        return <Screen05_Result onNavigate={setCurrentScreen} />;
      case 6:
        return <Screen06_RiskAnalysis onNavigate={setCurrentScreen} />;
      case 7:
        return <Screen07_TxDetails onNavigate={setCurrentScreen} />;
      case 8:
        return <Screen08_TxFlow onNavigate={setCurrentScreen} />;
      case 9:
        return <Screen09_AddressDetails onNavigate={setCurrentScreen} />;
      case 10:
        return <Screen10_Patterns onNavigate={setCurrentScreen} />;
      case 11:
        return <Screen11_NetworkGraph onNavigate={setCurrentScreen} />;
      case 12:
        return <Screen12_AIInvestigator onNavigate={setCurrentScreen} />;
      case 13:
        return <Screen13_Alerts onNavigate={setCurrentScreen} />;
      case 14:
        return <Screen14_Tools onNavigate={setCurrentScreen} />;
      default:
        return <Screen01_Splash onNavigate={setCurrentScreen} initialStep={0} />;
    }
  };

  const screenMetadata = [
    { num: 1, title: 'Welcome / Launch', subtitle: '3D Luxury Emblem & Trust Pillars' },
    { num: 1.1, title: 'Global Traces', subtitle: '3D Translucent Globe & Telemetry' },
    { num: 1.2, title: 'Flow of Funds', subtitle: 'Multi-Chain Sankey & Risk Alerts' },
    { num: 1.3, title: 'Bigger Picture', subtitle: 'Behavior Insights & Threat Radar' },
    { num: 2, title: 'Home Dashboard', subtitle: 'Global Metrics & Recent List' },
    { num: 3, title: 'Investigate Anything', subtitle: 'Address Search & Forensics Filter' },
    { num: 4, title: 'Analysing Evidence', subtitle: '8-Stage Forensic Pipeline' },
    { num: 5, title: 'Investigation Result', subtitle: 'Risk Score & Flagged Reasons' },
    { num: 6, title: 'Risk Analysis', subtitle: 'Radial Gauge & Signal Bars' },
    { num: 7, title: 'Transaction Details', subtitle: 'Confirmed TX & Block Metrics' },
    { num: 8, title: 'Transaction Flow', subtitle: 'Radial Sankey Node Ribbons' },
    { num: 9, title: 'Address Details', subtitle: 'Balance Sparkline & Analytics' },
    { num: 10, title: 'Detected Patterns', subtitle: 'Peeling Chains & Burst Activity' },
    { num: 11, title: 'Graph Analysis', subtitle: 'Visualize Connections Topology' },
    { num: 12, title: 'AI Investigator', subtitle: 'Autonomous AI Forensic Chat' },
    { num: 13, title: 'Risk Alerts Feed', subtitle: 'Stay Ahead of Risk Monitoring' },
    { num: 14, title: 'Forensics Toolbox', subtitle: 'Powerful Forensic Tools Grid' },
  ];

  const isNative = typeof window !== 'undefined' && window.Capacitor && window.Capacitor.isNativePlatform ? window.Capacitor.isNativePlatform() : false;

  if (isNative) {
    const hasBottomNav = [2, 3, 11, 13, 14].includes(currentScreen);
    const isSplash = [1, 1.1, 1.2, 1.3].includes(currentScreen);
    return (
      <div className="native-app-container" style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-app)', position: 'relative', overflow: 'hidden' }}>
        <div
          className={`screen-viewport ${!hasBottomNav ? 'no-bottom-nav' : ''} ${isSplash ? 'is-splash' : ''}`}
          style={{ flex: 1, paddingTop: isSplash ? '0' : '10px' }}
        >
          {renderScreenContent(currentScreen)}
        </div>
        {hasBottomNav && (
          <BottomNavBar currentScreen={currentScreen} onNavigate={setCurrentScreen} />
        )}
      </div>
    );
  }

  return (
    <div className="app-studio">
      {/* Top Header & Screen Switcher */}
      <ScreenSwitcher
        currentScreen={currentScreen}
        onSelectScreen={handleSelectScreen}
        viewMode={viewMode}
        onToggleViewMode={setViewMode}
        isAutoTouring={isAutoTouring}
        onToggleAutoTour={() => setIsAutoTouring(!isAutoTouring)}
      />

      {/* Main Studio Viewport */}
      <main className="studio-main">
        {viewMode === 'device' ? (
          /* Single iPhone 16 Pro Frame Mode */
          <DeviceFrame
            currentScreen={currentScreen}
            onNavigate={setCurrentScreen}
            isScanning={currentScreen === 4}
            riskScore={72}
          >
            {renderScreenContent(currentScreen)}
          </DeviceFrame>
        ) : (
          /* All 12 Screens Side-by-Side Gallery Showcase Mode */
          <div className="gallery-grid">
            {screenMetadata.map((s) => (
              <div key={s.num} className="gallery-card">
                <div className="gallery-card-header">
                  <div className="gallery-card-badge">
                    <span className="num">{s.num}</span>
                    <span>{s.title}</span>
                  </div>
                  <button
                    className="gallery-card-action"
                    onClick={() => {
                      setCurrentScreen(s.num);
                      setViewMode('device');
                    }}
                  >
                    Interact →
                  </button>
                </div>

                <DeviceFrame
                  currentScreen={s.num}
                  onNavigate={setCurrentScreen}
                  isScanning={s.num === 4}
                  riskScore={72}
                  showBottomNav={false}
                >
                  {renderScreenContent(s.num)}
                </DeviceFrame>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
