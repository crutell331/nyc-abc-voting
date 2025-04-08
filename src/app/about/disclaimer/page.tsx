import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import Link from 'next/link';
import Icon from '@/components/Icon';

export default function DisclaimerPage() {
  return (
    <>
      <Hero 
        title="Disclaimer & Information Sources"
        subtitle="Understanding where our information comes from and how to verify it."
      />
      
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              title="Information Sources"
              subtitle="Our commitment to transparency about data sources."
            />
            
            <div className="bg-light-bg p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Primary Sources</h3>
              <p className="text-foreground/80 mb-4">
                The information presented on this website has been compiled from the following sources:
              </p>
              <ul className="list-disc pl-6 mb-6 text-foreground/80">
                <li className="mb-2">Official candidate campaign websites</li>
                <li className="mb-2">Public statements and interviews</li>
                <li className="mb-2">Published policy positions and platforms</li>
                <li className="mb-2">News coverage from reputable sources</li>
                <li className="mb-2">Public records and voting history</li>
              </ul>
              
              <h3 className="text-xl font-bold mb-4">Verification Process</h3>
              <p className="text-foreground/80 mb-4">
                Our team has worked to verify all information through multiple sources where possible. 
                We strive for accuracy but acknowledge that political positions can evolve over time.
              </p>
            </div>
            
            <SectionHeader
              title="Official Sources"
              subtitle="Visit candidate websites for definitive information."
            />
            
            <div className="bg-light-bg p-6 rounded-lg mb-8">
              <p className="text-foreground/80 mb-4">
                While we strive to provide accurate and comprehensive information, the definitive source 
                for any candidate&apos;s positions is their official campaign website and public statements.
              </p>
              <p className="text-foreground/80 mb-4">
                We strongly encourage all users to visit each candidate&apos;s official website to verify 
                information and learn more about their complete platforms and positions.
              </p>
              <div className="mt-6">
                <Link 
                  href="/candidates" 
                  className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
                >
                  <span>View all candidates</span>
                  <Icon name="ArrowRight" className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
            
            <SectionHeader
              title="Disclaimer"
              subtitle="Our commitment to transparency."
            />
            
            <div className="bg-light-bg p-6 rounded-lg">
              <p className="text-foreground/80 mb-4">
                This website is an independent resource created to help voters make informed decisions 
                in the NYC Democratic Primary. We are not affiliated with any candidate, campaign, 
                political party, or government entity.
              </p>
              <p className="text-foreground/80 mb-4">
                The views expressed on this site is presented for educational purposes only.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 