import Sidebar from "../Component/SideBar";

const AdminPage = () => {
  return (
    <div>
      <Sidebar />
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Main Content</h1>
      </div>
    </div>
  );
};

export default AdminPage;
