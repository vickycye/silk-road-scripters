import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { orderId } = await request.json();

    // Capture PayPal payment
    const paypalResponse = await fetch(
      `${process.env.PAYPAL_API_URL}/v2/checkout/orders/${orderId}/capture`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.PAYPAL_ACCESS_TOKEN}`,
        },
      }
    );

    if (!paypalResponse.ok) {
      throw new Error('Failed to capture PayPal payment');
    }

    // Update order status in database
    await prisma.order.updateMany({
      where: {
        paypalOrderId: orderId,
        userId,
      },
      data: {
        status: 'PAID',
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error capturing order:', error);
    return NextResponse.json(
      { error: 'Failed to capture order' },
      { status: 500 }
    );
  }
} 