import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import CandidateCard from '@/components/CandidateCard';
import IssueCard from '@/components/IssueCard';
import { candidates } from '@/data/candidates';
import { issues } from '@/data/issues';
import { getAverageRatingForCandidate } from '@/utils/dataUtils';
import Link from 'next/link';

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
        subtitle="Vote for the candidates who will fight for you. Make an informed decision in the NYC mayoral democratic primary based on issues, not name recognition."
        ctaText="Explore Issues"
        ctaLink="/issues"
        secondaryCtaText="Meet the Candidates"
        secondaryCtaLink="/candidates"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Everything to Know About the New York Mayoral Race"
            subtitle="When is the election? Why is this race important? Who are the candidates?"
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
                The next mayor of New York City will face unprecedented challenges: ensuring affordable housing, 
                fighting for working class families, improving healthcare access and making sure our city is safe from 
                the attacks of Donald Trump on working class citizens and people of color.
              </p>
              <p className="text-foreground/80 mb-4">
                With Andrew Cuomo entering the race, he aims to use his name recognition and position as former governor to hijack. 
                After Eric Adams&apos; tumultuous tenure and <a href="https://www.politico.com/news/2025/04/08/eric-adams-lays-out-case-for-working-with-trump-00279406?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:text-primary-dark underline">partnership with Donald Trump</a>, 
                New York City needs a mayor who will fiercely protect working class citizens, immigrants, and communities of color.
              </p>
              <p className="text-foreground/80 mb-4">
                A mayor who will fight for their people, not only for themselves and their rich friends. The next mayor must be willing 
                to stand up to Trump&apos;s attacks on our city and fight for policies that prioritize the needs of 
                everyday New Yorkers over corporate interests. It&apos;s more important than ever to understand where candidates 
                stand on the issues that matter most to New Yorkers or we risk losing our city to the wealthy elite.
              </p>
              <p className="text-foreground/80">
                This election uses <Link href="/rank-choice" className="text-primary hover:text-primary-dark underline">ranked choice voting</Link>, 
                giving you the power to vote for, up to 5, candidates in order of preference. 
                This is a great way to ensure that your vote counts and that your voice is heard. 
                Fight for the New York City you deserve.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">The ABC Approach</h3>
              <p className="text-foreground/80 mb-4">
                <strong>A</strong>nyone <strong>B</strong>ut <strong>C</strong>uomo is more than a slogan—it&apos;s a strategy for 
                ensuring that a working class candidate who represents the interests of working New Yorkers wins this election. 
                Not someone who looks out for their rich friends and corporate donors and not someone who <a href="https://www.politico.com/news/2024/01/26/cuomo-sexual-harassment-doj-00138140" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:text-primary-dark underline">sexually harassed, discriminated against, and bullied,</a> the very people he&apos;s supposed to protect.
              </p>
              <p className="text-foreground/80 mb-4">
                There is a valid fear that Andrew Cuomo would not adequately protect working class New Yorkers. As governor, 
                Cuomo consistently <a href="https://observer.com/2015/06/royally-screwed-activists-eviscerate-andrew-cuomo-after-rent-laws-deal/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:text-primary-dark underline">sided with real estate developers over tenants</a>,
                 <a href="https://edlawcenter.org/governor-cuomo-proposes-to-shortchange-students-impacted-by-covid-19again/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:text-primary-dark underline">cut funding for public education</a>,
                and <a href="https://www.theguardian.com/us-news/2020/jul/31/cuomo-new-york-governor-billionaires-super-rich?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:text-primary-dark underline">implemented policies that benefited wealthy donors at the expense of working families</a>.
                 His record shows he prioritizes corporate interests and political connections over the needs of everyday New Yorkers, making 
                him ill-suited to lead our city during these challenging times.
              </p>
              <p className="text-foreground/80 mb-4">
                Politics is difficult and it&apos;s hard to know who to trust. By focusing on issues rather than personalities, we aim to help voters make informed choices about which 
                candidates truly align with their values.
              </p>
              <p className="text-foreground/80">
                Our guide highlights every candidate running for NYC mayor. It details each of their stances on key issues affecting the working class.
                 All here in one place so you can more easily see which candidates have demonstrated their commitment to fighting for you. 
                 It&apos;s time politicans work for us, not the other way around.
              </p>
            </div>
          </div>
          
          <div>
            <div className="flex items-end mb-6">
              <h3 className="text-xl font-bold">Featured Candidates</h3>
              <Link href="/candidates" className="text-primary hover:text-primary-dark font-medium ml-3">
                See all →
              </Link>
            </div>
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
            subtitle="Compare candidate positions on important issues. What is most important to you and who are the candidates fighting for you?"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {issues.map((issue) => (
              <IssueCard key={issue.id} issue={issue} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
