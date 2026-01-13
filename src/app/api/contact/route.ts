import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const isJobApplication = body.type === "job_application";
    const messageContent = body.message || body.coverLetter || "";
    
    // Validate required fields
    if (!body.name || !body.email || !messageContent) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required' },
        { status: 400 }
      );
    }

    // Get email credentials from environment variables
    const GMAIL_USER = process.env.GMAIL_USER || 'info.genroar7@gmail.com';
    const GMAIL_PASS = process.env.GMAIL_APP_PASSWORD; // Gmail App Password
    
    // Get multiple recipient emails (comma-separated)
    const RECIPIENT_EMAILS = process.env.RECIPIENT_EMAILS || GMAIL_USER;
    
    // Parse multiple emails (comma-separated string to array)
    const recipientEmails = RECIPIENT_EMAILS.split(',')
      .map(email => email.trim())
      .filter(email => email.length > 0);
    
    if (!GMAIL_PASS) {
      console.error('GMAIL_APP_PASSWORD is not set in environment variables');
      return NextResponse.json(
        { 
          error: 'Email service not configured', 
          message: 'Please configure Gmail credentials in environment variables' 
        },
        { status: 500 }
      );
    }
    
    if (recipientEmails.length === 0) {
      console.error('No recipient emails configured');
      return NextResponse.json(
        { 
          error: 'Email service not configured', 
          message: 'Please configure recipient emails in environment variables' 
        },
        { status: 500 }
      );
    }

    // Create transporter for Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS, // Use App Password, not regular password
      },
    });

    // Format the email content
    const emailSubject = isJobApplication
      ? `New Job Application${body.jobTitle ? ` - ${body.jobTitle}` : ''}`
      : `New Contact Form Submission - ${body.service || 'General Inquiry'}`;
    
    const attachments = Array.isArray(body.attachments)
      ? body.attachments
          .filter((att: any) => att?.data && att?.filename)
          .map((att: any) => ({
            filename: att.filename,
            content: Buffer.from(att.data, 'base64'),
            contentType: att.contentType || 'application/octet-stream',
          }))
      : [];
    
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2F2FA2 0%, #00C4B4 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #2F2FA2; }
            .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; }
            .message-box { background: white; padding: 15px; border-left: 4px solid #00C4B4; margin-top: 10px; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>${isJobApplication ? 'New Job Application' : 'New Contact Form Submission'}</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${body.name}</div>
              </div>
              
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${body.email}</div>
              </div>
              
              ${body.phone ? `
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${body.phone}</div>
              </div>
              ` : ''}
              
              ${isJobApplication && body.jobTitle ? `
              <div class="field">
                <div class="label">Job Title:</div>
                <div class="value">${body.jobTitle}</div>
              </div>
              ` : ''}

              ${isJobApplication && body.yearsOfExperience ? `
              <div class="field">
                <div class="label">Years of Experience:</div>
                <div class="value">${body.yearsOfExperience}</div>
              </div>
              ` : ''}

              ${!isJobApplication && body.company ? `
              <div class="field">
                <div class="label">Company:</div>
                <div class="value">${body.company}</div>
              </div>
              ` : ''}
              
              ${!isJobApplication && body.service ? `
              <div class="field">
                <div class="label">Service Interested In:</div>
                <div class="value">${body.service}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">${isJobApplication ? 'Cover Letter' : 'Message'}:</div>
                <div class="message-box">${messageContent.replace(/\n/g, '<br>')}</div>
              </div>

              ${isJobApplication && attachments.length ? `
              <div class="field">
                <div class="label">Attachments:</div>
                <div class="value">${attachments.map(att => att.filename).join(', ')}</div>
              </div>
              ` : ''}
            </div>
            <div class="footer">
              <p>This email was sent from the genroar ${isJobApplication ? 'careers' : 'contact'} form.</p>
              <p>Submitted on: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const emailText = `
${isJobApplication ? 'New Job Application' : 'New Contact Form Submission'}

Name: ${body.name}
Email: ${body.email}
${body.phone ? `Phone: ${body.phone}` : ''}
${isJobApplication && body.jobTitle ? `Job Title: ${body.jobTitle}` : ''}
${isJobApplication && body.yearsOfExperience ? `Years of Experience: ${body.yearsOfExperience}` : ''}
${!isJobApplication && body.company ? `Company: ${body.company}` : ''}
${!isJobApplication && body.service ? `Service: ${body.service}` : ''}

${isJobApplication ? 'Cover Letter' : 'Message'}:
${messageContent}

${isJobApplication && attachments.length ? `Attachments: ${attachments.map(att => att.filename).join(', ')}` : ''}

---
Submitted on: ${new Date().toLocaleString()}
    `.trim();

    // Send email to all recipients
    const mailOptions = {
      from: `"genroar Contact Form" <${GMAIL_USER}>`,
      to: recipientEmails.join(', '), // Send to all recipient emails
      replyTo: body.email, // Allow replying directly to the sender
      subject: emailSubject,
      text: emailText,
      html: emailHtml,
      attachments,
    };

    await transporter.sendMail(mailOptions);
    
    console.log(`Email sent successfully to ${recipientEmails.length} recipient(s): ${recipientEmails.join(', ')}`);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submitted successfully. We will get back to you soon!' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json(
      { 
        error: 'Failed to submit form', 
        message: error instanceof Error ? error.message : 'Unknown error occurred. Please try again or contact us directly at info.genroar7@gmail.com' 
      },
      { status: 500 }
    );
  }
}


