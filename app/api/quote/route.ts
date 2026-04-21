import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, email, phone, city, state, category, product, capacity, application, quantity, timeline, notes } = body;

    if (!name || !company || !email || !phone || !category || !capacity || !application || !quantity || !timeline) {
      return NextResponse.json({ error: 'Required fields are missing' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const timelineLabels: Record<string, string> = {
      urgent: 'Urgent (Within 1 week)',
      '1month': 'Within 1 Month',
      '3months': '1–3 Months',
      exploring: 'Just Exploring',
    };

    await transporter.sendMail({
      from: `"SUV FANS Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || 'info@suvfans.in',
      replyTo: email,
      subject: `⚡ Quote Request — ${company} | ${category} | Qty: ${quantity}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #F4F6F8; padding: 24px;">
          <div style="background: #0B2A3C; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #F5A02E; margin: 0; font-size: 22px;">New Quote Request</h1>
            <p style="color: #9CA3AF; margin: 4px 0 0; font-size: 13px;">SUV FANS LLP — Get Quote Form</p>
          </div>
          <div style="background: #fff; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #E5E7EB;">
            <h3 style="color: #F5A02E; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px; border-bottom: 2px solid #F5A02E; padding-bottom: 6px; margin-top: 0;">Contact Details</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #F4F6F8; color: #6B7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; width: 140px;">Name</td><td style="padding: 8px 0; border-bottom: 1px solid #F4F6F8; font-weight: bold; color: #0B2A3C;">${name}</td></tr>
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #F4F6F8; color: #6B7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Company</td><td style="padding: 8px 0; border-bottom: 1px solid #F4F6F8; font-weight: bold; color: #0B2A3C;">${company}</td></tr>
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #F4F6F8; color: #6B7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</td><td style="padding: 8px 0; border-bottom: 1px solid #F4F6F8;"><a href="mailto:${email}" style="color: #2E86B8;">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #F4F6F8; color: #6B7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Phone</td><td style="padding: 8px 0; border-bottom: 1px solid #F4F6F8;"><a href="tel:${phone}" style="color: #2E86B8;">${phone}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #6B7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Location</td><td style="padding: 8px 0; color: #0B2A3C;">${city}${state ? `, ${state}` : ''}</td></tr>
            </table>

            <h3 style="color: #F5A02E; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px; border-bottom: 2px solid #F5A02E; padding-bottom: 6px;">Requirement Details</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #F4F6F8; color: #6B7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; width: 140px;">Category</td><td style="padding: 8px 0; border-bottom: 1px solid #F4F6F8;"><span style="background: #2E86B8; color: white; padding: 2px 10px; border-radius: 20px; font-size: 11px; font-weight: bold; text-transform: uppercase;">${category}</span></td></tr>
              ${product ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #F4F6F8; color: #6B7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Product</td><td style="padding: 8px 0; border-bottom: 1px solid #F4F6F8; color: #0B2A3C;">${product}</td></tr>` : ''}
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #F4F6F8; color: #6B7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Capacity</td><td style="padding: 8px 0; border-bottom: 1px solid #F4F6F8; font-weight: bold; color: #0B2A3C;">${capacity} CMH</td></tr>
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #F4F6F8; color: #6B7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Quantity</td><td style="padding: 8px 0; border-bottom: 1px solid #F4F6F8; font-weight: bold; color: #0B2A3C;">${quantity} unit(s)</td></tr>
              <tr><td style="padding: 8px 0; color: #6B7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Timeline</td><td style="padding: 8px 0;"><span style="background: #F5A02E; color: #0B2A3C; padding: 2px 10px; border-radius: 20px; font-size: 11px; font-weight: bold;">${timelineLabels[timeline] || timeline}</span></td></tr>
            </table>

            <div style="margin-bottom: 16px;">
              <p style="color: #6B7280; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Application / Use Case</p>
              <div style="background: #F4F6F8; padding: 16px; border-radius: 8px; color: #0B2A3C; font-size: 15px; line-height: 1.6;">${application}</div>
            </div>

            ${notes ? `<div><p style="color: #6B7280; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Additional Notes</p><div style="background: #F4F6F8; padding: 16px; border-radius: 8px; color: #0B2A3C; font-size: 15px; line-height: 1.6;">${notes}</div></div>` : ''}
          </div>
          <p style="color: #9CA3AF; font-size: 11px; text-align: center; margin-top: 16px;">Sent from suvfans.in quote form</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Quote email error:', err);
    return NextResponse.json({ error: 'Failed to submit quote request. Please try again.' }, { status: 500 });
  }
}
