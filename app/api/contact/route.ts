import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, email, phone, city, category, message } = body;

    if (!name || !company || !email || !phone || !city || !category || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
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

    await transporter.sendMail({
      from: `"SUV FANS Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || 'info@suvfans.in',
      replyTo: email,
      subject: `New Inquiry from ${name} — ${company} [${category}]`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #F4F6F8; padding: 24px;">
          <div style="background: #0B2A3C; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #F5A02E; margin: 0; font-size: 22px;">New Engineering Inquiry</h1>
            <p style="color: #9CA3AF; margin: 4px 0 0; font-size: 13px;">SUV FANS LLP — Contact Form</p>
          </div>
          <div style="background: #fff; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #E5E7EB;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #F4F6F8; color: #6B7280; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; width: 140px;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #F4F6F8; font-weight: bold; color: #0B2A3C;">${name}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #F4F6F8; color: #6B7280; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Company</td><td style="padding: 10px 0; border-bottom: 1px solid #F4F6F8; font-weight: bold; color: #0B2A3C;">${company}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #F4F6F8; color: #6B7280; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #F4F6F8;"><a href="mailto:${email}" style="color: #2E86B8;">${email}</a></td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #F4F6F8; color: #6B7280; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #F4F6F8; color: #0B2A3C;"><a href="tel:${phone}" style="color: #2E86B8;">${phone}</a></td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #F4F6F8; color: #6B7280; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">City</td><td style="padding: 10px 0; border-bottom: 1px solid #F4F6F8; color: #0B2A3C;">${city}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #F4F6F8; color: #6B7280; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Category</td><td style="padding: 10px 0; border-bottom: 1px solid #F4F6F8;"><span style="background: #2E86B8; color: white; padding: 2px 10px; border-radius: 20px; font-size: 11px; font-weight: bold; text-transform: uppercase;">${category}</span></td></tr>
            </table>
            <div style="margin-top: 24px;">
              <p style="color: #6B7280; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Message</p>
              <div style="background: #F4F6F8; padding: 16px; border-radius: 8px; color: #0B2A3C; font-size: 15px; line-height: 1.6;">${message}</div>
            </div>
          </div>
          <p style="color: #9CA3AF; font-size: 11px; text-align: center; margin-top: 16px;">Sent from suvfans.in contact form</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact email error:', err);
    return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 });
  }
}
