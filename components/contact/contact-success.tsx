"use client"

import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ContactSuccessProps {
  onReset: () => void
}

export function ContactSuccess({ onReset }: ContactSuccessProps) {
  return (
    <div className="text-center py-12">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-green-500 mb-6">
        <Send className="h-8 w-8" />
      </div>
      <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
      <p className="text-white/70 mb-6">Thank you for reaching out. I'll get back to you as soon as possible.</p>
      <Button onClick={onReset} variant="outline">
        Send Another Message
      </Button>
    </div>
  )
}

