import React, { useState, useEffect } from 'react';
import '../onboarding.css';

import Screen_Welcome from './onboarding/Screen_Welcome';
import Screen_GlobalTraces from './onboarding/Screen_GlobalTraces';
import Screen_FlowOfFunds from './onboarding/Screen_FlowOfFunds';
import Screen_BiggerPicture from './onboarding/Screen_BiggerPicture';

export default function Screen01_Splash({ onNavigate, initialStep = 0 }) {
  const [step, setStep] = useState(initialStep);

  useEffect(() => {
    setStep(initialStep);
  }, [initialStep]);

  const handleSkip = () => {
    onNavigate(2); // Navigate to Home Dashboard
  };

  const handleFinish = () => {
    onNavigate(2); // Navigate to Home Dashboard
  };

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      {step === 0 && (
        <Screen_Welcome
          onNext={() => setStep(1)}
          onSkip={handleSkip}
          onSelectStep={setStep}
        />
      )}
      {step === 1 && (
        <Screen_GlobalTraces
          onNext={() => setStep(2)}
          onBack={() => setStep(0)}
          onSkip={handleSkip}
          onSelectStep={setStep}
        />
      )}
      {step === 2 && (
        <Screen_FlowOfFunds
          onNext={() => setStep(3)}
          onBack={() => setStep(1)}
          onSkip={handleSkip}
          onSelectStep={setStep}
        />
      )}
      {step === 3 && (
        <Screen_BiggerPicture
          onNext={handleFinish}
          onBack={() => setStep(2)}
          onSkip={handleSkip}
          onSelectStep={setStep}
        />
      )}
    </div>
  );
}
