"use client";

import { Card } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { ArrowLeft, Heart, Share2, X, Check, Info } from "lucide-react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../../components/ui/tooltip";

export default function Component() {
  const nutritionScore = 8;
  const maxScore = 10;

  const nutritionPreferences = [
    { id: "vegan", label: "Vegan", allowed: false, icon: "🌱" },
    { id: "vegetarian", label: "Vegetarian", allowed: true, icon: "🥬" },
    { id: "gluten-free", label: "Gluten-Free", allowed: false, icon: "🌾" },
    {
      id: "lactose-free",
      label: "Free of Lactose",
      allowed: false,
      icon: "🥛",
    },
  ];

  const nutritionLevels = [
    {
      id: "fat",
      label: "Fat",
      level: "Medium",
      icon: "🔥",
      color: "bg-yellow-500",
    },
    {
      id: "saturated-fat",
      label: "Saturated Fat",
      level: "Low",
      icon: "💧",
      color: "bg-green-500",
    },
    {
      id: "sugar",
      label: "Sugar",
      level: "Low",
      icon: "🍯",
      color: "bg-green-500",
    },
    {
      id: "salt",
      label: "Salt",
      level: "Medium",
      icon: "🧂",
      color: "bg-yellow-500",
    },
    {
      id: "protein",
      label: "Protein",
      level: "High",
      icon: "🥩",
      color: "bg-green-500",
    },
  ];

  const nutriScoreColors = {
    A: "bg-green-500",
    B: "bg-lime-500",
    C: "bg-yellow-500",
    D: "bg-orange-500",
    E: "bg-red-500",
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 ">
      <div className=" bg-white dark:bg-gray-800 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 lg:p-6 border-b dark:border-gray-700">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Share2 className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <div className="lg:flex">
          {/* Left Column */}
          <div className="lg:w-1/2 p-4 lg:p-6 lg:border-r dark:border-gray-700">
            {/* Product Info */}
            <div className="flex gap-4 items-start">
              <Image
                src="/placeholder.svg"
                alt="Product Image"
                width={150}
                height={150}
                className="rounded-lg"
              />
              <div>
                <h1 className="text-2xl font-semibold dark:text-white">
                  Lay's Potato Chips, Jalapeno Flavored, Kettle Cooked 2.5 Oz
                </h1>
                <p className="text-gray-500 dark:text-gray-400">Lay's</p>
              </div>
            </div>

            {/* Nutri-Score */}
            <div className="mt-8">
              <p className="text-sm font-medium mb-2 dark:text-gray-300">
                NUTRI-SCORE
              </p>
              <div className="flex gap-1">
                {["A", "B", "C", "D", "E"].map((grade) => (
                  <div
                    key={grade}
                    className={`flex-1 h-10 rounded-md flex items-center justify-center text-white font-bold ${
                      grade === "A"
                        ? nutriScoreColors[grade]
                        : "bg-gray-200 dark:bg-gray-700"
                    }`}
                  >
                    {grade}
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
                      <span className="text-2xl">{pref.icon}</span>
                      <span className="font-medium dark:text-gray-200">
                        {pref.label}
                      </span>
                    </div>
                    {pref.allowed ? (
                      <Check className="h-6 w-6 text-green-500" />
                    ) : (
                      <X className="h-6 w-6 text-red-500" />
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
                      <span className="text-2xl">{level.icon}</span>
                      <span className="font-medium dark:text-gray-200">
                        {level.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600 dark:text-gray-300">
                        {level.level}
                      </span>
                      <div className={`w-4 h-4 rounded-full ${level.color}`} />
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
                    <Info className="h-5 w-5" />
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
    </div>
  );
}
