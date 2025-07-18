export default function HomePage() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>WebGL Progressive Blur - Control CMS</h1>
      <p>Votre effet WebGL est prêt à être intégré dans Control CMS</p>
      <div style={{ marginTop: '2rem' }}>
        <a href="/test-webgl/" style={{ 
          padding: '1rem 2rem', 
          background: '#0070f3', 
          color: 'white', 
          textDecoration: 'none', 
          borderRadius: '5px' 
        }}>
          Voir l'effet WebGL
        </a>
      </div>
    </div>
  );
} 