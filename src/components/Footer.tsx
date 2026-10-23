export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div>
          <span className="logo">
            <b>PARCHÉ</b>
            <i>STUDIO</i>
          </span>
          <p style={{ marginTop: 22 }}>
            High Fashion, Hand Made.
            <br />
            Borrowed Prints made Irreverent.
          </p>
        </div>
        <div>
          <h4 className="label">The Waitlist</h4>
          <p>A single letter when your piece is ready. Nothing more.</p>
        </div>
        <div>
          <h4 className="label">Correspondence</h4>
          <p>
            <a
              href="https://www.instagram.com/parche_studio_/"
              target="_blank"
              rel="noopener noreferrer"
              className="ig"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4.2" />
                <circle cx="17.4" cy="6.6" r="0.6" />
              </svg>
              Instagram @parche_studio_
            </a>
          </p>
        </div>
        <div className="legal label">
          <span>© 2026 Parché Studio</span>
          <span>Currently: Collection N°01</span>
        </div>
      </div>
    </footer>
  );
}
