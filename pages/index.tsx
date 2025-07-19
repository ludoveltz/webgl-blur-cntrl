import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f5f5f5',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        marginBottom: '2rem',
        color: '#333',
        fontSize: '3rem'
      }}>
        🎯 WebGL Progressive Blur + Control CMS
      </h1>
      
      <p style={{
        fontSize: '1.2rem',
        color: '#666',
        marginBottom: '3rem',
        textAlign: 'center',
        maxWidth: '600px'
      }}>
        Votre effet WebGL Progressive Blur est maintenant intégré à Control CMS !
      </p>

      <div style={{
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <Link 
          href="/test-webgl/" 
          style={{
            backgroundColor: '#007acc',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            boxShadow: '0 4px 12px rgba(0,122,204,0.3)',
            transition: 'transform 0.2s'
          }}
          onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
        >
          🎮 Tester l&apos;effet WebGL
        </Link>
      </div>

      <div style={{
        marginTop: '4rem',
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        maxWidth: '800px'
      }}>
        <h2 style={{ color: '#333', marginBottom: '1.5rem' }}>
          📋 Utilisation dans Control CMS :
        </h2>
        
        <ol style={{ 
          color: '#666', 
          lineHeight: '1.8',
          fontSize: '1.1rem'
        }}>
          <li><strong>Activez le mode développeur</strong> dans Account Settings</li>
          <li>Dans l&apos;éditeur Control CMS, cliquez sur l&apos;icône <strong>🧩 puzzle</strong></li>
          <li>Cliquez sur <strong>&quot;custom&quot;</strong></li>
          <li>Tapez exactement : <code style={{ 
            backgroundColor: '#f0f0f0', 
            padding: '3px 8px',
            borderRadius: '4px',
            fontFamily: 'monospace'
          }}>webgl-progressive-blur</code></li>
          <li><strong>Sauvegardez et publiez</strong> votre page</li>
          <li>L&apos;effet de flou progressif apparaîtra ! 🎉</li>
        </ol>

        <div style={{
          marginTop: '2rem',
          padding: '1rem',
          backgroundColor: '#e8f5e8',
          borderRadius: '5px',
          border: '1px solid #c3e6c3'
        }}>
          <strong style={{ color: '#2d5a2d' }}>✅ Projet prêt :</strong>
          <ul style={{ color: '#2d5a2d', marginTop: '0.5rem' }}>
            <li>✅ Composant WebGL Progressive Blur créé</li>
            <li>✅ Shaders exacts selon votre code original</li>
            <li>✅ Enregistré dans Control CMS</li>
            <li>🎯 Ready for production !</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 