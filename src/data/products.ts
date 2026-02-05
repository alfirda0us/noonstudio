import smileTee from "@/assets/products/smile-tee.jpg";
import beautifulTee from "@/assets/products/beautiful-tee.jpg";
import basicTee from "@/assets/products/basic-tee.jpg";
import tawakkalTee from "@/assets/products/tawakkal-tee.jpg";

export type ProductDetailData = {
  id: number;
  name: string;
  category: string;
  categorySlug: string;
  price: string;
  images: string[];
  isNew?: boolean;
  description: string[];
  details: Array<{ label: string; value: string }>;
  care: string[];
};

export const products: ProductDetailData[] = [
  {
    id: 1,
    name: "Smile Tee",
    category: "Kaos",
    categorySlug: "kaos",
    price: "Rp189.000",
    images: [smileTee],
    isNew: true,
    description: [
      "Kaos harian dengan siluet bersih dan feel yang ringan—dibuat untuk aktivitas dari pagi sampai malam.",
      "Detail grafis sederhana memberi aksen tanpa berlebihan, tetap sopan dan mudah dipadukan.",
    ],
    details: [
      { label: "Bahan", value: "Cotton combed (lembut & breathable)" },
      { label: "Fit", value: "Regular" },
      { label: "Kerah", value: "Rib" },
      { label: "Warna", value: "Biru" },
    ],
    care: [
      "Cuci terbalik (inside-out) dengan air dingin.",
      "Hindari pemutih.",
      "Jemur di tempat teduh.",
      "Setrika suhu rendah (hindari langsung di area print).",
    ],
  },
  {
    id: 2,
    name: "Beautiful Tee",
    category: "Kaos",
    categorySlug: "kaos",
    price: "Rp189.000",
    images: [beautifulTee],
    isNew: true,
    description: [
      "Kaos statement yang tetap minimal: tipografi rapi, warna tenang, dan potongan yang nyaman.",
      "Cocok untuk daily wear—sekolah, nongkrong, hingga aktivitas ibadah.",
    ],
    details: [
      { label: "Bahan", value: "Cotton combed (halus & nyaman)" },
      { label: "Fit", value: "Regular" },
      { label: "Warna", value: "Hijau" },
      { label: "Detail", value: "Print depan" },
    ],
    care: [
      "Cuci terbalik (inside-out) dengan air dingin.",
      "Gunakan deterjen lembut.",
      "Jangan rendam terlalu lama.",
      "Setrika suhu rendah.",
    ],
  },
  {
    id: 3,
    name: "Basic Tee",
    category: "Kaos",
    categorySlug: "kaos",
    price: "Rp189.000",
    images: [basicTee],
    description: [
      "Kaos basic dengan tampilan rapi—mudah jadi andalan untuk layering atau dipakai sendiri.",
      "Sederhana, bersih, dan cocok untuk gaya modest sehari-hari.",
    ],
    details: [
      { label: "Bahan", value: "Cotton combed" },
      { label: "Fit", value: "Regular" },
      { label: "Warna", value: "Maroon" },
      { label: "Gaya", value: "Minimal" },
    ],
    care: [
      "Cuci dengan warna senada.",
      "Hindari pemutih.",
      "Jemur di tempat teduh.",
      "Setrika suhu rendah.",
    ],
  },
  {
    id: 4,
    name: "Tawakkal Tee",
    category: "Kaos",
    categorySlug: "kaos",
    price: "Rp189.000",
    images: [tawakkalTee],
    description: [
      "Kaos dengan aksen tulisan Arab yang bermakna—tetap elegan tanpa terlihat ramai.",
      "Didesain untuk kamu yang ingin tampil sopan, minimal, dan berkarakter.",
    ],
    details: [
      { label: "Bahan", value: "Cotton combed" },
      { label: "Fit", value: "Regular" },
      { label: "Warna", value: "Hijau" },
      { label: "Detail", value: "Print depan" },
    ],
    care: [
      "Cuci terbalik (inside-out) untuk menjaga print.",
      "Hindari pengering suhu tinggi.",
      "Jemur di tempat teduh.",
      "Setrika suhu rendah (hindari langsung di area print).",
    ],
  },
];

export const getProductById = (id: number) => products.find((p) => p.id === id);
