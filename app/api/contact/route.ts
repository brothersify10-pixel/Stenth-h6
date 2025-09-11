import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

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

    // Send email notification using Resend
    if (process.env.RESEND_API_KEY) {
      try {
        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'noreply@stenth.com', // Update this to match your verified domain
            to: ['info@stenth.com'],
            subject: `New Contact Form Submission from ${name}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <div style="background: linear-gradient(135deg, #0891b2, #ec4899); padding: 30px; border-radius: 10px 10px 0 0;">
                  <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
                </div>
                
                <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px;">
                  <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #0891b2;">
                    <h3 style="color: #334155; margin-top: 0;">Contact Details</h3>
                    <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
                    <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #0891b2;">${email}</a></p>
                    ${company ? `<p style="margin: 10px 0;"><strong>Company:</strong> ${company}</p>` : ''}
                    <p style="margin: 10px 0;"><strong>Submission ID:</strong> ${data.id}</p>
                  </div>
                  
                  <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #ec4899;">
                    <h3 style="color: #334155; margin-top: 0;">Message</h3>
                    <div style="background: #f1f5f9; padding: 15px; border-radius: 6px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
                  </div>
                  
                  <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px; text-align: center;">
                    <p>This email was sent from the Stenth contact form on ${new Date().toLocaleString()}.</p>
                    <p>Reply directly to this email to respond to ${name}.</p>
                  </div>
                </div>
              </div>
            `,
            reply_to: email,
          }),
        })

        if (emailResponse.ok) {
          // Update submission to mark email as sent
          await supabaseAdmin
            .from('contact_submissions')
            .update({ 
              email_sent: true,
              email_sent_at: new Date().toISOString()
            })
            .eq('id', data.id)
        }
      } catch (emailError) {
        console.warn('Email sending failed:', emailError)
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
