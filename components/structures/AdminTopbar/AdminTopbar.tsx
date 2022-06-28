import {
  AnnotationIcon,
  EyeIcon,
  LightningBoltIcon,
  PlusIcon,
  RefreshIcon,
  UserIcon,
} from "@heroicons/react/solid";

const navigation = [
  { name: "User's Blog", href: "#", icon: EyeIcon, current: true },
  { name: "6", href: "#", icon: RefreshIcon, current: false },
  { name: "0", href: "#", icon: AnnotationIcon, current: false },
  { name: "New", href: "#", icon: PlusIcon, current: false },
];

export default function AdminTopbar() {
  return (
    <div className="fixed z-10 bg-wp-dark h-8 w-full flex flex-col justify-center">
      <div className="flex items-center justify-between text-white text-wp-sm">
        <nav className="flex items-center text-white">
          <a
            href="#"
            className="cursor-pointer group flex items-center p-1.5 hover:bg-gray-700 hover:text-wp-blue"
          >
            <LightningBoltIcon className="text-gray-400 group-hover:text-wp-blue ml-1 flex-shrink-0 h-5 w-5" />
          </a>
          {navigation.map((item, id) => (
            <a
              key={id}
              href={item.href}
              className="cursor-pointer group flex items-center p-1.5 hover:bg-wp-middark hover:text-wp-blue"
            >
              <item.icon
                className="text-wp-gray group-hover:text-wp-blue mr-3 flex-shrink-0 h-5 w-5"
                aria-hidden="true"
              />
              <span>{item.name}</span>
            </a>
          ))}
        </nav>
        <div className="flex items-center">
          <a
            href="#"
            className="cursor-pointer group flex items-center p-1.5 hover:bg-gray-700 hover:text-wp-blue"
          >
            <span>Howdy, User</span>
            <UserIcon className="text-gray-400 group-hover:text-wp-blue ml-1 flex-shrink-0 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
