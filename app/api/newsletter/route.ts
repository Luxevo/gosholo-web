import { NextRequest, NextResponse } from 'next/server'

const BREVO_API_KEY = process.env.BREVO_API_KEY || ''

const LIST_IDS = {
  fr: 14,
  en: 13,
}

export async function POST(request: NextRequest) {
  try {
    const { email, language } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    const listId = LIST_IDS[language as keyof typeof LIST_IDS] || LIST_IDS.fr

    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        email,
        listIds: [listId],
        updateEnabled: true,
      }),
    })

    if (response.ok || response.status === 201) {
      return NextResponse.json({ success: true })
    }

    // Handle duplicate contact (already subscribed)
    if (response.status === 400) {
      const data = await response.json()
      if (data.code === 'duplicate_parameter') {
        return NextResponse.json({ success: true, alreadySubscribed: true })
      }
    }

    const errorData = await response.json()
    console.error('Brevo API error:', errorData)
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    )
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
