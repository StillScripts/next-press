import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  AdjustmentsIcon,
  AnnotationIcon,
  ArrowCircleLeftIcon,
  CogIcon,
  DocumentDuplicateIcon,
  DocumentTextIcon,
  HomeIcon,
  PhotographIcon,
  PuzzleIcon,
  SparklesIcon,
  UsersIcon,
  XIcon,
} from "@heroicons/react/solid";
import { classNames } from "../../../utils/common";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Posts", href: "#", icon: DocumentTextIcon, current: false },
  { name: "Media", href: "#", icon: PhotographIcon, current: false },
  { name: "Pages", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Comments", href: "#", icon: AnnotationIcon, current: false },
  { name: "Appearance", href: "#", icon: SparklesIcon, current: false },
  { name: "Plugins", href: "#", icon: PuzzleIcon, current: false },
  { name: "Users", href: "#", icon: UsersIcon, current: false },
  { name: "Tools", href: "#", icon: CogIcon, current: false },
  { name: "Settings", href: "#", icon: AdjustmentsIcon, current: false },
];

function SidebarLinks() {
  return (
    <nav className="mt-1 flex-1">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={classNames(
            "border-l-4 border-transparent text-white",
            item.current
              ? "bg-wp-blue hover:border-white"
              : "hover:text-wp-blue hover:border-wp-blue",
            "group flex items-center px-2 py-2 text-sm"
          )}
        >
          <item.icon
            className={classNames(
              item.current
                ? "text-gray-300"
                : "text-wp-gray group-hover:text-wp-blue",
              "mr-3 flex-shrink-0 h-5 w-5"
            )}
            aria-hidden="true"
          />
          <span>{item.name}</span>
        </a>
      ))}
      <a
        href="#"
        className={classNames(
          "border-l-4 border-transparent text-wp-gray text-wp-sm hover:text-wp-blue hover:border-wp-blue group flex items-center px-2 py-2"
        )}
      >
        <ArrowCircleLeftIcon className="text-wp-gray group-hover:text-wp-blue mr-3 flex-shrink-0 h-5 w-5" />
        <span>Collapse Menu</span>
      </a>
    </nav>
  );
}

interface AdminSidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}
export default function AdminSidebar({
  sidebarOpen,
  setSidebarOpen,
}: AdminSidebarProps) {
  return (
    <>
      {/** Drawer Sidebar on Mobile devices */}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 flex z-40 w-48">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex-1 flex flex-col w-40 bg-wp-dark">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="bg-wp-dark flex-1 md:w-40 h-0 pt-5 pb-4 overflow-y-auto">
                  <SidebarLinks />
                </div>
              </Dialog.Panel>
            </Transition.Child>
            <div className="flex-shrink-0 w-14">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      {/** Sidebar on Desktop devices */}
      <div className="pt-8 hidden md:flex md:w-40 md:flex-col md:fixed md:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0 bg-wp-dark">
          <div className="flex-1 flex flex-col pt-2 pb-4 overflow-y-auto">
            <SidebarLinks />
          </div>
        </div>
      </div>
    </>
  );
}
