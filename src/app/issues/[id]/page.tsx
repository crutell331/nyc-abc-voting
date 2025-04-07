import { notFound } from 'next/navigation';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import CandidateStanceCard from '@/components/CandidateStanceCard';
import Icon from '@/components/Icon';
import { 
  getIssueById, 
  getCandidateById,
  sortCandidatesByIssueRating,
  getCandidateStanceForIssue
} from '@/utils/dataUtils';
import { issues } from '@/data/issues';

export function generateStaticParams() {
  return issues.map(issue => ({
    id: issue.id,
  }));
}

export default function IssuePage({ params }: { params: { id: string } }) {
  const issue = getIssueById(params.id);
  
  if (!issue) {
    notFound();
  }
  
  // Get candidates sorted by their rating on this issue
  const sortedCandidates = sortCandidatesByIssueRating(issue.id);
  
  return (
    <>
      <Hero 
        title={issue.title}
        subtitle={issue.description}
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Candidate Positions"
            subtitle={`See where each candidate stands on ${issue.title.toLowerCase()}.`}
          />
          
          <div className="grid grid-cols-1 gap-8">
            {sortedCandidates.map(candidate => {
              const stance = getCandidateStanceForIssue(candidate.id, issue.id);
              if (!stance) return null;
              
              return (
                <CandidateStanceCard 
                  key={candidate.id}
                  candidate={candidate}
                  stance={stance}
                  issue={issue}
                />
              );
            })}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              title="Why This Issue Matters"
              centered={true}
            />
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              {issue.id === 'housing' && (
                <>
                  <div className="flex items-center mb-4">
                    <Icon name="Home" className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold">Affordable Housing Crisis</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    New York City is facing an unprecedented housing crisis, with skyrocketing rents pushing out long-time residents 
                    and making it increasingly difficult for working-class New Yorkers to afford to live in the city.
                  </p>
                  <p className="text-gray-600 mb-4">
                    The next mayor will need to address issues like rent control, tenant protections, homelessness, 
                    and the development of truly affordable housing.
                  </p>
                </>
              )}
              
              {issue.id === 'climate' && (
                <>
                  <div className="flex items-center mb-4">
                    <Icon name="Leaf" className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold">Climate Justice</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Climate change poses an existential threat to New York City, with rising sea levels, extreme weather events, 
                    and air pollution disproportionately affecting low-income communities and communities of color.
                  </p>
                  <p className="text-gray-600 mb-4">
                    The next mayor must prioritize reducing emissions, investing in renewable energy, creating green jobs, 
                    and ensuring that environmental benefits and burdens are distributed equitably.
                  </p>
                </>
              )}
              
              {issue.id === 'healthcare' && (
                <>
                  <div className="flex items-center mb-4">
                    <Icon name="HeartPulse" className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold">Healthcare Access</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    The COVID-19 pandemic exposed and exacerbated deep inequities in healthcare access across New York City, 
                    with low-income communities and communities of color bearing the brunt of the crisis.
                  </p>
                  <p className="text-gray-600 mb-4">
                    The next mayor must work to expand healthcare access, address social determinants of health, 
                    and ensure that all New Yorkers can receive the care they need regardless of income or immigration status.
                  </p>
                </>
              )}
              
              {issue.id === 'education' && (
                <>
                  <div className="flex items-center mb-4">
                    <Icon name="Book" className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold">Educational Equity</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    New York City's public school system remains deeply segregated, with stark disparities in resources, 
                    facilities, and educational outcomes between schools in wealthy and low-income neighborhoods.
                  </p>
                  <p className="text-gray-600 mb-4">
                    The next mayor must address these inequities, invest in public education, reduce class sizes, 
                    and ensure that all students have access to a high-quality education regardless of zip code.
                  </p>
                </>
              )}
              
              {issue.id === 'policing' && (
                <>
                  <div className="flex items-center mb-4">
                    <Icon name="Shield" className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold">Public Safety Reform</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    The movement for police accountability has brought renewed attention to issues of police brutality, 
                    racial profiling, and the criminalization of poverty and mental illness in New York City.
                  </p>
                  <p className="text-gray-600 mb-4">
                    The next mayor must address these concerns, reimagine public safety beyond policing, 
                    and invest in community-based solutions that address the root causes of crime and violence.
                  </p>
                </>
              )}
              
              {issue.id === 'transportation' && (
                <>
                  <div className="flex items-center mb-4">
                    <Icon name="Train" className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold">Public Transportation</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    New York City's public transportation system is facing significant challenges, from aging infrastructure 
                    and service cuts to accessibility issues and the need for more sustainable transportation options.
                  </p>
                  <p className="text-gray-600 mb-4">
                    The next mayor must prioritize improving public transit, expanding bike and pedestrian infrastructure, 
                    and ensuring that all New Yorkers have access to safe, affordable, and sustainable transportation options.
                  </p>
                </>
              )}
              
              {issue.id === 'economy' && (
                <>
                  <div className="flex items-center mb-4">
                    <Icon name="DollarSign" className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold">Economic Justice</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    The COVID-19 pandemic has deepened economic inequalities in New York City, with low-wage workers, 
                    small businesses, and communities of color experiencing the most severe impacts.
                  </p>
                  <p className="text-gray-600 mb-4">
                    The next mayor must work to create a more equitable economy, with living wages, strong worker protections, 
                    support for small businesses, and investments in communities that have been historically marginalized.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}