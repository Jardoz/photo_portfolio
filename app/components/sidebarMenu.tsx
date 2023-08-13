import { Banknote, Contact, GalleryThumbnails, List } from "lucide-react";

import useSidebar from "@/hooks/useSidebarState";

export default function Sidebar() {
 const { onClose } = useSidebar();
 

  return (
    <div className="flex flex-col h-screen p-3 bg-black shadow">
      <div className="space-y-3">
        <div className="flex items-center">
          <h2 className="text-xl font-bold">Меню</h2>
        </div>
        <div className="flex">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="rounded-sm" onClick={onClose}>
              <a
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span>Головна</span>
              </a>
            </li>
            <li className="rounded-sm" onClick={onClose}>
              <a
                href="#gallery"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <GalleryThumbnails />
                <span>Галерея</span>
              </a>
            </li>
            <li className="rounded-sm" onClick={onClose}>
              <a
                href="#services"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <List />
                <span>Послуги</span>
              </a>
            </li>
            <li className="rounded-sm" onClick={onClose}>
              <a
                href="#pricing"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <Banknote />
                <span>Прайс</span>
              </a>
            </li>
            <li className="rounded-sm" onClick={onClose}>
              <a
                href="#contacts"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <Contact />
                <span>Контакти</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
