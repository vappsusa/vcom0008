import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, Sparkles } from "lucide-react"
import { QuestionFormDemo } from "@/components/legal/question-form-demo"

export default function AskQuestionPage() {
  // Mock categories for demo
  const categories = [
    "Employment Law",
    "Family Law",
    "Criminal Law",
    "Business Law",
    "Real Estate",
    "Immigration",
    "Intellectual Property",
    "Personal Injury",
    "Contract Law",
    "Tax Law"
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Ask a Legal Question</h1>
        <p className="text-muted-foreground">
          Get professional legal opinions from verified lawyers. Our AI will classify your question to ensure you get the right expertise.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Main Form */}
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Your Question</CardTitle>
              <CardDescription>
                Be specific and include relevant details about your situation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Question Title</Label>
                <Input 
                  id="title" 
                  placeholder="Brief description of your legal issue"
                  className="text-lg"
                />
                <p className="text-sm text-muted-foreground">
                  Example: "Can my employer fire me for taking medical leave?"
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category (Optional)</Label>
                <select 
                  id="category"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Let AI categorize for me</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat.toLowerCase().replace(' ', '-')}>
                      {cat}
                    </option>
                  ))}
                </select>
                <p className="text-sm text-muted-foreground">
                  Our AI will automatically categorize if you're unsure
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="body">Detailed Description</Label>
                <Textarea 
                  id="body" 
                  placeholder="Provide context, timeline, and any relevant details..."
                  className="min-h-[200px]"
                />
                <p className="text-sm text-muted-foreground">
                  Include: What happened, when it happened, parties involved, and what outcome you're seeking
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location (Optional)</Label>
                <Input 
                  id="location" 
                  placeholder="City, State"
                />
                <p className="text-sm text-muted-foreground">
                  Laws vary by location - this helps lawyers give accurate advice
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Save as Draft</Button>
              <QuestionFormDemo />
            </CardFooter>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* AI Classification Preview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                AI Classification
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Our AI will analyze your question for:
              </p>
              <div className="space-y-2">
                <Badge variant="outline" className="w-full justify-start">
                  Legal Category
                </Badge>
                <Badge variant="outline" className="w-full justify-start">
                  Complexity Level
                </Badge>
                <Badge variant="outline" className="w-full justify-start">
                  Relevant Keywords
                </Badge>
                <Badge variant="outline" className="w-full justify-start">
                  Urgency Detection
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Guidelines */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-yellow-500" />
                Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="font-semibold text-sm">DO Include:</p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Specific facts and timeline</li>
                  <li>Your location (state/city)</li>
                  <li>What outcome you want</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-sm">DON'T Include:</p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Personal identifying info</li>
                  <li>Other parties' full names</li>
                  <li>Confidential documents</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <Card className="border-yellow-200 bg-yellow-50">
            <CardContent className="pt-6">
              <p className="text-sm">
                <strong>Note:</strong> Answers on VERDICT are not a substitute for hiring an attorney. 
                For urgent matters, consult a lawyer directly.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}