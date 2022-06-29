import { useState } from "react";
import { AdminContent, AdminSidebar, AdminTopbar, AdminTopbarMobile } from "./";

export default function WPLayout() {
	const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <AdminTopbar />
      <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="md:pl-40 flex flex-col flex-1">
        <AdminTopbarMobile callback={() => setSidebarOpen(true)} />
        <AdminContent />
      </div>
    </>
  );
}
