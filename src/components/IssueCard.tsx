import React from 'react';
import Link from 'next/link';
import { Issue } from '@/types';
import Icon from './Icon';

interface IssueCardProps {
  issue: Issue;
}

const IssueCard: React.FC<IssueCardProps> = ({ issue }) => {
  return (
    <Link 
      href={`/issues/${issue.id}`}
      className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover:bg-blue-50"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <Icon name={issue.icon as any} className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold">{issue.title}</h3>
        </div>
        
        <p className="text-gray-600 mb-4">
          {issue.description}
        </p>
        
        <div className="flex items-center text-blue-600 font-medium">
          <span>See candidates</span>
          <Icon name="ArrowRight" className="w-4 h-4 ml-2" />
        </div>
      </div>
    </Link>
  );
};

export default IssueCard;