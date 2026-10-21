// Opening film: the browser plays the first source it supports. The MP4 (H.264) is the
// web version of the original home.MOV (HEVC), which stays as a fallback.
export const FILM = {
  sources: [
    { src: "/videos/home.mp4", type: "video/mp4" },
    { src: "/videos/home.MOV", type: "video/quicktime" },
  ],
  poster: "/img/film-poster.jpg",
};

// Lookbook photographs, in /public/img. Portrait shots are 1200x1800; set landscape: true for 1800x1200.
export const GALLERY = [
  {
    src: "/img/gallery-1.webp",
    alt: "Parché Studio cropped jacket with a monogram patch, worn with zebra trousers",
  },
  {
    src: "/img/gallery-2.webp",
    alt: "Parché Studio check blazer with a monogram patch, worn on a Madrid street",
  },
  {
    src: "/img/gallery-3.webp",
    alt: "Parché Studio jeans with the red embroidered logo, worn seated on a Madrid kerb",
  },
  {
    src: "/img/gallery-5.webp",
    alt: "Parché Studio black blazer with a white monogram patch, worn with embroidered jeans",
  },
  {
    src: "/img/gallery-6.webp",
    alt: "Parché Studio white jeans with monogram patch pockets and red embroidery",
  },
  {
    src: "/img/gallery-7.webp",
    alt: "Parché Studio jeans with purple monogram patch pockets, worn on a Madrid street",
  },
  {
    src: "/img/gallery-8.webp",
    alt: "Parché Studio navy blazer with a burgundy monogram patch, worn with white trousers",
  },
  {
    src: "/img/gallery-9.webp",
    alt: "Parché Studio black blazer with a white monogram patch, worn with embroidered jeans",
  },
  {
    src: "/img/gallery-10.webp",
    alt: "Parché Studio white jeans with monogram patch pockets and red embroidery",
  },
  {
    src: "/img/gallery-11.webp",
    alt: "Parché Studio jeans with purple monogram patch pockets, worn on a Madrid street",
  },
  {
    src: "/img/gallery-12.webp",
    alt: "Parché Studio navy blazer with a burgundy monogram patch, worn with white trousers",
  },
  {
    src: "/img/gallery-13.webp",
    alt: "Parché Studio black trousers with a white monogram patch, worn with a navy blazer",
  },
  {
    src: "/img/gallery-14.webp",
    alt: "Parché Studio white jeans with monogram patch pockets and red embroidery",
  },
  {
    src: "/img/gallery-15.webp",
    alt: "Parché Studio jeans with purple monogram patch pockets, worn on a Madrid street",
  },
];
