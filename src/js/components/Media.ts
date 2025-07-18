import { Mesh, Program, Texture, Renderer, Transform, Plane } from 'ogl';
import vertexShader from '../../shaders/vertex.glsl';
import fragmentShader from '../../shaders/fragment.glsl';

interface MediaOptions {
  gl: any;
  geometry: Plane;
  scene: Transform;
  renderer: Renderer;
  screen: { width: number; height: number };
  viewport: { width: number; height: number };
  $el: HTMLElement;
  img: HTMLImageElement;
}

interface ResizeOptions {
  screen?: { width: number; height: number };
  viewport?: { width: number; height: number };
}

export default class Media {
  private gl: any;
  private geometry: Plane;
  private scene: Transform;
  private renderer: Renderer;
  private screen: { width: number; height: number };
  private viewport: { width: number; height: number };
  private img: HTMLImageElement;
  private $el: HTMLElement;
  private scroll: number = 0;
  private blurStrength: number = 1;
  private program!: Program;
  private plane!: Mesh;
  private x: number = 0;
  private y: number = 0;

  constructor({ gl, geometry, scene, renderer, screen, viewport, $el, img }: MediaOptions) {
    this.gl = gl;
    this.geometry = geometry;
    this.scene = scene;
    this.renderer = renderer;
    this.screen = screen;
    this.viewport = viewport;
    this.img = img;
    this.$el = $el;

    this.createShader();
    this.createMesh();
    this.onResize();
  }

  private createShader() {
    const texture = new Texture(this.gl, {
      generateMipmaps: false
    });

    this.program = new Program(this.gl, {
      depthTest: false,
      depthWrite: false,
      fragment: fragmentShader,
      vertex: vertexShader,
      uniforms: {
        tMap: { value: texture },
        uPlaneSize: { value: [0, 0] },
        uImageSize: { value: [0, 0] },
        uViewportSize: { value: [this.viewport.width, this.viewport.height] },
        uBlurStrength: { value: this.blurStrength },
        uTime: { value: 100 * Math.random() },
      },
      transparent: true
    });

    // Charger l'image
    if (this.img.complete && this.img.naturalWidth > 0) {
      this.onImageLoad();
    } else {
      this.img.onload = () => this.onImageLoad();
    }
  }

  private onImageLoad() {
    const texture = this.program.uniforms.tMap.value as Texture;
    texture.image = this.img;
    this.program.uniforms.uImageSize.value = [this.img.naturalWidth, this.img.naturalHeight];
  }

  private createMesh() {
    this.plane = new Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program
    });

    this.plane.setParent(this.scene);
  }

  public onScroll(scroll: number) {
    this.scroll = scroll;
    this.setY(this.y);
  }

  public update() {
    this.program.uniforms.uTime.value += 0.04;
  }

  private setScale(x?: number, y?: number) {
    const width = x || this.$el.offsetWidth;
    const height = y || this.$el.offsetHeight;
    
    this.plane.scale.x = this.viewport.width * width / this.screen.width;
    this.plane.scale.y = this.viewport.height * height / this.screen.height;

    this.program.uniforms.uPlaneSize.value = [this.plane.scale.x, this.plane.scale.y];
  }

  private setX(x: number = 0) {
    this.x = x;
    this.plane.position.x = -(this.viewport.width / 2) + (this.plane.scale.x / 2) + (this.x / this.screen.width) * this.viewport.width;
  }

  private setY(y: number = 0) {
    this.y = y;
    this.plane.position.y = (this.viewport.height / 2) - (this.plane.scale.y / 2) - ((this.y - this.scroll) / this.screen.height) * this.viewport.height;
  }

  public onResize({ screen, viewport }: ResizeOptions = {}) {
    if (screen) {
      this.screen = screen;
    }

    if (viewport) {
      this.viewport = viewport;
      this.program.uniforms.uViewportSize.value = [this.viewport.width, this.viewport.height];
    }

    this.setScale();
    this.setX(this.$el.offsetLeft);
    this.setY(this.$el.offsetTop);
  }

  public setBlurStrength(strength: number) {
    this.blurStrength = strength;
    this.program.uniforms.uBlurStrength.value = strength;
  }

  public destroy() {
    // Cleanup si nécessaire
  }
} 