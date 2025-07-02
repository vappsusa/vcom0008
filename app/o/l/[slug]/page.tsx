import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, Users, Award, Calendar, Globe, Scale } from "lucide-react"
import Link from "next/link"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  // Mock data for demo
  const firm = {
    name: "Chen & Associates Law Firm",
    location: "San Francisco, CA"
  }
  
  return {
    title: `${firm.name} - ${firm.location} | VERDICT`,
    description: `${firm.name} is a verified law firm in ${firm.location}. View profile, attorneys, practice areas, and client reviews.`,
  }
}

export default async function LawFirmPage({ params }: { params: { slug: string } }) {
  // Mock law firm data for demo
  const firm = {
    id: "firm-1",
    slug: params.slug,
    name: "Chen & Associates Law Firm",
    tagline: "Excellence in Family Law Since 1995",
    logo: "",
    founded: "1995",
    size: "Medium (11-50 attorneys)",
    locations: [
      "San Francisco, CA (HQ)",
      "San Jose, CA",
      "Oakland, CA"
    ],
    website: "www.chenlaw.example.com",
    
    description: "Chen & Associates is a premier family law firm serving the Bay Area for over 25 years. We specialize in complex divorces, child custody disputes, and adoption proceedings. Our team of experienced attorneys combines compassionate counsel with aggressive advocacy.",
    
    practice_areas: [
      { name: "Family Law", percentage: 60 },
      { name: "Divorce", percentage: 25 },
      { name: "Child Custody", percentage: 10 },
      { name: "Adoption", percentage: 5 }
    ],
    
    stats: {
      total_attorneys: 23,
      verified_attorneys: 18,
      questions_answered: 892,
      avg_verdict_score: 8.7,
      response_time: "3.2 hours",
      client_satisfaction: 94
    },
    
    featured_attorneys: [
      {
        id: "l-1",
        username: "sarahchen",
        name: "Sarah Chen, Esq.",
        role: "Managing Partner",
        specialty: "Family Law",
        years: 15,
        level: 18,
        avatar: ""
      },
      {
        id: "l-3",
        username: "davidlee",
        name: "David Lee, JD",
        role: "Senior Partner",
        specialty: "Divorce Law",
        years: 12,
        level: 16,
        avatar: ""
      },
      {
        id: "l-4",
        username: "emilywang",
        name: "Emily Wang, Esq.",
        role: "Partner",
        specialty: "Child Custody",
        years: 8,
        level: 14,
        avatar: ""
      }
    ],
    
    accolades: [
      "Super Lawyers 2020-2024",
      "Best Law Firms - U.S. News 2023",
      "Martindale-Hubbell AV Preeminent",
      "VERDICT Platform Gold Tier Firm"
    ]
  }

  return (
    <>
      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": firm.name,
          "description": firm.description,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "San Francisco",
            "addressRegion": "CA"
          },
          "foundingDate": firm.founded
        })}
      </script>
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={firm.logo} />
                  <AvatarFallback className="text-2xl">
                    {firm.name.split(' ').map(w => w[0]).slice(0, 2).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-3xl mb-2">{firm.name}</CardTitle>
                  <CardDescription className="text-lg mb-3">{firm.tagline}</CardDescription>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Founded {firm.founded}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {firm.size}
                    </span>
                    <span className="flex items-center gap-1">
                      <Globe className="h-4 w-4" />
                      {firm.website}
                    </span>
                  </div>
                </div>
              </div>
              <Button size="lg">
                Contact Firm
              </Button>
            </div>
          </CardHeader>
        </Card>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            {/* About */}
            <Card>
              <CardHeader>
                <CardTitle>About {firm.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">{firm.description}</p>
              </CardContent>
            </Card>

            {/* Practice Areas */}
            <Card>
              <CardHeader>
                <CardTitle>Practice Areas</CardTitle>
                <CardDescription>Areas of legal expertise</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {firm.practice_areas.map((area) => (
                  <div key={area.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{area.name}</span>
                      <span className="text-sm text-muted-foreground">{area.percentage}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all duration-500"
                        style={{ width: `${area.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Featured Attorneys */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Featured Attorneys</CardTitle>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/o/l/${firm.slug}/attorneys`}>View All</Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {firm.featured_attorneys.map((attorney) => (
                    <Link key={attorney.id} href={`/i/l/${attorney.username}`}>
                      <div className="flex items-center justify-between p-4 rounded-lg border hover:shadow-md transition-shadow cursor-pointer">
                        <div className="flex items-center gap-4">
                          <Avatar>
                            <AvatarImage src={attorney.avatar} />
                            <AvatarFallback>
                              {attorney.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{attorney.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {attorney.role} • {attorney.specialty}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant="outline" className="text-xp-purple">
                            Level {attorney.level}
                          </Badge>
                          <p className="text-xs text-muted-foreground mt-1">
                            {attorney.years} years exp.
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Firm Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Verified Attorneys</span>
                  <span className="font-semibold">
                    {firm.stats.verified_attorneys}/{firm.stats.total_attorneys}
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Questions Answered</span>
                  <span className="font-semibold">{firm.stats.questions_answered}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Avg Verdict Score</span>
                  <span className="font-semibold text-verdict-green">
                    {firm.stats.avg_verdict_score}/10
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Response Time</span>
                  <span className="font-semibold">{firm.stats.response_time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Client Satisfaction</span>
                  <span className="font-semibold">{firm.stats.client_satisfaction}%</span>
                </div>
              </CardContent>
            </Card>

            {/* Locations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Office Locations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {firm.locations.map((location, index) => (
                    <li key={index} className="text-sm">
                      {location}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Accolades */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-professional-gold" />
                  Awards & Recognition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {firm.accolades.map((accolade, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Scale className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <span className="text-sm">{accolade}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}