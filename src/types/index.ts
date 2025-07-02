// Re-export all types from individual type files
export * from './api.types'
export * from './ai.types'
export * from './database.types'

// Common types used across the application
export interface User {
  id: string
  clerk_id?: string
  email: string
  user_type: 'user' | 'professional' | 'admin' | 'moderator'
  created_at: string
  updated_at: string
}

export interface Question {
  id: string
  slug: string
  title: string
  body: string
  category: string
  subcategory: string
  location?: string
  keywords: string[]
  ai_summary?: string
  complexity: 'Low' | 'Medium' | 'High'
  ai_quality_score?: number
  moderation_passed: boolean
  created_at: string
  updated_at: string
  user_id: string
  views: number
  answer_count: number
}

export interface LawyerProfile {
  id: string
  user_id: string
  username: string
  name: string
  avatar_url?: string
  tier: 'Bronze' | 'Silver' | 'Gold' | 'Platinum'
  specialty: string
  secondary_specialties: string[]
  location: string
  bar_number: string
  years_experience: number
  verified_date: string
  bio?: string
  
  // Gamification
  xp: number
  level: number
  level_title: string
  badges: Badge[]
  
  // Stats
  questions_answered: number
  verdict_alignment: number
  helpful_votes: number
  response_time: string
  acceptance_rate: number
}

export interface Badge {
  id: string
  name: string
  description?: string
  tier: 'bronze' | 'silver' | 'gold' | 'legendary'
  icon?: string
  earned_at: string
}

export interface VerdictScore {
  question_id: string
  score: number
  confidence: number
  factors: VerdictFactor[]
  summary: string
  key_points: string[]
  updated_at: string
}

export interface VerdictFactor {
  name: string
  score: number
  weight: number
}