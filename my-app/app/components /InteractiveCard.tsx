"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Heart, Share } from 'lucide-react';

// Defines structure of an object
interface CardProps {
    id: string; // unique identifier for the card -- easier for routing
    title: string; // title of the card -- perhaps the name of the item?
    description: string; // description of the card -- what is this item? 
    imageUrl: string; // URL of the image -- location of the image
}

const InteractiveCard: React.FC<CardProps> = ({
    id, 
    title,
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
            <div className = "group relative w-64 h-80 rounded-lg overflow-hidden shadow-md trasition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer bg-white">
                {/* Card Image */}
                <div className = "width-full h-full overflow-hidden">
                    <img src={imageUrl || 'images/silk.png'}
                        alt={title}
                        className = "w-full h-full object-cover transition-transform duration-300 group-hover:scale-110">
                    </img>
                </div>
            </div>

            {/* Card content */}
            <div className="p-4">
                <h3 className="text-lg font-semibold text-emerald-950 mb-2 truncate">{title}</h3>
                <p className="text-sm text-emerald-700 line-clamp-3">{description}</p>
            </div>

            {/* Action buttons */}
            <div className="absolute bottom-0 left-0 right-0 p-3 flex justify-end space-x-2 bg-gradient-to-t from-gray-100 to-transparent">
                <button 
                    onClick={handleLike}
                    className="p-2 rounded-full hover:bg-gray-200 transition-colors"
                    aria-label="Like"   
                >
                    <Heart size={20} 
                    className={`transition-colors ${isLiked ? 'fill-red-500 text-red-500': 'text-gray-500'}`}/>
                </button>

                <button
                    onClick={handleShare}
                    className="p-2 rounded-full hover:bg-gray-200 transition-colors"
                    aria-label="Share"
                >
                    <Share size={20}
                    className="text-gray-500"/>
                </button>
            </div>
        </Link>
    );
};


export default InteractiveCard;