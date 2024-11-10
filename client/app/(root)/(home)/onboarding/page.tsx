"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
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
  goals: string[];
  otherGoals: string[];
  healthConditions: string[];
  dietType: string;
}

export default function Component() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    goals: [],
    otherGoals: [],
    healthConditions: [],
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

  const healthConditions: Goal[] = [
    { id: "diabetes", label: "Diabetes", icon: Candy },
    { id: "heart-disease", label: "Heart Disease", icon: Heart },
    { id: "celiac", label: "Celiac Disease", icon: Wheat },
    { id: "none", label: "No Health Conditions", icon: Shield },
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

  const handleHealthConditionToggle = (conditionId: string) => {
    setFormData((prev) => {
      const array = prev.healthConditions;
      return {
        ...prev,
        healthConditions: array.includes(conditionId)
          ? array.filter((id) => id !== conditionId)
          : [...array, conditionId],
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
      router.push("/scan");
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-200 dark:from-gray-900 dark:to-gray-800 p-4">
      <Card className="w-full max-w-md bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-xl rounded-3xl overflow-hidden">
        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between mb-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`w-1/4 h-2 rounded-full ${
                    i <= step
                      ? "bg-gradient-to-r from-green-400 to-blue-500"
                      : "bg-gray-200 dark:bg-gray-700"
                  } ${i !== 4 ? "mr-1" : ""}`}
                />
              ))}
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center font-medium">
              Step {step} of 4
            </p>
          </div>

          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                What are your goals?
              </h2>
              <p className="text-center text-gray-600 dark:text-gray-300 text-sm">
                Select all that apply to you.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {goals.map((goal) => {
                  const Icon = goal.icon;
                  return (
                    <Card
                      key={goal.id}
                      className={`p-3 cursor-pointer transition-all hover:shadow-lg rounded-xl ${
                        formData.goals.includes(goal.id)
                          ? "bg-gradient-to-br from-green-400 to-blue-500 text-white"
                          : "bg-white/50 dark:bg-gray-700/50 hover:bg-white/80 dark:hover:bg-gray-700/80"
                      }`}
                      onClick={() => handleGoalToggle("goals", goal.id)}
                    >
                      <div className="flex flex-col items-center text-center gap-2">
                        <div
                          className={`p-2 rounded-full ${
                            formData.goals.includes(goal.id)
                              ? "bg-white/20"
                              : "bg-blue-100 dark:bg-blue-900/30"
                          }`}
                        >
                          <Icon
                            className={`w-5 h-5 ${
                              formData.goals.includes(goal.id)
                                ? "text-white"
                                : "text-blue-500 dark:text-blue-400"
                            }`}
                          />
                        </div>
                        <span className="text-xs font-medium">
                          {goal.label}
                        </span>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Do you have other goals?
              </h2>
              <p className="text-center text-gray-600 dark:text-gray-300 text-sm">
                Choose the ones that apply to you.
              </p>
              <div className="space-y-3">
                {otherGoals.map((goal) => {
                  const Icon = goal.icon;
                  return (
                    <Card
                      key={goal.id}
                      className={`p-4 cursor-pointer transition-all hover:shadow-lg rounded-xl flex items-center ${
                        formData.otherGoals.includes(goal.id)
                          ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                          : "bg-white/50 dark:bg-gray-700/50 hover:bg-white/80 dark:hover:bg-gray-700/80"
                      }`}
                      onClick={() => handleGoalToggle("otherGoals", goal.id)}
                    >
                      <div
                        className={`p-2 rounded-full mr-3 ${
                          formData.otherGoals.includes(goal.id)
                            ? "bg-white/20"
                            : "bg-purple-100 dark:bg-purple-900/30"
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 ${
                            formData.otherGoals.includes(goal.id)
                              ? "text-white"
                              : "text-purple-500 dark:text-purple-400"
                          }`}
                        />
                      </div>
                      <span className="text-sm font-medium">{goal.label}</span>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Do you have any health conditions?
              </h2>
              <p className="text-center text-gray-600 dark:text-gray-300 text-sm">
                Select any conditions that may affect your food intake.
              </p>
              <div className="space-y-3">
                {healthConditions.map((condition) => {
                  const Icon = condition.icon;
                  return (
                    <Card
                      key={condition.id}
                      className={`p-4 cursor-pointer transition-all hover:shadow-lg rounded-xl flex items-center ${
                        formData.healthConditions.includes(condition.id)
                          ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                          : "bg-white/50 dark:bg-gray-700/50 hover:bg-white/80 dark:hover:bg-gray-700/80"
                      }`}
                      onClick={() => handleHealthConditionToggle(condition.id)}
                    >
                      <div
                        className={`p-2 rounded-full mr-3 ${
                          formData.healthConditions.includes(condition.id)
                            ? "bg-white/20"
                            : "bg-purple-100 dark:bg-purple-900/30"
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 ${
                            formData.healthConditions.includes(condition.id)
                              ? "text-white"
                              : "text-purple-500 dark:text-purple-400"
                          }`}
                        />
                      </div>
                      <span className="text-sm font-medium">
                        {condition.label}
                      </span>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Got a diet you're sticking to?
              </h2>
              <p className="text-center text-gray-600 dark:text-gray-300 text-sm">
                Let's tweak your goals to suit your dietary preferences.
              </p>
              <div className="space-y-3">
                {dietTypes.map((diet) => {
                  const Icon = diet.icon;
                  return (
                    <Card
                      key={diet.id}
                      className={`p-4 cursor-pointer transition-all hover:shadow-lg rounded-xl ${
                        formData.dietType === diet.id
                          ? "bg-gradient-to-r from-green-400 to-blue-500 text-white"
                          : "bg-white/50 dark:bg-gray-700/50 hover:bg-white/80 dark:hover:bg-gray-700/80"
                      }`}
                      onClick={() => handleDietTypeSelect(diet.id)}
                    >
                      <div className="flex items-center">
                        <div
                          className={`p-2 rounded-full mr-3 ${
                            formData.dietType === diet.id
                              ? "bg-white/20"
                              : "bg-green-100 dark:bg-green-900/30"
                          }`}
                        >
                          <Icon
                            className={`w-5 h-5 ${
                              formData.dietType === diet.id
                                ? "text-white"
                                : "text-green-500 dark:text-green-400"
                            }`}
                          />
                        </div>
                        <div>
                          <div className="font-medium">{diet.label}</div>
                          <div className="text-sm opacity-80">
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
              className="rounded-full bg-white/50 dark:bg-gray-700/50 hover:bg-white/80 dark:hover:bg-gray-700/80"
            >
              Back
            </Button>
            <Button
              onClick={handleNext}
              className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
            >
              {step === 4 ? "Complete" : "Next"}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
