import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import IssueCard from '@/components/IssueCard';
import { issues } from '@/data/issues';

export default function IssuesPage() {
  return (
    <>
      <Hero 
        title="Key Issues in the NYC Mayoral Race"
        subtitle="Explore where candidates stand on the issues that matter most to New Yorkers."
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Browse Issues"
            subtitle="Click on an issue to see which candidates best support it and their policy stances."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {issues.map(issue => (
              <IssueCard key={issue.id} issue={issue} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              title="Why Focus on Issues?"
              subtitle="Understanding where candidates stand on key issues is more important than name recognition."
              centered={true}
            />
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">
                In a crowded field of candidates, it's easy to vote based on name recognition alone. 
                But this approach often leads to electing officials who don't actually represent our values or priorities.
              </p>
              
              <p className="text-gray-600 mb-4">
                By focusing on issues rather than personalities, we can make more informed choices about which 
                candidates truly align with our vision for New York City.
              </p>
              
              <p className="text-gray-600 mb-4">
                The ABC (Anyone But Cuomo) approach encourages voters to look beyond the familiar names and 
                carefully consider where each candidate stands on the issues that will shape our city's future.
              </p>
              
              <p className="text-gray-600">
                Use this guide to explore candidates' positions on housing, climate, healthcare, education, 
                policing, transportation, and economic justice—and make your ranked choice voting decisions accordingly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}