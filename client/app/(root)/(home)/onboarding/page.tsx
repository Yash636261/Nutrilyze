"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Card } from "../../../../components/ui/card";
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
} from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Goal {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface DietType {
  id: string;
  label: string;
  description: string;
  icon: LucideIcon;
}

interface FormData {
  name: string;
  goals: string[];
  otherGoals: string[];
  dietType: string;
}

export default function Component() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    goals: [],
    otherGoals: [],
    dietType: "",
  });

  const goals: Goal[] = [
    { id: "be-healthy", label: "Be Healthy", icon: Shield },
    { id: "lose-weight", label: "Lose Weight", icon: Scale },
    { id: "log-foods", label: "Log Foods", icon: Calendar },
    { id: "build-muscle", label: "Build Muscle", icon: Dumbbell },
    { id: "discover-foods", label: "Discover Foods", icon: Soup },
    { id: "analyze-recipes", label: "Analyze Recipes", icon: Calculator },
  ];

  const otherGoals: Goal[] = [
    { id: "boost-immunity", label: "Boost immunity", icon: Shield },
    { id: "mental-clarity", label: "Mental clarity", icon: Brain },
    { id: "reduce-stress", label: "Reduce stress", icon: Leaf },
    { id: "better-sleep", label: "Better sleep", icon: Moon },
    { id: "other", label: "Other", icon: UserCircle2 },
  ];

  const dietTypes: DietType[] = [
    {
      id: "classic",
      label: "Classic",
      description: "I eat everything",
      icon: Utensils,
    },
    {
      id: "vegan",
      label: "Vegan",
      description: "I don't eat any animal products",
      icon: Leaf,
    },
    {
      id: "vegetarian",
      label: "Vegetarian",
      description: "I don't eat meat or animal products",
      icon: Salad,
    },
    {
      id: "pescetarian",
      label: "Pescetarian",
      description: "I don't eat meat, but I eat seafood",
      icon: Fish,
    },
    {
      id: "flexitarian",
      label: "Flexitarian",
      description:
        "I eat mostly plant-based foods, but I occasionally eat meat",
      icon: Leaf,
    },
  ];

  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGoalToggle = (
    category: "goals" | "otherGoals",
    goalId: string
  ) => {
    setFormData((prev) => {
      const array = prev[category];
      return {
        ...prev,
        [category]: array.includes(goalId)
          ? array.filter((id) => id !== goalId)
          : [...array, goalId],
      };
    });
  };

  const handleDietTypeSelect = (dietId: string) => {
    setFormData((prev) => ({ ...prev, dietType: dietId }));
  };

  const handleNext = () => {
    if (step < 4) {
      setStep((prev) => prev + 1);
    } else {
      console.log("Onboarding complete!", formData);
      router.push("/dashboard");
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-md">
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`w-1/4 h-2 rounded-full ${
                  i <= step ? "bg-green-500" : "bg-gray-300 dark:bg-gray-600"
                } ${i !== 4 ? "mr-1" : ""}`}
              />
            ))}
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Step {step} of 4
          </p>
        </div>

        {step === 1 && (
          <div>
            <h2 className="text-xl font-bold mb-4 dark:text-white">
              Welcome to Our App!
            </h2>
            <p className="mb-4 dark:text-gray-300 text-sm">
              Let's get you set up with a great experience.
            </p>
            <div className="space-y-4">
              <div>
                <Label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </Label>

                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-xl font-bold mb-4 dark:text-white">
              What are your goals?
            </h2>
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
              Select all that apply to you.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {goals.map((goal) => {
                const Icon = goal.icon;
                return (
                  <Card
                    key={goal.id}
                    className={`p-3 cursor-pointer transition-all hover:shadow-md rounded-xl ${
                      formData.goals.includes(goal.id)
                        ? "border-green-500 ring-2 ring-green-500"
                        : "dark:bg-gray-700"
                    }`}
                    onClick={() => handleGoalToggle("goals", goal.id)}
                  >
                    <div className="flex flex-col items-center text-center gap-2">
                      <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                        <Icon className="w-5 h-5 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-xs font-medium dark:text-gray-200">
                        {goal.label}
                      </span>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-xl font-bold mb-4 dark:text-white">
              Do you have other goals?
            </h2>
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
              Choose the ones that apply to you.
            </p>
            <div className="space-y-3">
              {otherGoals.map((goal) => {
                const Icon = goal.icon;
                return (
                  <Card
                    key={goal.id}
                    className={`p-4 cursor-pointer transition-all hover:shadow-md rounded-xl flex items-center ${
                      formData.otherGoals.includes(goal.id)
                        ? "border-green-500 ring-2 ring-green-500"
                        : "dark:bg-gray-700"
                    }`}
                    onClick={() => handleGoalToggle("otherGoals", goal.id)}
                  >
                    <Icon className="w-5 h-5 mr-3 text-green-500" />
                    <span className="text-sm font-medium dark:text-gray-200">
                      {goal.label}
                    </span>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 className="text-xl font-bold mb-4 dark:text-white">
              Got a diet you're sticking to?
            </h2>
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
              Let's tweak your goals to suit your dietary preferences.
            </p>
            <div className="space-y-3">
              {dietTypes.map((diet) => {
                const Icon = diet.icon;
                return (
                  <Card
                    key={diet.id}
                    className={`p-4 cursor-pointer transition-all hover:shadow-md rounded-xl ${
                      formData.dietType === diet.id
                        ? "border-green-500 ring-2 ring-green-500"
                        : "dark:bg-gray-700"
                    }`}
                    onClick={() => handleDietTypeSelect(diet.id)}
                  >
                    <div className="flex items-center">
                      <Icon className="w-5 h-5 mr-3 text-green-500" />
                      <div>
                        <div className="font-medium dark:text-gray-200">
                          {diet.label}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {diet.description}
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        <div className="flex justify-between mt-6">
          <Button
            onClick={handleBack}
            disabled={step === 1}
            variant="outline"
            className="rounded-full"
          >
            Back
          </Button>
          <Button
            onClick={handleNext}
            className="rounded-full bg-green-500 hover:bg-green-600"
          >
            {step === 4 ? "Complete" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
}
