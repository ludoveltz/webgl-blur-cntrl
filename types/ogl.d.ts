declare module 'ogl' {
  export class Renderer {
    constructor(options?: { 
      canvas?: HTMLCanvasElement; 
      alpha?: boolean; 
      antialias?: boolean;
    });
    gl: any;
    setSize(width: number, height: number): void;
    render(options: { scene: Transform; camera: Camera }): void;
  }

  export class Camera {
    constructor(gl: any);
    fov: number;
    position: { z: number };
    aspect: number;
    perspective(options: { aspect: number }): void;
  }

  export class Transform {
    constructor();
  }

  export class Plane {
    constructor(gl: any, options?: {
      heightSegments?: number;
      widthSegments?: number;
    });
  }

  export class Mesh {
    constructor(gl: any, options: { 
      geometry: any; 
      program: any; 
    });
    setParent(parent: Transform): void;
    scale: { x: number; y: number; z: number };
    position: { x: number; y: number; z: number };
    program: Program;
  }

  export class Program {
    constructor(gl: any, options: {
      vertex: string;
      fragment: string;
      uniforms?: any;
      depthTest?: boolean;
      depthWrite?: boolean;
      transparent?: boolean;
    });
    uniforms: any;
  }

  export class Texture {
    constructor(gl: any, options?: {
      generateMipmaps?: boolean;
    });
    image: HTMLImageElement;
  }
} 