import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const FROM_ADDRESS = 'HEM Automation <noreply@hemautomation.co.in>'
const TO_ADDRESS   = 'hem.automation@gmail.com'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      name,
      company,
      phone,
      email,
      machine,
      currentOutput,
      targetOutput,
      challenge,
    } = body as Record<string, string>

    /* ── Basic validation ── */
    if (!name?.trim() || !company?.trim() || !phone?.trim()) {
      return NextResponse.json(
        { error: 'Name, company, and phone are required.' },
        { status: 400 },
      )
    }

    /* ── Build HTML email ── */
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
</head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:Arial,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 0">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08)">

        <!-- Header -->
        <tr>
          <td style="background:#cc0000;padding:24px 32px">
            <p style="margin:0;font-size:13px;color:rgba(255,255,255,0.75);letter-spacing:0.08em;text-transform:uppercase">HEM Automation</p>
            <h1 style="margin:6px 0 0;font-size:22px;font-weight:900;color:#ffffff;text-transform:uppercase;letter-spacing:0.03em">
              New Website Enquiry
            </h1>
          </td>
        </tr>

        <!-- Enquiry details -->
        <tr>
          <td style="padding:32px 32px 8px">
            <table width="100%" cellpadding="0" cellspacing="0">
              ${row('Name',            name)}
              ${row('Company',         company)}
              ${row('Phone',           phone)}
              ${row('Email',           email    || '—')}
              ${row('Machine Interest',machine  || '—')}
              ${row('Current Output',  currentOutput || '—')}
              ${row('Target Output',   targetOutput  || '—')}
            </table>
          </td>
        </tr>

        <!-- Challenge block -->
        ${challenge?.trim() ? `
        <tr>
          <td style="padding:0 32px 24px">
            <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#999">Production Challenge</p>
            <div style="background:#f9f9f9;border-left:3px solid #cc0000;border-radius:4px;padding:14px 16px;font-size:14px;color:#333;line-height:1.7">
              ${challenge.replace(/\n/g, '<br />')}
            </div>
          </td>
        </tr>` : ''}

        <!-- Reply CTA -->
        <tr>
          <td style="padding:0 32px 32px">
            ${email?.trim() ? `
            <a href="mailto:${email}?subject=Re: Your enquiry to HEM Automation"
               style="display:inline-block;background:#cc0000;color:#fff;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;padding:12px 24px;border-radius:6px;text-decoration:none">
              Reply to ${name} →
            </a>` : `
            <a href="tel:${phone}"
               style="display:inline-block;background:#cc0000;color:#fff;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;padding:12px 24px;border-radius:6px;text-decoration:none">
              Call ${name} →
            </a>`}
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f4f4f5;padding:16px 32px;text-align:center">
            <p style="margin:0;font-size:11px;color:#999">
              This notification was sent automatically by your website at hemautomation.co.in
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
`

    /* ── Send via Resend ── */
    const { data, error } = await resend.emails.send({
      from:    FROM_ADDRESS,
      to:      [TO_ADDRESS],
      replyTo: email?.trim() || undefined,
      subject: `New Enquiry — ${name} (${company})`,
      html,
    })

    if (error) {
      console.error('[Resend error]', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error('[Enquiry API error]', err)
    return NextResponse.json({ error: 'Server error — please try again.' }, { status: 500 })
  }
}

/* ── Helper: two-column table row ── */
function row(label: string, value: string) {
  return `
  <tr>
    <td style="padding:8px 0;vertical-align:top;width:38%">
      <span style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#999">${label}</span>
    </td>
    <td style="padding:8px 0;vertical-align:top">
      <span style="font-size:14px;color:#222;font-weight:600">${value}</span>
    </td>
  </tr>`
}
