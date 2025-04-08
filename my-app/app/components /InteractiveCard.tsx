"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Heart, Share } from 'lucide-react';

// Defines structure of an object
interface CardProps {
    id: string; // unique identifier for the card -- easier for routing
    title: string; // title of the card -- perhaps the name of the item?
    author: string; // author of the creation -- who made this?
    description: string; // description of the card -- what is this item? 
    imageUrl: string; // URL of the image -- location of the image
}

const InteractiveCard: React.FC<CardProps> = ({
    id, 
    title,
    author,
    description,
    imageUrl,
}) => {
    // like, share constants
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsLiked(!isLiked);
        // [TODO] for debugging--idk how to save the like status 
        console.log(`Card ${id} liked status: ${!isLiked}`);
    };

    // would have to handle the iOS share sheet on iOS, and android share sheet on android
    const handleShare = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        // [TODO] idfk how to share stuff like that yet yk
        console.log(`Sharing card ${id}`);

        // could also just copy to clipboard
        // navigator.clipboard.writeText(`localhost:3000/cards/${id}`);
        // alert('Link copied to clipboard!');
    };

    return (
        <Link href={`/cards/${id}`} passHref>
            <div className="group relative w-64 h-80 overflow-hidden shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer">
                {/* Card Image - filling the entire card */}
                <div className="w-full h-full">
                    <img 
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover" 
                    />
                </div>

                {/* Info overlay - swipes up from bottom on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 opacity-95 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out p-4">
                    <h3 className="text-lg font-semibold text-emerald-950 mb-1 truncate">{title}</h3>
                    <p className="text-sm text-sky-700 line-clamp-2 font-bold mb-1">{author}</p>
                    <p className="text-sm text-emerald-700 line-clamp-2">{description}</p>
                    
                    {/* Action buttons */}
                    <div className="absolute bottom-3 right-3 flex space-x-2">
                        <button 
                            onClick={handleLike}
                            className="p-2 rounded-full hover:bg-gray-200 transition-colors"
                            aria-label="Like"   
                        >
                            <Heart 
                                size={20} 
                                className={`transition-colors ${isLiked ? 'fill-red-500 text-red-500': 'text-gray-700'}`}
                            />
                        </button>

                        <button
                            onClick={handleShare}
                            className="p-2 rounded-full hover:bg-gray-200 transition-colors"
                            aria-label="Share"
                        >
                            <Share 
                                size={20}
                                className="text-gray-700"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default InteractiveCard;
