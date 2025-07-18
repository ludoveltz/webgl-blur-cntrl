import type { AppProps } from 'next/app';
import { CntrlProvider, customItems } from '@cntrl-site/sdk-nextjs';
import { WebGLBlurComponent } from '../components/WebGLBlurComponent';
import { SimpleWebGLComponent } from '../components/SimpleWebGLComponent';
import '../styles/index.scss';

// Enregistrer le composant personnalisé WebGL (version simple pour debug)
customItems.define('webgl-blur', SimpleWebGLComponent);
// Version complète WebGL (commentée temporairement)
// customItems.define('webgl-blur', WebGLBlurComponent);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CntrlProvider>
      <Component {...pageProps} />
    </CntrlProvider>
  );
} 