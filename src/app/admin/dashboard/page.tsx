'use client';

import React, { useState } from 'react';

const AdminDashboard = () => {
    // Dummy data for Orders and Reservations
    const ordersData = [
        {
            id: 1,
            name: 'Juan Dela Cruz',
            phone: '09171234567',
            address: '123 Main St, Manila',
            items: [
                { item: 'Filipino Spaghetti', quantity: 2 },
                { item: 'Chicken Wings', quantity: 3 },
            ],
            notes: 'Extra sauce, please.',
            status: 'Preparing'
        },
        {
            id: 2,
            name: 'Maria Santos',
            phone: '09179876543',
            address: '456 Rizal Ave, Makati',
            items: [
                { item: 'Kare Kare', quantity: 1 },
                { item: 'Lumpiang Shanghai', quantity: 4 },
            ],
            notes: 'No peanuts in Kare Kare.',
            status: 'Delivered'
        },
    ];

    const reservationsData = [
        {
            id: 1,
            name: 'Pedro Gonzales',
            phone: '09221234567',
            address: '789 Cavite St, Cavite',
            deliveryDate: '2025-04-10',
            items: [
                { item: 'Pancit Malabon', quantity: 3 },
                { item: 'Lechon Kawali', quantity: 2 },
            ],
            notes: 'Please deliver by 5 PM.',
            status: 'Confirmed'
        },
        {
            id: 2,
            name: 'Liza Rivera',
            phone: '09237654321',
            address: '321 Pasig Rd, Pasig',
            deliveryDate: '2025-04-12',
            items: [
                { item: 'Sinigang na Baboy', quantity: 2 },
                { item: 'Adobo', quantity: 4 },
            ],
            notes: 'Include extra rice.',
            status: 'Pending'
        },
    ];

    // State for active tab
    const [activeTab, setActiveTab] = useState('orders');

    // Status colors
    const statusColors: any = {
        'Preparing': 'bg-blue-100 text-blue-800',
        'Delivered': 'bg-green-100 text-green-800',
        'Confirmed': 'bg-yellow-100 text-yellow-800',
        'Pending': 'bg-orange-100 text-orange-800'
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation Sidebar */}
            <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg">
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-yellow-600 mb-8">Admin Panel</h1>
                    <nav>
                        <ul className="space-y-4">
                            <li>
                                <button 
                                    onClick={() => setActiveTab('dashboard')}
                                    className={`w-full text-left p-3 rounded-lg ${activeTab === 'dashboard' ? 'bg-yellow-100 text-yellow-600 font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
                                >
                                    Dashboard Overview
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => setActiveTab('orders')}
                                    className={`w-full text-left p-3 rounded-lg ${activeTab === 'orders' ? 'bg-yellow-100 text-yellow-600 font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
                                >
                                    Orders Management
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => setActiveTab('reservations')}
                                    className={`w-full text-left p-3 rounded-lg ${activeTab === 'reservations' ? 'bg-yellow-100 text-yellow-600 font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
                                >
                                    Reservations
                                </button>
                            </li>
                            <li>
                                <button className="w-full text-left p-3 rounded-lg text-gray-600 hover:bg-gray-100">
                                    Menu Items
                                </button>
                            </li>
                            <li>
                                <button className="w-full text-left p-3 rounded-lg text-gray-600 hover:bg-gray-100">
                                    Customer Support
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="absolute bottom-0 w-full p-6">
                    <button className="w-full p-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors">
                        Log Out
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="ml-64 p-8">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">
                        {activeTab === 'dashboard' ? 'Dashboard Overview' : 
                         activeTab === 'orders' ? 'Orders Management' : 'Reservations'}
                    </h1>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <input 
                                type="text" 
                                placeholder="Search..." 
                                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                            />
                            <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold">
                            AD
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-gray-500">Total Orders</p>
                                <h3 className="text-2xl font-bold mt-1 text-gray-800">{ordersData.length}</h3>
                            </div>
                            <div className="p-3 rounded-lg bg-yellow-50">
                                <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-4">+2 from yesterday</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-gray-500">Total Reservations</p>
                                <h3 className="text-2xl font-bold mt-1 text-gray-800">{reservationsData.length}</h3>
                            </div>
                            <div className="p-3 rounded-lg bg-yellow-50">
                                <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-4">+1 from yesterday</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-gray-500">Pending Actions</p>
                                <h3 className="text-2xl font-bold mt-1 text-gray-800">3</h3>
                            </div>
                            <div className="p-3 rounded-lg bg-yellow-50">
                                <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-4">2 orders to prepare</p>
                    </div>
                </div>

                {/* Orders Table */}
                {activeTab === 'orders' && (
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                            <h2 className="text-xl font-semibold text-gray-800">Recent Orders</h2>
                            <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors text-sm">
                                + New Order
                            </button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notes</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {ordersData.map((order) => (
                                        <tr key={order.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="font-medium text-gray-900">{order.name}</div>
                                                <div className="text-sm text-gray-500">{order.address}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {order.phone}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {order.items.map((item, index) => (
                                                    <div key={index} className="text-sm text-gray-900">
                                                        {item.item} <span className="text-gray-500">(x{item.quantity})</span>
                                                    </div>
                                                ))}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500 max-w-xs">
                                                {order.notes}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2 py-1 text-xs rounded-full ${statusColors[order.status]}`}>
                                                    {order.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <button className="text-yellow-600 hover:text-yellow-800 mr-3">Edit</button>
                                                <button className="text-red-600 hover:text-red-800">Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="px-6 py-3 border-t border-gray-100 flex items-center justify-between">
                            <div className="text-sm text-gray-500">
                                Showing <span className="font-medium">1</span> to <span className="font-medium">{ordersData.length}</span> of <span className="font-medium">{ordersData.length}</span> results
                            </div>
                            <div className="flex space-x-2">
                                <button className="px-3 py-1 border rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                                    Previous
                                </button>
                                <button className="px-3 py-1 border rounded-lg bg-yellow-500 text-white text-sm hover:bg-yellow-600">
                                    1
                                </button>
                                <button className="px-3 py-1 border rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Reservations Table */}
                {activeTab === 'reservations' && (
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                            <h2 className="text-xl font-semibold text-gray-800">Upcoming Reservations</h2>
                            <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors text-sm">
                                + New Reservation
                            </button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delivery Date</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {reservationsData.map((reservation) => (
                                        <tr key={reservation.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="font-medium text-gray-900">{reservation.name}</div>
                                                <div className="text-sm text-gray-500">{reservation.address}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {reservation.phone}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {reservation.deliveryDate}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {reservation.items.map((item, index) => (
                                                    <div key={index} className="text-sm text-gray-900">
                                                        {item.item} <span className="text-gray-500">(x{item.quantity})</span>
                                                    </div>
                                                ))}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2 py-1 text-xs rounded-full ${statusColors[reservation.status]}`}>
                                                    {reservation.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <button className="text-yellow-600 hover:text-yellow-800 mr-3">Edit</button>
                                                <button className="text-red-600 hover:text-red-800">Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="px-6 py-3 border-t border-gray-100 flex items-center justify-between">
                            <div className="text-sm text-gray-500">
                                Showing <span className="font-medium">1</span> to <span className="font-medium">{reservationsData.length}</span> of <span className="font-medium">{reservationsData.length}</span> results
                            </div>
                            <div className="flex space-x-2">
                                <button className="px-3 py-1 border rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                                    Previous
                                </button>
                                <button className="px-3 py-1 border rounded-lg bg-yellow-500 text-white text-sm hover:bg-yellow-600">
                                    1
                                </button>
                                <button className="px-3 py-1 border rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Dashboard Overview */}
                {activeTab === 'dashboard' && (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Recent Orders Card */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-lg font-semibold text-gray-800">Recent Orders</h3>
                                    <button className="text-sm text-yellow-600 hover:text-yellow-800">View All</button>
                                </div>
                                <div className="space-y-4">
                                    {ordersData.slice(0, 3).map(order => (
                                        <div key={order.id} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                                            <div className="flex justify-between">
                                                <div>
                                                    <p className="font-medium text-gray-800">{order.name}</p>
                                                    <p className="text-sm text-gray-500">{order.items.length} items</p>
                                                </div>
                                                <span className={`px-2 py-1 text-xs rounded-full ${statusColors[order.status]}`}>
                                                    {order.status}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Upcoming Reservations Card */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-lg font-semibold text-gray-800">Upcoming Reservations</h3>
                                    <button className="text-sm text-yellow-600 hover:text-yellow-800">View All</button>
                                </div>
                                <div className="space-y-4">
                                    {reservationsData.slice(0, 3).map(reservation => (
                                        <div key={reservation.id} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                                            <div className="flex justify-between">
                                                <div>
                                                    <p className="font-medium text-gray-800">{reservation.name}</p>
                                                    <p className="text-sm text-gray-500">Delivery: {reservation.deliveryDate}</p>
                                                </div>
                                                <span className={`px-2 py-1 text-xs rounded-full ${statusColors[reservation.status]}`}>
                                                    {reservation.status}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Activity Chart (Placeholder) */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Activity</h3>
                            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
                                Order Activity Chart Placeholder
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;