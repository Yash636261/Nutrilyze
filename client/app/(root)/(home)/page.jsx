import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1 className="text-4xl font-bold text-green-600 mb-4">
        Welcome to BeHealthy
      </h1>
      <p className="text-lg text-gray-700 mb-6 text-center max-w-2xl">
        BeHealthy is a project that provides you with a guide to stay healthy by
        scanning your products and determining whether they are suitable for
        you, considering your diseases.
      </p>
      <Image
        src="/images/healthy-lifestyle.jpg"
        alt="Healthy Lifestyle"
        width={500}
        height={300}
        className="rounded-lg shadow-lg"
      />
    </div>
  );
}
