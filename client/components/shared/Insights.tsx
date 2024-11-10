'use client'

import { useEffect, useState } from 'react'
import { getAnswer } from '@/app/actions'
import { Card } from "@/components/ui/card"
import ReactMarkdown from 'react-markdown'

export default function LLMInsights({ product }: { product: any }) {
  const [insights, setInsights] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchInsights() {
      setLoading(true)
      try {
        const result = await getAnswer(JSON.stringify(product))
        setInsights(result)
      } catch (error) {
        console.error('Error fetching insights:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchInsights()
  }, [product])

  if (loading) return <div className="text-center py-4">Loading insights...</div>
  if (!insights) return <div className="text-center py-4 text-red-500">Failed to load insights</div>

  return (
    <Card className="p-4">
      <ReactMarkdown
        components={{
          h3: ({ children }) => <h3 className="font-semibold text-lg mb-2">{children}</h3>,
          p: ({ children }) => <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{children}</p>,
          ul: ({ children }) => <ul className="list-disc pl-5 mb-4">{children}</ul>,
          li: ({ children }) => <li className="text-sm text-gray-600 dark:text-gray-300 mb-1">{children}</li>,
        }}
      >
        {insights}
      </ReactMarkdown>
    </Card>
  )
}