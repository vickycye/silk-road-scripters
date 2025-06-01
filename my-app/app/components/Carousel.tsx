import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const getAdjustedIndex = (index: number) => {
    if (index < 0) return children.length - 1;
    if (index >= children.length) return 0;
    return index;
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  // Add a timeout fallback to ensure transitions don't get stuck
  useEffect(() => {
    if (isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
      }, 0); // Quick transition duration
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  const handleWheel = (e: WheelEvent) => {
    if (!containerRef.current || isTransitioning) return;
    
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault();
      setIsTransitioning(true);
      const newIndex = getAdjustedIndex(
        currentIndex + (e.deltaX > 0 ? 1 : -1)
      );
      setCurrentIndex(newIndex);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isTransitioning) return;
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || isTransitioning) return;
    e.preventDefault();
    
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (Math.abs(walk) > 100) {
      setIsTransitioning(true);
      const newIndex = getAdjustedIndex(
        currentIndex + (walk > 0 ? -1 : 1)
      );
      setCurrentIndex(newIndex);
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [children.length, currentIndex, isTransitioning]);

  const prev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(getAdjustedIndex(currentIndex - 1));
  };

  const next = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(getAdjustedIndex(currentIndex + 1));
  };

  const renderItems = () => {
    const items = [];
    const prevIndex = getAdjustedIndex(currentIndex - 1);
    const nextIndex = getAdjustedIndex(currentIndex + 1);
    const prev2Index = getAdjustedIndex(currentIndex - 2);
    const next2Index = getAdjustedIndex(currentIndex + 2);

    // Enhanced transition class with smoother easing
    const baseTransitionClass = "absolute top-1/2 transform transition-all duration-300 ease-out";

    // Far left (barely visible)
    items.push(
      <div 
        key={`prev2-${prev2Index}`}
        className={`${baseTransitionClass} -translate-y-1/2 -left-[12%] w-[35%] -translate-x-1/2 opacity-20 scale-70 z-10`}
        style={{ outline: 'none', border: 'none' }}
        onTransitionEnd={handleTransitionEnd}
      >
        <div style={{ outline: 'none', border: 'none' }}>
          {children[prev2Index]}
        </div>
      </div>
    );

    // Far right (barely visible)
    items.push(
      <div 
        key={`next2-${next2Index}`}
        className={`${baseTransitionClass} -translate-y-1/2 -right-[12%] w-[35%] translate-x-1/2 opacity-20 scale-70 z-10`}
        style={{ outline: 'none', border: 'none' }}
      >
        <div style={{ outline: 'none', border: 'none' }}>
          {children[next2Index]}
        </div>
      </div>
    );

    // Left side (semi-transparent)
    items.push(
      <div 
        key={`prev-${prevIndex}`}
        className={`${baseTransitionClass} -translate-y-1/2 left-[8%] w-[42%] -translate-x-[25%] opacity-50 scale-80 z-20 hover:opacity-70 cursor-pointer`}
        style={{ outline: 'none', border: 'none' }}
        onClick={() => {
          if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex(prevIndex);
          }
        }}
      >
        <div style={{ outline: 'none', border: 'none' }}>
          {children[prevIndex]}
        </div>
      </div>
    );

    // Right side (semi-transparent)
    items.push(
      <div 
        key={`next-${nextIndex}`}
        className={`${baseTransitionClass} -translate-y-1/2 right-[8%] w-[42%] translate-x-[25%] opacity-50 scale-80 z-20 hover:opacity-70 cursor-pointer`}
        style={{ outline: 'none', border: 'none' }}
        onClick={() => {
          if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex(nextIndex);
          }
        }}
      >
        <div style={{ outline: 'none', border: 'none' }}>
          {children[nextIndex]}
        </div>
      </div>
    );

    // Center (focused/active)
    items.push(
      <div 
        key={`current-${currentIndex}`}
        className={`relative w-[50%] mx-auto transform transition-all duration-300 ease-out scale-100 opacity-100 z-30`}
        style={{ outline: 'none', border: 'none' }}
        onTransitionEnd={handleTransitionEnd}
      >
        <div style={{ outline: 'none', border: 'none' }}>
          {children[currentIndex]}
        </div>
      </div>
    );

    return items;
  };

  return (
    <div className="relative w-full flex flex-col items-center space-y-8">
      <div className="w-full relative flex items-center">
        <button
          onClick={prev}
          disabled={isTransitioning}
          className={`absolute -left-8 top-1/2 -translate-y-1/2 bg-white dark:bg-[#5d4e3a] p-3 rounded-full shadow-lg text-[#3d2f1f] dark:text-[#e8dcc8] hover:bg-[#e6e1d6] dark:hover:bg-[#3c3c3c] transition-all duration-200 z-40 ${
            isTransitioning ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
          }`}
        >
          <ChevronLeft size={24} />
        </button>

        <div 
          ref={containerRef}
          className="w-full h-[320px] overflow-visible relative cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div className="relative w-full h-full">
            {renderItems()}
          </div>
        </div>

        <button
          onClick={next}
          disabled={isTransitioning}
          className={`absolute -right-8 top-1/2 -translate-y-1/2 bg-white dark:bg-[#5d4e3a] p-3 rounded-full shadow-lg text-[#3d2f1f] dark:text-[#e8dcc8] hover:bg-[#e6e1d6] dark:hover:bg-[#3c3c3c] transition-all duration-200 z-40 ${
            isTransitioning ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
          }`}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="flex justify-center space-x-2">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentIndex(index);
              }
            }}
            disabled={isTransitioning}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-[#b8860b] dark:bg-[#d4a574] scale-125 shadow-md'
                : 'bg-[#cd853f] dark:bg-[#a0522d] opacity-50 hover:opacity-75 hover:scale-110'
            } ${isTransitioning ? 'cursor-not-allowed' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;