import React, { useEffect, useRef, useState } from 'react';

interface WebGLBlurComponentProps {
  images?: Array<{
    src: string;
    alt: string;
  }>;
}

export const WebGLBlurComponent: React.FC<WebGLBlurComponentProps> = ({ 
  images = [
    { src: '/img/6.webp', alt: 'fashion' },
    { src: '/img/1.webp', alt: 'silueta' },
    { src: '/img/2.webp', alt: 'bag' },
    { src: '/img/3.webp', alt: 'shoes' },
    { src: '/img/4.webp', alt: 'model' },
    { src: '/img/5.webp', alt: 'accessories' }
  ] 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const glInstanceRef = useRef<any>(null);
  const [isWebGLSupported, setIsWebGLSupported] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Vérifier le support WebGL
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (!gl) {
      setIsWebGLSupported(false);
      setIsLoading(false);
      return;
    }

    const initWebGL = async () => {
      if (glInstanceRef.current) {
        return;
      }

      try {
        // Import dynamique pour éviter les erreurs SSR
        const { default: GL } = await import('../src/js/components/GL');
        
        // Attendre que les images soient dans le DOM
        const checkImages = () => {
          const mediaElements = document.querySelectorAll('.media img');
          return mediaElements.length > 0;
        };

        if (checkImages()) {
          glInstanceRef.current = new GL();
          setIsLoading(false);
        } else {
          // Réessayer après un court délai
          setTimeout(() => {
            if (checkImages()) {
              glInstanceRef.current = new GL();
              setIsLoading(false);
            }
          }, 500);
        }
      } catch (error) {
        console.error('Erreur lors de l\'initialisation WebGL:', error);
        setIsWebGLSupported(false);
        setIsLoading(false);
      }
    };

    const timeoutId = setTimeout(initWebGL, 200);

    return () => {
      clearTimeout(timeoutId);
      if (glInstanceRef.current && glInstanceRef.current.destroy) {
        glInstanceRef.current.destroy();
      }
      glInstanceRef.current = null;
    };
  }, []);

  if (!isWebGLSupported) {
    return (
      <div className="webgl-fallback">
        <h2>WebGL non supporté</h2>
        <p>Votre navigateur ne supporte pas WebGL. Voici les images sans effet:</p>
        <div className="images-grid">
          {images.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image.src} alt={image.alt} style={{width: '100%', height: 'auto'}} />
              <small>({String(index + 1).padStart(2, '0')})</small>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="webgl-blur-container">
      {isLoading && (
        <div className="loading-overlay">
          <p>Chargement de l'effet WebGL...</p>
        </div>
      )}
      <canvas id="gl" />
      <div className="media-wrapper">
        {images.map((image, index) => (
          <div key={index} className="media-container">
            <figure className="media">
              <img 
                src={image.src} 
                alt={image.alt}
                onLoad={() => {
                  // Déclencher l'initialisation une fois toutes les images chargées
                  const allImages = document.querySelectorAll('.media img');
                  const loadedImages = Array.from(allImages).filter(img => (img as HTMLImageElement).complete);
                  if (loadedImages.length === allImages.length && !glInstanceRef.current) {
                    // Toutes les images sont chargées, on peut initialiser WebGL
                  }
                }}
              />
            </figure>
            <small>({String(index + 1).padStart(2, '0')})</small>
          </div>
        ))}
      </div>
    </div>
  );
}; 