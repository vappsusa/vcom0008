import { Suspense } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import { CalendarDays, MapPin, Eye, MessageSquare, Share2, Flag } from "lucide-react"
import VerdictScoreDisplay from "@/components/verdict/score-display"
import LawyerOpinions from "@/components/legal/lawyer-opinions"
import QuestionContent from "@/components/legal/question-content"

// Enable Partial Prerendering
export const experimental_ppr = true

export async function generateMetadata({ params }: { params: { slug: string } }) {
  // Mock data for demo
  const question = {
    title: "How is child custody determined in California divorce proceedings?",
    summary: "Understanding the factors courts consider when determining child custody arrangements in California divorce cases.",
    keywords: ["child custody", "divorce", "California", "family law"]
  }
  
  return {
    title: `${question.title} - Legal Answer | VERDICT`,
    description: question.summary,
    keywords: question.keywords.join(", "),
  }
}

export default async function QuestionPage({ params }: { params: { slug: string } }) {
  // Mock question data for demo
  const question = {
    id: "q-123",
    slug: params.slug,
    title: "How is child custody determined in California divorce proceedings?",
    body: `I'm going through a divorce in California and we have two children (ages 8 and 12). My spouse and I both want primary custody. 

What factors do California courts consider when determining custody arrangements? Is there a preference for joint custody? How much weight do the children's preferences carry at their ages?

I work full-time (9-5) and my spouse works part-time. We both have stable homes and no criminal records. What else should I know about the custody determination process?`,
    category: "Family Law",
    subcategory: "Child Custody",
    location: "California",
    created_at: "2024-01-15T10:30:00Z",
    views: 1234,
    answer_count: 5,
    ai_summary: "California courts prioritize the best interests of the child when determining custody, considering factors like parent-child relationships, stability, and the child's preferences (especially for children over 14).",
    complexity: "Medium",
    keywords: ["child custody", "divorce", "California", "best interests", "joint custody"]
  }

  return (
    <>
      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "QAPage",
          "name": question.title,
          "text": question.body,
          "dateCreated": question.created_at,
          "keywords": question.keywords.join(", "),
          "author": {
            "@type": "Person",
            "name": "Anonymous User"
          },
          "answerCount": question.answer_count,
          "upvoteCount": 0
        })}
      </script>
      
      <div className="max-w-7xl mx-auto">
        {/* Question Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-3">{question.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <Badge variant="secondary">{question.category}</Badge>
                <Badge variant="outline">{question.subcategory}</Badge>
                <span className="flex items-center gap-1">
                  <CalendarDays className="h-4 w-4" />
                  {new Date(question.created_at).toLocaleDateString()}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {question.location}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  {question.views.toLocaleString()} views
                </span>
                <span className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" />
                  {question.answer_count} answers
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Flag className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* AI Summary */}
          <Card className="bg-muted/50">
            <CardContent className="pt-6">
              <p className="text-sm">
                <strong>AI Summary:</strong> {question.ai_summary}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content with Tabs */}
        <Tabs defaultValue="question" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="question">Question</TabsTrigger>
            <TabsTrigger value="verdict">Verdict Score</TabsTrigger>
            <TabsTrigger value="opinions">Lawyer Opinions ({question.answer_count})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="question" className="space-y-4">
            <QuestionContent question={question} />
          </TabsContent>
          
          <TabsContent value="verdict" className="space-y-4">
            <Suspense fallback={<VerdictSkeleton />}>
              <VerdictScoreDisplay questionId={question.id} />
            </Suspense>
          </TabsContent>
          
          <TabsContent value="opinions" className="space-y-4">
            <Suspense fallback={<OpinionsSkeleton />}>
              <LawyerOpinions questionId={question.id} />
            </Suspense>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}

function VerdictSkeleton() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-8 w-48" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-40 w-full" />
      </CardContent>
    </Card>
  )
}

function OpinionsSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <Card key={i}>
          <CardHeader>
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-4 w-48" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-20 w-full" />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}