import React from 'react';

const WebGLProgressiveBlur = (props: any) => {
  const blurStrength = props.blurStrength || 15;
  const topHeight = props.topHeight || 25;
  const bottomHeight = props.bottomHeight || 25;

  return React.createElement('div', null, [
    // Flou progressif HAUT
    React.createElement('div', {
      key: 'blur-top',
      style: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: topHeight + '%',
        backdropFilter: 'blur(' + blurStrength + 'px)',
        WebkitBackdropFilter: 'blur(' + blurStrength + 'px)',
        mask: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 20%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0) 100%)',
        WebkitMask: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 20%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0) 100%)',
        pointerEvents: 'none',
        zIndex: 9999
      }
    }),
    
    // Flou progressif BAS
    React.createElement('div', {
      key: 'blur-bottom',
      style: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: bottomHeight + '%',
        backdropFilter: 'blur(' + blurStrength + 'px)',
        WebkitBackdropFilter: 'blur(' + blurStrength + 'px)',
        mask: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 20%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0) 100%)',
        WebkitMask: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 20%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0) 100%)',
        pointerEvents: 'none',
        zIndex: 9999
      }
    }),
    
    // Structure Control CMS cachée
    React.createElement('figure', {
      key: 'control-structure',
      className: 'media',
      style: { display: 'none' }
    }, React.createElement('img', { alt: 'Progressive Blur Effect' }))
  ]);
};

export { WebGLProgressiveBlur };
export default WebGLProgressiveBlur; 