"use client";

import { useState } from "react";
import { Menu, X, User, LogOut } from "lucide-react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const menuItems = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const page = () => {
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
              <a
                href="/api/auth/login"
                className="group flex h-10 items-center justify-center rounded-md border border-orange-600 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 px-4 text-neutral-50 shadow-[inset_0_1px_0px_0px_#fdba74] active:[box-shadow:none]"
              >
                <span className="block group-active:[transform:translate3d(0,1px,0)]">
                  Get started
                </span>
              </a>

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
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, isLoading } = useUser()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="w-full bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <Link href="/" className="text-xl font-bold text-primary">
            <span>Be</span>
            <span className="text-orange-500">Healthy</span>
          </Link>
        </div>
        <nav className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="text-sm font-semibold text-foreground hover:text-primary">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden lg:block">
          {isLoading ? (
            <Button disabled>Loading...</Button>
          ) : user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.picture} alt={user.name} />
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
                    <span className="text-xl font-bold text-primary">BeHealthy</span>
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
                    <Button disabled className="w-full">Loading...</Button>
                  ) : user ? (
                    <div className="space-y-4">
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/profile" className="flex items-center justify-center">
                          <User className="mr-2 h-4 w-4" />
                          <span>Profile</span>
                        </Link>
                      </Button>
                      <Button asChild variant="destructive" className="w-full">
                        <Link href="/api/auth/logout" className="flex items-center justify-center">
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
  )
}


export default page;
