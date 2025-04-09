import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Candidate } from '@/types';
import { getAverageRatingForCandidate } from '@/utils/dataUtils';
import Icon from './Icon';

interface CandidateCardProps {
  candidate: Candidate;
  highlightIssue?: string;
  rating?: number;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ 
  candidate, 
  highlightIssue,
  rating
}) => {
  const averageRating = rating ?? getAverageRatingForCandidate(candidate.id);
  
  return (
    <div className="bg-gradient-to-br from-background to-background/95 rounded-lg shadow-[0_8px_16px_rgba(0,0,0,0.1)] overflow-hidden hover:shadow-[0_12px_24px_rgba(0,0,0,0.15)] transition-all duration-300 border-2 border-foreground/20 hover:border-primary/50 hover:-translate-y-1 flex flex-col h-full">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={candidate.image}
          alt={candidate.name}
          fill
          className="object-contain transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-foreground">{candidate.name}</h3>
        
        <div className="flex items-center mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Icon 
              key={i}
              name="Star" 
              className={`w-5 h-5 ${i < Math.round(averageRating) ? 'text-accent fill-accent' : 'text-foreground/30'}`}
            />
          ))}
          
          {highlightIssue && (
            <span className="ml-2 text-sm text-foreground/80">
              on {highlightIssue}
            </span>
          )}
        </div>
        
        <p className="text-foreground/80 mb-4 line-clamp-3">
          {candidate.bio.substring(0, 120)}...
        </p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {candidate.endorsements.map((endorsement, index) => (
            <span 
              key={index}
              className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
            >
              {endorsement}
            </span>
          ))}
        </div>
        
        <div className="mt-auto">
          <Link 
            href={`/candidates/${candidate.id}`}
            className="block w-full text-center bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded transition-colors duration-300 hover:shadow-md"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;