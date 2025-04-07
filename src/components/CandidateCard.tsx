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
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={candidate.image}
          alt={candidate.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{candidate.name}</h3>
        
        <div className="flex items-center mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Icon 
              key={i}
              name="Star" 
              className={`w-5 h-5 ${i < Math.round(averageRating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
            />
          ))}
          
          {highlightIssue && (
            <span className="ml-2 text-sm text-gray-600">
              on {highlightIssue}
            </span>
          )}
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {candidate.bio.substring(0, 120)}...
        </p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {candidate.endorsements.map((endorsement, index) => (
            <span 
              key={index}
              className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
            >
              {endorsement}
            </span>
          ))}
        </div>
        
        <Link 
          href={`/candidates/${candidate.id}`}
          className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default CandidateCard;