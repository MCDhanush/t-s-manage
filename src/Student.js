import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { StudentList } from "./StudentList";

export function Student() {
  const navigate = useNavigate();

  const [students, setStudents] = useState([]);
  const aboutTea = () => {
    fetch(`https://64a1011e0079ce56e2dabc8a.mockapi.io/students`)
      .then((e) => e.json())
      .then((e) => setStudents(e));
  };
  useEffect(() => aboutTea(), []);

  const deletTeach = (id) => {
    fetch(`https://64a1011e0079ce56e2dabc8a.mockapi.io/students/${id}`, {
      method: "Delete",
    }).then((e) => aboutTea());
  };
  return (
    <>
      <div className="teacher-cont">
        {students.map((e) => (
          <StudentList
            id={e.id}
            key={e.id}
            teach={e}
            deletButton={
              <IconButton onClick={() => deletTeach(e.id)} aria-label="delete">
                <DeleteIcon color="error" />
              </IconButton>
            }
            editButton={
              <IconButton
                onClick={() => navigate(`/editstudent/${e.id}`)}
                aria-label="delete"
              >
                <EditNoteIcon color="secondary" />
              </IconButton>
            }
          />
        ))}
      </div>
    </>
  );
}
