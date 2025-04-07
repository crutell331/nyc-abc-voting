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
            subtitle="NYC uses ranked choice voting for primary and special elections. Here's what you need to know."
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
                <h3 className="text-xl font-bold text-yellow-800 mb-2">Important: Don't Waste Your Vote</h3>
                <p className="text-yellow-700 mb-4">
                  Remember that you don't have to rank all five candidates. If you want to ensure a progressive 
                  mayor, it's better to rank only the candidates you truly support rather than including 
                  Andrew Cuomo in your rankings.
                </p>
                <p className="text-yellow-700">
                  Even ranking Cuomo as your 5th choice could help him win if your higher-ranked candidates 
                  are eliminated. The "Anyone But Cuomo" strategy means exactly that—don't rank him at all.
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
              subtitle="How to make your vote count for progressive candidates."
              centered={true}
            />
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">The ABC Strategy: Anyone But Cuomo</h3>
              
              <p className="text-gray-600 mb-4">
                Andrew Cuomo's entry into the mayoral race presents a challenge for progressive voters. 
                His name recognition gives him an advantage, but his record shows he often sides with 
                corporate interests over working New Yorkers.
              </p>
              
              <p className="text-gray-600 mb-4">
                The "Anyone But Cuomo" (ABC) strategy is simple: rank the five DSA-endorsed candidates 
                featured in this guide in whatever order you prefer, but do not include Cuomo in your rankings.
              </p>
              
              <p className="text-gray-600 mb-4">
                This approach maximizes the chance that one of these progressive candidates will win, 
                rather than splitting the progressive vote and allowing Cuomo to benefit.
              </p>
              
              <h3 className="text-xl font-bold mb-4 mt-8">How to Fill Out Your Ballot</h3>
              
              <ol className="list-decimal pl-5 space-y-4 text-gray-600">
                <li>
                  <strong>Research the candidates:</strong> Use this guide to learn about where each candidate 
                  stands on the issues that matter most to you.
                </li>
                <li>
                  <strong>Rank your favorites:</strong> Choose up to five candidates and rank them in order of preference.
                </li>
                <li>
                  <strong>Leave Cuomo off your ballot:</strong> Do not include Andrew Cuomo in your rankings, 
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