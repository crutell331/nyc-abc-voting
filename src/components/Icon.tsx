import React from 'react';
import * as LucideIcons from 'lucide-react';
import { LucideProps } from 'lucide-react';

interface IconProps extends LucideProps {
  name: string;
}

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const LucideIcon = LucideIcons[name as keyof typeof LucideIcons] as React.FC<LucideProps>;
  
  if (!LucideIcon) {
    console.error(`Icon "${name}" not found`);
    return null;
  }
  
  return <LucideIcon {...props} />;
};

export default Icon;