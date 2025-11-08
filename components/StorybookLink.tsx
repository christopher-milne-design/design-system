"use client"

import { Book } from "lucide-react"

interface StorybookLinkProps {
  story: string
  className?: string
}

export function StorybookLink({ story, className = "" }: StorybookLinkProps) {
  const baseUrl = process.env.NEXT_PUBLIC_STORYBOOK_URL || 'http://localhost:6006'
  const storybookUrl = `${baseUrl}/?path=/story/${story}`

  return (
    <a
      href={storybookUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 px-2 py-1 text-xs font-medium rounded-md bg-purple-100 hover:bg-purple-200 text-purple-700 border border-purple-300 transition-colors ${className}`}
      title="View in Storybook"
    >
      <Book className="w-3 h-3" />
      View Story
    </a>
  )
}
