import { PRODUCTS } from "@/data/products";
import ReserveForm from "./ReserveForm";

export default function Edit() {
  return (
    <section className="edit" id="edit">
      <div className="wrap">
        <div className="edit-head">
          <div>
            <div className="label">The Edit · Waitlist</div>
            <h2>One of One</h2>
          </div>
          <p>
            Each name below is a fit: the garment, and the way its patch is
            placed. The print changes with every piece of garment. Leave your
            email beneath the fit you want, and receive the catalogue of every
            piece available in it, before anyone else.
          </p>
        </div>
        <div className="grid" id="spread">
          {PRODUCTS.map((p) => (
            <article className="look" key={p.id}>
              <figure>
                <img
                  src={p.img}
                  alt={`${p.name} by Parché Studio, worn on the street`}
                  loading="lazy"
                />
                {p.img2 && (
                  <img
                    className="alt"
                    src={p.img2}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                  />
                )}
              </figure>
              <div className="cap">
                <h3 className="label">{p.name}</h3>
                <span className="price">€{p.price}</span>
              </div>
              {p.desc && <p className="fit-desc">{p.desc}</p>}
              <ReserveForm productId={p.id} productName={p.name} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
