'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Heart, Share2, X, Check, Info } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type ProductData = {
  product_name: string
  brands: string
  image_url: string
  nutriscore_grade: string
  nutriscore_score: number
  nutrient_levels: {
    fat: string
    'saturated-fat': string
    sugars: string
    salt: string
  }
  ingredients_analysis_tags: string[]
  allergens_tags: string[]
}

export default function ProductDetails({ product }: { product: ProductData }) {
  const [isFavorite, setIsFavorite] = useState(false)

  const nutritionScore = product?.nutriscore_score || 0
  const maxScore = 100

  const nutritionPreferences = [
    { id: "vegan", label: "Vegan", allowed: product.ingredients_analysis_tags?.includes('en:vegan'), icon: "🌱" },
    { id: "vegetarian", label: "Vegetarian", allowed: product.ingredients_analysis_tags?.includes('en:vegetarian'), icon: "🥬" },
    { id: "gluten-free", label: "Gluten-Free", allowed: !product.allergens_tags?.includes('en:gluten'), icon: "🌾" },
    { id: "lactose-free", label: "Free of Lactose", allowed: !product.allergens_tags?.includes('en:milk'), icon: "🥛" },
  ]

  const nutritionLevels = [
    {
      id: "fat",
      label: "Fat",
      level: product.nutrient_levels?.fat || "Unknown",
      icon: "🔥",
      color: product.nutrient_levels?.fat === "low" ? "bg-green-500" : 
             product.nutrient_levels?.fat === "moderate" ? "bg-yellow-500" : "bg-red-500",
    },
    {
      id: "saturated-fat",
      label: "Saturated Fat",
      level: product.nutrient_levels?.["saturated-fat"] || "Unknown",
      icon: "💧",
      color: product.nutrient_levels?.["saturated-fat"] === "low" ? "bg-green-500" : 
             product.nutrient_levels?.["saturated-fat"] === "moderate" ? "bg-yellow-500" : "bg-red-500",
    },
    {
      id: "sugar",
      label: "Sugar",
      level: product.nutrient_levels?.sugars || "Unknown",
      icon: "🍯",
      color: product.nutrient_levels?.sugars === "low" ? "bg-green-500" : 
             product.nutrient_levels?.sugars === "moderate" ? "bg-yellow-500" : "bg-red-500",
    },
    {
      id: "salt",
      label: "Salt",
      level: product.nutrient_levels?.salt || "Unknown",
      icon: "🧂",
      color: product.nutrient_levels?.salt === "low" ? "bg-green-500" : 
             product.nutrient_levels?.salt === "moderate" ? "bg-yellow-500" : "bg-red-500",
    },
  ]

  const nutriScoreColors = {
    a: "bg-green-500",
    b: "bg-lime-500",
    c: "bg-yellow-500",
    d: "bg-orange-500",
    e: "bg-red-500",
  }

  return (
    <div className="bg-white dark:bg-gray-800 overflow-hidden rounded-lg shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between p-4 lg:p-6 border-b dark:border-gray-700">
        <Button variant="ghost" size="icon" aria-label="Go back">
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" aria-label="Share product">
            <Share2 className="h-6 w-6" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart className={`h-6 w-6 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
          </Button>
        </div>
      </div>

      <div className="lg:flex">
        {/* Left Column */}
        <div className="lg:w-1/2 p-4 lg:p-6 lg:border-r dark:border-gray-700">
          {/* Product Info */}
          <div className="flex gap-4 items-start">
            <Image
              src={product.image_url || "/placeholder.svg"}
              alt={product.product_name}
              width={150}
              height={150}
              className="rounded-lg object-cover"
            />
            <div>
              <h1 className="text-2xl font-semibold dark:text-white">
                {product.product_name}
              </h1>
              <p className="text-gray-500 dark:text-gray-400">{product.brands}</p>
            </div>
          </div>

          {/* Nutri-Score */}
          <div className="mt-8">
            <p className="text-sm font-medium mb-2 dark:text-gray-300">
              NUTRI-SCORE
            </p>
            <div className="flex gap-1">
              {(["a", "b", "c", "d", "e"] as Array<keyof typeof nutriScoreColors>).map((grade) => (
                <div
                  key={grade}
                  className={`flex-1 h-10 rounded-md flex items-center justify-center text-white font-bold ${
                    grade === product.nutriscore_grade
                      ? nutriScoreColors[grade]
                      : "bg-gray-200 dark:bg-gray-700"
                  }`}
                >
                  {grade.toUpperCase()}
                </div>
              ))}
            </div>
          </div>

          {/* Score Circle */}
          <div className="mt-8 flex items-center gap-6">
            <div className="relative w-40 h-40">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#eee"
                  strokeWidth="3"
                  className="dark:stroke-gray-700"
                />
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="3"
                  strokeDasharray={`${
                    (nutritionScore / maxScore) * 100
                  }, 100`}
                  className="rotate-90 origin-center"
                />
                <text
                  x="18"
                  y="22"
                  className="text-xl font-bold"
                  textAnchor="middle"
                  fill="currentColor"
                >
                  {nutritionScore}
                </text>
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-semibold dark:text-white">
                FoodCheck Score
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                This score helps you to estimate the product quality
              </p>
              <Button
                variant="link"
                className="p-0 h-auto text-green-500 mt-2"
              >
                Show more
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 p-4 lg:p-6">
          {/* Nutrition Preferences */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">
              Nutrition Preference
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {nutritionPreferences.map((pref) => (
                <Card
                  key={pref.id}
                  className="p-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl" aria-hidden="true">{pref.icon}</span>
                    <span className="font-medium dark:text-gray-200">
                      {pref.label}
                    </span>
                  </div>
                  {pref.allowed ? (
                    <Check className="h-6 w-6 text-green-500" aria-label={`${pref.label} allowed`} />
                  ) : (
                    <X className="h-6 w-6 text-red-500" aria-label={`${pref.label} not allowed`} />
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Nutrition Advisor */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">
              Nutrition Advisor
            </h2>
            <div className="space-y-4">
              {nutritionLevels.map((level) => (
                <Card
                  key={level.id}
                  className="p-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl" aria-hidden="true">{level.icon}</span>
                    <span className="font-medium dark:text-gray-200">
                      {level.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600 dark:text-gray-300">
                      {level.level}
                    </span>
                    <div className={`w-4 h-4 rounded-full ${level.color}`} aria-hidden="true" />
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="mt-8 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg cursor-help">
                  <Info className="h-5 w-5" aria-hidden="true" />
                  <p>
                    Disclaimer: The information provided may be incomplete or
                    incorrect.
                  </p>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>No liability and no medical advice.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  )
}