import React from 'react';
import Link from 'next/link';
import { Issue } from '@/types';
import Icon from './Icon';

interface IssueLinkProps {
  issue: Issue;
}

const IssueLink: React.FC<IssueLinkProps> = ({ issue }) => {
  return (
    <Link 
      href={`/issues/${issue.id}`}
      className="bg-background p-6 rounded-lg shadow-sm hover:border-primary/30 border border-foreground/20 transition-colors"
    >
      <div className="flex items-center mb-4">
        <div className="bg-primary/10 p-3 rounded-full mr-4">
          <Icon name={issue.icon} className="w-5 h-5 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-foreground">{issue.title}</h3>
      </div>
      <p className="text-foreground/80 mb-4">
        Compare candidate positions on {issue.title.toLowerCase()}.
      </p>
      <div className="flex items-center text-primary hover:text-primary-dark font-medium">
        <span>See where candidates stand on this issue</span>
        <Icon name="ArrowRight" className="w-4 h-4 ml-2" />
      </div>
    </Link>
  );
};

export default IssueLink; 