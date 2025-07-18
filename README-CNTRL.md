# Intégration WebGL Progressive Blur avec Control CMS

Ce guide vous explique comment intégrer l'effet WebGL de flou progressif dans votre site Control CMS.

## Configuration initiale

### 1. Obtenir votre URL API Control

1. Connectez-vous sur https://app.cntrl.site
2. Accédez à votre Project Dashboard
3. Allez dans l'onglet "Development"
4. Copiez la valeur de `CNTRL_API_URL`

### 2. Configuration de l'environnement

Modifiez le fichier `.env.local` :

```env
CNTRL_API_URL=https://preview.cntrl.site/your-project-id
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Installation des dépendances

```bash
npm install
```

## Utilisation du composant dans Control CMS

### 1. Ajouter un composant personnalisé

1. Dans Control CMS, activez le "dev mode" dans Account Settings
2. Dans l'éditeur, allez sur une page de votre projet
3. Cliquez sur l'icône puzzle dans la barre d'outils
4. Glissez pour créer une zone sur la page
5. Nommez votre composant "webgl-blur"

### 2. Le composant est déjà configuré

Le composant `WebGLBlurComponent` est déjà enregistré dans `pages/_app.tsx` :

```tsx
customItems.define('webgl-blur', WebGLBlurComponent);
```

### 3. Personnalisation des images

Vous pouvez personnaliser les images affichées en modifiant le composant dans `components/WebGLBlurComponent.tsx` :

```tsx
const images = [
  { src: '/img/votre-image-1.webp', alt: 'Description' },
  { src: '/img/votre-image-2.webp', alt: 'Description' },
  // ... autres images
];
```

### 4. Ajout d'images statiques

Placez vos images dans le dossier `static/img/` :

```
static/
  img/
    votre-image-1.webp
    votre-image-2.webp
    ...
```

## Développement local

### Démarrer le serveur de développement

```bash
npm run dev
```

### Générer les layouts Control

```bash
npm run generate-layouts
```

Cette commande génère le fichier `styles/cntrl.scss` avec les breakpoints configurés dans Control CMS.

## Styles et personnalisation

### Utilisation des mixins Control

Vous pouvez utiliser les mixins générés par Control dans vos styles :

```scss
@import 'styles/cntrl';

.my-custom-style {
  @include for('mobile') {
    padding: size(20);
  }
  
  @include for('tablet') {
    padding: size(40);
  }
  
  @include for('desktop') {
    padding: size(60);
  }
}
```

### Personnalisation du composant WebGL

Le fichier `styles/components/webgl-blur.scss` contient les styles du composant. Vous pouvez modifier :

- La taille et position du canvas
- L'apparence des conteneurs d'images
- Les animations et transitions

## Déploiement

### 1. Connecter votre repository GitHub

1. Dans Control CMS, allez dans Project Dashboard → Development → Github
2. Cliquez "Authorize" et sélectionnez votre repository
3. Configurez le redéploiement automatique si souhaité

### 2. Build de production

Avant de déployer, testez la build :

```bash
npm run export
```

### 3. Variables d'environnement

Ajoutez vos variables d'environnement dans Control CMS :
- Project Dashboard → Development → "Add new variable"

## Structure des fichiers

```
├── components/
│   └── WebGLBlurComponent.tsx    # Composant React principal
├── pages/
│   ├── _app.tsx                  # Configuration Control CMS
│   └── index.tsx                 # Page d'accueil
├── src/
│   ├── js/components/
│   │   ├── GL.ts                 # Classe WebGL principale
│   │   └── Media.ts              # Classe pour chaque image
│   └── shaders/
│       ├── vertex.glsl           # Shader vertex
│       └── fragment.glsl         # Shader fragment
├── styles/
│   ├── components/
│   │   └── webgl-blur.scss       # Styles du composant
│   └── index.scss                # Styles principaux
└── static/
    └── img/                      # Images statiques
```

## Personnalisation avancée

### Modifier l'effet de flou

Dans `src/shaders/fragment.glsl`, vous pouvez ajuster :

- `uBlurStrength` : Intensité du flou
- `repeats` : Qualité du flou (plus = meilleur mais plus lent)
- La fonction `gradient` : Zone d'application du flou

### Ajouter des contrôles interactifs

Vous pouvez ajouter des props au composant React pour contrôler l'effet :

```tsx
interface WebGLBlurComponentProps {
  blurStrength?: number;
  animationSpeed?: number;
  images?: Array<{src: string; alt: string}>;
}
```

## Dépannage

### Problèmes communs

1. **Canvas non trouvé** : Vérifiez que l'ID `#gl` est unique sur la page
2. **Images non chargées** : Vérifiez les chemins vers les images dans `static/img/`
3. **Performance** : Réduisez le nombre de `repeats` dans le shader fragment

### Debug

Ouvrez la console développeur pour voir les erreurs WebGL ou de chargement d'images.

## Support

Pour toute question sur Control CMS, consultez la documentation officielle ou contactez le support Control. 