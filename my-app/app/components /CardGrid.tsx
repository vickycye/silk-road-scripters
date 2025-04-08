import React from 'react';
import InteractiveCard from './InteractiveCard';

// sample data
const cardData = [
    {
        id: '1',
        title: 'Amstaff Terrier',
        description: 'I bought a property in egypt, Freddy fazbear never fails to Nick Eh 30 sus',
        imageUrl: 'images/amstaff-terrier.jpeg'
    },
    {
        id: '2',
        title: 'Black Laborador Retriever',
        description: 'Put the milk in the bag prime chat is this real ',
        imageUrl: 'images/black-labrador-retriever.jpg'
    },
    {
        id: '3',
        title: 'Border Collie',
        description: 'goofy ahh 💀😭',
        imageUrl: 'images/border-collie.webp'
    },
    {
        id: '4',
        title: 'Chow Chow',
        description: 'I bought a property in egypt, Freddy fazbear never fails to Nick Eh 30 sus',
        imageUrl: 'images/chow-chow.webp'
    },
    {
        id: '5',
        title: 'German Shepherd',
        description: 'Put the milk in the bag prime chat is this real ',
        imageUrl: 'images/german-shepherd.jpg'
    },
    {
        id: '6',
        title: 'Poodle',
        description: 'goofy ahh 💀😭',
        imageUrl: 'images/poodle.jpg'
    },
]

const CardGrid: React.FC = () => {
    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold text-emerald-800 mb-14">
                Find your favorite dog breed!
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {cardData.map((card) => (
                    <InteractiveCard
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        description={card.description}
                        imageUrl={card.imageUrl}
                    />
                ))}
            </div>
        </div>
    )
}

export default CardGrid;