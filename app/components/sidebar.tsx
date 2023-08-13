"use client"

import { useEffect, useState } from 'react';
import { CameraOff } from 'lucide-react';
import clsx from 'clsx';

import SidebarMenu from '@/app/components/sidebarMenu'
import useSidebar from '@/hooks/useSidebarState';

export const Sidebar = () => {
    const { isOpen, onClose } = useSidebar();
     const [mounted, setMounted] = useState(false);
     useEffect(() => {
       setMounted(true);
     }, []);

     if (!mounted) return <></>;

  return (
    <>
      <div
        className={clsx({
          "relative z-10 md:hidden": true,
          "transition-all ease-in-out duration-500": true,
          "opacity-100": isOpen,
          "opacity-0": !isOpen,
          "-z-10": !isOpen,
          "z-10": isOpen,
          "hidden": !isOpen
        })}
        style={{
          transition: "opacity 0.5s, display 1s"
        }}
        aria-labelledby="slide-over-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          className={clsx({
            "fixed bg-gray-500 bg-opacity-75 transition-all inset-0": true,
          })}
        ></div>

        <div
          className={clsx({
            "fixed overflow-hidden inset-0": true,
          })}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <div className="pointer-events-auto relative  max-w-md">
                <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-8 sm:-ml-10 sm:pr-4">
                  <CameraOff
                    type="button"
                    className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white "
                    onClick={() => onClose()}
                  >
                    <span className="absolute -inset-2.5"></span>
                    <span className="sr-only">Close panel</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </CameraOff>
                </div>

                <div className="flex h-full flex-col bg-black py-4 shadow-xl">
                  <div className="relative flex-1 px-4 sm:px-6">
                    <SidebarMenu />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
