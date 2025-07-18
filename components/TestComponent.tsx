import React from 'react';

export const TestComponent: React.FC = () => {
  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#ff4444',
      color: 'white',
      textAlign: 'center',
      fontSize: '24px',
      fontWeight: 'bold',
      border: '3px solid #000',
      margin: '10px'
    }}>
      ✅ COMPOSANT WEBGL FONCTIONNE !
      <br />
      <br />
      🎉 Intégration Control CMS réussie !
      <br />
      <br />
      <small style={{ fontSize: '16px' }}>
        Si vous voyez ce message rouge, 
        l'intégration fonctionne parfaitement !
      </small>
    </div>
  );
}; 