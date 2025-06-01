import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { fetchVideoDetails } from '../services/youtube';

interface VideoDetails {
  channelTitle: string;
  title: string;
  thumbnailUrl: string;
}

interface LearningCardProps {
  title: string;
  craftType: string;
  videoId: string;
  thumbnailUrl: string;
}

const LearningCard: React.FC<LearningCardProps> = ({ title, craftType, videoId, thumbnailUrl }) => {
  const [videoDetails, setVideoDetails] = useState<VideoDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadVideoDetails = async () => {
      try {
        const [details] = await fetchVideoDetails([videoId]);
        if (details) {
          setVideoDetails(details);
        }
      } catch (error) {
        console.error('Failed to fetch video details:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadVideoDetails();
  }, [videoId]);

  return (
    <div className="relative bg-white dark:bg-[#5d4e3a] rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-[1.02]">
      <a 
        href={`https://www.youtube.com/watch?v=${videoId}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative aspect-video w-full">
          <Image
            src={thumbnailUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center transition-opacity hover:bg-opacity-25">
            <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center transform transition-transform hover:scale-110">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-[#b8860b] border-b-8 border-b-transparent ml-2"></div>
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-[#b8860b] dark:bg-[#d4a574] rounded-full">
              {craftType}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-[#3d2f1f] dark:text-[#e8dcc8] line-clamp-2 hover:text-[#b8860b] dark:hover:text-[#d4a574] transition-colors">
            {title}
          </h3>
          {!isLoading && videoDetails && (
            <p className="mt-2 text-sm text-[#5d4e3a] dark:text-[#b8b0a0] hover:text-[#b8860b] dark:hover:text-[#d4a574] transition-colors">
              {videoDetails.channelTitle}
            </p>
          )}
        </div>
      </a>
    </div>
  );
};

export default LearningCard; 