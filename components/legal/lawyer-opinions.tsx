"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ThumbsUp, ThumbsDown, MessageSquare, Award, Star } from "lucide-react"
import Link from "next/link"

interface LawyerOpinionsProps {
  questionId: string
}

export default function LawyerOpinions({ questionId }: LawyerOpinionsProps) {
  // Mock data for demo
  const opinions = [
    {
      id: "op-1",
      lawyer: {
        id: "l-1",
        username: "sarahchen",
        name: "Sarah Chen, Esq.",
        avatar: "",
        tier: "Gold",
        specialty: "Family Law",
        years_experience: 15,
        location: "San Francisco, CA",
        xp: 12500,
        level: 18,
        badges: ["Family Law Expert", "Top Contributor"]
      },
      content: `Based on California Family Code, courts determine custody using the "best interests of the child" standard. Key factors include:

1. **Health, safety, and welfare** of the child
2. **History of contact** between each parent and child
3. **Stability** of each parent's home environment
4. **Child's preferences** - At ages 8 and 12, the court may consider their wishes, with more weight given to the 12-year-old

California courts do favor joint custody when both parents are capable. Your work schedules will be considered, but full-time employment doesn't disadvantage you. Focus on demonstrating your involvement in the children's lives and your ability to maintain their routines.

I recommend documenting your current involvement (school activities, medical appointments, daily care) and proposing a detailed parenting plan that shows how you'll manage custody with your work schedule.`,
      created_at: "2024-01-15T14:30:00Z",
      votes: { up: 45, down: 2 },
      verdict_alignment: 9.1,
      helpful_count: 38
    },
    {
      id: "op-2",
      lawyer: {
        id: "l-2",
        username: "michaeljohnson",
        name: "Michael Johnson, JD",
        avatar: "",
        tier: "Silver",
        specialty: "Family Law",
        years_experience: 8,
        location: "Los Angeles, CA",
        xp: 7800,
        level: 12,
        badges: ["Rising Star"]
      },
      content: `Adding to the excellent points above, I want to emphasize the importance of the status quo in custody decisions. California courts are reluctant to disrupt established patterns that are working for the children.

Key additional considerations:
- **Right of first refusal** - Consider requesting this so you get the opportunity to care for the children during the other parent's scheduled time if they're unavailable
- **Educational continuity** - Courts strongly favor keeping children in their current schools
- **Sibling bonds** - Courts typically keep siblings together

The fact that both of you have stable homes and clean records is positive. Consider mediation before litigation - California courts encourage this, and agreements reached in mediation often lead to better co-parenting relationships long-term.`,
      created_at: "2024-01-15T16:45:00Z",
      votes: { up: 28, down: 1 },
      verdict_alignment: 8.7,
      helpful_count: 22
    }
  ]

  return (
    <div className="space-y-6">
      {opinions.map((opinion) => (
        <Card key={opinion.id}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <Link href={`/i/l/${opinion.lawyer.username}`}>
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={opinion.lawyer.avatar} />
                    <AvatarFallback>
                      {opinion.lawyer.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </Link>
                <div>
                  <div className="flex items-center gap-2">
                    <Link href={`/i/l/${opinion.lawyer.username}`}>
                      <CardTitle className="text-lg hover:underline">
                        {opinion.lawyer.name}
                      </CardTitle>
                    </Link>
                    <Badge variant={opinion.lawyer.tier === "Gold" ? "default" : "secondary"}>
                      {opinion.lawyer.tier}
                    </Badge>
                  </div>
                  <CardDescription className="flex items-center gap-2 mt-1">
                    <span>{opinion.lawyer.specialty}</span>
                    <span>•</span>
                    <span>{opinion.lawyer.years_experience} years</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-xp-purple text-xp-purple" />
                      Level {opinion.lawyer.level}
                    </span>
                  </CardDescription>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-semibold text-verdict-green">
                  {opinion.verdict_alignment}/10
                </div>
                <div className="text-xs text-muted-foreground">verdict alignment</div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="prose prose-slate max-w-none">
              {opinion.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-sm leading-relaxed mb-3 last:mb-0">
                  {paragraph.split('**').map((part, i) => 
                    i % 2 === 0 ? part : <strong key={i}>{part}</strong>
                  )}
                </p>
              ))}
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm">
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  {opinion.votes.up}
                </Button>
                <Button variant="outline" size="sm">
                  <ThumbsDown className="h-4 w-4 mr-1" />
                  {opinion.votes.down}
                </Button>
                <Button variant="ghost" size="sm">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  Reply
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Award className="h-4 w-4" />
                  {opinion.helpful_count} found helpful
                </span>
                <span>
                  {new Date(opinion.created_at).toLocaleDateString()}
                </span>
              </div>
            </div>
            
            {/* Lawyer Badges */}
            {opinion.lawyer.badges.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {opinion.lawyer.badges.map((badge) => (
                  <Badge key={badge} variant="outline" className="text-xs">
                    {badge}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}