import React from 'react';

export const SimpleWebGLComponent: React.FC = () => {
  return (
    <div style={{
      padding: '2rem',
      background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
      color: 'white',
      textAlign: 'center',
      borderRadius: '10px',
      minHeight: '300px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h2>🎨 WebGL Blur Effect</h2>
      <p>Composant WebGL Progressive Blur chargé avec succès !</p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem',
        marginTop: '1rem',
        width: '100%',
        maxWidth: '600px'
      }}>
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div key={num} style={{
            background: 'rgba(255,255,255,0.2)',
            padding: '1rem',
            borderRadius: '8px',
            backdropFilter: 'blur(10px)'
          }}>
            Image {num}
          </div>
        ))}
      </div>
      <small style={{ marginTop: '1rem', opacity: 0.8 }}>
        Version de test - Si vous voyez ceci, l'intégration fonctionne !
      </small>
    </div>
  );
}; 