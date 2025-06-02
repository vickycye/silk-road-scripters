'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Share, ArrowLeft, ShoppingCart } from 'lucide-react';
import { useCartStore } from '../../store/cart';

// Sample data - would come from API in production
interface CardDetail {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    content: string;
    author: string;
    publishDate: string;
    price: number;
}

type CardDetailsType = {
    [key: string]: CardDetail;
};

// sample card data
const cardDetails: CardDetailsType = {
    '1': {
        id: '1',
        title: 'Hand-Dyed Merino Silk Blend',
        author: 'Saki Cross',
        description: '3 skeins of hand-dyed 70% merino 30% silk blend. 250 yards/90g per skein.',
        imageUrl: '/images/silk-blend.png',
        price: 79.99,
        content: '<p>Experience the luxury of our hand-dyed merino silk blend yarn. Each skein is carefully crafted to ensure consistent color and quality. Perfect for shawls, sweaters, and other fine garments.</p>',
        publishDate: '2024-03-15'
    },
    '2': {
        id: '2',
        title: 'Full Grain Leather Wallet',
        author: 'Terry Carter',
        description: 'Handmade full grain leather wallet with 6 card capacity and 2 internal sections.',
        imageUrl: '/images/leather-wallet.png',
        price: 49.99,
        content: '<p>This handcrafted full grain leather wallet combines durability with elegant design. Each piece is carefully selected and stitched to ensure longevity and style.</p>',
        publishDate: '2024-03-14'
    },
    '3': {
        id: '3',
        title: 'Green Aventurine Pendant',
        author: 'Riley Smith',
        description: 'Hand polished/carved green aventurine pendant with 24" gold plated chain.',
        imageUrl: '/images/green_pendant.png',
        price: 29.99,
        content: '<p>Each green aventurine pendant is uniquely carved and polished to enhance its natural beauty. The stone is known for its properties of luck and prosperity.</p>',
        publishDate: '2024-03-13'
    },
    '4': {
        id: '4',
        title: 'Custom Knit Beanie',
        author: 'Saki Cross',
        description: 'Custom knit beanie in limited colors, price varies on size.',
        imageUrl: '/images/custom-knit-beanie.png',
        price: 19.99,
        content: '<p>Stay warm in style with our custom knit beanies. Each beanie is made to order using premium yarns and can be customized to your preferred size and color.</p>',
        publishDate: '2024-03-12'
    },
    '5': {
        id: '5',
        title: 'Personalized Animal Plushies',
        author: 'Antoni Bark',
        description: '6" tall hand sewn animal plushies. Clothes can be personalized on request.',
        imageUrl: '/images/animal-plushies.png',
        price: 24.99,
        content: '<p>Bring joy with our handmade animal plushies. Each plushie is carefully crafted with attention to detail and can be personalized with custom outfits.</p>',
        publishDate: '2024-03-11'
    },
    '6': {
        id: '6',
        title: 'Painting of a Cloud',
        author: 'Tiana Green',
        description: 'Acrylic painting of a cloud and sky.',
        imageUrl: '/images/acrylic-sky-painting.png',
        price: 149.99,
        content: '<p>This original acrylic painting captures the ethereal beauty of clouds in the sky. Each brushstroke is deliberately placed to create a sense of depth and movement.</p>',
        publishDate: '2024-03-10'
    },
    '7': {
        id: '7',
        title: 'Couple Rings - Flower Patterns',
        author: 'Git Stephen',
        description: 'Gold plated ring bands with flower cutouts for couples or friends.',
        imageUrl: '/images/couple-rings.png',
        price: 39.99,
        content: '<p>Celebrate your connection with these matching flower pattern rings. Each set is carefully crafted with delicate flower cutouts and plated in genuine gold.</p>',
        publishDate: '2024-03-09'
    },
    '8': {
        id: '8',
        title: 'Custom Marionettes',
        author: 'Bengi Su',
        description: 'Hand-carved, hand-painted, and hand-strung wooden marionettes. Custom orders first come first serve.',
        imageUrl: '/images/marionettes.png',
        price: 99.99,
        content: '<p>Each marionette is a unique piece of art, hand-carved from quality wood and brought to life with detailed painting. Custom orders allow for personalized characters and designs.</p>',
        publishDate: '2024-03-08'
    }
};

const defaultCardData: CardDetail = {
    id: '0',
    title: "Card not found",
    description: "This card doesn't exist or has been removed.",
    imageUrl: '/images/placeholder.png',
    content: '<p>No content available.</p>',
    author: "Unknown",
    publishDate: new Date().toISOString().split('T')[0],
    price: 0
}

