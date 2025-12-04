import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email } = await request.json();
       console.log("Received email:", email);

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const response = await fetch(
      "https://api.airtable.com/v0/appaHeYgfCpWRkVLp/Waitlist",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                Email: email,
              },
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to save to Airtable");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to save email" }, { status: 500 });
  }
}