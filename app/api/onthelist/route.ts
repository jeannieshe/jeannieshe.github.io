export const runtime = "edge";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: { email?: string; name?: string; about?: string; company?: string };

  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = (body.email || "").trim().toLowerCase();
  const name = (body.name || "").trim();
  const about = (body.about || "").trim();

  // Honeypot: real users never fill this hidden field. Pretend success.
  if (body.company) {
    return Response.json({ ok: true });
  }

  if (!EMAIL_RE.test(email)) {
    return Response.json({ error: "Please enter a valid email." }, { status: 400 });
  }
  if (!name) {
    return Response.json({ error: "Please tell us your name." }, { status: 400 });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

  if (!supabaseUrl || !supabaseSecretKey) {
    console.error("onthelist: missing SUPABASE_URL or SUPABASE_SECRET_KEY");
    return Response.json({ error: "Signups are temporarily unavailable." }, { status: 500 });
  }

  try {
    const res = await fetch(`${supabaseUrl}/rest/v1/signups`, {
      method: "POST",
      headers: {
        apikey: supabaseSecretKey,
        Authorization: `Bearer ${supabaseSecretKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ name, email, about: about || null }),
    });

    if (!res.ok) {
      const detail = await res.text();
      // A duplicate email (unique constraint) means they're already on the
      // list — treat re-signup as success rather than an error.
      const alreadyExists = res.status === 409 || detail.includes("23505");
      if (!alreadyExists) {
        console.error("onthelist: supabase insert failed", res.status, detail);
        return Response.json({ error: "Something went wrong. Please try again." }, { status: 502 });
      }
    }
  } catch (err) {
    console.error("onthelist: supabase insert threw", err);
    return Response.json({ error: "Something went wrong. Please try again." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
