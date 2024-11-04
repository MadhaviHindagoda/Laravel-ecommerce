import { GiftIcon, StarIcon } from '@heroicons/react/24/solid';
import React from 'react';
import introImage from '../assets/gettyimages-183276205-612x612.jpg';
import ProductPage from './Products';


export default function Dashboard() {
    return (
        <div>
            <header className="bg-white shadow">
                <div className="mx-auto max-w-full px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
                </div>
            </header>
            <div className="relative flex items-center justify-center h-screen">
                <img
                    src={introImage}
                    alt="Introduction"
                    className="w-full h-full object-cover"
                />
                <div className="absolute text-white text-center">
                    <h1 className="text-4xl font-bold">Welcome to Our Gift Shop!</h1>
                    <p className="mt-2 text-lg">Discover the perfect gift for every occasion.</p>
                </div>
            </div>
            <main className="bg-gray-100 min-h-screen">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <section className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center space-x-4">
                            <GiftIcon className="h-12 w-12 text-indigo-600" />
                            <h2 className="text-2xl font-semibold text-gray-800">Welcome to Our Gift Shop!</h2>
                        </div>
                        <p className="mt-4 text-gray-600">
                            Explore a unique collection of carefully curated gifts for every occasion. Whether you're looking for something
                            special for a loved one or treating yourself, our shop has something for everyone!
                        </p>
                    </section>

                    <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <StarIcon className="h-8 w-8 text-yellow-500" />
                            <h3 className="mt-4 text-xl font-bold text-gray-800">Our Best Sellers</h3>
                            <p className="mt-2 text-gray-600">
                                Discover our most popular products that customers love. These bestsellers are tried, tested, and perfect for gifting!
                            </p>
                        </div>

                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <StarIcon className="h-8 w-8 text-yellow-500" />
                            <h3 className="mt-4 text-xl font-bold text-gray-800">New Arrivals</h3>
                            <p className="mt-2 text-gray-600">
                                Stay updated with our latest additions! Fresh and trending items are added regularly, so there’s always something new to explore.
                            </p>
                        </div>

                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <StarIcon className="h-8 w-8 text-yellow-500" />
                            <h3 className="mt-4 text-xl font-bold text-gray-800">Exclusive Discounts</h3>
                            <p className="mt-2 text-gray-600">
                                Save more with our exclusive discounts and seasonal offers. Don’t miss out on these amazing deals!
                            </p>
                        </div>


                    </section>
                </div>
            </main>
            <div className="min-h-screen bg-gray-100 p-6">
                <h1 className="text-center text-2xl font-bold mb-6">Our Gift Shop</h1>
                <ProductPage />
            </div>
        </div>
    );
}
