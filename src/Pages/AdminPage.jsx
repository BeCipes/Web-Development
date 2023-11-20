import Sidebar from "../Component/SideBar";
import Dropdown from "../Component/admindropdown";
import Tes from "../Component/Tes";
const AdminPage = () => {
  return (
    <div className="flex-column">
      <Sidebar />
      <Dropdown/>
      <Tes/>
    </div>
  );
};

export default AdminPage;
