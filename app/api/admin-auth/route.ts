import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  const validEmail =
    process.env.ADMIN_EMAIL || "klientka@rolka-ubezpieczenia.pl";
  const validPassword = process.env.ADMIN_PASSWORD || "TestHaslo123!";

  console.log("LOGIN ATTEMPT:", {
    receivedEmail: email,
    receivedPassword: password,
    validEmail,
    validPassword,
    match: email === validEmail && password === validPassword,
  });

  if (email === validEmail && password === validPassword) {
    const res = NextResponse.json({ success: true });
    res.cookies.set("admin_auth", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });
    return res;
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
