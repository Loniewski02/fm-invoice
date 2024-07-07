import { NextResponse } from "next/server";

export async function POST(req: any) {
  try {
    const data = await req.formData();

    const street = data.get("street-address");
    const city = data.get("city");
    const postCode = data.get("post-code");
    const country = data.get("country");

    if (street === "" || city === "" || postCode === "" || country === "") {
      return NextResponse.json({
        message: "Inputs can't be empty",
        status: 500,
      });
    }
    return NextResponse.json({
      message: "Successfully saved",
      status: 200,
      data: {
        street,
        city,
        postCode,
        country,
      },
    });
  } catch (e) {
    return NextResponse.json({
      message: `An error occured: ${e}`,
      status: 500,
    });
  }
}
