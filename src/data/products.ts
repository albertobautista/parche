// Edit here: which photo shows which piece.
// Images are placeholders until the real photographs arrive: drop the files in /public/img
// and point img / img2 to them (e.g. "/img/walk-away-1.jpg").
export type Product = {
  id: string;
  name: string;
  price: number;
  img: string;
  img2?: string;
  desc?: string;
};

export const PRODUCTS: Product[] = [
  { id: "walk-away",    name: "Walk Away",    price: 270, img: "/img/placeholder/walk-away-1.svg",    img2: "/img/placeholder/walk-away-2.svg",    desc: "A long blazer with a patch at the front, and a column of silk patches running the full length of the back." },
  { id: "front-row",    name: "Front Row",    price: 180, img: "/img/placeholder/front-row-1.svg",    img2: "/img/placeholder/front-row-2.svg",    desc: "An oversized blazer with a single patch over the chest." },
  { id: "short-notice", name: "Short Notice", price: 180, img: "/img/placeholder/short-notice-1.svg", img2: "/img/placeholder/short-notice-2.svg", desc: "A cropped blazer with one patch set at the chest." },
  { id: "two-faced",    name: "Two Faced",    price: 150, img: "/img/placeholder/two-faced-1.svg",    img2: "/img/placeholder/two-faced-2.svg",    desc: "Denim with both back pockets patched, and a line embroidered in red at the waist." },
  { id: "talk-back",    name: "Talk Back",    price: 135, img: "/img/placeholder/talk-back-1.svg",    img2: "/img/placeholder/talk-back-2.svg",    desc: "Denim with one patched back pocket, and a line embroidered in red at the waist." },
];

export function findProduct(id: string) {
  return PRODUCTS.find((p) => p.id === id);
}
