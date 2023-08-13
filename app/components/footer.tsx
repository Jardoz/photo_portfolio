"use client"

import { Send } from "lucide-react";

export const Footer = () => {
  const onContact = () => {
    window.open("https://t.me/yaroslavoz", '_blank');
  };

  return (
    <>
      <footer className="bg-black w-full">
        <div className="mx-auto px-6 py-4">
          <div className="flex flex-col items-center justify-between sm:flex-row">
            <div className="md:w-70 flex flex-row justify-between">
              <div className="w-70">
                <a
                  href="https://www.buymeacoffee.com/yaroslavoz"
                  target="_blank"
                >
                  <img
                    src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                    className="max-w-150 h-8 w-36"
                    alt="Buy Me A Coffee"
                  />
                </a>
              </div>
              <span className="text-gray-300 text-xs ml-3">
                * donate for developer
              </span>
            </div>
            <div className="flex items-center cursor-pointer mt-3 sm:mt-auto" onClick={onContact}>
              <button className="bg-[#2AABEE] rounded-full p-1 mr-2">
                <Send size={16} />
              </button>
              yaroslavoz
            </div>
            <p className="mt-4 text-sm text-gray-300 sm:mt-0">
              © Copyright 2023. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
