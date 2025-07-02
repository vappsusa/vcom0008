"use client"

import { useState } from 'react'
import { toast } from 'sonner'
import { Button } from "@/components/ui/button"

export function QuestionFormDemo() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    setIsSubmitting(true)
    
    // Simulate API call
    const promise = new Promise((resolve) => {
      setTimeout(resolve, 2000)
    })

    toast.promise(promise, {
      loading: 'Submitting your legal question...',
      success: () => {
        setIsSubmitting(false)
        return 'Question submitted successfully! Our AI is classifying it now.'
      },
      error: 'Failed to submit question',
    })

    await promise
  }

  return (
    <Button 
      onClick={handleSubmit} 
      disabled={isSubmitting}
      size="lg"
      className="ml-auto"
    >
      {isSubmitting ? 'Submitting...' : 'Submit Question'}
    </Button>
  )
}