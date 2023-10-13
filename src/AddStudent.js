import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
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
export function AddStudent() {
  const { handleBlur, handleChange, handleSubmit, values, touched, errors } =
    useFormik({
      initialValues: {
        name: "",
        age: "",
        Class: "",
        avatar: "",
      },
      validationSchema: StudentValidatOnSchema,
      onSubmit: (newTeach) => {
        console.log("Teacher added", values);
        aboutTea(newTeach);
      },
    });

  const navigate = useNavigate();
  const aboutTea = (newTeach) => {
    fetch(`https://64a1011e0079ce56e2dabc8a.mockapi.io/students`, {
      method: "POST",
      body: JSON.stringify(newTeach),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => navigate("/teacher"))
      .catch((err) => console.log("Error-occured", err));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="add-teach">
        <TextField
          label="Student"
          variant="outlined"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && errors.name}
          helperText={touched.name && errors.name ? errors.name : null}
          teacher="name"
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
        <Button variant="contained" type="submit">
          {" "}
          Add Student
        </Button>
      </form>
    </>
  );
}
