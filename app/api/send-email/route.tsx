import WelcomeTemplate from '@/emails/WelcomeTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  resend.emails.send({
    from: '...',
    to: 'aceveron@gmail.com',
    subject: '...',
    react: <WelcomeTemplate name='ace'/>,
  });

  return NextResponse.json({})
}
