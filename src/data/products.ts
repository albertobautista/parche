// Edit here: which photo shows which piece.
// Photographs live in /public/img; img is the main shot and img2 the second view.
// The first two pieces sit large at the top of One of One; the rest follow below.
// The reservation email uses a light JPEG of the main shot at /public/img/email/<id>.jpg.
export type Product = {
  id: string;
  name: string;
  price: number;
  img: string;
  img2?: string;
  desc?: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "walk-away",
    name: "Walk Away",
    price: 285,
    img: "/img/walk-away-1.webp",
    img2: "/img/walk-away-2.webp",
    desc: "A long blazer with a patch at the front, and a column of silk patches running the full length of the back.",
  },
  {
    id: "short-notice",
    name: "Short Notice",
    price: 205,
    img: "/img/short-notice-1.webp",
    img2: "/img/short-notice-2.webp",
    desc: "A cropped blazer with one patch set at the chest.",
  },
  {
    id: "front-row",
    name: "Front Row",
    price: 195,
    img: "/img/front-row-1.webp",
    img2: "/img/front-row-2.webp",
    desc: "An oversized blazer with a single patch over the chest.",
  },
  {
    id: "two-faced",
    name: "Two Faced",
    price: 175,
    img: "/img/two-faced-1.webp",
    img2: "/img/two-faced-2.webp",
    desc: "Denim with both back pockets patched, and a line embroidered in red at the waist.",
  },
  {
    id: "talk-back",
    name: "Talk Back",
    price: 155,
    img: "/img/talk-back-1.webp",
    img2: "/img/talk-back-2.webp",
    desc: "Denim with one patched back pocket, and a line embroidered in red at the waist.",
  },
];

export function findProduct(id: string) {
  return PRODUCTS.find((p) => p.id === id);
}
