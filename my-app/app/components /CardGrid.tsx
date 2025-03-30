import React from 'react';
import InteractiveCard from './InteractiveCard';

// sample data
const cardData = [
    {
        id: '1',
        title: 'Oi larva thinks he glazing thugshaker 🍷🗿',
        description: 'I bought a property in egypt, Freddy fazbear never fails to Nick Eh 30 sus',
        imageUrl: 'https://tenor.com/view/thug-shaker-thugshaker-real-gif-5398006664705908769'
    },
    {
        id: '2',
        title: 'Smurf cat what\'s a father? Low taper fade 😭😭',
        description: 'Put the milk in the bag prime chat is this real ',
        imageUrl: 'https://www.reddit.com/media?url=https%3A%2F%2Fpreview.redd.it%2Fwhere-do-yall-scale-low-taper-fade-ninja-v0-4ye2jgyt5bge1.jpeg%3Fwidth%3D640%26crop%3Dsmart%26auto%3Dwebp%26s%3D472c6492c8b81c0346e6d0b9d411b50d30793614'
    },
    {
        id: '3',
        title: 'Bro never fails to lock in I became screaming in public restrooms prank grimace shake still water looksmaxxing',
        description: 'goofy ahh 💀😭',
        imageUrl: 'https://i.pinimg.com/236x/71/24/ec/7124ec8400d0f4dc80de34664dedfade.jpg'
    },
    {
        id: '4',
        title: 'Oi larva thinks he glazing thugshaker 🍷🗿',
        description: 'I bought a property in egypt, Freddy fazbear never fails to Nick Eh 30 sus',
        imageUrl: 'https://tenor.com/view/thug-shaker-thugshaker-real-gif-5398006664705908769'
    },
    {
        id: '5',
        title: 'Smurf cat what\'s a father? Low taper fade 😭😭',
        description: 'Put the milk in the bag prime chat is this real ',
        imageUrl: 'https://www.reddit.com/media?url=https%3A%2F%2Fpreview.redd.it%2Fwhere-do-yall-scale-low-taper-fade-ninja-v0-4ye2jgyt5bge1.jpeg%3Fwidth%3D640%26crop%3Dsmart%26auto%3Dwebp%26s%3D472c6492c8b81c0346e6d0b9d411b50d30793614'
    },
    {
        id: '6',
        title: 'Bro never fails to lock in I became screaming in public restrooms prank grimace shake still water looksmaxxing',
        description: 'goofy ahh 💀😭',
        imageUrl: 'https://i.pinimg.com/236x/71/24/ec/7124ec8400d0f4dc80de34664dedfade.jpg'
    },
]

const CardGrid: React.FC = () => {
    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-8">
                Explore delicious creations :P
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