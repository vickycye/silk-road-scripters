import React from 'react';
import InteractiveCard from './InteractiveCard';

// sample data
const cardData = [
    {
        id: '1',
        title: 'Hand-Dyed Merino Silk Blend',
        author: 'Saki Cross',
        description: '3 skeins of hand-dyed 70% merino 30% silk blend. 250 yards/90g per skein.',
        imageUrl: 'images/silk-blend.png',
        price: 79.99
    },
    {
        id: '2',
        title: 'Full Grain Leather Wallet',
        author: 'Terry Carter',
        description: 'Handmade full grain leather wallet with 6 card capacity and 2 internal sections.',
        imageUrl: 'images/leather-wallet.png',
        price: 49.99
    },
    {
        id: '3',
        title: 'Green Aventurine Pendant',
        author: 'Riley Smith',
        description: 'Hand polished/carved green aventurine pendant with 24" gold plated chain.',
        imageUrl: 'images/green_pendant.png',
        price: 29.99
    },
    {
        id: '4',
        title: 'Custom Knit Beanie',
        author: 'Saki Cross',
        description: 'Custom knit beanie in limited colors, price varies on size.',
        imageUrl: 'images/custom-knit-beanie.png',
        price: 19.99
    },
    {
        id: '5',
        title: 'Personalized Animal Plushies',
        author: 'Antoni Bark',
        description: '6" tall hand sewn animal plushies. Clothes can be personalized on request.',
        imageUrl: 'images/animal-plushies.png',
        price: 24.99
    },
    {
        id: '6',
        title: 'Painting of a Cloud',
        author: 'Tiana Green',
        description: 'Acrylic painting of a cloud and sky.',
        imageUrl: 'images/acrylic-sky-painting.png',
        price: 149.99
    },
    {
        id: '7',
        title: 'Couple Rings - Flower Patterns',
        author: 'Git Stephen',
        description: 'Gold plated ring bands with flower cutouts for couples or friends.',
        imageUrl: 'images/couple-rings.png',
        price: 39.99
    },
    {
        id: '8',
        title: 'Custom Marionettes',
        author: 'Bengi Su',
        description: 'Hand-carved, hand-painted, and hand-strung wooden marionettes. Custom orders first come first serve.',
        imageUrl: 'images/marionettes.png',
        price: 99.99
    },
]

const CardGrid: React.FC = () => {
    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold text-[#3d2f1f] dark:text-[#e8dcc8] mb-14">
                Discover handmade treasures from artisans around the world!
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {cardData.map((card) => (
                    <InteractiveCard
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        author={card.author}
                        description={card.description}
                        imageUrl={card.imageUrl}
                        price={card.price}
                    />
                ))}
            </div>
        </div>
    )
}

export default CardGrid;