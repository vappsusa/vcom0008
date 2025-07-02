import { z } from 'zod'

// AI Classification Schema
export const classificationSchema = z.object({
  primary_category: z.enum([
    'Employment Law',
    'Family Law',
    'Criminal Law',
    'Business Law',
    'Real Estate',
    'Immigration',
    'Intellectual Property',
    'Personal Injury',
    'Contract Law',
    'Tax Law',
    'Other'
  ]),
  subcategory: z.string(),
  confidence: z.number().min(0).max(1),
  keywords: z.array(z.string()).max(10),
  complexity: z.enum(['Low', 'Medium', 'High']),
  urgency: z.enum(['Low', 'Medium', 'High', 'Critical']).optional(),
  summary: z.string().max(500)
})

export type AIClassification = z.infer<typeof classificationSchema>

// Moderation Schema
export const moderationSchema = z.object({
  content_safety: z.object({
    passed: z.boolean(),
    violence_score: z.number(),
    hate_speech_score: z.number(),
    adult_content_score: z.number()
  }),
  quality: z.object({
    passed: z.boolean(),
    grammar_score: z.number(),
    clarity_score: z.number(),
    completeness_score: z.number()
  }),
  legal_relevance: z.object({
    passed: z.boolean(),
    is_legal_matter: z.boolean(),
    requires_lawyer: z.boolean()
  }),
  privacy: z.object({
    passed: z.boolean(),
    contains_pii: z.boolean(),
    pii_types: z.array(z.string()).optional()
  }),
  spam: z.object({
    passed: z.boolean(),
    is_promotional: z.boolean(),
    is_duplicate: z.boolean()
  }),
  overall_passed: z.boolean(),
  confidence: z.number()
})

export type AIModeration = z.infer<typeof moderationSchema>