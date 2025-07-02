"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { motion } from 'framer-motion'
import { TrendingUp, Users, Brain, Scale } from "lucide-react"

interface VerdictScoreDisplayProps {
  questionId: string
}

export default function VerdictScoreDisplay({ questionId }: VerdictScoreDisplayProps) {
  // Mock data for demo - in real app this would be fetched
  const verdictData = {
    score: 8.5,
    confidence: 92,
    factors: [
      { name: "Legal Consensus", score: 9.2, icon: Scale },
      { name: "Professional Agreement", score: 8.8, icon: Users },
      { name: "AI Analysis", score: 8.0, icon: Brain },
      { name: "Case Law Support", score: 7.8, icon: TrendingUp }
    ],
    summary: "Strong legal consensus supports joint custody arrangements when both parents are capable. Courts prioritize the child's best interests.",
    keyPoints: [
      "California courts prefer joint custody when feasible",
      "Child's preference gains weight after age 14",
      "Work schedules are considered but not determinative",
      "Stability and continuity are major factors"
    ]
  }

  const getScoreColor = (score: number) => {
    if (score >= 8) return "text-verdict-green"
    if (score >= 5) return "text-verdict-yellow"
    return "text-verdict-red"
  }

  const getScoreBgColor = (score: number) => {
    if (score >= 8) return "bg-verdict-green"
    if (score >= 5) return "bg-verdict-yellow"
    return "bg-verdict-red"
  }

  return (
    <div className="space-y-6">
      {/* Main Score Card */}
      <Card>
        <CardHeader>
          <CardTitle>Verdict Score</CardTitle>
          <CardDescription>
            AI-powered consensus based on lawyer opinions and legal precedent
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Score Display */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="text-center"
          >
            <div className={`text-7xl font-bold ${getScoreColor(verdictData.score)}`}>
              {verdictData.score}
            </div>
            <div className="text-lg text-muted-foreground">out of 10</div>
          </motion.div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Verdict Strength</span>
              <span>{verdictData.confidence}% Confidence</span>
            </div>
            <Progress value={verdictData.score * 10} className="h-3" />
          </div>

          {/* Summary */}
          <div className="p-4 bg-muted rounded-lg">
            <p className="text-sm">{verdictData.summary}</p>
          </div>
        </CardContent>
      </Card>

      {/* Score Factors */}
      <Card>
        <CardHeader>
          <CardTitle>Score Breakdown</CardTitle>
          <CardDescription>
            Factors contributing to the verdict score
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {verdictData.factors.map((factor, index) => {
              const Icon = factor.icon
              return (
                <motion.div
                  key={factor.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-muted-foreground" />
                    <span className="font-medium">{factor.name}</span>
                  </div>
                  <div className={`text-2xl font-bold ${getScoreColor(factor.score)}`}>
                    {factor.score}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Key Points */}
      <Card>
        <CardHeader>
          <CardTitle>Key Legal Points</CardTitle>
          <CardDescription>
            Important considerations based on the verdict analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {verdictData.keyPoints.map((point, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-2"
              >
                <div className={`w-2 h-2 rounded-full mt-1.5 ${getScoreBgColor(verdictData.score)}`} />
                <span className="text-sm">{point}</span>
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Disclaimer */}
      <Card className="border-yellow-200 bg-yellow-50">
        <CardContent className="pt-6">
          <p className="text-sm text-yellow-900">
            <strong>Important:</strong> This verdict score is based on aggregated lawyer opinions and AI analysis. 
            It should not replace professional legal advice for your specific situation.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}