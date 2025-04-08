import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import CandidateCard from '@/components/CandidateCard';
import IssueCard from '@/components/IssueCard';
import { candidates } from '@/data/candidates';
import { issues } from '@/data/issues';
import { getAverageRatingForCandidate } from '@/utils/dataUtils';

export default function Home() {
  // Sort candidates by average rating in descending order
  const sortedCandidates = [...candidates].sort((a, b) => {
    const ratingA = getAverageRatingForCandidate(a.id);
    const ratingB = getAverageRatingForCandidate(b.id);
    return ratingB - ratingA;
  });
  
  // Get the 2 highest ranking candidates
  const topCandidates = sortedCandidates.slice(0, 2);
  
  // Find Andrew Cuomo
  const cuomo = candidates.find(candidate => candidate.id === 'andrew-cuomo');
  
  // Combine top candidates with Cuomo
  const featuredCandidates = [...topCandidates];
  if (cuomo) {
    featuredCandidates.push(cuomo);
  }
  
  return (
    <>
      <Hero 
        title="NYC Democratic Primary Voting Guide"
        subtitle="Make an informed decision in the NYC mayoral democratic primary based on issues, not name recognition."
        ctaText="Explore Issues"
        ctaLink="/issues"
        secondaryCtaText="Meet the Candidates"
        secondaryCtaLink="/candidates"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Everything to Know About the New York Mayoral Race"
            subtitle="When is the NYC primary election? Why is this race important? Who are the candidates?"
            centered={true}
          />
          
          <div className="bg-foreground/5 p-6 md:p-8 rounded-lg mb-12 border border-foreground/20 shadow-md">
            <h3 className="text-xl font-bold mb-4">Important Dates</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="text-secondary font-bold text-xl mb-2">Registration Deadline - June 2, 2025</div>
                <p className="text-foreground/80 mt-2">Last day to register to vote in the primary election.</p>
                <div className="mt-4">
                  <a 
                    href="https://www.ny.gov/services/register-vote" 
                    target="_blank" 
                    rel="noopener noreferrer nofollow"
                    className="text-primary hover:text-primary-dark font-medium"
                  >
                    Register here →
                  </a>
                </div>
              </div>
              
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="text-secondary font-bold text-xl mb-2">Early Voting Period - June 12-20, 2025</div>
                <p className="text-foreground/80 mt-2">Vote early at designated polling locations across the city.</p>
              </div>
              
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="text-secondary font-bold text-xl mb-2">Primary Election Day - June 22, 2025</div>
                <p className="text-foreground/80 mt-2">Polls open 6am to 9pm. This is your last chance to vote!</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Why This Election Matters</h3>
              <p className="text-foreground/80 mb-4">
                The next mayor of New York City will face unprecedented challenges: recovering from the pandemic, 
                addressing the housing crisis, reforming the police, and tackling climate change.
              </p>
              <p className="text-foreground/80 mb-4">
                With Andrew Cuomo entering the race, it&apos;s more important than ever to understand where candidates 
                stand on the issues that matter most to New Yorkers.
              </p>
              <p className="text-foreground/80">
                This election uses ranked choice voting, giving you the power to rank up to 5 candidates in order of preference.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">The ABC Approach</h3>
              <p className="text-foreground/80 mb-4">
                <strong>A</strong>nyone <strong>B</strong>ut <strong>C</strong>uomo is more than a slogan—it&apos;s a strategy for 
                ensuring that a working class candidate who represents the interests of working New Yorkers wins this election.
              </p>
              <p className="text-foreground/80 mb-4">
                By focusing on issues rather than personalities, we can help voters make informed choices about which 
                candidates truly align with their values.
              </p>
              <p className="text-foreground/80">
                Our guide highlights the five candidates endorsed by the Democratic Socialists of America (DSA) who have 
                demonstrated their commitment to fighting for affordable housing, climate justice, and economic equality.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Featured Candidates</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCandidates.map(candidate => (
                <CandidateCard key={candidate.id} candidate={candidate} />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-light-bg">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Key Issues"
            subtitle="What is most important to you and who are the candidates fighting for you?"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {issues.map((issue) => (
              <IssueCard key={issue.id} issue={issue} showDescription={false} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
