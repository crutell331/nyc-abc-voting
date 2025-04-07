import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Candidate, CandidateStance, Issue } from '@/types';
import Icon from './Icon';

interface CandidateStanceCardProps {
  candidate: Candidate;
  stance: CandidateStance;
  issue: Issue;
}

const CandidateStanceCard: React.FC<CandidateStanceCardProps> = ({ 
  candidate, 
  stance,
  issue
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center p-4 border-b">
        <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
          <Image
            src={candidate.image}
            alt={candidate.name}
            fill
            className="object-cover"
            sizes="64px"
          />
        </div>
        
        <div>
          <h3 className="text-xl font-bold">{candidate.name}</h3>
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon 
                key={i}
                name="Star" 
                className={`w-5 h-5 ${i < stance.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
              />
            ))}
            <span className="ml-2 text-sm text-gray-600">
              on {issue.title}
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        {stance.quote && (
          <blockquote className="italic text-gray-700 border-l-4 border-blue-500 pl-4 mb-4">
            "{stance.quote}"
          </blockquote>
        )}
        
        <p className="text-gray-600 mb-4">
          {stance.stance}
        </p>
        
        <Link 
          href={`/candidates/${candidate.id}`}
          className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
        >
          <span>View full profile</span>
          <Icon name="ArrowRight" className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default CandidateStanceCard;