import React from 'react';
import { Candidate } from '@/types';
import Icon from './Icon';

interface CandidateAboutCardProps {
  candidate: Candidate;
}

const CandidateAboutCard: React.FC<CandidateAboutCardProps> = ({ candidate }) => {
  return (
    <div className="bg-background p-6 rounded-lg shadow-sm border border-foreground/20">
      <p className="text-foreground/80 mb-4">
        {candidate.bio}
      </p>
      
      <h3 className="text-xl font-bold mb-3 text-foreground">Endorsements</h3>
      <ul className="list-disc list-inside text-foreground/80 mb-4">
        {candidate.endorsements.map((endorsement, index) => (
          <li key={index}>{endorsement}</li>
        ))}
      </ul>
      
      <h3 className="text-xl font-bold mb-3 text-foreground">Connect</h3>
      <div className="flex gap-4">
        {candidate.website && (
          <a 
            href={candidate.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-dark"
          >
            <Icon name="Globe" className="w-6 h-6" />
          </a>
        )}
        
        {candidate.socialMedia?.twitter && (
          <a 
            href={`https://twitter.com/${candidate.socialMedia.twitter.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-dark"
          >
            <Icon name="Twitter" className="w-6 h-6" />
          </a>
        )}
      </div>
    </div>
  );
};

export default CandidateAboutCard; 