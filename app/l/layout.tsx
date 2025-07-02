import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Scale } from "lucide-react"

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/l" className="flex items-center space-x-2">
              <Scale className="h-6 w-6 text-primary" />
              <span className="text-2xl font-bold">VERDICT</span>
              <span className="text-sm text-muted-foreground">Legal</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <Link href="/l">
                <Button variant="ghost">Browse</Button>
              </Link>
              <Link href="/l/ask">
                <Button>Ask Question</Button>
              </Link>
              <Button variant="outline">Sign In</Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t bg-muted/50">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-3">Legal Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/l/employment">Employment Law</Link></li>
                <li><Link href="/l/family">Family Law</Link></li>
                <li><Link href="/l/criminal">Criminal Law</Link></li>
                <li><Link href="/l/business">Business Law</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">For Lawyers</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/i/l/join">Join as Professional</Link></li>
                <li><Link href="/o/l/register">Register Firm</Link></li>
                <li><Link href="/l/leaderboard">Leaderboard</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/terms">Terms of Service</Link></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/disclaimer">Disclaimer</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; 2024 VERDICT.COM. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}