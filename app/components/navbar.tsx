"use client";

import clsx from "clsx";

import { MenuButton } from "./menuButton";
import { useScrollPosition } from "@/hooks/useScrollPosition";

export const NavBar = () => {
  const scrollPosition = useScrollPosition();
  return (
    <>
      <div
        className={clsx(
          "flex flex-wrap place-items-center overflow-hidden sticky top-0 z-10 transition-opacity",
          scrollPosition > 0 ? "opacity-50" : "opacity-100"
        )}
      >
        <section className="relative mx-auto w-full">
          {/* <!-- navbar --> */}
          <nav className="flex md:justify-between  bg-black text-white md:w-screen w-full relative">
            <img
              className="h-20 w-40 md:ml-20 ml-8 my-1"
              src="logo.png"
              alt="logo"
            />

            <div className="md:container px-5 xl:px-12 py-6 flex w-full justify-end md:justify-between items-center mx-auto">
              <MenuButton />
              {/* <!-- Nav Links --> */}
              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-10 lg:space-x-20">
                <li>
                  <a
                    className="hover:text-white text-gray-400 text-xl active:text-2xl"
                    href="#"
                  >
                    Головна
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white text-gray-400 text-xl active:text-2xl"
                    href="#gallery"
                  >
                    Галерея
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white text-gray-400 text-xl active:text-2xl"
                    href="#services"
                  >
                    Додатково
                  </a>
                </li>
                <li>
                  <a
                    className="hhover:text-white text-gray-400 text-xl active:text-2xl"
                    href="#pricing"
                  >
                    Прайс
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white text-gray-400 text-xl active:text-2xl"
                    href="#contacts"
                  >
                    Контакти
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </section>
      </div>
    </>
  );
};
