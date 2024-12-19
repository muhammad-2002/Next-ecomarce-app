import Link from "next/link";
import { usePathname } from "next/navigation";
import { GrTransaction } from "react-icons/gr";
import { IoAnalytics, IoSettings } from "react-icons/io5";
import { MdDashboard, MdManageAccounts } from "react-icons/md";
import { RiShoppingCartLine } from "react-icons/ri";
const menus = [
  {
    title: "Dashboard",
    icon: <MdDashboard></MdDashboard>,
    href: "/admin/dashboard",
  },
  {
    title: "Products",
    icon: <RiShoppingCartLine></RiShoppingCartLine>,
    href: "/admin/products",
  },
  {
    title: "Transaction",
    icon: <GrTransaction></GrTransaction>,
    href: "#",
  },
  {
    title: "Settings",
    icon: <IoSettings></IoSettings>,
    href: "#",
  },
  {
    title: "Manage",
    icon: <MdManageAccounts></MdManageAccounts>,
    href: "#",
  },
  {
    title: "Analytics",
    icon: <IoAnalytics></IoAnalytics>,
    href: "#",
  },
];
const Sidebar = () => {
  const pathName = usePathname();
  return (
    <div className="bg-white min-h-screen w-[300px] shrink-0 p-4">
      <div className="flex items-center gap-4">
        <img className="size-12 rounded-lg" src="/logo.webp" alt="logo"></img>
        <h2 className="text-[20px] font-semibold">The Brave Coders</h2>
      </div>
      <div className="mt-6 space-y-6">
        {menus.map((item) => (
          <Link
            href={item.href}
            key={item.title}
            className={`flex gap-2 items-center p-4 rounded-lg cursor-pointer hover:bg-pink-500 hover:text-white ${
              pathName === item.href ? "bg-pink text-white" : "bg-gray-200"
            } `}
          >
            <div className="text-[20px]">{item.icon}</div>
            <p>{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
