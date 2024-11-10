"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface NutrimentsProps {
  nutriments: {
    carbohydrates: number;
    fat: number;
    proteins: number;
    energy: number;
    "energy-kcal": number;
    [key: string]: number;
  };
}

export default function NutritionChart({ nutriments }: NutrimentsProps) {
  console.warn("NutritionChart", nutriments);
  console.warn(nutriments);
  // Calculate total macros for percentages
  const totalMacros =
    nutriments.carbohydrates + nutriments.fat + nutriments.proteins;
  const fatPercentage = Math.round((nutriments.fat / totalMacros) * 100) || 0;
  const carbsPercentage =
    Math.round((nutriments.carbohydrates / totalMacros) * 100) || 0;
  const proteinPercentage =
    Math.round((nutriments.proteins / totalMacros) * 100) || 0;

  return (
    <Card className="p-6">
      <div className="space-y-6">
        {/* Calories Circle */}
        <div className="relative w-48 h-48 mx-auto">
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className="text-3xl font-bold">
              {nutriments["energy-kcal"]}
            </span>
            <span className="text-sm text-muted-foreground">Calories</span>
          </div>
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="96"
              cy="96"
              r="88"
              className="stroke-current stroke-[8]"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${proteinPercentage * 5.52} ${
                552 - proteinPercentage * 5.52
              }`}
              strokeDashoffset="138"
              style={{ stroke: "rgb(34, 197, 94)" }}
            />
            <circle
              cx="96"
              cy="96"
              r="88"
              className="stroke-current stroke-[8]"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${carbsPercentage * 5.52} ${
                552 - carbsPercentage * 5.52
              }`}
              strokeDashoffset={552 - proteinPercentage * 5.52 + 138}
              style={{ stroke: "rgb(251, 146, 60)" }}
            />
            <circle
              cx="96"
              cy="96"
              r="88"
              className="stroke-current stroke-[8]"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${fatPercentage * 5.52} ${
                552 - fatPercentage * 5.52
              }`}
              strokeDashoffset={
                552 - (proteinPercentage + carbsPercentage) * 5.52 + 138
              }
              style={{ stroke: "rgb(239, 68, 68)" }}
            />
          </svg>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <span>{fatPercentage}% Fat</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-400" />
            <span>{carbsPercentage}% Carbs</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span>{proteinPercentage}% Protein</span>
          </div>
        </div>

        {/* Macronutrient Details */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-muted p-3 rounded-lg">
            <div className="font-semibold text-red-500">Fat</div>
            <div>{nutriments.fat}g</div>
          </div>
          <div className="bg-muted p-3 rounded-lg">
            <div className="font-semibold text-orange-400">Carbs</div>
            <div>{nutriments.carbohydrates}g</div>
          </div>
          <div className="bg-muted p-3 rounded-lg">
            <div className="font-semibold text-green-500">Protein</div>
            <div>{nutriments.proteins}g</div>
          </div>
        </div>
      </div>
    </Card>
  );
}
