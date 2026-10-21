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
            >
              Instagram @parche_studio_
            </a>
          </p>
        </div>
        <div className="legal label">
          <span>© 2026 Parché Studio</span>
          <span>Collection N°01</span>
        </div>
      </div>
    </footer>
  );
}
