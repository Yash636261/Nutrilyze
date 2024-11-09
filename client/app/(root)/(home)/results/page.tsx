import { cache, Suspense } from "react";
import { notFound } from "next/navigation";
import ProductDetails from "@/components/shared/ProductDetails";
import LoadingSpinner from "@/components/shared/LoadingSpinner";

export const dynamic = "force-dynamic";

export default async function ProductPage({
  searchParams,
}: {
  searchParams: { barcode: string };
}) {
  let productData;
console.log("params", searchParams);
  try {
    const data = await fetch(
      `https://world.openfoodfacts.net/api/v2/product/${searchParams.barcode}`,
      { cache: "no-store" }
    );

    productData = await data.json();
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
        {productData && <ProductDetails product={productData?.product} />}
      </Suspense>
    </div>
  );
}
