import { Schema, model, models } from "mongoose";
import defaultProfilePic from "@/public/assets/image-avatar.png";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    name: {
      type: String,
    },
    image: {
      type: String,
      default: defaultProfilePic.src,
    },
    role: {
      type: String,
      required: true,
      default: "user",
    },
    address: {
      street: { type: String },
      city: { type: String },
      postCode: { type: String },
      country: { type: String },
    },
  },
  {
    timestamps: true,
  },
);

const User = models.User || model("User", UserSchema, "users");
export default User;
