import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/libs/utils';

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  autoPlay?: boolean;
  interval?: number;
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    { children, className, autoPlay = false, interval = 4000, ...props },
    ref
  ) => {
    const slides = React.Children.toArray(children);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
      if (!autoPlay || slides.length < 2) return;
      const timer = window.setInterval(() => {
        setActiveIndex((index) => (index + 1) % slides.length);
      }, interval);
      return () => window.clearInterval(timer);
    }, [autoPlay, interval, slides.length]);

    if (!slides.length) return null;

    const showPrevious = () =>
      setActiveIndex((index) => (index - 1 + slides.length) % slides.length);
    const showNext = () =>
      setActiveIndex((index) => (index + 1) % slides.length);

    return (
      <div
        ref={ref}
        className={cn('relative w-full overflow-hidden rounded-lg', className)}
        {...props}
      >
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="w-full shrink-0" key={index}>
              {slide}
            </div>
          ))}
        </div>
        {slides.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous slide"
              onClick={showPrevious}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white transition hover:bg-black/80"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={showNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white transition hover:bg-black/80"
            >
              <ChevronRight size={16} />
            </button>
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    'h-1.5 rounded-full transition-all',
                    index === activeIndex ? 'w-5 bg-white' : 'w-1.5 bg-white/50'
                  )}
                />
              ))}
            </div>
          </>
        )}
      </div>
    );
  }
);

Carousel.displayName = 'Carousel';
export { Carousel };
