'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function OrderConfirmation() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('id') || 'Order123Confirmed567Code890';

  return (
    <div className="min-h-screen bg-[#e6e1d6] dark:bg-[#2C2A31] flex items-center justify-center">
      <div className="bg-white dark:bg-red-200 p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="w-16 h-16 text-green-500 dark:text-red-700" />
        </div>
        <h1 className="text-2xl font-bold text-green-800 dark:text-red-900 mb-2">Order Confirmed!</h1>
        <p className="text-green-700 dark:text-red-800 mb-6">Thank you for your purchase.</p>
        
        <div className="bg-green-50 dark:bg-red-100 p-4 rounded-lg mb-6">
          <p className="text-sm text-green-600 dark:text-red-700 mb-2">Order Confirmation Number:</p>
          <p className="text-lg font-mono font-semibold text-green-800 dark:text-red-900">{orderId}</p>
        </div>

        <p className="text-sm text-green-600 dark:text-red-700 mb-6">
          We'll send you an email with your order details and tracking information once your package ships.
        </p>

        <Link 
          href="/"
          className="inline-block bg-green-600 hover:bg-green-700 dark:bg-red-600 dark:hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
} 