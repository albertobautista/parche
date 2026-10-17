import { GALLERY } from "@/data/media";

// Lookbook carousel: the photos are listed twice so the loop is seamless.
export default function Gallery() {
  return (
    <section className="gallery" aria-label="Lookbook">
      <div className="gal-track">
        {GALLERY.map((g) => (
          <figure key={g.src}>
            <img src={g.src} alt={g.alt} loading="lazy" />
          </figure>
        ))}
        {GALLERY.map((g) => (
          <figure key={`${g.src}-dup`} aria-hidden="true">
            <img src={g.src} alt="" loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
}
