import connectDB from "@/config/database";
import User from "@/models/User";
import { emailReg } from "@/utils/constant";

export async function POST(req: any) {
  let res: RegisterData | null;
  await connectDB();

  const data = await req.formData();
  const email = data.get("email");
  const password = data.get("password");
  const password2 = data.get("password2");

  if (
    !emailReg.test(email) ||
    !(password.trim().length > 8) ||
    !(password === password2)
  ) {
    res = null;
  } else {
    res = {
      email: email,
      password: password,
      password2: password2,
    };
    connectDB();
    const UserExist = await User.findOne({ email: res.email });
    console.log(UserExist);
    if (!UserExist) {
      await User.create({
        email: res.email,
        password: res.password,
        picture: "",
      });
    }
  }
  return Response.json(res);
}
