'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AnimationContextType {
  isIntroDone: boolean;
  setIntroDone: (isDone: boolean) => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const [isIntroDone, setIntroDone] = useState(false);

  return (
    <AnimationContext.Provider value={{ isIntroDone, setIntroDone }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
};
