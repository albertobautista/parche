# Parché Studio · Landing

Next.js 16 (App Router) + Tailwind CSS 4. Réplica de `web.html`: mismo diseño, tipografía (Jost vía `next/font`), colores y breakpoints.

## Arrancar

```bash
npm install
cp .env.example .env.local   # y rellena las variables
npm run dev                  # http://localhost:3000
```

## Reservas por correo

Cada botón **Reserve** envía `POST /api/reserve` con el id del artículo de su sección y el correo del usuario.
El servidor resuelve el nombre del artículo (el usuario no lo escribe) y manda un correo con Resend a `RESERVATION_TO_EMAIL`
(admite varios separados por coma), con el correo del cliente como *reply-to*.

| Variable | Para qué |
| --- | --- |
| `RESEND_API_KEY` | API key de https://resend.com |
| `RESERVATION_TO_EMAIL` | Correo que recibe las reservas |
| `RESERVATION_FROM_EMAIL` | Remitente; debe ser de un dominio verificado en Resend |

Sin `RESEND_API_KEY` o `RESERVATION_TO_EMAIL` el formulario muestra "Reservations open shortly", igual que el original.

## Imágenes y video

- Productos (nombre, precio, descripción, foto y foto al pasar el ratón): `src/data/products.ts`
- Video de portada y póster: `src/data/media.ts`

## Galería (lookbook)

1. Pon todas las fotos originales en `gallery-source/` (no se suben a git).
2. Corre `npm run gallery`: borra la galería anterior, convierte cada foto a WebP de 1800 px,
   las renombra `gallery-1.webp`, `gallery-2.webp`… en `public/img/gallery/` y regenera `src/data/gallery.generated.json`.
3. Sube a git `public/img/gallery/` y `src/data/gallery.generated.json`.

La web baraja las fotos en cada visita. Detalles (texto alternativo, fotos HEIC) en `gallery-source/README.md`.

## Estructura

- `src/app/globals.css` — los estilos de `web.html` portados tal cual; tokens de marca expuestos a Tailwind (`bg-bone`, `text-ink`, `bg-midnight`, `text-red`).
  Se omite el preflight de Tailwind para que el render sea idéntico al original.
- `src/components/` — una sección por componente (Header, Film, Statement, Edit, ReserveForm, Manifesto, Gallery, Faq, Footer).
- `src/app/api/reserve/route.ts` — envío del correo.
