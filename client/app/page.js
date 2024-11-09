"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-2">
        <div className="inline-flex items-center space-x-2">
          <p className="text-base">
            <span className="font-bold">Be</span>
            Healthy
          </p>
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="text-sm font-semibold">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <a
            href="#"
            className="group flex h-10 items-center justify-center rounded-md border border-orange-600 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 px-4 text-neutral-50 shadow-[inset_0_1px_0px_0px_#fdba74] active:[box-shadow:none]"
          >
            <span className="block group-active:[transform:translate3d(0,1px,0)]">
              Login
            </span>
          </a>
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="size-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black/5 dark:bg-gradient-to-b dark:from-neutral-800 dark:to-gray-800 dark:ring-gray-700/5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span className="font-bold">BeHealthy</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:text-white hover:dark:bg-white/10"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="size-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold "
                      >
                        <span className="ml-3 text-base font-medium text-gray-900 dark:text-white">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
                <a
                  href="#"
                  className="group flex h-10 items-center justify-center rounded-md border border-orange-600 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 px-4 text-neutral-50 shadow-[inset_0_1px_0px_0px_#fdba74] active:[box-shadow:none]"
                >
                  <span className="block group-active:[transform:translate3d(0,1px,0)]">
                    Login
                  </span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default page;
