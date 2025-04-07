import React from 'react';
import Image from 'next/image';
import { RankChoiceInfo } from '@/types';

interface RankChoiceStepProps {
  step: RankChoiceInfo;
  isActive?: boolean;
}

const RankChoiceStep: React.FC<RankChoiceStepProps> = ({ step, isActive = false }) => {
  return (
    <div 
      className={`
        p-6 rounded-lg transition-all duration-300
        ${isActive 
          ? 'bg-blue-100 border-2 border-blue-500 shadow-md' 
          : 'bg-white border border-gray-200 hover:border-blue-300 hover:shadow-sm'
        }
      `}
    >
      <div className="flex items-center mb-4">
        <div className={`
          flex items-center justify-center w-10 h-10 rounded-full mr-4 font-bold
          ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}
        `}>
          {step.step}
        </div>
        <h3 className="text-xl font-bold">{step.title}</h3>
      </div>
      
      <p className="text-gray-600 mb-4">
        {step.description}
      </p>
      
      {step.image && (
        <div className="relative h-48 w-full mt-4 rounded-md overflow-hidden">
          <Image
            src={step.image}
            alt={step.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
    </div>
  );
};

export default RankChoiceStep;