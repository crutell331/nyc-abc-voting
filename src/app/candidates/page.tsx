import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import CandidateCard from '@/components/CandidateCard';
import { candidates } from '@/data/candidates';
import Link from 'next/link';
import Icon from '@/components/Icon';
import { issues } from '@/data/issues';
import { Candidate, Issue } from '@/types';
import { getAverageRatingForCandidate } from '@/utils/dataUtils';

export default function CandidatesPage() {
  // Sort candidates by average rating in descending order
  const sortedCandidates = [...candidates].sort((a, b) => {
    const ratingA = getAverageRatingForCandidate(a.id);
    const ratingB = getAverageRatingForCandidate(b.id);
    return ratingB - ratingA;
  });

  return (
    <>
      <Hero 
        title="Meet the Candidates"
        subtitle="Learn about each candidate's background, experience, and policy positions."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Candidate Rankings"
            subtitle="Candidates are ranked based on their overall support for working class issues. The star rating (1-5) represents the average of their positions across all key issues."
            centered={true}
          />
          
          <div className="bg-white p-6 rounded-lg shadow-sm mb-12">
            <div className="flex items-center mb-4">
              <div className="flex mr-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon 
                    key={i}
                    name="Star" 
                    className="w-5 h-5 text-accent fill-accent"
                  />
                ))}
              </div>
              <p className="text-foreground/80">
                <span className="font-bold">5 stars:</span> Strong support across all issues
              </p>
            </div>
            <div className="flex items-center mb-4">
              <div className="flex mr-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <Icon 
                    key={i}
                    name="Star" 
                    className="w-5 h-5 text-accent fill-accent"
                  />
                ))}
              </div>
              <p className="text-foreground/80">
                <span className="font-bold">3 stars:</span> Moderate support with some inconsistencies
              </p>
            </div>
            <div className="flex items-center">
              <div className="flex mr-4">
                {Array.from({ length: 1 }).map((_, i) => (
                  <Icon 
                    key={i}
                    name="Star" 
                    className="w-5 h-5 text-accent fill-accent"
                  />
                ))}
              </div>
              <p className="text-foreground/80">
                <span className="font-bold">1 star:</span> Limited support for working class policies
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedCandidates.map((candidate: Candidate) => (
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
            {issues.map((issue: Issue) => (
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