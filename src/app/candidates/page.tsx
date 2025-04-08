import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import CandidateCard from '@/components/CandidateCard';
import { getAllCandidates } from '@/data/candidates';
import Link from 'next/link';
import { Icon } from '@/components/Icon';
import { getAllIssues } from '@/data/issues';

export default function CandidatesPage() {
  const candidates = getAllCandidates();
  
  return (
    <>
      <Hero 
        title="Meet the Candidates"
        subtitle="Learn about each candidate's background, experience, and policy positions."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {candidates.map(candidate => (
              <CandidateCard 
                key={candidate.id}
                candidate={candidate}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-light-bg">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Compare Candidates"
            subtitle="See how candidates compare on key issues."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getAllIssues().map(issue => (
              <Link 
                key={issue.id}
                href={`/issues/${issue.id}`}
                className="bg-white p-6 rounded-lg shadow-sm hover:border-primary/30 border border-gray-200 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Icon name={issue.icon as any} className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{issue.title}</h3>
                </div>
                <p className="text-foreground/80">
                  Compare candidate positions on {issue.title.toLowerCase()}.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}