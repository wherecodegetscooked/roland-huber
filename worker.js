// Cloudflare Worker entry. Laeuft vor dem Static-Assets-Binding und
// liefert die gebaute SPA aus.
// Zusaetzlich: POST /api/contact nimmt das Kontaktformular an und
// verschickt es per Resend-API an die Firmenadresse.
//
// Benoetigtes Secret (nicht in Git!):
//   wrangler secret put RESEND_API_KEY

const CONTACT_TO = "info@rkhconsulting.ch";
// Absender muss eine in Resend verifizierte Domain sein.
const CONTACT_FROM = "RKH Consulting <noreply@rkhconsulting.ch>";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return json({ status: "ok" }, 200, { "cache-control": "no-store" });
    }

    if (url.pathname === "/api/contact") {
      if (request.method !== "POST") return json({ error: "Method not allowed" }, 405);
      return handleContact(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};

async function handleContact(request, env) {
  let data;
  try {
    data = await request.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  // Honeypot: nur von Bots ausgefuellt -> still als Erfolg quittieren.
  if (str(data.company_website)) return json({ ok: true }, 200);

  const firstName = str(data.firstName);
  const lastName = str(data.lastName);
  const email = str(data.email);
  const phone = str(data.phone);
  const message = str(data.message);

  if (!firstName || !lastName || !email || !message) {
    return json({ error: "Please fill in all required fields." }, 400);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) {
    return json({ error: "Please enter a valid e-mail address." }, 400);
  }
  if (message.length > 5000) {
    return json({ error: "Your message is too long." }, 400);
  }

  if (!env.RESEND_API_KEY) {
    return json({ error: "Mail service is not configured." }, 500);
  }

  const text =
    `Name: ${firstName} ${lastName}\n` +
    `E-Mail: ${email}\n` +
    `Phone: ${phone || "-"}\n\n` +
    `${message}\n`;

  let res;
  try {
    res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        authorization: `Bearer ${env.RESEND_API_KEY}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        from: CONTACT_FROM,
        to: [CONTACT_TO],
        reply_to: email,
        subject: `Website enquiry from ${firstName} ${lastName}`,
        text,
      }),
    });
  } catch {
    return json({ error: "Could not send message. Please try again later." }, 502);
  }

  if (!res.ok) {
    return json({ error: "Could not send message. Please try again later." }, 502);
  }

  return json({ ok: true }, 200);
}

function str(v) {
  return typeof v === "string" ? v.trim() : "";
}

function json(body, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", ...extraHeaders },
  });
}
