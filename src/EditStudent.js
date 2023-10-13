import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@mui/material/TextField";

const StudentValidatOnSchema = yup.object({
  name: yup.string().required("plzz name"),
  age: yup.number().required("fill age component"),
  Class: yup
    .string()
    .required("Tell something about this person")
    .min(4, "min 4 character"),
  avatar: yup.string().required("plzz put valid URl").min(4, "min 4 character"),
});

export function EditStudent() {
  const { id } = useParams();
  const [students, setStudents] = useState(null);
  useEffect(() => {
    fetch(`https://64a1011e0079ce56e2dabc8a.mockapi.io/students/${id}`)
      .then((e) => e.json())
      .then((stu) => setStudents(stu));
  }, []);
  return students ? <EditStudentForm students={students} /> : "Wait loading";
}
function EditStudentForm({ students }) {
  const { handleBlur, handleChange, handleSubmit, values, touched, errors } =
    useFormik({
      initialValues: {
        name: students.name,
        age: students.age,
        Class: students.Class,
        avatar: students.avatar,
      },
      validationSchema: StudentValidatOnSchema,
      onSubmit: (newStud) => {
        console.log("Teacher added", newStud);
        aboutStud(newStud);
      },
    });

  const navigate = useNavigate();
  const aboutStud = (newStud) => {
    fetch(
      `https://64a1011e0079ce56e2dabc8a.mockapi.io/students/${students.id}`,
      {
        method: "PUT",
        body: JSON.stringify(newStud),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then(() => navigate("/student"))
      .catch((err) => console.log("Error-occured", err));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="add-teach">
        <TextField
          label="Name"
          variant="outlined"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && errors.name}
          helperText={touched.name && errors.name ? errors.name : null}
        />
        <TextField
          name="age"
          onChange={handleChange}
          value={values.age}
          error={touched.age && errors.age}
          helperText={touched.age && errors.age ? errors.age : null}
          onBlur={handleBlur}
          label="Age"
          variant="outlined"
          type="text"
        />
        <TextField
          name="Class"
          onChange={handleChange}
          value={values.Class}
          error={touched.Class && errors.Class}
          helperText={touched.Class && errors.Class ? errors.Class : null}
          onBlur={handleBlur}
          label="Class"
          variant="outlined"
          type="text"
        />
        <TextField
          name="avatar"
          onChange={handleChange}
          value={values.avatar}
          error={touched.avatar && errors.avatar}
          helperText={touched.avatar && errors.avatar ? errors.avatar : null}
          onBlur={handleBlur}
          label="Image URl"
          variant="outlined"
          type="text"
        />
        <Button variant="contained" color="success" type="submit">
          Save
        </Button>
      </form>
    </>
  );
}
