'use client';

import React from 'react';
import { Minus, Plus, X } from 'lucide-react';
import { useCartStore } from '../store/cart';
import type { CartItem } from '../store/cart';
import { useRouter } from 'next/navigation';

export default function ShoppingCart() {
  const { items, updateQuantity, removeItem, total } = useCartStore();
  const router = useRouter();
  const TAX_RATE = 0.0725; // 7.25% tax rate
  const SHIPPING_RATE = 5.99;

  const subtotal = total();
  const estimatedTax = subtotal * TAX_RATE;
  const orderTotal = subtotal + estimatedTax + (items.length > 0 ? SHIPPING_RATE : 0);

  return (
    <div className="min-h-screen bg-[#e6e1d6] dark:bg-[#3c3c3c]">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-6 text-[#3d2f1f] dark:text-[#e8dcc8]">Shopping Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Cart Items */}
          <div className="flex-grow">
            {items.length === 0 ? (
              <p className="text-[#5d4e3a] dark:text-[#b8b0a0] text-center py-8">Your cart is empty</p>
            ) : (
              <div className="space-y-4">
                {items.map((item: CartItem) => (
                  <div key={item.id} className="flex gap-4 p-4 bg-white dark:bg-[#5d4e3a] border border-[#a0522d] dark:border-[#cd853f] rounded-lg shadow">
                    <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover rounded" />
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <h3 className="font-medium text-[#3d2f1f] dark:text-[#e8dcc8]">{item.name}</h3>
                        <button 
                          onClick={() => removeItem(item.productId)} 
                          className="text-[#8b4513] hover:text-[#cd853f] dark:text-[#deb887] dark:hover:text-[#a0522d] transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                      <div className="text-[#8b4513] dark:text-[#deb887] mt-1">${item.price.toFixed(2)}</div>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.productId, Math.max(0, item.quantity - 1))}
                          className="p-1 border border-[#a0522d] dark:border-[#cd853f] rounded hover:bg-[#daa520] dark:hover:bg-[#8b6914] transition-colors"
                        >
                          <Minus size={16} className="text-[#5d4e3a] dark:text-[#b8b0a0]" />
                        </button>
                        <span className="w-8 text-center text-[#3d2f1f] dark:text-[#e8dcc8]">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                          className="p-1 border border-[#a0522d] dark:border-[#cd853f] rounded hover:bg-[#daa520] dark:hover:bg-[#8b6914] transition-colors"
                        >
                          <Plus size={16} className="text-[#5d4e3a] dark:text-[#b8b0a0]" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Order Summary */}
          {items.length > 0 && (
            <div className="lg:w-80">
              <div className="bg-white dark:bg-[#5d4e3a] p-6 border border-[#a0522d] dark:border-[#cd853f] rounded-lg shadow">
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
                  <div className="border-t border-[#a0522d] dark:border-[#cd853f] pt-2 mt-2">
                    <div className="flex justify-between font-semibold text-lg text-[#3d2f1f] dark:text-[#e8dcc8]">
                      <span>Order Total:</span>
                      <span>${orderTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => router.push('/checkout')}
                  className="w-full mt-4 bg-[#b8860b] hover:bg-[#daa520] active:bg-[#9a7209] dark:bg-[#d4a574] dark:hover:bg-[#8b6914] dark:active:bg-[#c4955c] text-[#e8dcc8] dark:text-[#b8b0a0] py-2 px-4 rounded transition-colors"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}