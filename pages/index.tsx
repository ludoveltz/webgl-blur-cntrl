import React from 'react';

export default function HomePage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f8f9fa',
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h1 style={{ 
          fontSize: '3rem', 
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 'bold'
        }}>
          Progressive Blur Effect
        </h1>
        
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#6c757d', 
          marginBottom: '3rem',
          lineHeight: '1.6'
        }}>
          Effet de flou progressif maintenant disponible dans l&apos;éditeur Control CMS
        </p>

        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          textAlign: 'left'
        }}>
          <h2 style={{ 
            color: '#333', 
            marginBottom: '1.5rem',
            fontSize: '1.5rem'
          }}>
            ✨ Comment utiliser l&apos;effet dans Control CMS
          </h2>
          
          <ol style={{
            color: '#555',
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
            }}>WebGLProgressiveBlur</code></li>
            <li><strong>Configurez les paramètres</strong> :</li>
            <ul style={{ marginTop: '0.5rem', marginLeft: '1rem' }}>
              <li><code>blurStrength</code> : Intensité du flou (défaut: 15)</li>
              <li><code>topHeight</code> : Hauteur zone floue haut (défaut: 25%)</li>
              <li><code>bottomHeight</code> : Hauteur zone floue bas (défaut: 25%)</li>
            </ul>
            <li><strong>Sauvegardez et publiez</strong> votre page</li>
            <li>L&apos;effet de flou progressif apparaîtra ! 🎉</li>
          </ol>
        </div>

        <div style={{
          marginTop: '2rem',
          padding: '1rem',
          backgroundColor: '#e3f2fd',
          borderRadius: '8px',
          border: '1px solid #bbdefb'
        }}>
          <p style={{ 
            color: '#1565c0', 
            margin: 0,
            fontSize: '0.95rem'
          }}>
            💡 <strong>Conseil :</strong> L&apos;effet crée un flou progressif en haut et en bas de l&apos;écran, 
            laissant le contenu central net et lisible.
          </p>
        </div>
      </div>
    </div>
  );
} 