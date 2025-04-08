import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import IssueCard from '@/components/IssueCard';
import { issues } from '@/data/issues';
import Link from 'next/link';
import Icon from '@/components/Icon';
import Image from 'next/image';
import { candidates } from '@/data/candidates';
import { Issue, Candidate } from '@/types';

export default function IssuesPage() {
  const allIssues = issues;
  
  return (
    <>
      <Hero 
        title="Key Issues"
        subtitle="Learn about the important issues facing New York City and where candidates stand."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allIssues.map((issue: Issue) => (
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
                  {issue.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-light-bg">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Compare All Candidates"
            subtitle="See how candidates compare across all issues."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {candidates.map((candidate: Candidate) => (
              <Link 
                key={candidate.id}
                href={`/candidates/${candidate.id}`}
                className="bg-white p-6 rounded-lg shadow-sm hover:border-primary/30 border border-gray-200 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={candidate.image}
                      alt={candidate.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{candidate.name}</h3>
                </div>
                <p className="text-foreground/80">
                  View {candidate.name}'s positions on all issues.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}