import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface QuestionContentProps {
  question: {
    body: string
    category: string
    subcategory: string
    location: string
    complexity: string
    keywords: string[]
  }
}

export default function QuestionContent({ question }: QuestionContentProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-wrap gap-2">
          <Badge>{question.complexity} Complexity</Badge>
          {question.keywords.map((keyword) => (
            <Badge key={keyword} variant="outline">
              {keyword}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="prose prose-slate max-w-none">
          {question.body.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-base leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </div>
        
        <Separator />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="font-semibold mb-1">Category</p>
            <p className="text-muted-foreground">{question.category}</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Subcategory</p>
            <p className="text-muted-foreground">{question.subcategory}</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Location</p>
            <p className="text-muted-foreground">{question.location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}