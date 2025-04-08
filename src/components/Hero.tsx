import React from 'react';
import Link from 'next/link';
import Icon from './Icon';

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
}) => {
  return (
    <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
            {subtitle}
          </p>
        )}
        
        {(ctaText || secondaryCtaText) && (
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {ctaText && ctaLink && (
              <Link
                href={ctaLink}
                className="bg-white text-primary hover:bg-accent hover:text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 flex items-center justify-center"
              >
                {ctaText}
                <Icon name="ArrowRight" className="w-5 h-5 ml-2" />
              </Link>
            )}
            
            {secondaryCtaText && secondaryCtaLink && (
              <Link
                href={secondaryCtaLink}
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;