import { model, Schema } from "mongoose";

interface IProduct {
  name: string;
  description: string;
  price: number;
  size: string;
  image: [string];
  is_New: boolean;
  quantity: number;
  discount: number;
  category: Schema.Types.ObjectId;
  reviews: [Schema.Types.ObjectId];
}

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      default: "comment",
    },
    size: {
      type: String,
      enum: ["S", "M", "L", "XL", "XXL"],
      default: "S",
    },
    image: {
      type: [String],
      default: ["img"],
    },
    is_New: { type: Boolean, default: true },
    quantity: { type: Number, required: true },
    discount: { type: Number, defualt: 0 },
    category: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Category",
    },
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
  },
  {
    timestamps: true,
  }
);
const Product = model<IProduct>("Product", productSchema);

export default Product;
