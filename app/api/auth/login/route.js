import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    const response = await fetch(
      "https://api.airtable.com/v0/appaHeYgfCpWRkVLp/tblqajQ5r4VLuMTL7",
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
                Email: email, // must exactly match column name
              },
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const text = await response.text();
      console.error("Airtable User Login error:", text);
      return NextResponse.json({ error: "Airtable insert failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("User Login route error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}