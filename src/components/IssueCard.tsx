import React from 'react';
import Link from 'next/link';
import { Issue } from '@/types';
import Icon from './Icon';

interface IssueCardProps {
  issue: Issue;
  showDescription?: boolean;
}

const IssueCard: React.FC<IssueCardProps> = ({ issue, showDescription = true }) => {
  return (
    <Link 
      href={`/issues/${issue.id}`}
      className="block bg-background rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover:bg-light-bg border border-foreground/10"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <Icon name={issue.icon} className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-foreground">{issue.title}</h3>
        </div>
        
        {showDescription ? (
          <p className="text-foreground/80 mb-4">
            {issue.description}
          </p>
        ) : (
          <p className="text-foreground/80 mb-4">
            Compare candidate positions on {issue.title.toLowerCase()}.
          </p>
        )}
        
        <div className="flex items-center text-primary font-medium">
          <span>See candidates</span>
          <Icon name="ArrowRight" className="w-4 h-4 ml-2" />
        </div>
      </div>
    </Link>
  );
};

export default IssueCard;