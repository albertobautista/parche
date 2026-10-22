# Fotos del lookbook (galería)

Suelta aquí **todas** las fotos de la galería, tal cual salen de la cámara o del móvil (JPG, PNG, WebP, TIFF).
Luego, desde la raíz del proyecto:

```bash
npm run gallery
```

El script borra la galería anterior, convierte cada foto a WebP (lado largo 1800 px, gira según la cámara),
las renombra `gallery-1.webp`, `gallery-2.webp`… en `public/img/gallery/` y actualiza `src/data/gallery.generated.json`.
La web las muestra en orden aleatorio en cada visita.

- Las fotos de esta carpeta **no** se suben a git (pesan mucho); solo se suben las WebP convertidas.
- Para quitar una foto, bórrala de aquí y vuelve a correr el script.
- Texto alternativo (opcional): en `alt.json`, `"nombre-original.jpg": "Descripción en inglés"`. Las que no estén usan uno genérico.
- Fotos HEIC del iPhone: si el script no las puede leer, expórtalas como JPG (o en el iPhone: Ajustes › Cámara › Formatos › Más compatible).
