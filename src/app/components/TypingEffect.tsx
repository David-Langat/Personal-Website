'use client';

import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  text: string;
  speed?: number; // milliseconds per character
  onComplete?: () => void; // Callback when typing is complete
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed = 150, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeoutId);
    } else if (onComplete) {
      onComplete();
    }
  }, [index, text, speed, onComplete]);

  return (
    <span className="font-mono">
      {displayedText}
      <span className="animate-blink inline-block w-2 h-6 bg-current ml-1"></span>
    </span>
  );
};

export default TypingEffect;
