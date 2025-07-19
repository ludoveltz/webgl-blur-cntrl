import React from 'react';
import { WebGLProgressiveBlur } from '../components/WebGLProgressiveBlur';

export default function TestWebGLPage() {
  return (
    <>
      {/* Effet Progressive Blur Global sur toute la page */}
      <WebGLProgressiveBlur 
        blurStrength={15}
        topHeight={30}
        bottomHeight={30}
      />
      
      <div style={{ 
        minHeight: '200vh',
        backgroundColor: '#f0f0f0',
        padding: '2rem'
      }}>
        <h1 style={{ 
          textAlign: 'center', 
          marginBottom: '2rem',
          color: '#333',
          fontSize: '3rem',
          fontWeight: 'bold',
          marginTop: '5rem'
        }}>
          🌟 Test Progressive Blur Global
        </h1>

        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '4rem'
        }}>
          
          {/* Section avec images */}
          <section style={{ textAlign: 'center' }}>
            <h2 style={{ color: '#555', marginBottom: '2rem', fontSize: '2rem' }}>
              📸 Galerie d'images
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginBottom: '2rem'
            }}>
              <img 
                src="https://picsum.photos/400/300?random=1" 
                alt="Test 1"
                style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
              />
              <img 
                src="https://picsum.photos/400/300?random=2" 
                alt="Test 2"
                style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
              />
              <img 
                src="https://picsum.photos/400/300?random=3" 
                alt="Test 3"
                style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
              />
            </div>
          </section>

          {/* Section avec texte */}
          <section>
            <h2 style={{ color: '#555', marginBottom: '2rem', fontSize: '2rem', textAlign: 'center' }}>
              📝 Contenu textuel
            </h2>
            <div style={{ 
              backgroundColor: 'white', 
              padding: '3rem', 
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              lineHeight: '1.8',
              fontSize: '1.1rem'
            }}>
              <p style={{ marginBottom: '1.5rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </section>

          {/* Section avec éléments colorés */}
          <section>
            <h2 style={{ color: '#555', marginBottom: '2rem', fontSize: '2rem', textAlign: 'center' }}>
              🎨 Éléments colorés
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem'
            }}>
              <div style={{ 
                backgroundColor: '#ff6b6b', 
                height: '150px', 
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.2rem',
                fontWeight: 'bold'
              }}>
                Rouge
              </div>
              <div style={{ 
                backgroundColor: '#4ecdc4', 
                height: '150px', 
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.2rem',
                fontWeight: 'bold'
              }}>
                Turquoise
              </div>
              <div style={{ 
                backgroundColor: '#45b7d1', 
                height: '150px', 
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.2rem',
                fontWeight: 'bold'
              }}>
                Bleu
              </div>
              <div style={{ 
                backgroundColor: '#f9ca24', 
                height: '150px', 
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'black',
                fontSize: '1.2rem',
                fontWeight: 'bold'
              }}>
                Jaune
              </div>
            </div>
          </section>

          {/* Instructions */}
          <section style={{ 
            backgroundColor: '#2c3e50', 
            color: 'white', 
            padding: '3rem', 
            borderRadius: '12px',
            textAlign: 'center',
            marginBottom: '5rem'
          }}>
            <h2 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>
              ✨ Instructions de test
            </h2>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              fontSize: '1.1rem',
              lineHeight: '1.8'
            }}>
              <li>🔍 Regardez le **haut** et le **bas** de la page</li>
              <li>📱 L'effet de flou progressif couvre 30% de l'écran en haut et en bas</li>
              <li>🌟 Le contenu au centre reste net</li>
              <li>📜 Scrollez pour voir l'effet en action</li>
              <li>💻 L'effet est global sur toute la viewport</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
} 