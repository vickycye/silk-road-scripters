'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCartStore } from '../store/cart';
import { PayPalButtons } from "@paypal/react-paypal-js";

interface ShippingInfo {
  fullName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export default function Checkout() {
  const router = useRouter();
  const { items, total, clearCart } = useCartStore();
  const [paymentMethod, setPaymentMethod] = useState<'paypal' | 'credit'>('paypal');
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    fullName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States'
  });

  const TAX_RATE = 0.0725;
  const SHIPPING_RATE = 5.99;

  const subtotal = total();
  const estimatedTax = subtotal * TAX_RATE;
  const orderTotal = subtotal + estimatedTax + SHIPPING_RATE;

  const handleShippingInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setShippingInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePlaceOrder = () => {
    // In a real app, we would process the order here
    clearCart();
    router.push('/order-confirmation?id=Order123Confirmed567Code890');
  };

  return (
    <div className="min-h-screen bg-[#e6e1d6] dark:bg-[#3c3c3c]">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-6 text-[#3d2f1f] dark:text-[#e8dcc8]">Checkout</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Forms */}
          <div className="flex-grow space-y-6">
            {/* Shipping Information */}
            <div className="bg-white dark:bg-[#5d4e3a] p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4 text-[#3d2f1f] dark:text-[#e8dcc8]">Shipping Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#5d4e3a] dark:text-[#b8b0a0]">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={shippingInfo.fullName}
                    onChange={handleShippingInfoChange}
                    className="mt-1 block w-full h-12 px-3 rounded-md border-[#cd853f] dark:border-[#a0522d] bg-white dark:bg-[#3c3c3c] text-[#3d2f1f] dark:text-[#e8dcc8] shadow-sm focus:border-[#8b4513] dark:focus:border-[#deb887] focus:ring-[#8b4513] dark:focus:ring-[#deb887]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#5d4e3a] dark:text-[#b8b0a0]">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={shippingInfo.address}
                    onChange={handleShippingInfoChange}
                    className="mt-1 block w-full h-12 px-3 rounded-md border-[#cd853f] dark:border-[#a0522d] bg-white dark:bg-[#3c3c3c] text-[#3d2f1f] dark:text-[#e8dcc8] shadow-sm focus:border-[#8b4513] dark:focus:border-[#deb887] focus:ring-[#8b4513] dark:focus:ring-[#deb887]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#5d4e3a] dark:text-[#b8b0a0]">City</label>
                    <input
                      type="text"
                      name="city"
                      value={shippingInfo.city}
                      onChange={handleShippingInfoChange}
                      className="mt-1 block w-full h-12 px-3 rounded-md border-[#cd853f] dark:border-[#a0522d] bg-white dark:bg-[#3c3c3c] text-[#3d2f1f] dark:text-[#e8dcc8] shadow-sm focus:border-[#8b4513] dark:focus:border-[#deb887] focus:ring-[#8b4513] dark:focus:ring-[#deb887]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#5d4e3a] dark:text-[#b8b0a0]">State</label>
                    <input
                      type="text"
                      name="state"
                      value={shippingInfo.state}
                      onChange={handleShippingInfoChange}
                      className="mt-1 block w-full h-12 px-3 rounded-md border-[#cd853f] dark:border-[#a0522d] bg-white dark:bg-[#3c3c3c] text-[#3d2f1f] dark:text-[#e8dcc8] shadow-sm focus:border-[#8b4513] dark:focus:border-[#deb887] focus:ring-[#8b4513] dark:focus:ring-[#deb887]"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#5d4e3a] dark:text-[#b8b0a0]">ZIP Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={shippingInfo.zipCode}
                      onChange={handleShippingInfoChange}
                      className="mt-1 block w-full h-12 px-3 rounded-md border-[#cd853f] dark:border-[#a0522d] bg-white dark:bg-[#3c3c3c] text-[#3d2f1f] dark:text-[#e8dcc8] shadow-sm focus:border-[#8b4513] dark:focus:border-[#deb887] focus:ring-[#8b4513] dark:focus:ring-[#deb887]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#5d4e3a] dark:text-[#b8b0a0]">Country</label>
                    <select
                      name="country"
                      value={shippingInfo.country}
                      onChange={handleShippingInfoChange}
                      className="mt-1 block w-full h-12 px-3 rounded-md border-[#cd853f] dark:border-[#a0522d] bg-white dark:bg-[#3c3c3c] text-[#3d2f1f] dark:text-[#e8dcc8] shadow-sm focus:border-[#8b4513] dark:focus:border-[#deb887] focus:ring-[#8b4513] dark:focus:ring-[#deb887]"
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white dark:bg-[#5d4e3a] p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4 text-[#3d2f1f] dark:text-[#e8dcc8]">Payment Method</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setPaymentMethod('paypal')}
                    className={`p-4 border rounded-lg flex-1 transition-colors ${
                      paymentMethod === 'paypal'
                        ? 'border-[#8b4513] dark:border-[#deb887] bg-[#cd853f] dark:bg-[#a0522d] text-white'
                        : 'border-[#cd853f] dark:border-[#a0522d] text-[#3d2f1f] dark:text-[#e8dcc8] hover:bg-[#cd853f] dark:hover:bg-[#a0522d] hover:text-white'
                    }`}
                  >
                    PayPal
                  </button>
                  <button
                    onClick={() => setPaymentMethod('credit')}
                    className={`p-4 border rounded-lg flex-1 transition-colors ${
                      paymentMethod === 'credit'
                        ? 'border-[#8b4513] dark:border-[#deb887] bg-[#cd853f] dark:bg-[#a0522d] text-white'
                        : 'border-[#cd853f] dark:border-[#a0522d] text-[#3d2f1f] dark:text-[#e8dcc8] hover:bg-[#cd853f] dark:hover:bg-[#a0522d] hover:text-white'
                    }`}
                  >
                    Credit Card
                  </button>
                </div>

                {paymentMethod === 'credit' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-[#5d4e3a] dark:text-[#b8b0a0]">Card Number</label>
                      <input
                        type="text"
                        disabled
                        placeholder="Credit card implementation coming soon"
                        className="mt-1 block w-full h-12 px-3 rounded-md border-[#cd853f] dark:border-[#a0522d] bg-white dark:bg-[#3c3c3c] text-[#3d2f1f] dark:text-[#e8dcc8] shadow-sm"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:w-80">
            <div className="bg-white dark:bg-[#5d4e3a] p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4 text-[#3d2f1f] dark:text-[#e8dcc8]">Order Summary</h2>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-[#5d4e3a] dark:text-[#b8b0a0]">
                  <span>Subtotal ({items.length} items):</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#5d4e3a] dark:text-[#b8b0a0]">
                  <span>Shipping & Handling:</span>
                  <span>${SHIPPING_RATE.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#5d4e3a] dark:text-[#b8b0a0]">
                  <span>Estimated Tax:</span>
                  <span>${estimatedTax.toFixed(2)}</span>
                </div>
                <div className="border-t border-[#cd853f] dark:border-[#a0522d] pt-2 mt-2">
                  <div className="flex justify-between font-semibold text-lg text-[#3d2f1f] dark:text-[#e8dcc8]">
                    <span>Order Total:</span>
                    <span>${orderTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handlePlaceOrder}
                className="w-full mt-4 bg-[#b8860b] hover:bg-[#daa520] active:bg-[#9a7209] dark:bg-[#d4a574] dark:hover:bg-[#8b6914] dark:active:bg-[#c4955c] text-[#ffffff] dark:text-[#ffffff] py-2 px-4 rounded transition-colors"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}