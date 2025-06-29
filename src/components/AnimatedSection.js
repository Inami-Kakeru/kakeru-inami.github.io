import React, { useEffect, useRef, useState } from 'react';

const AnimatedSection = ({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1,
  ...props
}) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: '50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [threshold, hasAnimated]);

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-700 ease-out';
    const animationClasses = {
      'fade-up': 'translate-y-8 opacity-0',
      'fade-down': '-translate-y-8 opacity-0',
      'fade-left': 'translate-x-8 opacity-0',
      'fade-right': '-translate-x-8 opacity-0',
      'zoom-in': 'scale-95 opacity-0',
      'zoom-out': 'scale-105 opacity-0'
    };

    return `${baseClasses} ${isVisible ? 'translate-y-0 translate-x-0 scale-100 opacity-100' : animationClasses[animation]}`;
  };

  return (
    <div
      ref={sectionRef}
      className={`${getAnimationClasses()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedSection; 