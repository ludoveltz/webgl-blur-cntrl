import { Renderer, Camera, Transform, Plane } from 'ogl';
import Media from './Media';

interface GLOptions {
  canvas?: HTMLCanvasElement;
}

interface Screen {
  width: number;
  height: number;
}

interface Viewport {
  width: number;
  height: number;
}

export default class GL {
  private images!: NodeListOf<HTMLElement>;
  private renderer!: Renderer;
  private gl!: any;
  private camera!: Camera;
  private scene!: Transform;
  private planeGeometry!: Plane;
  private medias!: Media[];
  private screen!: Screen;
  private viewport!: Viewport;
  private animationId: number | null = null;

  constructor(options: GLOptions = {}) {
    // Vérifier si on est côté client
    if (typeof window === 'undefined') return;

    this.images = document.querySelectorAll('.media');
    
    this.createRenderer(options.canvas);
    this.createCamera();
    this.createScene();

    this.onResize();

    this.createGeometry();
    this.createMedias();

    this.update();
    this.addEventListeners();
  }

  private createRenderer(canvas?: HTMLCanvasElement) {
    const canvasElement = canvas || document.querySelector('#gl') as HTMLCanvasElement;
    
    if (!canvasElement) {
      console.error('Canvas element not found');
      return;
    }

    this.renderer = new Renderer({
      canvas: canvasElement,
      alpha: true,
      antialias: true
    });

    this.gl = this.renderer.gl;
  }

  private createCamera() {
    this.camera = new Camera(this.gl);
    this.camera.fov = 45;
    this.camera.position.z = 20;
  }

  private createScene() {
    this.scene = new Transform();
  }

  private createGeometry() {
    this.planeGeometry = new Plane(this.gl, {
      heightSegments: 50,
      widthSegments: 100
    });
  }

  private createMedias() {
    this.medias = Array.from(this.images).map(item => {
      const img = item.querySelector('img') as HTMLImageElement;
      
      return new Media({
        gl: this.gl,
        geometry: this.planeGeometry,
        scene: this.scene,
        renderer: this.renderer,
        screen: this.screen,
        viewport: this.viewport,
        $el: item,
        img: img
      });
    });
  }

  private onResize = () => {
    if (typeof window === 'undefined') return;

    this.screen = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    this.renderer.setSize(this.screen.width, this.screen.height);

    this.camera.perspective({
      aspect: this.gl.canvas.width / this.gl.canvas.height
    });

    const fov = this.camera.fov * (Math.PI / 180);
    const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
    const width = height * this.camera.aspect;

    this.viewport = {
      height,
      width
    };

    if (this.medias) {
      this.medias.forEach(media => media.onResize({
        screen: this.screen,
        viewport: this.viewport
      }));
      this.onScroll({ scroll: window.scrollY });
    }
  };

  private onScroll = ({ scroll }: { scroll: number }) => {
    if (this.medias) {
      this.medias.forEach(media => media.onScroll(scroll));
    }
  };

  private update = () => {
    if (this.medias) {
      this.medias.forEach(media => media.update());
    }

    this.renderer.render({
      scene: this.scene,
      camera: this.camera
    });

    this.animationId = window.requestAnimationFrame(this.update);
  };

  private addEventListeners() {
    if (typeof window === 'undefined') return;
    
    window.addEventListener('resize', this.onResize);
    window.addEventListener('scroll', () => {
      this.onScroll({ scroll: window.scrollY });
    });
  }

  public destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize);
    }
    
    if (this.medias) {
      this.medias.forEach(media => {
        if (media.destroy) media.destroy();
      });
    }
  }
} 