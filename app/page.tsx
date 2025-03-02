"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  // State to store the user's dietary requirements input
  const [dietary, setDietary] = useState("")

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle the dietary requirements submission here
    console.log("Dietary requirements:", dietary)
  }

  return (
    // Main container - full height, centered content
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background">
      {/* Content wrapper - controls maximum width and spacing */}
      <div className="w-full max-w-xl mx-auto space-y-6">
        {/* Page title */}
        <h1 className="text-4xl font-bold text-foreground text-center mb-8">Dietary Requirements</h1>

        {/* Form element */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          {/* Input and button container - horizontal layout */}
          <div className="flex gap-2">
            {/* Custom Input component for dietary requirements */}
            <Input
              type="text"
              placeholder="Enter your dietary requirements..."
              value={dietary}
              onChange={(e) => setDietary(e.target.value)}
              className="flex-1"
            />
            {/* Submit button */}
            <Button type="submit">Enter</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

