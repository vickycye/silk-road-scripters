// VideoCard component temporarily disabled

// import React from 'react';
// import Image from 'next/image';

// interface VideoCardProps {
//   videoId: string;
//   title: string;
//   channelTitle: string;
//   thumbnailUrl: string;
// }

// const VideoCard: React.FC<VideoCardProps> = ({
//   videoId,
//   title,
//   channelTitle,
//   thumbnailUrl,
// }) => {
//   return (
//     <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg bg-white dark:bg-[#2d2d2d] group">
//       <div className="relative w-full aspect-video">
//         <Image
//           src={thumbnailUrl}
//           alt={title}
//           fill
//           className="object-cover"
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//           priority
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
//       </div>
//       <div className="p-4">
//         <h3 className="text-lg font-semibold text-[#3d2f1f] dark:text-[#e8dcc8] line-clamp-2">
//           {title}
//         </h3>
//         <p className="text-sm text-[#5d4e3a] dark:text-[#d4a574] mt-2">
//           {channelTitle}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default VideoCard; 