import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import Icon from '@/components/Icon';
import { 
  getCandidateById, 
  getCandidateStances,
  getIssueById,
  getAverageRatingForCandidate
} from '@/utils/dataUtils';
import { candidates } from '@/data/candidates';

export function generateStaticParams() {
  return candidates.map(candidate => ({
    id: candidate.id,
  }));
}

export default function CandidatePage({ params }: { params: { id: string } }) {
  const candidate = getCandidateById(params.id);
  
  if (!candidate) {
    notFound();
  }
  
  // Get all stances for this candidate
  const stances = getCandidateStances(candidate.id);
  
  return (
    <>
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative h-48 w-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src={candidate.image}
                alt={candidate.name}
                fill
                className="object-cover"
                sizes="192px"
              />
            </div>
            
            <div>
              <h1 className="text-4xl font-bold mb-4">{candidate.name}</h1>
              
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon 
                    key={i}
                    name="Star" 
                    className={`w-6 h-6 ${i < Math.round(getAverageRatingForCandidate(candidate.id)) ? 'text-accent fill-accent' : 'text-white/30'}`}
                  />
                ))}
                <span className="ml-2 text-white/90">
                  Overall Rating
                </span>
              </div>
              
              <p className="text-xl text-white/90 mb-6 max-w-2xl">
                {candidate.bio}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {candidate.endorsements.map((endorsement, index) => (
                  <span 
                    key={index}
                    className="bg-white/20 text-white text-sm px-3 py-1 rounded-full"
                  >
                    {endorsement}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                {candidate.website && (
                  <a 
                    href={candidate.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-primary hover:bg-accent hover:text-white font-bold py-2 px-4 rounded transition-colors duration-300 flex items-center justify-center"
                  >
                    <Icon name="Globe" className="w-5 h-5 mr-2" />
                    Visit Website
                  </a>
                )}
                
                {candidate.socialMedia?.twitter && (
                  <a 
                    href={`https://twitter.com/${candidate.socialMedia.twitter.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-primary hover:bg-accent hover:text-white font-bold py-2 px-4 rounded transition-colors duration-300 flex items-center justify-center"
                  >
                    <Icon name="Twitter" className="w-5 h-5 mr-2" />
                    Follow on Twitter
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <SectionHeader
                title="About"
                subtitle={`Learn more about ${candidate.name}'s background and experience.`}
              />
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-foreground/80 mb-4">
                  {candidate.bio}
                </p>
                
                <h3 className="text-xl font-bold mb-3">Endorsements</h3>
                <ul className="list-disc list-inside text-foreground/80 mb-4">
                  {candidate.endorsements.map((endorsement, index) => (
                    <li key={index}>{endorsement}</li>
                  ))}
                </ul>
                
                <h3 className="text-xl font-bold mb-3">Connect</h3>
                <div className="flex gap-4">
                  {candidate.website && (
                    <a 
                      href={candidate.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-dark"
                    >
                      <Icon name="Globe" className="w-6 h-6" />
                    </a>
                  )}
                  
                  {candidate.socialMedia?.twitter && (
                    <a 
                      href={`https://twitter.com/${candidate.socialMedia.twitter.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-dark"
                    >
                      <Icon name="Twitter" className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <SectionHeader
                title="Policy Positions"
                subtitle={`Where ${candidate.name} stands on key issues.`}
              />
              
              <div className="space-y-8">
                {stances.map(stance => {
                  const issue = getIssueById(stance.issueId);
                  if (!issue) return null;
                  
                  return (
                    <div key={stance.issueId} className="border border-gray-200 rounded-lg p-6 hover:border-primary/30 transition-colors">
                      <div className="flex items-center mb-4">
                        <div className="bg-primary/10 p-3 rounded-full mr-4">
                          <Icon name={issue.icon as any} className="w-6 h-6 text-primary" />
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-bold">{issue.title}</h3>
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
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}