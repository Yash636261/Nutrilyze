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

const page = () => {
  const { user, isLoading } = useUser();

  return (
    <div>
      <Header />
      <div className="relative isolate pt-14 sm:px-6 lg:px-8">
        <div className="absolute left-1/2 top-1/2 -z-50 h-32 w-[100px] -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-gradient-to-br from-orange-600 to-yellow-600 opacity-80 blur-[200px] md:w-[600px]" />
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
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
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Welcome to BeHealthy
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              BeHealthy is a project that provides you with a guide to stay
              healthy by scanning your products and determining whether they are
              suitable for you, considering your diseases.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {isLoading ? null : user ? (
                <Link
                  href="/onboarding"
                  className="group flex h-10 items-center justify-center rounded-md border border-orange-600 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 px-4 text-neutral-50 shadow-[inset_0_1px_0px_0px_#fdba74] active:[box-shadow:none]"
                >
                  <span className="block group-active:[transform:translate3d(0,1px,0)]">
                    Get started
                  </span>
                </Link>
              ) : (
                <Link
                  href="/api/auth/login"
                  className="group flex h-10 items-center justify-center rounded-md border border-orange-600 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 px-4 text-neutral-50 shadow-[inset_0_1px_0px_0px_#fdba74] active:[box-shadow:none]"
                >
                  <span className="block group-active:[transform:translate3d(0,1px,0)]">
                    Get started
                  </span>
                </Link>
              )}

              <a
                href="/api/auth/login"
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300"
              >
                Learn more <span aria-hidden="true"> → </span>
              </a>
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
                  href="/onboarding"
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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isLoading } = useUser();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <Link href="/" className="text-xl font-bold text-primary">
            <span>Be</span>
            <span className="text-orange-500">Healthy</span>
          </Link>
        </div>

        <div className="hidden lg:block">
          {isLoading ? null : user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full border"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={
                        user.picture ||
                        "https://res.cloudinary.com/dkawvablj/image/upload/v1725119468/Core/mwpxqnn5viel4zddmng7.jpg"
                      }
                      alt={user.name || "User's Image"}
                    />
                    <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/Profile" className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/api/auth/logout" className="flex items-center">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild>
              <Link href="/api/auth/login">Log in</Link>
            </Button>
          )}
        </div>
        <div className="lg:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-background shadow-lg ring-1 ring-black/5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span className="text-xl font-bold text-primary">
                      BeHealthy
                    </span>
                  </div>
                  <div className="-mr-2">
                    <Button variant="ghost" size="icon" onClick={toggleMenu}>
                      <X className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center rounded-md p-3 text-sm font-semibold text-foreground hover:bg-muted"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
                <div className="mt-6">
                  {isLoading ? (
                    <Button disabled className="w-full">
                      Loading...
                    </Button>
                  ) : user ? (
                    <div className="space-y-4">
                      <Button asChild variant="outline" className="w-full">
                        <Link
                          href="/profile"
                          className="flex items-center justify-center"
                        >
                          <User className="mr-2 h-4 w-4" />
                          <span>Profile</span>
                        </Link>
                      </Button>
                      <Button asChild variant="destructive" className="w-full">
                        <Link
                          href="/api/auth/logout"
                          className="flex items-center justify-center"
                        >
                          <LogOut className="mr-2 h-4 w-4" />
                          <span>Log out</span>
                        </Link>
                      </Button>
                    </div>
                  ) : (
                    <Button asChild className="w-full">
                      <Link href="/api/auth/login">Log in</Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default page;