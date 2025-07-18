import type { AppProps } from 'next/app';
import { CntrlProvider, customItems } from '@cntrl-site/sdk-nextjs';
import { TestComponent } from '../components/TestComponent';

// Enregistrer le composant personnalisé WebGL (version ultra-simple pour debug)
customItems.define('webgl-blur', TestComponent);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CntrlProvider>
      <Component {...pageProps} />
    </CntrlProvider>
  );
} 