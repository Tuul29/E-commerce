export type Product = {
  name: string;
  price: number;
  images: string;
  discount: number;
};
export type Category = {
  _id: string;
  name: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type Cart = {
  product: Product;
  quantity: number;
}[];

export const products: Product[] = [
  {
    name: "The Prompt Magazine",
    price: 35000,
    images: "/products/image1.png",
    discount: 0,
  },
  {
    name: "Chunky Glyph Tee",
    price: 120000,
    images: "/products/image2.png",
    discount: 0,
  },
  {
    name: "All Smiles Nalgene",
    price: 120000,
    images: "/products/image3.png",
    discount: 0,
  },
  {
    name: "Wildflower Hoodie",
    price: 120000,
    images: "/products/image4.png",
    discount: 10,
  },
  {
    name: "Inkblot Tee",
    price: 120000,
    images: "/products/image5.png",
    discount: 0,
  },
  {
    name: "Gestures Longsleeve",
    price: 120000,
    images: "/products/image6.png",
    discount: 0,
  },
  {
    name: "Chunky Glyph Cap",
    price: 120000,
    images: "/products/image7.png",
    discount: 0,
  },
  {
    name: "Local Styles Crewneck",
    price: 120000,
    images: "/products/image8.png",
    discount: 0,
  },
  {
    name: "Inkblot Tee",
    price: 120000,
    images: "/products/image9.png",
    discount: 0,
  },
  {
    name: "Gestures Longsleeve",
    price: 120000,
    images: "/products/image10.png",
    discount: 0,
  },
  {
    name: "Inkblot Tee",
    price: 120000,
    images: "/products/image11.png",
    discount: 0,
  },
  {
    name: "Gestures Longsleeve",
    price: 120000,
    images: "/products/image12.png",
    discount: 0,
  },
  {
    name: "Inkblot Tee",
    price: 120000,
    images: "/products/image13.png",
    discount: 0,
  },
  {
    name: "Gestures Longsleeve",
    price: 120000,
    images: "/products/image11.png",
    discount: 0,
  },
];