const CardDetailPage: React.FC = () => {
    const params = useParams();
    const id = params?.id as string;
    const [isLiked, setIsLiked] = useState(false);
    const { addItem } = useCartStore();
    const [quantity, setQuantity] = useState(1);
    const [showToast, setShowToast] = useState(false);
    const [isAddingToCart, setIsAddingToCart] = useState(false);

    // // Handle case when page is first loading
    // if (!id || typeof id !== 'string') {
    //     return <div className="container mx-auto p-4">Loading...</div>;
    // }

    console.log("Card ID from URL:", id); // For debugging
    console.log("Available card IDs:", Object.keys(cardDetails));
  
    
    // Get card details, or use default if not found
    const cardData = id && cardDetails[id] ? cardDetails[id] : defaultCardData;
    
    const handleAddToCart = () => {
        setIsAddingToCart(true);
        addItem({
            id: crypto.randomUUID(),
            productId: cardData.id,
            name: cardData.title,
            price: cardData.price,
            quantity: quantity,
            imageUrl: cardData.imageUrl
        });
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
            setIsAddingToCart(false);
        }, 2000);
    };
    
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
            <main className="min-h-screen bg-[#e6e1d6] dark:bg-[#3c3c3c]">
                {/* Toast Notification */}
                <div className={`fixed top-4 right-4 z-50 bg-[#b8860b] dark:bg-[#5d4e3a] text-[#e8dcc8] px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 flex items-center gap-2 ${
                    showToast ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
                }`}>
                    Added to cart!  🛒
                </div>

                <div className="container mx-auto py-8 px-4 min-h-screen">
                    {/* Back button */}
                    <Link href="/" className="inline-flex items-center text-[#3d2f1f] dark:text-[#e8dcc8] hover:text-[#b8860b] dark:hover:text-[#d4a574] transition-colors mb-6">
                        <ArrowLeft size={20} className="mr-2" />
                        Back to all cards
                    </Link>
                    
                    {/* Card content */}
                    <div className="bg-white dark:bg-[#5d4e3a] rounded-lg shadow-lg overflow-hidden mb-8 min-h-[calc(100vh-8rem)]">
                        <div className="relative w-full h-[35vh] md:h-[45vh] lg:h-[55vh] overflow-hidden">
                            <Image 
                                src={cardData.imageUrl} 
                                alt={cardData.title}
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                                priority
                            />
                        </div>
                        
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h1 className="text-4xl font-bold text-[#3d2f1f] dark:text-[#e8dcc8] mb-2">{cardData.title}</h1>
                                    <div className="text-2xl font-bold text-[#b8860b] dark:text-[#d4a574]">${cardData.price.toFixed(2)}</div>
                                </div>
                                
                                <div className="flex space-x-3">
                                    <button 
                                        onClick={handleLike}
                                        className="p-2 rounded-full hover:bg-[#e6e1d6] dark:hover:bg-[#3c3c3c] transition-all duration-200 active:scale-95 active:bg-[#d4a574] dark:active:bg-[#8b6914]"
                                        aria-label="Like"
                                    >
                                        <Heart 
                                            size={24} 
                                            className={`transition-colors ${isLiked ? 'fill-[#b8860b] text-[#b8860b] dark:fill-[#d4a574] dark:text-[#d4a574]' : 'text-[#5d4e3a] dark:text-[#b8b0a0]'}`}
                                        />
                                    </button>
                                    
                                    <button 
                                        onClick={handleShare}
                                        className="p-2 rounded-full hover:bg-[#e6e1d6] dark:hover:bg-[#3c3c3c] transition-all duration-200 active:scale-95 active:bg-[#d4a574] dark:active:bg-[#8b6914]"
                                        aria-label="Share"
                                    >
                                        <Share size={24} className="text-[#5d4e3a] dark:text-[#b8b0a0]" />
                                    </button>
                                </div>
                            </div>
                            
                            <div className="flex items-center text-sm text-[#5d4e3a] dark:text-[#b8b0a0] mb-8">
                                <span>By {cardData.author}</span>
                                <span className="mx-2">•</span>
                                <span>{new Date(cardData.publishDate).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: '2-digit',
                                    day: '2-digit'
                                })}</span>
                            </div>
                            
                            <div className="prose max-w-none text-[#3d2f1f] dark:text-[#e8dcc8]" dangerouslySetInnerHTML={{ __html: cardData.content }} />

                            {/* Add to Cart Section */}
                            <div className="flex items-center gap-4 mt-8">
                                <div className="flex items-center border border-[#5d4e3a] dark:border-[#b8b0a0] rounded-lg">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="px-4 py-2 text-[#5d4e3a] dark:text-[#b8b0a0] hover:bg-[#e6e1d6] dark:hover:bg-[#3c3c3c] transition-all duration-200 active:scale-95 active:bg-[#d4a574] dark:active:bg-[#8b6914]"
                                    >
                                        -
                                    </button>
                                    <span className="px-4 py-2 text-[#5d4e3a] dark:text-[#b8b0a0] min-w-[3rem] text-center">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="px-4 py-2 text-[#5d4e3a] dark:text-[#b8b0a0] hover:bg-[#e6e1d6] dark:hover:bg-[#3c3c3c] transition-all duration-200 active:scale-95 active:bg-[#d4a574] dark:active:bg-[#8b6914]"
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    onClick={handleAddToCart}
                                    disabled={isAddingToCart}
                                    className={`flex items-center gap-2 bg-[#b8860b] dark:bg-[#d4a574] text-white px-8 py-2 rounded-lg transition-all duration-200 
                                        ${isAddingToCart ? 'opacity-75 cursor-not-allowed' : 'hover:opacity-90 active:scale-95 active:bg-[#8b6914] dark:active:bg-[#8b6914]'}`}
                                >
                                    <ShoppingCart size={20} />
                                    {isAddingToCart ? 'Adding...' : 'Add to Cart'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default CardDetailPage;