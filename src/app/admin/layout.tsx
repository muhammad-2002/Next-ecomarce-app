"use client";

import Loader from "@/components/Admin-panel/Loader";
import Login from "@/components/Admin-panel/Login";
import Sidebar from "@/components/Admin-panel/Sidebar";
import { useAppSelector } from "@/redux/hooks";
import { useSession } from "next-auth/react";

const layout = ({ children }: { children: React.ReactNode }) => {
  const isLoading = useAppSelector((store) => store.loadingReducer);
  const { data: session } = useSession();
  if (!session?.user) {
    return <Login></Login>;
  }
  return (
    <>
      <div className="flex">
        {/* side bar */}
        <Sidebar></Sidebar>
        <div className="h-full w-full">
          {/* Navbar */}
          <div className="bg-gray-200 p-4 h-[calc(100vh-64px)]">{children}</div>
        </div>
      </div>
      {/* {isLoading && <Loader></Loader>} */}
    </>
  );
};

export default layout;
