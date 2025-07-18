import React from 'react';
import { SimpleWebGLComponent } from '../components/SimpleWebGLComponent';

export default function TestSimplePage() {
  return (
    <div style={{ padding: '2rem', background: '#000', minHeight: '100vh' }}>
      <h1 style={{ color: 'white', textAlign: 'center' }}>Test Composant Simple</h1>
      <SimpleWebGLComponent />
    </div>
  );
} 