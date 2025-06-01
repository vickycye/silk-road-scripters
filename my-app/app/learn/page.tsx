'use client';

import React, { useState, useMemo } from 'react';
import Carousel from '../components/Carousel';
import LearningCard from '../components/LearningCard';
import { ChevronDown } from 'lucide-react';

const tutorials = [
  {
    title: "Traditional Japanese Paper Crafting Techniques",
    craftType: "papercraft",
    videoId: "hM5M2Fu0RtY",
    thumbnailUrl: `https://i.ytimg.com/vi/hM5M2Fu0RtY/hqdefault.jpg`
  },
  {
    title: "Advanced Textile Art Techniques for Beginners",
    craftType: "textile arts",
    videoId: "zzWX2dx8ufc",
    thumbnailUrl: `https://i.ytimg.com/vi/zzWX2dx8ufc/hqdefault.jpg`
  },
  {
    title: "Creative Fiber Art Techniques and Inspiration",
    craftType: "fiber art",
    videoId: "v4bC1P3f8qM",
    thumbnailUrl: `https://i.ytimg.com/vi/v4bC1P3f8qM/hqdefault.jpg`
  },
  {
    title: "Essential Knitting Techniques for Beautiful Projects",
    craftType: "knitting",
    videoId: "XxgIEeIBCFo",
    thumbnailUrl: `https://i.ytimg.com/vi/XxgIEeIBCFo/hqdefault.jpg`
  },
  {
    title: "Modern Crocheting Patterns and Techniques",
    craftType: "crocheting",
    videoId: "cZdO2e8K29o",
    thumbnailUrl: `https://i.ytimg.com/vi/cZdO2e8K29o/hqdefault.jpg`
  }
];

export default function LearnPage() {
  const [selectedTag, setSelectedTag] = useState<string>("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const uniqueTags = useMemo(() => {
    const tags = tutorials.map(tutorial => tutorial.craftType);
    return ["all", ...Array.from(new Set(tags))];
  }, []);

  const filteredTutorials = useMemo(() => {
    if (selectedTag === "all") return tutorials;
    return tutorials.filter(tutorial => tutorial.craftType === selectedTag);
  }, [selectedTag]);

  return (
    <div className="min-h-screen bg-[#e6e1d6] dark:bg-[#3c3c3c] py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#3d2f1f] dark:text-[#e8dcc8] mb-8 text-center">
          Learn Traditional Crafts
        </h1>
        
        <p className="text-[#5d4e3a] dark:text-[#b8b0a0] text-lg mb-12 text-center max-w-2xl mx-auto">
          Explore our curated collection of traditional crafting techniques from around the world. 
          Each tutorial is carefully selected to help you master the art of traditional craftsmanship.
        </p>

        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-semibold text-[#3d2f1f] dark:text-[#e8dcc8] mb-8 text-center">
            Top Trending Videos
            <span className="block text-base font-normal text-[#5d4e3a] dark:text-[#b8b0a0] mt-2">
              Swipe to discover more crafting techniques
            </span>
          </h2>
          <Carousel>
            {tutorials.map((tutorial, index) => (
              <div key={index} className="px-4">
                <LearningCard {...tutorial} />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold text-[#3d2f1f] dark:text-[#e8dcc8]">
              All Tutorials
            </h2>
            
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#5d4e3a] rounded-lg shadow-sm text-[#3d2f1f] dark:text-[#e8dcc8] hover:bg-[#e6e1d6] dark:hover:bg-[#3c3c3c] transition-colors"
              >
                Filter by: {selectedTag.charAt(0).toUpperCase() + selectedTag.slice(1)}
                <ChevronDown size={20} className={`transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute z-10 mt-2 w-48 bg-white dark:bg-[#5d4e3a] rounded-lg shadow-lg py-1 right-0">
                  {uniqueTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => {
                        setSelectedTag(tag);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-[#e6e1d6] dark:hover:bg-[#3c3c3c] transition-colors ${
                        selectedTag === tag 
                          ? 'text-[#b8860b] dark:text-[#d4a574] font-semibold'
                          : 'text-[#3d2f1f] dark:text-[#e8dcc8]'
                      }`}
                    >
                      {tag.charAt(0).toUpperCase() + tag.slice(1)}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTutorials.map((tutorial, index) => (
              <div key={index} className="transform scale-90">
                <LearningCard {...tutorial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
