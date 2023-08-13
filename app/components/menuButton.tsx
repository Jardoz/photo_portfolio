"use client";

import clsx from "clsx";
import { Camera } from "lucide-react";
import useSidebar from "@/hooks/useSidebarState";

export const MenuButton = () => {
  const { isOpen, onOpen } = useSidebar();

  return (
    <>
      <div
        className={clsx({
          "md:hidden": true,
          "pointer-events-auto ": true,
          "transform transition ease-in-out duration-500 sm:duration-700": true,
          "hidden": isOpen
        })}
      >
          <Camera
            className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => onOpen()}
          />
      </div>
    </>
  );
};
