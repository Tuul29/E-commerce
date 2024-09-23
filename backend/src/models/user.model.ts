import { Schema, model } from "mongoose";

interface IUser {
  _id: Schema.Types.ObjectId;
  name: String;
  email: String;
  password: String;
  phoneNumber?: String;
  created_at: Date;
}

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, "Хэрэглэгчийн нэрийг заавал оруулна уу."],
  },
  email: {
    type: String,
    required: [true, "Хэрэглэгчийн имэйл хаягийг заавал оруулна уу."],
  },
  password: {
    type: String,
    minLenght: [8, "Хэрэглэгчийн нууц үг хамгийн багадаа 8 тэмдэгт байна."],
    required: [true, "Хэрэглэгчийн нууц үгийг заавал оруулна уу."],
  },

  phoneNumber: String,

  created_at: {
    type: Date,
    default: Date.now,
  },
});
const User = model("User", userSchema);

export default User;
