"use client";

import { useEffect, useRef } from "react";
import { FILM } from "@/data/media";

export default function Film() {
  const video = useRef<HTMLVideoElement>(null);

  // Respect reduced motion: hold the film on its first frame.
  useEffect(() => {
    const v = video.current;
    if (v && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      v.removeAttribute("autoplay");
      v.pause();
    }
  }, []);

  return (
    <section className="film" aria-label="Parché Studio, Collection N°01">
      <video ref={video} autoPlay muted loop playsInline preload="auto" poster={FILM.poster} aria-hidden="true">
        <source src={FILM.src} type="video/mp4" />
      </video>
      <div className="over">
        <div className="wrap">
          <h1>
            <span>Collection N°01</span>Borrowed Prints made Irreverent
          </h1>
          <a className="label cta" href="#edit">Discover the edit</a>
        </div>
      </div>
    </section>
  );
}
