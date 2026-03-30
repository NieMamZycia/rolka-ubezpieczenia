import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log("New contact message:", data);

    // TODO: tutaj można dodać wysyłkę maila lub zapis do CRM

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}

