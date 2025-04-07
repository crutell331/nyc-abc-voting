import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import CandidateCard from '@/components/CandidateCard';
import { candidates } from '@/data/candidates';

export default function CandidatesPage() {
  return (
    <>
      <Hero 
        title="Meet the Progressive Candidates"
        subtitle="Learn about the five DSA-endorsed candidates running for NYC mayor."
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="All Candidates"
            subtitle="Click on a candidate to learn more about their background, endorsements, and policy positions."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {candidates.map(candidate => (
              <CandidateCard key={candidate.id} candidate={candidate} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              title="Why These Candidates?"
              subtitle="The five candidates featured in this guide have been endorsed by the Democratic Socialists of America (DSA)."
              centered={true}
            />
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">
                These candidates have demonstrated their commitment to fighting for working-class New Yorkers 
                and advancing progressive policies on housing, healthcare, climate, education, and more.
              </p>
              
              <p className="text-gray-600 mb-4">
                Unlike Andrew Cuomo, who has a long history of siding with corporate interests and blocking 
                progressive legislation, these candidates are accountable to movements for social, economic, 
                and racial justice.
              </p>
              
              <p className="text-gray-600">
                By ranking these candidates in the upcoming primary election, you can help ensure that 
                New York City's next mayor will fight for all New Yorkers, not just the wealthy and well-connected.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}