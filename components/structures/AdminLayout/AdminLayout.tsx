import AdminTopbar from "./AdminTopbar";
import AdminSidebar from "./AdminSidebar";

export default function AdminLayout() {
  return (
    <div className="h-screen bg-gray-200">
      <AdminTopbar />
      <div className="h-full w-64">
        <AdminSidebar />
      </div>
    </div>
  );
}
