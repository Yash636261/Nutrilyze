"use client";

import { useState } from "react";
import { Menu, X, User, LogOut } from "lucide-react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FAQ from "@/components/shared/FAQ";
import Footer from "@/components/shared/Footer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Story from "@/components/shared/Story";

const menuItems = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

import { useEffect } from "react";
import localForage from "localforage";
import Image from "next/image";
import { useRouter } from "next/navigation";
const images = ["/Images/img5.jpg", "/Images/img2.jpg", "/Images/img7.jpg"];

const page = () => {
  const { user, isLoading } = useUser();
  const [hasProfile, setHasProfile] = useState<boolean | null>(null);
  const router = useRouter();

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    async function checkUserProfile() {
      try {
        const userProfileData = await localForage.getItem("userProfileData");
        setHasProfile(!!userProfileData);
      } catch (error) {
        console.error("Error checking user profile:", error);
        setHasProfile(false);
      }
    }

    if (user) {
      checkUserProfile();
    }
  }, [user]);

  if (isLoading || hasProfile === null) {
    return null; // or a loading spinner
  }
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (user) {
      if (hasProfile) {
        router.push("/scan");
      } else {
        router.push("/onboarding");
      }
    } else {
      router.push("/api/auth/login");
    }
  };
  return (
    <div>
      <div className="relative isolate pt-14 sm:px-6 lg:px-8">
        <div className="absolute left-1/2 top-1/2 -z-50 h-32 w-[100px] -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-gradient-to-br from-orange-600 to-yellow-600 opacity-80 blur-[200px] md:w-[600px]" />
        <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 lg:pr-8">
              <div className="hidden sm:mb-8 sm:flex">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:text-gray-300 dark:ring-gray-300/10 dark:hover:ring-gray-300/20">
                  We are excited to share our latest updates.{" "}
                  <a
                    href="#"
                    className="font-semibold text-orange-600 dark:text-orange-400"
                  >
                    <span aria-hidden="true" className="absolute inset-0" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
              <div className="text-left">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                  Welcome to Nutrilyze
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  Nutrilyze is a project that provides you with a guide to stay
                  healthy by scanning your products and determining whether they
                  are suitable for you, considering your diseases.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href={
                      user
                        ? hasProfile
                          ? "/scan"
                          : "/onboarding"
                        : "/api/auth/login"
                    }
                    onClick={handleClick}
                    className="group flex h-10 items-center justify-center rounded-md border border-orange-600 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 px-4 text-neutral-50 shadow-[inset_0_1px_0px_0px_#fdba74] active:[box-shadow:none]"
                  >
                    <span className="block group-active:[transform:translate3d(0,1px,0)]">
                      Get started
                    </span>
                  </Link>

                  <a
                    href="/api/auth/login"
                    className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300"
                  >
                    Learn more <span aria-hidden="true"> → </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 mt-10 lg:mt-0">
              <div className="relative w-full h-[400px] sm:h-[500px] rounded-lg overflow-hidden">
                {images.map((src, index) => (
                  <Image
                    key={src}
                    src={src}
                    alt={`Product ${index + 1}`}
                    fill
                    className={`object-cover transition-opacity duration-1000 ${
                      index === currentImage ? "opacity-100" : "opacity-0"
                    }`}
                    priority={index === 0}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Story />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

const CTA = () => {
  const { user, isLoading } = useUser();

  return (
    <section className="relative flex flex-col items-center overflow-hidden py-20 ">
      <span className="pointer-events-none absolute top-0 block aspect-square w-[250%] rounded-full shadow-[0px_0px_16px_0px_rgba(0,0,0,0.40)_inset,0px_0px_80px_0px_rgba(0,0,0,0.6)_inset,0px_0px_160px_0px_rgba(0,0,0,0.2)_inset] dark:shadow-[0px_0px_16px_0px_rgba(255,255,255,0.40)_inset,0px_0px_80px_0px_rgba(255,255,255,0.6)_inset,0px_0px_160px_0px_rgba(255,255,255,0.2)_inset]" />
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="mx-auto flex flex-col items-center pt-10 text-center lg:max-w-2xl">
            <h2 className="max-w-md text-balance text-3xl font-bold leading-tight sm:max-w-2xl sm:text-4xl lg:max-w-3xl lg:text-5xl xl:max-w-4xl">
              take a step towards a{" "}
              <span className="text-green-500"> healthier</span> life
            </h2>
            <div className="mt-8 inline-flex items-center gap-2 sm:gap-3 lg:mt-8">
              {isLoading ? null : user ? (
                <Link
                  href="/scan"
                  className="group h-10 select-none rounded-lg bg-blue-600 px-4 text-sm leading-8 text-zinc-50 shadow-[0_-1px_0_1px_#1e3a8a_inset,0_0_0_1px_#1d4ed8_inset,0_0.5px_0_1.5px_#60a5fa_inset] hover:bg-blue-700 active:bg-blue-800 active:shadow-[-1px_0px_1px_0px_rgba(0,0,0,.2)_inset,1px_0px_1px_0px_rgba(0,0,0,.2)_inset,0px_0.125rem_0px_0px_rgba(0,0,0,.6)_inset]"
                >
                  <span className="block group-active:[transform:translate3d(0,1px,0)]">
                    Get started
                  </span>
                </Link>
              ) : (
                <Link
                  href="/api/auth/login"
                  className="group h-10 select-none rounded-lg bg-blue-600 px-4 text-sm leading-8 text-zinc-50 shadow-[0_-1px_0_1px_#1e3a8a_inset,0_0_0_1px_#1d4ed8_inset,0_0.5px_0_1.5px_#60a5fa_inset] hover:bg-blue-700 active:bg-blue-800 active:shadow-[-1px_0px_1px_0px_rgba(0,0,0,.2)_inset,1px_0px_1px_0px_rgba(0,0,0,.2)_inset,0px_0.125rem_0px_0px_rgba(0,0,0,.6)_inset]"
                >
                  <span className="block group-active:[transform:translate3d(0,1px,0)]">
                    Get started
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
