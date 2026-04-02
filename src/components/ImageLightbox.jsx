import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from 'lucide-react';

const ImageLightbox = ({ isOpen, onClose, images, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    setCurrentIndex(initialIndex);
    setZoom(1);
  }, [initialIndex, isOpen]);

  if (!isOpen) return null;

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setZoom(1);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setZoom(1);
  };

  const toggleZoom = (e) => {
    e.stopPropagation();
    setZoom((prev) => (prev === 1 ? 2 : 1));
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl"
        onClick={onClose}
      >
        {/* Controls Overlay */}
        <div className="absolute top-6 right-6 flex items-center gap-4 z-[110]">
          <button 
            onClick={toggleZoom}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            title={zoom === 1 ? 'Zoom In' : 'Zoom Out'}
          >
            {zoom === 1 ? <ZoomIn size={24} /> : <ZoomOut size={24} />}
          </button>
          <button 
            onClick={onClose}
            className="p-3 bg-red-600 hover:bg-red-700 rounded-full text-white transition-colors"
            title="Close"
          >
            <X size={24} />
          </button>
        </div>

        {/* Image Display */}
        <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-12 overflow-hidden">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Gallery image ${currentIndex + 1}`}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ 
              scale: zoom, 
              opacity: 1,
              cursor: zoom === 1 ? 'zoom-in' : 'zoom-out'
            }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="max-w-full max-h-full object-contain shadow-2xl"
            onClick={toggleZoom}
            draggable={false}
          />

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-6 p-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl transition-all border border-white/5"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-6 p-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl transition-all border border-white/5"
              >
                <ChevronRight size={32} />
              </button>
            </>
          )}
        </div>

        {/* Index Indicator */}
        {images.length > 1 && (
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 px-6 py-2 bg-white/10 rounded-full text-white text-sm font-bold tracking-widest uppercase">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageLightbox;
