import { GALLERY } from "@/data/media";

// Intrinsic size lets the browser reserve each photo's width before it loads.
const size = (g: { landscape?: boolean }) => (g.landscape ? { width: 1800, height: 1200 } : { width: 1200, height: 1800 });

// Lookbook carousel: the photos are listed twice so the loop is seamless.
export default function Gallery() {
  return (
    <section className="gallery" aria-label="Lookbook">
      <div className="gal-track">
        {GALLERY.map((g) => (
          <figure key={g.src}>
            <img src={g.src} alt={g.alt} {...size(g)} loading="lazy" decoding="async" />
          </figure>
        ))}
        {GALLERY.map((g) => (
          <figure key={`${g.src}-dup`} aria-hidden="true">
            <img src={g.src} alt="" {...size(g)} loading="lazy" decoding="async" />
          </figure>
        ))}
      </div>
    </section>
  );
}
