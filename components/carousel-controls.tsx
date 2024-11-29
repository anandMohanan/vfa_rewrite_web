import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselControlsProps {
  currentIndex: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
}

export function CarouselControls({ currentIndex, totalSlides, onPrevious, onNext }: CarouselControlsProps) {
  return (
    <div className="flex justify-center items-center gap-4 mt-12">
      <button
        onClick={onPrevious}
        className="p-2 rounded-full border border-neutral-700 text-neutral-400 hover:border-red-500 hover:text-red-500 transition-colors"
        disabled={currentIndex === 0}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <div className="flex gap-2">
        {[...Array(totalSlides)].map((_, index) => (
          <motion.div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-red-500' : 'bg-neutral-700'
            }`}
            animate={{ scale: index === currentIndex ? 1.2 : 1 }}
          />
        ))}
      </div>

      <button
        onClick={onNext}
        className="p-2 rounded-full border border-neutral-700 text-neutral-400 hover:border-red-500 hover:text-red-500 transition-colors"
        disabled={currentIndex === totalSlides - 1}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
