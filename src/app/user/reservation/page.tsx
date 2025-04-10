'use client'

import { useState } from 'react';
import Header from "@/app/comps/Header";
import supabase from '@/utils/Supabase';
import IsLoggedIn from '@/utils/IsloggedIn';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const menuItems = [
  { id: 1, name: "Filipino Spaghetti", price: 250 },
  { id: 2, name: "Kare Kare", price: 350 },
  { id: 3, name: "Chicken Wings", price: 280 },
  { id: 4, name: "Beef Caldereta", price: 320 },
  { id: 5, name: "Pork Adobo", price: 270 },
  { id: 6, name: "Sinigang na Baboy", price: 300 },
];

export default function Reservation() {
    const [user] = IsLoggedIn()



    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        delivery_datetime: '', // <- FIXED this name
        notes: '',
        user_id: user?.id || '',
        items: [] as { id: number; quantity: number }[]
      });
      

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };


  

  const handleItemChange = (itemId: number, quantity: number) => {
    setFormData(prev => {
      const existingItemIndex = prev.items.findIndex(item => item.id === itemId);
      
      if (existingItemIndex >= 0) {
        const updatedItems = [...prev.items];
        if (quantity > 0) {
          updatedItems[existingItemIndex] = { ...updatedItems[existingItemIndex], quantity };
        } else {
          updatedItems.splice(existingItemIndex, 1);
        }
        return { ...prev, items: updatedItems };
      } else if (quantity > 0) {
        return { ...prev, items: [...prev.items, { id: itemId, quantity }] };
      }
      return prev;
    });
  };

  const handleSubmit =  async (e: React.FormEvent) => {
    if(!user) return



    console.log(user)
    e.preventDefault();
    formData.user_id = user?.id || ''
    console.log('Reservation submitted:', formData);

    try {
      const { data, error } = await supabase.from('reservations').insert(formData);
      if (error) {
        throw error;
      }

      if(data){
        console.log('Reservation submitted:', formData); 

        toast.success('Reservation submitted successfully!');
        setFormData({
          name: '',
          phone: '',
          address: '',
          delivery_datetime: '', // <- FIXED this name
          notes: '',
          user_id: user?.id || '',
          items: [] as { id: number; quantity: number }[]
        });
      }
    } catch (error) {
      console.error('Error submitting reservation:', error);
      toast.error('Error submitting reservation. Please try again.');
    }


  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <ToastContainer position="top-right" />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-black">Make a Reservation</h1>
        
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Customer Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800">Customer Information</h2>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Delivery Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="delivery_datetime" className="block text-sm font-medium text-gray-700 mb-1">Delivery Date & Time</label>
                <input
                  type="datetime-local"
                  id="delivery_datetime"
                  name="delivery_datetime"
                  value={formData.delivery_datetime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  required
                />
              </div>
            </div>
            
            {/* Order Items */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800">Order Items</h2>
              
              <div className="space-y-4">
                {menuItems.map(item => (
                  <div key={item.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-600">₱{item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        onClick={() => handleItemChange(item.id, (formData.items.find(i => i.id === item.id)?.quantity || 0) - 1)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="w-8 text-center">
                        {formData.items.find(i => i.id === item.id)?.quantity || 0}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleItemChange(item.id, (formData.items.find(i => i.id === item.id)?.quantity || 0) + 1)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Notes */}
          <div className="mb-8">
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">Special Instructions</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Any allergies, special requests, or delivery instructions..."
            />
          </div>
          
          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={formData.items.length === 0}
              className="px-8 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Confirm Reservation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}