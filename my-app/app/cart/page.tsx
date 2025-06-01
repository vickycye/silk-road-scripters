'use client';

import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useCartStore } from '../store/cart';
import { Minus, Plus, Trash2 } from 'lucide-react';

export default function CartPage() {
  const { user } = useUser();
  const { items, removeItem, updateQuantity, total, clearCart } = useCartStore();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(productId, newQuantity);
  };

  const createOrder = async () => {
    try {
      const response = await fetch('/api/orders/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items,
          userId: user?.id,
        }),
      });

      if (!response.ok) throw new Error('Failed to create order');
      const order = await response.json();
      return order.id;
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  };

  const onApprove = async (data: any) => {
    try {
      const response = await fetch('/api/orders/capture', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderId: data.orderID,
          userId: user?.id,
        }),
      });

      if (!response.ok) throw new Error('Failed to capture order');
      clearCart();
      // Redirect to success page or show success message
    } catch (error) {
      console.error('Error capturing order:', error);
    }
  };

  if (!isClient) return null;

  return (
    <div className="container mx-auto px-4 py-8 bg-[#e6e1d6] dark:bg-[#3c3c3c] min-h-screen">
      <h1 className="text-2xl font-bold mb-8 text-[#3d2f1f] dark:text-[#e8dcc8]">Shopping Cart</h1>
      
      {items.length === 0 ? (
        <p className="text-[#5d4e3a] dark:text-[#b8b0a0]">Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 p-4 border-b border-[#cd853f] dark:border-[#a0522d]">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-[#3d2f1f] dark:text-[#e8dcc8]">{item.name}</h3>
                  <p className="text-[#5d4e3a] dark:text-[#b8b0a0]">${item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => handleQuantityChange(item.productId, item.quantity - 1)}
                      className="p-1 rounded hover:bg-[#cd853f] dark:hover:bg-[#a0522d] text-[#3d2f1f] dark:text-[#e8dcc8] transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="text-[#3d2f1f] dark:text-[#e8dcc8]">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.productId, item.quantity + 1)}
                      className="p-1 rounded hover:bg-[#cd853f] dark:hover:bg-[#a0522d] text-[#3d2f1f] dark:text-[#e8dcc8] transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                    <button
                      onClick={() => removeItem(item.productId)}
                      className="ml-4 p-1 rounded text-[#8b4513] hover:bg-[#cd853f] dark:text-[#deb887] dark:hover:bg-[#a0522d] transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white dark:bg-[#5d4e3a] p-6 rounded-lg h-fit shadow">
            <h2 className="text-xl font-semibold mb-4 text-[#3d2f1f] dark:text-[#e8dcc8]">Order Summary</h2>
            <div className="flex justify-between mb-4">
              <span className="text-[#5d4e3a] dark:text-[#b8b0a0]">Total</span>
              <span className="font-semibold text-[#3d2f1f] dark:text-[#e8dcc8]">${total().toFixed(2)}</span>
            </div>
            
            <PayPalScriptProvider options={{
              clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
              currency: "USD",
            }}>
              <PayPalButtons
                createOrder={createOrder}
                onApprove={onApprove}
                style={{ layout: "vertical" }}
              />
            </PayPalScriptProvider>
          </div>
        </div>
      )}
    </div>
  );
}