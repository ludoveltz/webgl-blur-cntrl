import React from 'react';

// Composant Progressive Blur simplifié pour Control CMS
export const WebGLProgressiveBlur = ({ 
  blurStrength = 15,
  topHeight = 25,
  bottomHeight = 25
}: {
  blurStrength?: number;
  topHeight?: number;
  bottomHeight?: number;
}) => {
  return (
    <>
      {/* Flou progressif HAUT */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: `${topHeight}%`,
          background: `linear-gradient(to bottom, 
            rgba(255,255,255,0.05) 0%, 
            transparent 100%)`,
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

      {/* Flou progressif BAS */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: `${bottomHeight}%`,
          background: `linear-gradient(to top, 
            rgba(255,255,255,0.05) 0%, 
            transparent 100%)`,
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

      {/* Structure Control CMS cachée */}
      <figure className="media" style={{ display: 'none' }}>
        <img alt="Progressive Blur Effect" />
      </figure>
    </>
  );
};

export default WebGLProgressiveBlur; 