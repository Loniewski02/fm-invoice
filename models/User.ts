import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, "Email already exists"],
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    picture: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const User = models.User || model("User", UserSchema, "users");
export default User;
