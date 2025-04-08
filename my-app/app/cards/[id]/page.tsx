'use client';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Head from 'next/head';
import { Heart, Share, ArrowLeft } from 'lucide-react';

// Sample data - would come from API in production
interface CardDetail {
    title: string;
    description: string;
    imageUrl: string;
    content: string;
    author: string;
    publishDate: string;
}

type CardDetailsType = {
    [key: string]: CardDetail;
};

// sample card data
const cardDetails: CardDetailsType = {
    '1':{
        title: 'Amstaff Terrier',
        description: 'I bought a property in egypt, Freddy fazbear never fails to Nick Eh 30 sus',
        imageUrl: '../../images/amstaff-terrier.jpeg',
        content: '<p>Full detailed content would go here.</p><p>This is a placeholder for the complete article.</p>',
        author: 'Dog Hope Foundation',
        publishDate: '2025-01-15'
    },
    '2': {
        title: 'Black Laborador Retriever',
        description: 'Put the milk in the bag prime chat is this real ',
        imageUrl: '../../images/black-labrador-retriever.jpg',
        content: '<p>Full detailed content would go here.</p><p>This is a placeholder for the complete article.</p>',
        author: 'Labs for Life',
        publishDate: '2025-01-18'
    },
    '3': {
        title: 'Border Collie',
        description: 'goofy ahh 💀😭',
        imageUrl: '../../images/border-collie.webp',
        content: '<p>Full detailed content would go here.</p><p>This is a placeholder for the complete article.</p>',
        author: 'Border Collie Society',
        publishDate: '2023-05-07'
    },
    '4': {
        title: 'Chow Chow',
        description: 'I bought a property in egypt, Freddy fazbear never fails to Nick Eh 30 sus',
        imageUrl: '../../images/chow-chow.webp',
        content: '<p>Full detailed content would go here.</p><p>This is a placeholder for the complete article.</p>',
        author: 'Border Collie Society',
        publishDate: '2025-02-14'
    },
    '5': {
        title: 'German Shepherd',
        description: 'Put the milk in the bag prime chat is this real ',
        imageUrl: '../../images/german-shepherd.jpg',
        content: '<p>Full detailed content would go here.</p><p>This is a placeholder for the complete article.</p>',
        author: 'We love German Shepherds',
        publishDate: '2025-03-14'
    },
    '6': {
        title: 'Poodle',
        description: 'goofy ahh 💀😭',
        imageUrl: '../../images/poodle.jpg',
        content: '<p>Full detailed content would go here.</p><p>This is a placeholder for the complete article.</p>',
        author: 'Poodle Doodle',
        publishDate: '2024-11-28'
    },
};

const defaultCardData: CardDetail = {
    title: "Card not found",
    description: "This card doesn't exist or has been removed.",
    imageUrl: 'my-app/public/images/silk.png',
    content: '<p>No content available.</p>',
    author: "Unknown",
    publishDate: new Date().toISOString().split('T')[0]
}

const CardDetailPage: React.FC = () => {
    const params = useParams();
    const id = params?.id as string;
    const [isLiked, setIsLiked] = useState(false);

    // // Handle case when page is first loading
    // if (!id || typeof id !== 'string') {
    //     return <div className="container mx-auto p-4">Loading...</div>;
    // }

    console.log("Card ID from URL:", id); // For debugging
    console.log("Available card IDs:", Object.keys(cardDetails));
  
    
    // Get card details, or use default if not found
    const cardData = id && cardDetails[id] ? cardDetails[id] : defaultCardData;
    
    const handleLike = () => {
        setIsLiked(!isLiked);
        console.log(`Card ${id} liked status: ${!isLiked}`);
    };
    
    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
    };

    return (
        <>
            <Head>
                <title>{cardData.title} | Silk Road</title>
                <meta name="description" content={cardData.description} />
            </Head>
            
            <main className="min-h-screen bg-gray-50">
                <div className="container mx-auto py-8 px-4">
                    {/* Back button */}
                    <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
                        <ArrowLeft size={20} className="mr-2" />
                        Back to all cards
                    </Link>
                    
                    {/* Card content */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                        <img 
                            src={cardData.imageUrl} 
                            alt={cardData.title}
                            className="w-full h-64 md:h-96 object-cover" 
                        />
                        
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <h1 className="text-3xl font-bold text-gray-900">{cardData.title}</h1>
                                
                                <div className="flex space-x-2">
                                    <button 
                                        onClick={handleLike}
                                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                                        aria-label="Like"
                                    >
                                        <Heart 
                                            size={24} 
                                            className={`transition-colors ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-500'}`}
                                        />
                                    </button>
                                    
                                    <button 
                                        onClick={handleShare}
                                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                                        aria-label="Share"
                                    >
                                        <Share size={24} className="text-gray-500" />
                                    </button>
                                </div>
                            </div>
                            
                            <div className="flex items-center text-sm text-gray-500 mb-6">
                                <span>By {cardData.author}</span>
                                <span className="mx-2">•</span>
                                <span>{new Date(cardData.publishDate).toLocaleDateString()}</span>
                            </div>
                            
                            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: cardData.content }} />
                        </div>
                    </div>
                </div>
            </main>
            
            <footer className="bg-emerald-900 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>&copy; 2025 Silk Road. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default CardDetailPage;