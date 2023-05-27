import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required*"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Required*"),
});
const Login = () => {
  let nav = useNavigate();
  return (
    <div className="login-cont">
      <div className="login-form">
        <h1>Login</h1>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            console.log(values);
            nav("/");
          }}
        >
          {({ errors, touched }) => (
            <Form className="form">
              <div>Email</div>
              <Field className="email" name="email" type="email" />
              {errors.email && touched.email ? <div>err:{errors.email}</div> : null}
              <br />
              <div>password</div>
              <Field className="pass" name="password" />
              {errors.password && touched.password ? (
                <div>err:{errors.password}</div>
              ) : null}
              <br />
              <div className="btns">
                {" "}
                <button type="submit">Submit</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default Login;
