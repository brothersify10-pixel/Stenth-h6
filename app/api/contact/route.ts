import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Insert into Supabase
    const { data, error } = await supabaseAdmin
      .from('contact_submissions')
      .insert([{
        name,
        email,
        company: company || null,
        message,
        status: 'new'
      }])
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json({ error: 'Database error' }, { status: 500 })
    }

    // Send email notification using Google Workspace
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        // Create Google Workspace transporter
        const transporter = nodemailer.createTransporter({
          host: process.env.EMAIL_HOST || 'smtp.gmail.com',
          port: parseInt(process.env.EMAIL_PORT || '587'),
          secure: false,
          auth: {
            user: process.env.EMAIL_USER, // ansh.rai@stenth.com
            pass: process.env.EMAIL_PASS, // your app password
          },
        })

        // Split EMAIL_TO by comma and trim spaces
        const recipients = process.env.EMAIL_TO?.split(',').map(email => email.trim()) || ['ansh.rai@stenth.com']

        const mailOptions = {
          from: `"Stenth - Contact Form" <${process.env.EMAIL_FROM}>`,
          to: recipients, // Both ansh.rai@stenth.com and akash.lakhataria@stenth.com
          replyTo: email,
          subject: `🚀 New Contact Form Submission from ${name}`,
          html: `
            <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
              <!-- Header -->
              <div style="background: linear-gradient(135deg, #0891b2, #ec4899); padding: 40px 30px; border-radius: 10px 10px 0 0;">
                <h1 style="color: white; margin: 0; font-size: 28px; text-align: center;">
                  ✨ New Contact Form Submission
                </h1>
                <p style="color: #e0f2fe; margin: 10px 0 0 0; text-align: center; font-size: 16px;">
                  Someone wants to work with Stenth!
                </p>
              </div>
              
              <!-- Content -->
              <div style="background: #f8fafc; padding: 40px 30px; border-radius: 0 0 10px 10px;">
                <!-- Contact Details -->
                <div style="background: white; padding: 25px; border-radius: 12px; margin-bottom: 20px; border-left: 5px solid #0891b2; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                  <h3 style="color: #1e293b; margin: 0 0 20px 0; font-size: 20px; display: flex; align-items: center;">
                    👤 Contact Information
                  </h3>
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 8px 0; color: #64748b; font-weight: 600; width: 100px;">Name:</td>
                      <td style="padding: 8px 0; color: #1e293b; font-size: 16px;">${name}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Email:</td>
                      <td style="padding: 8px 0;">
                        <a href="mailto:${email}" style="color: #0891b2; text-decoration: none; font-size: 16px; font-weight: 500;">${email}</a>
                      </td>
                    </tr>
                    ${company ? `
                    <tr>
                      <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Company:</td>
                      <td style="padding: 8px 0; color: #1e293b; font-size: 16px;">${company}</td>
                    </tr>
                    ` : ''}
                    <tr>
                      <td style="padding: 8px 0; color: #64748b; font-weight: 600;">ID:</td>
                      <td style="padding: 8px 0; color: #64748b; font-size: 12px; font-family: monospace;">${data.id}</td>
                    </tr>
                  </table>
                </div>
                
                <!-- Message -->
                <div style="background: white; padding: 25px; border-radius: 12px; border-left: 5px solid #ec4899; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                  <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 20px; display: flex; align-items: center;">
                    💬 Project Details
                  </h3>
                  <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; line-height: 1.6; color: #334155; white-space: pre-wrap; font-size: 15px; border: 1px solid #e2e8f0;">
${message}
                  </div>
                </div>
                
                <!-- Action Buttons -->
                <div style="text-align: center; margin: 30px 0 20px 0;">
                  <a href="mailto:${email}?subject=Re:%20Your%20inquiry%20about%20Stenth%20services&body=Hi%20${name},%0D%0A%0D%0AThank%20you%20for%20your%20interest%20in%20Stenth.%0D%0A%0D%0A" 
                     style="display: inline-block; background: linear-gradient(135deg, #0891b2, #0284c7); color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: 600; margin: 0 10px; box-shadow: 0 4px 15px rgba(8, 145, 178, 0.3);">
                    📧 Reply to ${name}
                  </a>
                  <a href="https://supabase.com/dashboard" 
                     style="display: inline-block; background: linear-gradient(135deg, #ec4899, #be185d); color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: 600; margin: 0 10px; box-shadow: 0 4px 15px rgba(236, 72, 153, 0.3);">
                    📊 View in Database
                  </a>
                </div>
                
                <!-- Recipients Info -->
                <div style="background: white; padding: 20px; border-radius: 12px; border-left: 5px solid #10b981; box-shadow: 0 2px 10px rgba(0,0,0,0.1); margin-bottom: 20px;">
                  <h4 style="color: #1e293b; margin: 0 0 10px 0; font-size: 16px;">📧 Notification sent to:</h4>
                  <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                    ${recipients.map(recipient => `
                      <span style="background: #f0fdf4; color: #166534; padding: 6px 12px; border-radius: 20px; font-size: 14px; font-weight: 500; border: 1px solid #bbf7d0;">
                        ${recipient}
                      </span>
                    `).join('')}
                  </div>
                </div>
                
                <!-- Footer -->
                <div style="margin-top: 40px; padding-top: 25px; border-top: 2px solid #e2e8f0; text-align: center;">
                  <p style="color: #64748b; font-size: 14px; margin: 5px 0; line-height: 1.5;">
                    📅 Submitted on ${new Date().toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                  <p style="color: #64748b; font-size: 14px; margin: 5px 0;">
                    🚀 This email was sent from the Stenth contact form
                  </p>
                  <p style="color: #64748b; font-size: 12px; margin: 15px 0 0 0;">
                    💡 <strong>Pro tip:</strong> Click "Reply to ${name}" to respond directly!
                  </p>
                </div>
              </div>
            </div>
          `,
          text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ''}

Message:
${message}

Submission ID: ${data.id}
Submitted: ${new Date().toLocaleString()}

Reply to this email to respond to ${name}.

Notification sent to: ${recipients.join(', ')}
          `
        }

        // Send email
        await transporter.sendMail(mailOptions)

        // Update submission to mark email as sent
        await supabaseAdmin
          .from('contact_submissions')
          .update({ 
            email_sent: true,
            email_sent_at: new Date().toISOString()
          })
          .eq('id', data.id)

      } catch (emailError) {
        console.error('Email sending failed:', emailError)
        // Don't fail the entire request if email fails
      }
    }

    return NextResponse.json(
      { 
        message: 'Form submitted successfully',
        id: data.id
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
