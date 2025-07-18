import type { AppProps } from 'next/app';
import { CntrlProvider, customItems } from '@cntrl-site/sdk-nextjs';
import { WebGLBlurComponent } from '../components/WebGLBlurComponent';
import '../styles/index.scss';

// Enregistrer le composant personnalisé WebGL
customItems.define('webgl-blur', WebGLBlurComponent);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CntrlProvider>
      <Component {...pageProps} />
    </CntrlProvider>
  );
} 