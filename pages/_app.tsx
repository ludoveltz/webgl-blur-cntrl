import '../styles/reset.css';
import type { AppProps } from 'next/app';
import { CntrlProvider, customItems } from '@cntrl-site/sdk-nextjs';
import '@cntrl-site/sdk/style/sdk.css';
import { WebGLProgressiveBlur } from '../components/WebGLProgressiveBlur';

// Enregistrer le composant WebGL Progressive Blur pour Control CMS
customItems.define('webgl-progressive-blur', WebGLProgressiveBlur);

function App({ Component, pageProps }: AppProps) {
  return (
    <CntrlProvider>
      <Component {...pageProps} />
    </CntrlProvider>
  );
}

export default App;
