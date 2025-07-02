import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, TrendingUp, Clock, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function LegalHubPage() {
  // Mock data for demo
  const featuredQuestions = [
    {
      id: 1,
      slug: "divorce-custody-california",
      title: "How is child custody determined in California divorce proceedings?",
      category: "Family Law",
      answers: 5,
      verdict: 8.5,
      views: 1234,
      time: "2 hours ago"
    },
    {
      id: 2,
      slug: "wrongful-termination-evidence",
      title: "What evidence do I need for a wrongful termination claim?",
      category: "Employment Law",
      answers: 3,
      verdict: 7.8,
      views: 892,
      time: "5 hours ago"
    },
    {
      id: 3,
      slug: "startup-equity-agreement",
      title: "Essential clauses for startup equity agreements?",
      category: "Business Law",
      answers: 4,
      verdict: 9.2,
      views: 567,
      time: "1 day ago"
    }
  ]

  const topCategories = [
    { name: "Employment Law", count: 2341, color: "bg-blue-500" },
    { name: "Family Law", count: 1892, color: "bg-purple-500" },
    { name: "Criminal Law", count: 1567, color: "bg-red-500" },
    { name: "Business Law", count: 1234, color: "bg-green-500" },
    { name: "Real Estate", count: 987, color: "bg-yellow-500" },
    { name: "Immigration", count: 876, color: "bg-indigo-500" }
  ]

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Get Professional Legal Opinions
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Ask legal questions and receive verified answers from real lawyers. 
          AI-powered classification ensures you get the right expertise.
        </p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input 
              placeholder="Search legal questions..." 
              className="pl-10 h-12 text-lg"
            />
          </div>
          <Button size="lg" className="h-12 px-8">
            Search
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold">10,234</CardTitle>
            <CardDescription>Questions Answered</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold">1,892</CardTitle>
            <CardDescription>Verified Lawyers</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold">95%</CardTitle>
            <CardDescription>Satisfaction Rate</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold">2.4h</CardTitle>
            <CardDescription>Avg Response Time</CardDescription>
          </CardHeader>
        </Card>
      </section>

      {/* Categories Grid */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {topCategories.map((category) => (
            <Link key={category.name} href={`/l/${category.name.toLowerCase().replace(' ', '-')}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                    <div className={`w-3 h-3 rounded-full ${category.color}`} />
                  </div>
                  <CardDescription>{category.count.toLocaleString()} questions</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Questions */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Trending Questions</h2>
          <Button variant="outline" asChild>
            <Link href="/l/questions">View All</Link>
          </Button>
        </div>
        
        <div className="space-y-4">
          {featuredQuestions.map((question) => (
            <Link key={question.id} href={`/l/q/${question.slug}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1 flex-1">
                      <CardTitle className="text-lg line-clamp-2">
                        {question.title}
                      </CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <Badge variant="secondary">{question.category}</Badge>
                        <span className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4" />
                          {question.answers} answers
                        </span>
                        <span className="flex items-center gap-1">
                          <TrendingUp className="h-4 w-4" />
                          {question.views} views
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {question.time}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-verdict-green">
                        {question.verdict}
                      </div>
                      <div className="text-xs text-muted-foreground">verdict</div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}