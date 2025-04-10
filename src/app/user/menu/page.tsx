'use client';

import Header from '@/app/comps/Header';
import IsLoggedIn from '@/utils/IsloggedIn';
import supabase from '@/utils/Supabase';
import { useEffect, useState } from 'react';

interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    image_url: string | null;
}

interface CartItem extends MenuItem {
    quantity: number;
}

export default function Menu() {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [cart, setCart] = useState<CartItem[]>([]);


    // Fetch menu items (same as before)
    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                setLoading(true);
                const { data, error } = await supabase
                    .from('menu_items')
                    .select('*')
                    .order('category', { ascending: true });

                if (error) throw error;
                setMenuItems(data || []);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch menu items');
            } finally {
                setLoading(false);
            }
        };
        fetchMenuItems();
    }, [supabase]);

    // Handle adding to cart
    const handleAddToCart = (item: MenuItem) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                return prevCart.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
    };


    const [user] = IsLoggedIn()
    const submitOrder = async () => {
        const userId = user?.id

        if(!userId) return alert('User not found')
    
        const formattedOrders = cart.map(item => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price
        }));
    
        const { error } = await supabase.from('order_items').insert([
            {
                user_id: userId,
                orders: formattedOrders
            }
        ]);
    
        if (error) {
            console.error('Order submission failed:', error.message);
            alert('Failed to place order!');
        } else {
            alert('Order placed successfully!');
            setCart([]); // Clear cart after successful submission
        }
    };

    // Handle removing from cart
    const handleRemoveFromCart = (itemId: number) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === itemId);
            if (existingItem && existingItem.quantity > 1) {
                return prevCart.map(item =>
                    item.id === itemId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
            } else {
                return prevCart.filter(item => item.id !== itemId);
            }
        });
    };

    // Get quantity for a specific item
    const getItemQuantity = (itemId: number) => {
        const cartItem = cart.find(item => item.id === itemId);
        return cartItem ? cartItem.quantity : 0;
    };

    if (loading) return <div className="flex justify-center items-center h-64">Loading...</div>;
    if (error) return <div className="text-red-500 p-4">Error: {error}</div>;




    

    return (
        <>
        <Header />
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Our Menu</h1>

            {Array.from(new Set(menuItems.map(item => item.category))).map(category => (
                <div key={category} className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-6 border-b pb-2">{category}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {menuItems
                            .filter(item => item.category === category)
                            .map(item => {
                                const quantity = getItemQuantity(item.id);

                                return (
                                    <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                        <div className="h-48 overflow-hidden">
                                            {item.image_url ? (
                                                <img
                                                    src={item.image_url}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                                    <span className="text-gray-500">No image</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-4">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                                                <span className="text-lg font-semibold text-yellow-600">₱{item.price.toFixed(2)}</span>
                                            </div>
                                            <p className="text-gray-600 mb-4">{item.description}</p>

                                            <div className="flex items-center space-x-2">
                                                <button
                                                    onClick={() => {submitOrder()}}
                                                    className="py-2 px-4 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-md transition-colors"
                                                >
                                                    Add to Order
                                                </button>

                                                <div className="flex items-center space-x-2">
                                                    <button
                                                        onClick={() => handleAddToCart(item)}
                                                        className="px-3 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-md"
                                                    >
                                                        +
                                                    </button>
                                                    <span className="min-w-[40px] text-center bg-yellow-100 px-3 py-2 rounded-md">
                                                        {getItemQuantity(item.id)}
                                                    </span>
                                                    <button
                                                        onClick={() => handleRemoveFromCart(item.id)}
                                                        className="px-3 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-md"
                                                    >
                                                        -
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            ))}
        </div>
        </>
    );
}