import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  MapPin, Calendar, Award, TrendingUp, MessageSquare, 
  ThumbsUp, Star, Trophy, Zap, Target, Users 
} from "lucide-react"
import Link from "next/link"

export async function generateMetadata({ params }: { params: { username: string } }) {
  // Mock data for demo
  const lawyer = {
    name: "Sarah Chen, Esq.",
    specialty: "Family Law",
    years_experience: 15
  }
  
  return {
    title: `${lawyer.name} - ${lawyer.specialty} Lawyer | VERDICT`,
    description: `${lawyer.name} is a verified ${lawyer.specialty} lawyer with ${lawyer.years_experience} years experience. View profile, answered questions, and expertise.`,
  }
}

export default async function LawyerProfile({ params }: { params: { username: string } }) {
  // Mock lawyer data for demo
  const lawyer = {
    id: "l-1",
    username: params.username,
    name: "Sarah Chen, Esq.",
    initials: "SC",
    avatar_url: "",
    tier: "Gold",
    specialty: "Family Law",
    secondary_specialties: ["Child Custody", "Divorce", "Adoption"],
    location: "San Francisco, CA",
    bar_number: "CA Bar #123456",
    years_experience: 15,
    verified_date: "2023-06-15",
    bio: "Experienced family law attorney specializing in complex custody cases and high-asset divorces. I believe in compassionate representation while fiercely protecting my clients' interests.",
    
    // Gamification stats
    xp: 12500,
    level: 18,
    level_title: "Senior Counsel",
    next_level_xp: 15000,
    rank: 42,
    total_lawyers: 1892,
    
    // Activity stats
    questions_answered: 234,
    verdict_alignment: 8.9,
    helpful_votes: 1567,
    response_time: "2.3 hours",
    acceptance_rate: 78,
    
    // Badges
    badges: [
      { id: "family-expert", name: "Family Law Expert", tier: "gold", icon: Award },
      { id: "top-contributor", name: "Top Contributor", tier: "silver", icon: Trophy },
      { id: "fast-responder", name: "Fast Responder", tier: "bronze", icon: Zap },
      { id: "high-accuracy", name: "High Accuracy", tier: "gold", icon: Target },
      { id: "community-favorite", name: "Community Favorite", tier: "silver", icon: Users },
      { id: "founding-member", name: "Founding Member", tier: "legendary", icon: Star }
    ],
    
    // Recent answers preview
    recent_answers: [
      {
        id: "a-1",
        question_title: "How is child custody determined in California?",
        question_slug: "child-custody-california",
        excerpt: "Based on California Family Code, courts determine custody using the 'best interests of the child' standard...",
        votes: 45,
        date: "2024-01-15"
      },
      {
        id: "a-2",
        question_title: "Can I modify my custody agreement?",
        question_slug: "modify-custody-agreement",
        excerpt: "Yes, custody orders can be modified when there's a significant change in circumstances...",
        votes: 32,
        date: "2024-01-14"
      }
    ]
  }

  const progressToNextLevel = ((lawyer.xp - 10000) / (lawyer.next_level_xp - 10000)) * 100

  return (
    <>
      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": lawyer.name,
          "jobTitle": `${lawyer.specialty} Lawyer`,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": lawyer.location
          },
          "description": lawyer.bio
        })}
      </script>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Left Column - Profile Info */}
          <div className="space-y-6">
            {/* Profile Card */}
            <Card>
              <CardHeader className="text-center">
                <Avatar className="h-32 w-32 mx-auto mb-4">
                  <AvatarImage src={lawyer.avatar_url} />
                  <AvatarFallback className="text-3xl">{lawyer.initials}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-2xl">{lawyer.name}</CardTitle>
                <CardDescription>
                  <Badge className="mb-2" variant={lawyer.tier === "Gold" ? "default" : "secondary"}>
                    {lawyer.tier} Tier
                  </Badge>
                  <div className="space-y-1 mt-2">
                    <p>{lawyer.specialty} Attorney</p>
                    <p className="flex items-center justify-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {lawyer.location}
                    </p>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" size="lg">
                  Ask {lawyer.name.split(',')[0]} a Question
                </Button>
                
                <div className="text-sm text-muted-foreground space-y-2">
                  <p className="flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    {lawyer.bar_number}
                  </p>
                  <p className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {lawyer.years_experience} years experience
                  </p>
                  <p className="flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    Verified since {new Date(lawyer.verified_date).toLocaleDateString()}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* XP & Level Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Level {lawyer.level}</span>
                  <Badge variant="outline" className="text-xp-purple">
                    {lawyer.level_title}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>{lawyer.xp.toLocaleString()} XP</span>
                    <span>{lawyer.next_level_xp.toLocaleString()} XP</span>
                  </div>
                  <Progress value={progressToNextLevel} className="h-3" />
                  <p className="text-xs text-muted-foreground mt-1">
                    {(lawyer.next_level_xp - lawyer.xp).toLocaleString()} XP to Level {lawyer.level + 1}
                  </p>
                </div>
                
                <Separator />
                
                <div className="text-center">
                  <p className="text-2xl font-bold">#{lawyer.rank}</p>
                  <p className="text-sm text-muted-foreground">
                    out of {lawyer.total_lawyers.toLocaleString()} lawyers
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Specialties */}
            <Card>
              <CardHeader>
                <CardTitle>Expertise Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>{lawyer.specialty}</Badge>
                  {lawyer.secondary_specialties.map((spec) => (
                    <Badge key={spec} variant="outline">{spec}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Main Content */}
          <div className="md:col-span-2 space-y-6">
            {/* Bio */}
            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">{lawyer.bio}</p>
              </CardContent>
            </Card>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl">{lawyer.questions_answered}</CardTitle>
                  <CardDescription>Questions Answered</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl">{lawyer.verdict_alignment}/10</CardTitle>
                  <CardDescription>Verdict Alignment</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl">{lawyer.helpful_votes}</CardTitle>
                  <CardDescription>Helpful Votes</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl">{lawyer.response_time}</CardTitle>
                  <CardDescription>Avg Response Time</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl">{lawyer.acceptance_rate}%</CardTitle>
                  <CardDescription>Acceptance Rate</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl">{lawyer.badges.length}</CardTitle>
                  <CardDescription>Badges Earned</CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* Badges Showcase */}
            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
                <CardDescription>Badges earned through expertise and contribution</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {lawyer.badges.map((badge) => {
                    const Icon = badge.icon
                    return (
                      <div 
                        key={badge.id}
                        className={`p-4 rounded-lg border text-center space-y-2 ${
                          badge.tier === 'legendary' ? 'border-purple-500 bg-purple-50' :
                          badge.tier === 'gold' ? 'border-yellow-500 bg-yellow-50' :
                          badge.tier === 'silver' ? 'border-gray-400 bg-gray-50' :
                          'border-orange-400 bg-orange-50'
                        }`}
                      >
                        <Icon className={`h-8 w-8 mx-auto ${
                          badge.tier === 'legendary' ? 'text-purple-500' :
                          badge.tier === 'gold' ? 'text-yellow-600' :
                          badge.tier === 'silver' ? 'text-gray-600' :
                          'text-orange-600'
                        }`} />
                        <p className="text-sm font-medium">{badge.name}</p>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Recent Answers */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Answers</CardTitle>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/i/l/${lawyer.username}/answers`}>View All</Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {lawyer.recent_answers.map((answer) => (
                  <Link key={answer.id} href={`/l/q/${answer.question_slug}`}>
                    <div className="p-4 rounded-lg border hover:shadow-md transition-shadow cursor-pointer">
                      <h4 className="font-semibold mb-2">{answer.question_title}</h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">{answer.excerpt}</p>
                      <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <ThumbsUp className="h-4 w-4" />
                          {answer.votes} votes
                        </span>
                        <span>{answer.date}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}