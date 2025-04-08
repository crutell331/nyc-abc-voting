import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import RankChoiceStep from '@/components/RankChoiceStep';
import Icon from '@/components/Icon';
import { rankChoiceInfo } from '@/data/rankChoiceInfo';

export default function RankChoicePage() {
  return (
    <>
      <Hero 
        title="Understanding Ranked Choice Voting"
        subtitle="Learn how ranked choice voting works and why you should not rank Andrew Cuomo on your ballot."
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="How Ranked Choice Voting Works"
            subtitle="NYC uses ranked choice voting for primary and special elections. Here&apos;s what you need to know."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {rankChoiceInfo.map((step, index) => (
              <RankChoiceStep 
                key={step.step} 
                step={step} 
                isActive={index === 4} // Highlight the "Why Not Rank Cuomo" step
              />
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto bg-yellow-50 border border-yellow-200 p-8 rounded-lg">
            <div className="flex items-start mb-4">
              <div className="bg-yellow-100 p-2 rounded-full mr-4 mt-1">
                <Icon name="AlertTriangle" className="w-6 h-6 text-yellow-600" />
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-yellow-800 mb-2">Important: Don&apos;t Waste Your Vote</h3>
                <p className="text-foreground/80 mb-4">
                  Remember that you don&apos;t have to rank all five candidates. If you want to ensure a working class
                  candidate wins, you can simply rank your top choices and leave Cuomo off your ballot entirely.
                </p>
                <p className="text-foreground/80">
                  Even ranking Cuomo as your 5th choice could help him win if your higher-ranked candidates 
                  are eliminated. The &ldquo;Anyone But Cuomo&rdquo; strategy means exactly that—don&apos;t rank him at all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              title="Strategic Voting in the NYC Mayoral Race"
              subtitle="How to make your vote count for working class candidates."
              centered={true}
            />
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">The ABC Strategy: Anyone But Cuomo</h3>
              
              <p className="text-foreground/80 mb-4">
                Andrew Cuomo&apos;s entry into the mayoral race presents a challenge for working class voters.
                His name recognition and fundraising ability could allow him to advance through multiple rounds
                of ranked choice voting, even if he&apos;s not most voters&apos; first choice.
              </p>
              
              <p className="text-foreground/80 mb-4">
                The &ldquo;Anyone But Cuomo&rdquo; (ABC) strategy is more than a slogan—it&apos;s a strategy for ensuring
                that a working class candidate who represents the interests of working New Yorkers wins this election.
                Not someone who looks out for their rich friends and corporate donors and not someone who <a href="https://www.politico.com/news/2024/01/26/cuomo-sexual-harassment-doj-00138140" target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:text-primary-dark underline">
                sexually harassed, discriminated against, and bullied,</a> the very people he&apos;s supposed to protect..
              </p>
              
              <p className="text-foreground/80 mb-4">
                This approach maximizes the chance that one of these working class candidates will win,
                rather than splitting the working class vote and allowing Cuomo to benefit.
              </p>
              
              <h3 className="text-xl font-bold mb-4 mt-8">How to Fill Out Your Ballot</h3>
              
              <ol className="list-decimal pl-5 space-y-4 text-foreground/80">
                <li>
                  <strong>Research the candidates:</strong> Use this guide to learn about where each candidate 
                  stands on the issues that matter most to you.
                </li>
                <li>
                  <strong>Rank your favorites:</strong> Choose up to five candidates and rank them in order of preference.
                </li>
                <li>
                  <strong>Leave Cuomo off your ballot:</strong> Do not include Andrew Cuomo in your rankings, not
                  even as your 5th choice.
                </li>
                <li>
                  <strong>Fill in the bubbles completely:</strong> Make sure to fill in the bubbles on your ballot 
                  completely and clearly.
                </li>
                <li>
                  <strong>Submit your ballot:</strong> Follow the instructions at your polling place to submit your 
                  completed ballot.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}