import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@mui/material/TextField";

const TeachValidatOnSchema = yup.object({
  teacher: yup.string().required("plzz name"),
  age: yup.number().required("fill age component"),
  about: yup
    .string()
    .required("Tell something about this person")
    .min(4, "min 4 character"),
  avatar: yup.string().required("plzz put valid URl").min(4, "min 4 character"),
});
export function EditTeacher() {
  const { id } = useParams();
  const [teaches, setTeaches] = useState(null);
  useEffect(() => {
    fetch(`https://64a1011e0079ce56e2dabc8a.mockapi.io/teachers/${id}`)
      .then((e) => e.json())
      .then((tea) => setTeaches(tea));
  }, []);
  return teaches ? <EditTeachForm teaches={teaches} /> : "Wait loading";
}
function EditTeachForm({ teaches }) {
  const { handleBlur, handleChange, handleSubmit, values, touched, errors } =
    useFormik({
      initialValues: {
        teacher: teaches.teacher,
        age: teaches.age,
        about: teaches.about,
        avatar: teaches.avatar,
      },
      validationSchema: TeachValidatOnSchema,
      onSubmit: (newTeach) => {
        console.log("Teacher added", newTeach);
        aboutTea(newTeach);
      },
    });

  const navigate = useNavigate();
  const aboutTea = (newTeach) => {
    fetch(
      `https://64a1011e0079ce56e2dabc8a.mockapi.io/teachers/${teaches.id}`,
      {
        method: "PUT",
        body: JSON.stringify(newTeach),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then(() => navigate("/teacher"))
      .catch((err) => console.log("Error-occured", err));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="add-teach">
        <TextField
          className="box-a"
          label="Name"
          variant="outlined"
          name="teacher"
          type="text"
          value={values.teacher}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.teacher && errors.teacher}
          helperText={touched.teacher && errors.teacher ? errors.teacher : null}
          teacher="teacher"
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
          name="about"
          onChange={handleChange}
          value={values.about}
          error={touched.about && errors.about}
          helperText={touched.about && errors.about ? errors.about : null}
          onBlur={handleBlur}
          label="About"
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
