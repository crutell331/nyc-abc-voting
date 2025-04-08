import { notFound } from 'next/navigation';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import CandidateStanceCard from '@/components/CandidateStanceCard';
import Icon from '@/components/Icon';
import { 
  getIssueById, 
  getCandidateById,
  sortCandidatesByIssueRating,
  getCandidateStanceForIssue,
  getStancesByIssue
} from '@/utils/dataUtils';
import { issues } from '@/data/issues';
import Image from 'next/image';
import Link from 'next/link';

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
  
  // Get all candidate stances for this issue
  const stances = getStancesByIssue(params.id);
  
  // Get candidates sorted by their rating for this issue
  const sortedCandidates = sortCandidatesByIssueRating(params.id);
  
  return (
    <>
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="bg-white/20 p-6 rounded-full">
              <Icon name={issue.icon as any} className="w-12 h-12" />
            </div>
            
            <div>
              <h1 className="text-4xl font-bold mb-4">{issue.title}</h1>
              <p className="text-xl text-white/90 max-w-2xl">
                {issue.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <SectionHeader
                title="About this Issue"
                subtitle="Learn more about this important topic."
              />
              
              <div className="bg-background p-6 rounded-lg shadow-sm border border-foreground/20">
                <p className="text-foreground/80 mb-4">
                  {issue.description}
                </p>
                
                {issue.id === 'housing' && (
                  <div className="text-foreground/80">
                    <p className="mb-4">
                      New York City faces a severe housing crisis with skyrocketing rents and a shortage of affordable units. 
                      Many residents spend more than 50% of their income on rent, making it difficult to afford other necessities.
                    </p>
                    <p className="mb-4">
                      Key housing issues include:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="mb-2">Expanding rent control and tenant protections</li>
                      <li className="mb-2">Building more truly affordable housing units</li>
                      <li className="mb-2">Addressing homelessness and providing supportive housing</li>
                      <li className="mb-2">Regulating real estate speculation and corporate landlords</li>
                      <li className="mb-2">Supporting community land trusts and cooperative housing models</li>
                    </ul>
                    <p>
                      The next mayor will need to balance the interests of tenants, homeowners, developers, and the city's overall housing needs.
                    </p>
                  </div>
                )}
                
                {issue.id === 'climate' && (
                  <div className="text-foreground/80">
                    <p className="mb-4">
                      Climate change poses an existential threat to New York City, with rising sea levels, extreme weather events, 
                      and air pollution disproportionately affecting low-income communities and communities of color.
                    </p>
                    <p className="mb-4">
                      Key climate justice issues include:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="mb-2">Reducing greenhouse gas emissions and transitioning to renewable energy</li>
                      <li className="mb-2">Protecting vulnerable communities from climate impacts</li>
                      <li className="mb-2">Creating green jobs and ensuring a just transition for workers</li>
                      <li className="mb-2">Improving public transportation and reducing car dependency</li>
                      <li className="mb-2">Addressing environmental racism and ensuring equitable access to green spaces</li>
                    </ul>
                    <p>
                      The next mayor must prioritize climate action while ensuring that environmental benefits and burdens are distributed equitably.
                    </p>
                  </div>
                )}
                
                {issue.id === 'healthcare' && (
                  <div className="text-foreground/80">
                    <p className="mb-4">
                      The COVID-19 pandemic exposed and exacerbated deep inequities in healthcare access across New York City, 
                      with low-income communities and communities of color bearing the brunt of the crisis.
                    </p>
                    <p className="mb-4">
                      Key healthcare issues include:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="mb-2">Expanding access to affordable healthcare and insurance</li>
                      <li className="mb-2">Addressing social determinants of health like housing and food security</li>
                      <li className="mb-2">Improving mental health services and addiction treatment</li>
                      <li className="mb-2">Supporting public hospitals and community health centers</li>
                      <li className="mb-2">Ensuring healthcare access for undocumented immigrants</li>
                    </ul>
                    <p>
                      The next mayor must work to expand healthcare access and ensure that all New Yorkers can receive the care they need regardless of income or immigration status.
                    </p>
                  </div>
                )}
                
                {issue.id === 'education' && (
                  <div className="text-foreground/80">
                    <p className="mb-4">
                      New York City's public school system remains deeply segregated, with stark disparities in resources, 
                      facilities, and educational outcomes between schools in wealthy and low-income neighborhoods.
                    </p>
                    <p className="mb-4">
                      Key education issues include:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="mb-2">Addressing school segregation and promoting integration</li>
                      <li className="mb-2">Reducing class sizes and improving student-teacher ratios</li>
                      <li className="mb-2">Expanding access to quality early childhood education</li>
                      <li className="mb-2">Supporting public higher education and vocational training</li>
                      <li className="mb-2">Ensuring equitable funding across all schools</li>
                    </ul>
                    <p>
                      The next mayor must address these inequities and ensure that all students have access to a high-quality education regardless of zip code.
                    </p>
                  </div>
                )}
                
                {issue.id === 'policing' && (
                  <div className="text-foreground/80">
                    <p className="mb-4">
                      The movement for police accountability has brought renewed attention to issues of police brutality, 
                      racial profiling, and the criminalization of poverty and mental illness in New York City.
                    </p>
                    <p className="mb-4">
                      Key public safety and policing issues include:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="mb-2">Reforming police practices and addressing misconduct</li>
                      <li className="mb-2">Reducing police violence and excessive force</li>
                      <li className="mb-2">Ending racial profiling and discriminatory policing</li>
                      <li className="mb-2">Investing in community-based solutions to crime</li>
                      <li className="mb-2">Addressing the root causes of crime through social services</li>
                    </ul>
                    <p>
                      The next mayor must address these concerns, reimagine public safety beyond policing, 
                      and invest in community-based solutions that address the root causes of crime and violence.
                    </p>
                  </div>
                )}
                
                {issue.id === 'transportation' && (
                  <div className="text-foreground/80">
                    <p className="mb-4">
                      New York City's public transportation system is facing significant challenges, from aging infrastructure 
                      and service cuts to accessibility issues and the need for more sustainable transportation options.
                    </p>
                    <p className="mb-4">
                      Key transportation issues include:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="mb-2">Improving subway and bus service reliability and frequency</li>
                      <li className="mb-2">Expanding bike lanes and pedestrian infrastructure</li>
                      <li className="mb-2">Making transit more accessible for people with disabilities</li>
                      <li className="mb-2">Reducing car dependency and traffic congestion</li>
                      <li className="mb-2">Ensuring equitable access to transportation across all neighborhoods</li>
                    </ul>
                    <p>
                      The next mayor must prioritize improving public transit, expanding bike and pedestrian infrastructure, 
                      and ensuring that all New Yorkers have access to safe, affordable, and sustainable transportation options.
                    </p>
                  </div>
                )}
                
                {issue.id === 'economy' && (
                  <div className="text-foreground/80">
                    <p className="mb-4">
                      The COVID-19 pandemic has deepened economic inequalities in New York City, with low-wage workers, 
                      small businesses, and communities of color experiencing the most severe impacts.
                    </p>
                    <p className="mb-4">
                      Key working class economic issues include:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="mb-2">Raising the minimum wage and ensuring living wages for all workers</li>
                      <li className="mb-2">Strengthening worker protections and union rights</li>
                      <li className="mb-2">Supporting small businesses and local economies</li>
                      <li className="mb-2">Creating good jobs with benefits and security</li>
                      <li className="mb-2">Addressing income inequality and wealth concentration</li>
                    </ul>
                    <p>
                      The next mayor must work to create a more equitable economy, with living wages, strong worker protections, 
                      support for small businesses, and investments in communities that have been historically marginalized.
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <SectionHeader
                title="Candidate Positions"
                subtitle="See where each candidate stands on this issue."
              />
              
              <div className="space-y-8">
                {sortedCandidates.map(candidate => {
                  const stance = getCandidateStanceForIssue(candidate.id, params.id);
                  if (!stance) return null;
                  
                  return (
                    <div key={candidate.id} className="border border-gray-200 rounded-lg p-6 hover:border-primary/30 transition-colors">
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
                        
                        <div>
                          <h3 className="text-xl font-bold">{candidate.name}</h3>
                          <div className="flex items-center mt-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Icon 
                                key={i}
                                name="Star" 
                                className={`w-5 h-5 ${i < stance.rating ? 'text-accent fill-accent' : 'text-gray-300'}`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {stance.quote && (
                        <blockquote className="italic text-foreground/80 border-l-4 border-primary pl-4 mb-4">
                          "{stance.quote}"
                        </blockquote>
                      )}
                      
                      <p className="text-foreground/80">
                        {stance.stance}
                      </p>
                      
                      <div className="mt-4">
                        <Link 
                          href={`/candidates/${candidate.id}`}
                          className="text-foreground hover:text-primary font-medium flex items-center"
                        >
                          <span>View full profile</span>
                          <Icon name="ArrowRight" className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-light-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              title="Why This Issue Matters"
              centered={true}
            />
            
            <div className="bg-background p-8 rounded-lg shadow-sm border border-foreground/20">
              {issue.id === 'housing' && (
                <>
                  <div className="flex items-center mb-4">
                    <Icon name="Home" className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-xl font-bold text-foreground">Affordable Housing Crisis</h3>
                  </div>
                  <p className="text-foreground/80 mb-4">
                    New York City is facing an unprecedented housing crisis, with skyrocketing rents pushing out long-time residents 
                    and making it increasingly difficult for working-class New Yorkers to afford to live in the city.
                  </p>
                  <p className="text-foreground/80 mb-4">
                    The next mayor will need to address issues like rent control, tenant protections, homelessness, 
                    and the development of truly affordable housing.
                  </p>
                </>
              )}
              
              {issue.id === 'climate' && (
                <>
                  <div className="flex items-center mb-4">
                    <Icon name="Leaf" className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-xl font-bold text-foreground">Climate Justice</h3>
                  </div>
                  <p className="text-foreground/80 mb-4">
                    Climate change poses an existential threat to New York City, with rising sea levels, extreme weather events, 
                    and air pollution disproportionately affecting low-income communities and communities of color.
                  </p>
                  <p className="text-foreground/80 mb-4">
                    The next mayor must prioritize reducing emissions, investing in renewable energy, creating green jobs, 
                    and ensuring that environmental benefits and burdens are distributed equitably.
                  </p>
                </>
              )}
              
              {issue.id === 'healthcare' && (
                <>
                  <div className="flex items-center mb-4">
                    <Icon name="HeartPulse" className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-xl font-bold text-foreground">Healthcare Access</h3>
                  </div>
                  <p className="text-foreground/80 mb-4">
                    The COVID-19 pandemic exposed and exacerbated deep inequities in healthcare access across New York City, 
                    with low-income communities and communities of color bearing the brunt of the crisis.
                  </p>
                  <p className="text-foreground/80 mb-4">
                    The next mayor must work to expand healthcare access, address social determinants of health, 
                    and ensure that all New Yorkers can receive the care they need regardless of income or immigration status.
                  </p>
                </>
              )}
              
              {issue.id === 'education' && (
                <>
                  <div className="flex items-center mb-4">
                    <Icon name="Book" className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-xl font-bold text-foreground">Educational Equity</h3>
                  </div>
                  <p className="text-foreground/80 mb-4">
                    New York City's public school system remains deeply segregated, with stark disparities in resources, 
                    facilities, and educational outcomes between schools in wealthy and low-income neighborhoods.
                  </p>
                  <p className="text-foreground/80 mb-4">
                    The next mayor must address these inequities, invest in public education, reduce class sizes, 
                    and ensure that all students have access to a high-quality education regardless of zip code.
                  </p>
                </>
              )}
              
              {issue.id === 'policing' && (
                <>
                  <div className="flex items-center mb-4">
                    <Icon name="Shield" className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-xl font-bold text-foreground">Public Safety Reform</h3>
                  </div>
                  <p className="text-foreground/80 mb-4">
                    The movement for police accountability has brought renewed attention to issues of police brutality, 
                    racial profiling, and the criminalization of poverty and mental illness in New York City.
                  </p>
                  <p className="text-foreground/80 mb-4">
                    The next mayor must address these concerns, reimagine public safety beyond policing, 
                    and invest in community-based solutions that address the root causes of crime and violence.
                  </p>
                </>
              )}
              
              {issue.id === 'transportation' && (
                <>
                  <div className="flex items-center mb-4">
                    <Icon name="Train" className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-xl font-bold text-foreground">Public Transportation</h3>
                  </div>
                  <p className="text-foreground/80 mb-4">
                    New York City's public transportation system is facing significant challenges, from aging infrastructure 
                    and service cuts to accessibility issues and the need for more sustainable transportation options.
                  </p>
                  <p className="text-foreground/80 mb-4">
                    The next mayor must prioritize improving public transit, expanding bike and pedestrian infrastructure, 
                    and ensuring that all New Yorkers have access to safe, affordable, and sustainable transportation options.
                  </p>
                </>
              )}
              
              {issue.id === 'economy' && (
                <>
                  <div className="flex items-center mb-4">
                    <Icon name="DollarSign" className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-xl font-bold text-foreground">Working Class Economics</h3>
                  </div>
                  <p className="text-foreground/80 mb-4">
                    The COVID-19 pandemic has deepened economic inequalities in New York City, with low-wage workers, 
                    small businesses, and communities of color experiencing the most severe impacts.
                  </p>
                  <p className="text-foreground/80 mb-4">
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