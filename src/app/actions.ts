'use server';

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function handleContactSubmit(values: z.infer<typeof contactFormSchema>) {
  const parsed = contactFormSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, message: 'Invalid form data.' };
  }

  // In a real application, you would integrate an email service here.
  // For example, using Nodemailer, Resend, or SendGrid.
  console.log('New contact form submission:');
  console.log('Name:', parsed.data.name);
  console.log('Email:', parsed.data.email);
  console.log('Message:', parsed.data.message);

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Always return success for this demo
  return { success: true, message: 'Message sent successfully!' };
}
