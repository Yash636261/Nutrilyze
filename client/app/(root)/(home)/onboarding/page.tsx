'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  Shield,
  Scale,
  Calendar,
  Dumbbell,
  Soup,
  Calculator,
  Brain,
  Leaf,
  Moon,
  UserCircle2,
  Utensils,
  Fish,
  Salad,
  Heart,
  Wheat,
  Candy,
  ShoppingBag,
  Bell,
  Sparkles,
  Apple,
} from "lucide-react"
import { LucideIcon } from "lucide-react"

interface Goal {
  id: string
  label: string
  icon: LucideIcon
}

interface DietType {
  id: string
  label: string
  description: string
  icon: LucideIcon
}

interface FormData {
  name: string
  age: string
  dietaryPreferences: string[]
  healthGoals: string[]
  allergies: string[]
  shoppingPreferences: string[]
  activityLevel: string
  alerts: string[]
  specialInstructions: string
  consumptionTipPreference: string
  favoriteFoods: string[]
}

export default function Component() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    age: "",
    dietaryPreferences: [],
    healthGoals: [],
    allergies: [],
    shoppingPreferences: [],
    activityLevel: "",
    alerts: [],
    specialInstructions: "",
    consumptionTipPreference: "",
    favoriteFoods: [],
  })

  const dietaryPreferences = [
    { id: "vegan", label: "Vegan" },
    { id: "vegetarian", label: "Vegetarian" },
    { id: "gluten-free", label: "Gluten-free" },
  ]

  const healthGoals = [
    { id: "weight-management", label: "Weight management", icon: Scale },
    { id: "improve-gut-health", label: "Improve gut health", icon: Soup },
  ]

  const allergies = [
    { id: "nuts", label: "Nuts" },
    { id: "soy", label: "Soy" },
  ]

  const shoppingPreferences = [
    { id: "organic", label: "Prefers organic products" },
    { id: "moderate-budget", label: "Moderate budget" },
  ]

  const activityLevels = [
    { id: "sedentary", label: "Sedentary" },
    { id: "lightly-active", label: "Lightly active" },
    { id: "moderately-active", label: "Moderately active" },
    { id: "very-active", label: "Very active" },
    { id: "extra-active", label: "Extra active" },
  ]

  const alerts = [
    { id: "sugar", label: "Notifications for sugar" },
    { id: "high-sodium", label: "Notifications for high sodium products" },
  ]

  const router = useRouter()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (category: keyof FormData, itemId: string) => {
    setFormData((prev) => {
      const array = prev[category] as string[]
      return {
        ...prev,
        [category]: array.includes(itemId) ? array.filter((id) => id !== itemId) : [...array, itemId],
      }
    })
  }

  const handleNext = () => {
    if (step < 5) {
      setStep((prev) => prev + 1)
    } else {
      console.log("Onboarding complete!", formData);
      router.push("/scan");
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-200 dark:from-gray-900 dark:to-gray-800 p-4">
      <Card className="w-full max-w-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-xl rounded-3xl overflow-hidden">
        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between mb-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className={`w-1/5 h-2 rounded-full ${
                    i <= step ? "bg-gradient-to-r from-green-400 to-blue-500" : "bg-gray-200 dark:bg-gray-700"
                  } ${i !== 5 ? "mr-1" : ""}`}
                />
              ))}
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center font-medium">Step {step} of 5</p>
          </div>

          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Personal Information
              </h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    name="age"
                    type="number"
                    value={formData.age}
                    onChange={handleInputChange}
                    placeholder="Enter your age"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Dietary Preferences and Health Goals
              </h2>
              <div className="space-y-4">
                <div>
                  <Label>Dietary Preferences</Label>
                  {dietaryPreferences.map((pref) => (
                    <div key={pref.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={pref.id}
                        checked={formData.dietaryPreferences.includes(pref.id)}
                        onCheckedChange={() => handleCheckboxChange("dietaryPreferences", pref.id)}
                      />
                      <label htmlFor={pref.id} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {pref.label}
                      </label>
                    </div>
                  ))}
                </div>
                <div>
                  <Label>Health Goals</Label>
                  {healthGoals.map((goal) => (
                    <div key={goal.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={goal.id}
                        checked={formData.healthGoals.includes(goal.id)}
                        onCheckedChange={() => handleCheckboxChange("healthGoals", goal.id)}
                      />
                      <label htmlFor={goal.id} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {goal.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Allergies and Shopping Preferences
              </h2>
              <div className="space-y-4">
                <div>
                  <Label>Allergies</Label>
                  {allergies.map((allergy) => (
                    <div key={allergy.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={allergy.id}
                        checked={formData.allergies.includes(allergy.id)}
                        onCheckedChange={() => handleCheckboxChange("allergies", allergy.id)}
                      />
                      <label htmlFor={allergy.id} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {allergy.label}
                      </label>
                    </div>
                  ))}
                </div>
                <div>
                  <Label>Shopping Preferences</Label>
                  {shoppingPreferences.map((pref) => (
                    <div key={pref.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={pref.id}
                        checked={formData.shoppingPreferences.includes(pref.id)}
                        onCheckedChange={() => handleCheckboxChange("shoppingPreferences", pref.id)}
                      />
                      <label htmlFor={pref.id} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {pref.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Activity Level and Alerts
              </h2>
              <div className="space-y-4">
                <div>
                  <Label>Activity Level</Label>
                  <RadioGroup
                    value={formData.activityLevel}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, activityLevel: value }))}
                  >
                    {activityLevels.map((level) => (
                      <div key={level.id} className="flex items-center space-x-2">
                        <RadioGroupItem value={level.id} id={level.id} />
                        <Label htmlFor={level.id}>{level.label}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                <div>
                  <Label>Alerts</Label>
                  {alerts.map((alert) => (
                    <div key={alert.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={alert.id}
                        checked={formData.alerts.includes(alert.id)}
                        onCheckedChange={() => handleCheckboxChange("alerts", alert.id)}
                      />
                      <label htmlFor={alert.id} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {alert.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Additional Preferences
              </h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="specialInstructions">Special Instructions</Label>
                  <Textarea
                    id="specialInstructions"
                    name="specialInstructions"
                    value={formData.specialInstructions}
                    onChange={handleInputChange}
                    placeholder="Enter any special instructions"
                  />
                </div>
                <div>
                  <Label htmlFor="consumptionTipPreference">Consumption Tip Preference</Label>
                  <Select
                    value={formData.consumptionTipPreference}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, consumptionTipPreference: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="direct-comparisons">Direct comparisons</SelectItem>
                      <SelectItem value="detailed-analysis">Detailed analysis</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="favoriteFoods">Favorite Foods</Label>
                  <Input
                    id="favoriteFoods"
                    name="favoriteFoods"
                    value={formData.favoriteFoods.join(", ")}
                    onChange={(e) => setFormData((prev) => ({ ...prev, favoriteFoods: e.target.value.split(", ") }))}
                    placeholder="Enter your favorite foods (comma-separated)"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-6">
            <Button
              onClick={handleBack}
              disabled={step === 1}
              variant="outline"
              className="rounded-full bg-white/50 dark:bg-gray-700/50 hover:bg-white/80 dark:hover:bg-gray-700/80"
            >
              Back
            </Button>
            <Button
              onClick={handleNext}
              className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
            >
              {step === 5 ? "Complete" : "Next"}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}