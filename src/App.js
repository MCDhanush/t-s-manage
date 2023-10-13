import "./App.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Route,
  Routes,
  Link,
  useRoutes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { Home } from "./Home";
// import { Teacher } from './Teacher';
import { SideBar } from "./SideBar";
import Paper from "@mui/material/Paper";
import { Formik } from "formik";
import { AddTeacher } from "./AddTeacher";
import { AddStudent } from "./AddStudent";
import { EditTeacher } from "./EditTeacher";
import { EditStudent } from "./EditStudent";
import { Teacher } from "./Teacher";
import { AddPeople } from "./AddPeople";
import { Student } from "./Student";

function App() {
  const navigate = useNavigate();
  return (
    <div id="wrapper" className="App">
      <div position="static">
        <SideBar position="static" />
      </div>
      <div id="content-wrapper" className="d-flex flex-column">
        <AppBar position="static">
          <Paper elevation={0} />
          <Toolbar>
            <Button onClick={() => navigate("/addpeople")} color="inherit">
              Add People
            </Button>
          </Toolbar>
        </AppBar>
        <section className="section-rou">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/student" element={<Student />} />
            <Route path="/addpeople" element={<AddPeople />} />
            <Route path="/addteacher" element={<AddTeacher />} />
            <Route path="/addstudent" element={<AddStudent />} />
            <Route path="/editteacher/:id" element={<EditTeacher />} />
            <Route path="/editstudent/:id" element={<EditStudent />} />
          </Routes>
        </section>
      </div>
    </div>
  );
}

export default App;
