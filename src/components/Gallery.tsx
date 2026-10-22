"use client";

import { useEffect, useState } from "react";
import { GALLERY, type GalleryPhoto } from "@/data/media";

// Fisher-Yates shuffle on a copy.
function shuffle(photos: GalleryPhoto[]) {
  const out = [...photos];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

// Lookbook carousel: the photos are listed twice so the loop is seamless.
// The server renders them in file order; each visit reshuffles them once the page has hydrated,
// so server and client HTML match. The section is below the fold and the images are lazy,
// so the reorder happens before any of them is on screen.
export default function Gallery() {
  const [photos, setPhotos] = useState(GALLERY);
  useEffect(() => setPhotos(shuffle(GALLERY)), []);

  return (
    <section className="gallery" aria-label="Lookbook">
      <div className="gal-track">
        {photos.map((g) => (
          <figure key={g.src}>
            <img src={g.src} alt={g.alt} width={g.width} height={g.height} loading="lazy" decoding="async" />
          </figure>
        ))}
        {photos.map((g) => (
          <figure key={`${g.src}-dup`} aria-hidden="true">
            <img src={g.src} alt="" width={g.width} height={g.height} loading="lazy" decoding="async" />
          </figure>
        ))}
      </div>
    </section>
  );
}
