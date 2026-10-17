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

Ahora son placeholders en `public/img/placeholder/`. Para poner los reales:

- Productos (nombre, precio, descripción, foto y foto al pasar el ratón): `src/data/products.ts`
- Video de portada, póster y fotos del carrusel: `src/data/media.ts`

Copia los archivos a `public/` (p. ej. `public/film.mp4`, `public/img/gallery-1.jpg`) y actualiza las rutas.

## Estructura

- `src/app/globals.css` — los estilos de `web.html` portados tal cual; tokens de marca expuestos a Tailwind (`bg-bone`, `text-ink`, `bg-midnight`, `text-red`).
  Se omite el preflight de Tailwind para que el render sea idéntico al original.
- `src/components/` — una sección por componente (Header, Film, Statement, Edit, ReserveForm, Manifesto, Gallery, Faq, Footer).
- `src/app/api/reserve/route.ts` — envío del correo.
