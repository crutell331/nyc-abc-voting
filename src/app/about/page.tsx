import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import Icon from '@/components/Icon';

export default function AboutPage() {
  return (
    <>
      <Hero 
        title="About the ABC Campaign"
        subtitle="Learn more about the 'Anyone But Cuomo' initiative and why it matters for the future of NYC."
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader
                title="Our Mission"
                subtitle="Empowering voters to make informed choices based on issues, not name recognition."
              />
              
              <p className="text-foreground/80 mb-6">
                The "Anyone But Cuomo" (ABC) campaign was created by a coalition of working class organizations
                and activists who recognize the importance of preventing Andrew Cuomo from becoming NYC's next mayor.
              </p>
              
              <p className="text-foreground/80 mb-6">
                Our mission is to provide voters with clear, accessible information about where candidates 
                stand on key issues, so they can make informed choices in the upcoming mayoral primary.
              </p>
              
              <p className="text-foreground/80 mb-6">
                We believe that by focusing on issues rather than personalities, we can help elect a mayor 
                who will address the city's most pressing challenges: affordable housing, climate justice, 
                healthcare access, educational equity, police reform, public transportation, and working class economics.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Our Values</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Icon name="Check" className="w-5 h-5 text-green-500 mr-2 mt-1" />
                    <span className="text-foreground/80">
                      <strong>Democracy:</strong> We believe in empowering voters with information and expanding democratic participation.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="w-5 h-5 text-green-500 mr-2 mt-1" />
                    <span className="text-foreground/80">
                      <strong>Justice:</strong> We advocate for policies that address systemic inequalities and promote social, economic, and racial justice.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="w-5 h-5 text-green-500 mr-2 mt-1" />
                    <span className="text-foreground/80">
                      <strong>Community:</strong> We believe in building a city that works for all New Yorkers, not just the wealthy and well-connected.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="w-5 h-5 text-green-500 mr-2 mt-1" />
                    <span className="text-foreground/80">
                      <strong>Transparency:</strong> We are committed to providing clear, accurate information about candidates and issues.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <SectionHeader
                title="Why 'Anyone But Cuomo'?"
                subtitle="Understanding Andrew Cuomo's record and why we believe NYC deserves better."
              />
              
              <p className="text-foreground/80 mb-6">
                Andrew Cuomo's entry into the mayoral race has raised concerns among working class organizations
                and activists who remember his track record as governor.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-bold mb-2">Corporate Influence</h4>
                  <p className="text-foreground/80">
                    Throughout his tenure as governor, Cuomo consistently sided with corporate interests 
                    over working New Yorkers, accepting millions in campaign contributions from real estate 
                    developers and other powerful industries.
                  </p>
                </div>
                
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-bold mb-2">Blocking Working Class Legislation</h4>
                  <p className="text-foreground/80">
                    Cuomo repeatedly obstructed working class legislation, including tenant protections,
                    climate action, and criminal justice reform.
                  </p>
                </div>
                
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-bold mb-2">Mishandling of the Pandemic</h4>
                  <p className="text-foreground/80">
                    Cuomo's handling of the COVID-19 pandemic raised serious concerns, particularly regarding 
                    nursing home deaths and the prioritization of political optics over public health.
                  </p>
                </div>
                
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-bold mb-2">Ethical Concerns</h4>
                  <p className="text-foreground/80">
                    Cuomo's administration was plagued by ethical scandals, including allegations of sexual 
                    harassment, misuse of state resources, and interference with anti-corruption investigations.
                  </p>
                </div>
              </div>
              
              <p className="text-foreground/80">
                Given this record, we believe that New York City deserves a mayor who will truly represent 
                the interests of all New Yorkers, not just the powerful and well-connected. That's why we're 
                advocating for voters to consider any of the working class candidates featured in this guide 
                before considering Andrew Cuomo.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Join the Movement"
            subtitle="Join the movement for a working class NYC mayor."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Icon name="Share2" className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Spread the Word</h3>
              <p className="text-foreground/80 mb-4">
                Share this website with friends, family, and neighbors. The more voters who understand the issues 
                and candidates, the better our chances of electing a working class mayor.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Icon name="Users" className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Volunteer</h3>
              <p className="text-foreground/80 mb-4">
                Join one of the many grassroots organizations working to elect working class candidates. 
                Volunteer for phone banking, canvassing, or other campaign activities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Icon name="Vote" className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Vote</h3>
              <p className="text-foreground/80 mb-4">
                Most importantly, make sure you're registered to vote and have a plan for voting in the 
                primary election. Remember to use ranked choice voting strategically!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}