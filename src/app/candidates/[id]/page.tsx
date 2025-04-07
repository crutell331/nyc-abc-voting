import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import Icon from '@/components/Icon';
import { 
  getCandidateById, 
  getCandidateStances,
  getIssueById
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
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{candidate.name}</h1>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {candidate.endorsements.map((endorsement, index) => (
                  <span 
                    key={index}
                    className="bg-blue-500 bg-opacity-30 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {endorsement}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a 
                  href={candidate.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-blue-200 transition-colors"
                >
                  <Icon name="Globe" className="w-5 h-5 mr-1" />
                  <span>Website</span>
                </a>
                
                {candidate.socialMedia.twitter && (
                  <a 
                    href={`https://twitter.com/${candidate.socialMedia.twitter.replace('@', '')}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:text-blue-200 transition-colors"
                  >
                    <Icon name="Twitter" className="w-5 h-5 mr-1" />
                    <span>{candidate.socialMedia.twitter}</span>
                  </a>
                )}
                
                {candidate.socialMedia.instagram && (
                  <a 
                    href={`https://instagram.com/${candidate.socialMedia.instagram.replace('@', '')}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:text-blue-200 transition-colors"
                  >
                    <Icon name="Instagram" className="w-5 h-5 mr-1" />
                    <span>{candidate.socialMedia.instagram}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg sticky top-8">
                <h2 className="text-2xl font-bold mb-6">About {candidate.name}</h2>
                
                <p className="text-gray-600 mb-6">
                  {candidate.bio}
                </p>
                
                <h3 className="text-xl font-bold mb-4">Endorsements</h3>
                <ul className="space-y-2 mb-6">
                  {candidate.endorsements.map((endorsement, index) => (
                    <li key={index} className="flex items-center">
                      <Icon name="CheckCircle" className="w-5 h-5 text-green-500 mr-2" />
                      <span>{endorsement}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/candidates"
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                >
                  <Icon name="ArrowLeft" className="w-4 h-4 mr-1" />
                  <span>Back to all candidates</span>
                </Link>
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
                    <div key={stance.issueId} className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-100 p-3 rounded-full mr-4">
                          <Icon name={issue.icon as any} className="w-6 h-6 text-blue-600" />
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-bold">{issue.title}</h3>
                          <div className="flex items-center mt-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Icon 
                                key={i}
                                name="Star" 
                                className={`w-5 h-5 ${i < stance.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {stance.quote && (
                        <blockquote className="italic text-gray-700 border-l-4 border-blue-500 pl-4 mb-4">
                          "{stance.quote}"
                        </blockquote>
                      )}
                      
                      <p className="text-gray-600">
                        {stance.stance}
                      </p>
                      
                      <div className="mt-4">
                        <Link 
                          href={`/issues/${issue.id}`}
                          className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                        >
                          <span>Compare with other candidates</span>
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
    </>
  );
}