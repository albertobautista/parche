export default function Header() {
  return (
    <header className="top">
      <div className="wrap">
        <nav className="label" aria-label="Sections">
          <a href="#edit">The Edit</a>
          <a href="#about">Manifesto</a>
        </nav>
        <a className="logo" href="#top" aria-label="Parché Studio">
          <b>PARCHÉ</b>
          <i>STUDIO</i>
        </a>
        <nav className="label" aria-hidden="true"></nav>
      </div>
    </header>
  );
}
