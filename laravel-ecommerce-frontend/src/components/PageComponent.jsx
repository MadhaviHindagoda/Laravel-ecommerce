import React from 'react';

export default function PageComponent({ title, children }) {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Header */}
            <header className="bg-blue-600 text-white py-4">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-semibold">{title}</h1>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow container mx-auto px-4 py-8">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-gray-200 py-4">
                <div className="container mx-auto px-4 text-center">
                    &copy; {new Date().getFullYear()} Gift Shop. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
