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
          <Icon name={issue.icon as any} className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-foreground">{issue.title}</h3>
      </div>
      <p className="text-foreground/80">
        Compare candidate positions on {issue.title.toLowerCase()}.
      </p>
    </Link>
  );
};

export default IssueLink; 