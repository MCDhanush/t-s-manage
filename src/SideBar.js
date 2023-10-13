import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export function SideBar() {
  const navigate = useNavigate();
  return (
    <div className="sideba-color">
      <ul
        className=" navbar-nav sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center">
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3"> Admin Mangement </div>
        </a>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <a className="nav-link sid-das">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <Button onClick={() => navigate("./")} color="inherit">
              Dashboard
            </Button>
          </a>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Interface</div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="fas fa-fw fa-cog"></i>
            <Button onClick={() => navigate("/teacher")} color="inherit">
              Teacher
            </Button>
          </a>
        </li>

        {/* <!-- Nav Item - Utilities Collapse Menu --> */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i className="fas fa-fw fa-wrench"></i>
            <Button color="inherit" onClick={() => navigate("/student")}>
              Student
            </Button>
          </a>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />
      </ul>
    </div>
  );
}
