import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // §8.10: only production writes to the live Airtable table. Preview and
    // local submissions log only. VERCEL_ENV, not NODE_ENV — preview builds
    // run with NODE_ENV=production too.
    if (process.env.VERCEL_ENV !== "production") {
      console.log(`[waitlist] non-production (${process.env.VERCEL_ENV || "local"}): logged only —`, email);
      return NextResponse.json({ success: true, preview: true });
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
