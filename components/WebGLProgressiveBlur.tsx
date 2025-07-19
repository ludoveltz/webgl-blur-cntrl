import React from 'react';

interface WebGLProgressiveBlurProps {
  blurStrength?: number;
  topHeight?: number;
  bottomHeight?: number;
}

export const WebGLProgressiveBlur: React.FC<WebGLProgressiveBlurProps> = ({ 
  blurStrength = 25,
  topHeight = 25,
  bottomHeight = 25
}) => {
  return (
    <>
      {/* FLOU PROGRESSIF HAUT - Effet fluide avec mask gradient */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: `${topHeight}%`,
          backdropFilter: `blur(${blurStrength}px)`,
          WebkitBackdropFilter: `blur(${blurStrength}px)`,
          mask: `linear-gradient(to bottom, 
            rgba(0,0,0,1) 0%, 
            rgba(0,0,0,0.9) 20%,
            rgba(0,0,0,0.7) 40%,
            rgba(0,0,0,0.4) 60%,
            rgba(0,0,0,0.2) 80%,
            rgba(0,0,0,0) 100%)`,
          WebkitMask: `linear-gradient(to bottom, 
            rgba(0,0,0,1) 0%, 
            rgba(0,0,0,0.9) 20%,
            rgba(0,0,0,0.7) 40%,
            rgba(0,0,0,0.4) 60%,
            rgba(0,0,0,0.2) 80%,
            rgba(0,0,0,0) 100%)`,
          pointerEvents: 'none',
          zIndex: 9999
        }}
      />

      {/* FLOU PROGRESSIF BAS - Effet fluide avec mask gradient */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: `${bottomHeight}%`,
          backdropFilter: `blur(${blurStrength}px)`,
          WebkitBackdropFilter: `blur(${blurStrength}px)`,
          mask: `linear-gradient(to top, 
            rgba(0,0,0,1) 0%, 
            rgba(0,0,0,0.9) 20%,
            rgba(0,0,0,0.7) 40%,
            rgba(0,0,0,0.4) 60%,
            rgba(0,0,0,0.2) 80%,
            rgba(0,0,0,0) 100%)`,
          WebkitMask: `linear-gradient(to top, 
            rgba(0,0,0,1) 0%, 
            rgba(0,0,0,0.9) 20%,
            rgba(0,0,0,0.7) 40%,
            rgba(0,0,0,0.4) 60%,
            rgba(0,0,0,0.2) 80%,
            rgba(0,0,0,0) 100%)`,
          pointerEvents: 'none',
          zIndex: 9999
        }}
      />

      {/* Badge de debug fixe */}
      <div
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          background: 'rgba(0,0,0,0.8)',
          color: 'white',
          padding: '8px 12px',
          borderRadius: '6px',
          fontSize: '12px',
          fontFamily: 'monospace',
          zIndex: 10000
        }}
      >
        🌟 Progressive Blur Fluide | Haut: {topHeight}% | Bas: {bottomHeight}% | Max: {blurStrength}px
      </div>
    </>
  );
}; 