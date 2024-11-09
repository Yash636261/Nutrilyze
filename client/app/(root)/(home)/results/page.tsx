import { cache, Suspense } from "react";
import { notFound } from "next/navigation";
import ProductDetails from "@/components/shared/ProductDetails";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import testData from "@/test.json";
export const dynamic = "force-dynamic";

export default async function ProductPage({
  searchParams,
}: {
  searchParams: { barcode: string };
}) {
  let productData;
  console.log("params", searchParams);
  try {
    // const data = await fetch(
    //   `https://world.openfoodfacts.net/api/v2/product/${searchParams.barcode}`,
    //   { cache: "no-store" }
    // );
    // const data = await fetch("test.json");

    productData = {
      code: "8902080000227",
      _id: "8902080000227",
      allergens: "",
      allergens_from_ingredients: "",
      brands: "Sting",
      food_groups: "en:sweetened-beverages",
      id: "8902080000227",
      image_front_url:
        "https://images.openfoodfacts.org/images/products/890/208/000/0227/front_en.36.400.jpg",
      image_ingredients_url:
        "https://images.openfoodfacts.org/images/products/890/208/000/0227/ingredients_en.38.400.jpg",
      image_nutrition_url:
        "https://images.openfoodfacts.org/images/products/890/208/000/0227/nutrition_en.40.400.jpg",
      image_packaging_url:
        "https://images.openfoodfacts.org/images/products/890/208/000/0227/packaging_en.42.400.jpg",
      image_url:
        "https://images.openfoodfacts.org/images/products/890/208/000/0227/front_en.36.400.jpg",
      ingredients: [
        {
          ciqual_food_code: "18066",
          id: "en:carbonated-water",
          is_in_taxonomy: 1,
          percent_estimate: 86.22,
          percent_max: 99.85,
          percent_min: 72.59,
          text: "CARBONATED WATER",
          vegan: "yes",
          vegetarian: "yes",
        },
        {
          ciqual_proxy_food_code: "31016",
          id: "en:sugar",
          is_in_taxonomy: 1,
          percent_estimate: 3.415,
          percent_max: 6.8,
          percent_min: 0.03,
          text: "SUGAR",
          vegan: "yes",
          vegetarian: "yes",
        },
        {
          id: "en:acidity-regulator",
          ingredients: [
            {
              id: "en:330",
              is_in_taxonomy: 0,
              percent_estimate: 1.7075,
              percent_max: 6.8,
              percent_min: 0,
              text: "330",
            },
            {
              id: "en:331",
              is_in_taxonomy: 0,
              percent_estimate: 1.7075,
              percent_max: 3.4,
              percent_min: 0,
              text: "331",
            },
          ],
          is_in_taxonomy: 1,
          percent_estimate: 3.415,
          percent_max: 6.8,
          percent_min: 0.03,
          text: "ACIDITY REGULATORS",
        },
        {
          id: "en:sequesterants",
          ingredients: [
            {
              id: "en:452",
              ingredients: [
                {
                  id: "en:1",
                  is_in_taxonomy: 0,
                  percent_estimate: 1.7075,
                  percent_max: 6.8,
                  percent_min: 0,
                  text: "1",
                },
              ],
              is_in_taxonomy: 0,
              percent_estimate: 1.7075,
              percent_max: 6.8,
              percent_min: 0,
              text: "452",
            },
            {
              id: "en:385",
              is_in_taxonomy: 0,
              percent_estimate: 1.7075,
              percent_max: 3.4,
              percent_min: 0,
              text: "385",
            },
          ],
          is_in_taxonomy: 0,
          percent_estimate: 3.415,
          percent_max: 6.8,
          percent_min: 0.03,
          text: "SEQUESTERANTS",
        },
        {
          id: "en:taurine",
          is_in_taxonomy: 1,
          percent_estimate: 1.78249999999999,
          percent_max: 6.8,
          percent_min: 0.03,
          text: "TAURINE",
          vegan: "maybe",
          vegetarian: "maybe",
        },
        {
          id: "en:caffeine",
          is_in_taxonomy: 1,
          percent: 0.03,
          percent_estimate: 0.03,
          percent_max: 0.03,
          percent_min: 0.03,
          text: "CAFFEINE",
          vegan: "yes",
          vegetarian: "yes",
        },
        {
          id: "en:preservative",
          ingredients: [
            {
              id: "en:211",
              is_in_taxonomy: 0,
              percent_estimate: 0.0075,
              percent_max: 0.03,
              percent_min: 0,
              text: "211",
            },
            {
              id: "en:202",
              is_in_taxonomy: 0,
              percent_estimate: 0.0075,
              percent_max: 0.03,
              percent_min: 0,
              text: "202",
            },
          ],
          is_in_taxonomy: 1,
          percent_estimate: 0.015,
          percent_max: 0.03,
          percent_min: 0,
          text: "PRESERVATIVES",
        },
        {
          id: "en:sweetener",
          ingredients: [
            {
              id: "en:955",
              is_in_taxonomy: 0,
              percent_estimate: 0.0075,
              percent_max: 0.03,
              percent_min: 0,
              text: "955",
            },
            {
              id: "en:950",
              is_in_taxonomy: 0,
              percent_estimate: 0.0075,
              percent_max: 0.03,
              percent_min: 0,
              text: "950",
            },
          ],
          is_in_taxonomy: 1,
          percent_estimate: 0.015,
          percent_max: 0.03,
          percent_min: 0,
          text: "SWEETENERS",
        },
        {
          id: "en:inositol",
          is_in_taxonomy: 1,
          percent_estimate: 0.015,
          percent_max: 0.03,
          percent_min: 0,
          text: "INOSITOL",
          vegan: "yes",
          vegetarian: "yes",
        },
        {
          id: "en:vitamins-premix",
          is_in_taxonomy: 0,
          percent_estimate: 0.015,
          percent_max: 0.03,
          percent_min: 0,
          text: "VITAMINS PREMIX",
        },
        {
          id: "en:contains-permitted-synthetic-food-colour",
          ingredients: [
            {
              id: "en:129",
              is_in_taxonomy: 0,
              percent_estimate: 0.015,
              percent_max: 0.03,
              percent_min: 0,
              text: "129",
            },
          ],
          is_in_taxonomy: 0,
          percent_estimate: 0.015,
          percent_max: 0.03,
          percent_min: 0,
          text: "CONTAINS PERMITTED SYNTHETIC FOOD COLOUR",
        },
        {
          id: "en:flavouring",
          ingredients: [
            {
              id: "en:natural-flavouring",
              is_in_taxonomy: 1,
              percent_estimate: 0.015,
              percent_max: 0.03,
              percent_min: 0,
              text: "NATURAL FLAVOURING",
              vegan: "maybe",
              vegetarian: "maybe",
            },
            {
              id: "en:nature-identical-flavouring",
              is_in_taxonomy: 1,
              percent_estimate: 1.63249999999999,
              percent_max: 0.03,
              percent_min: 0,
              text: "NATURE IDENTICAL FLAVOURING SUBSTANCES",
              vegan: "maybe",
              vegetarian: "maybe",
            },
          ],
          is_in_taxonomy: 1,
          percent_estimate: 1.64749999999999,
          percent_max: 0.03,
          percent_min: 0,
          text: "ADDED FLAVOUR",
          vegan: "maybe",
          vegetarian: "maybe",
        },
      ],
      nutrient_levels: {
        fat: "low",
        salt: "low",
        "saturated-fat": "low",
        sugars: "high",
      },
      nutriments: {
        carbohydrates: 7,
        carbohydrates_100g: 7,
        carbohydrates_unit: "g",
        carbohydrates_value: 7,
        energy: 117,
        "energy-kcal": 28,
        "energy-kcal_100g": 28,
        "energy-kcal_unit": "kcal",
        "energy-kcal_value": 28,
        "energy-kcal_value_computed": 28,
        energy_100g: 117,
        energy_unit: "kcal",
        energy_value: 28,
        fat: 0,
        fat_100g: 0,
        fat_unit: "g",
        fat_value: 0,
        "fruits-vegetables-legumes-estimate-from-ingredients_100g": 0,
        "fruits-vegetables-legumes-estimate-from-ingredients_serving": 0,
        "fruits-vegetables-nuts-estimate-from-ingredients_100g": 0,
        "fruits-vegetables-nuts-estimate-from-ingredients_serving": 0,
        "nova-group": 4,
        "nova-group_100g": 4,
        "nova-group_serving": 4,
        "nutrition-score-fr": 9,
        "nutrition-score-fr_100g": 9,
        proteins: 0,
        proteins_100g: 0,
        proteins_unit: "g",
        proteins_value: 0,
        salt: 0.1025,
        salt_100g: 0.1025,
        salt_unit: "mg",
        salt_value: 102.5,
        "saturated-fat": 0,
        "saturated-fat_100g": 0,
        "saturated-fat_unit": "g",
        "saturated-fat_value": 0,
        sodium: 0.041,
        sodium_100g: 0.041,
        sodium_unit: "mg",
        sodium_value: 41,
        sugars: 6.8,
        sugars_100g: 6.8,
        sugars_unit: "g",
        sugars_value: 6.8,
      },
      product_name: "Sting",
      product_name_en: "Sting",
      selected_images: {
        front: {
          display: {
            en: "https://images.openfoodfacts.org/images/products/890/208/000/0227/front_en.36.400.jpg",
          },
          small: {
            en: "https://images.openfoodfacts.org/images/products/890/208/000/0227/front_en.36.200.jpg",
          },
          thumb: {
            en: "https://images.openfoodfacts.org/images/products/890/208/000/0227/front_en.36.100.jpg",
          },
        },
        ingredients: {
          display: {
            en: "https://images.openfoodfacts.org/images/products/890/208/000/0227/ingredients_en.38.400.jpg",
            hi: "https://images.openfoodfacts.org/images/products/890/208/000/0227/ingredients_hi.22.400.jpg",
          },
          small: {
            en: "https://images.openfoodfacts.org/images/products/890/208/000/0227/ingredients_en.38.200.jpg",
            hi: "https://images.openfoodfacts.org/images/products/890/208/000/0227/ingredients_hi.22.200.jpg",
          },
          thumb: {
            en: "https://images.openfoodfacts.org/images/products/890/208/000/0227/ingredients_en.38.100.jpg",
            hi: "https://images.openfoodfacts.org/images/products/890/208/000/0227/ingredients_hi.22.100.jpg",
          },
        },
        nutrition: {
          display: {
            en: "https://images.openfoodfacts.org/images/products/890/208/000/0227/nutrition_en.40.400.jpg",
          },
          small: {
            en: "https://images.openfoodfacts.org/images/products/890/208/000/0227/nutrition_en.40.200.jpg",
          },
          thumb: {
            en: "https://images.openfoodfacts.org/images/products/890/208/000/0227/nutrition_en.40.100.jpg",
          },
        },
        packaging: {
          display: {
            en: "https://images.openfoodfacts.org/images/products/890/208/000/0227/packaging_en.42.400.jpg",
          },
          small: {
            en: "https://images.openfoodfacts.org/images/products/890/208/000/0227/packaging_en.42.200.jpg",
          },
          thumb: {
            en: "https://images.openfoodfacts.org/images/products/890/208/000/0227/packaging_en.42.100.jpg",
          },
        },
      },
    };
    console.log("Product data:", productData);
  } catch (error) {
    console.error("Error fetching product data:", error);
    console.log("Product not found");
  }

  if (!productData) {
    console.log("Product not found");
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Suspense fallback={<LoadingSpinner />}>
        {productData && <ProductDetails product={productData} />}
      </Suspense>
    </div>
  );
}
