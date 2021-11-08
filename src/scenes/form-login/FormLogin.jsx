import { useFormik } from "formik";
import * as yup from "yup";
export default function FormLogin() {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            rememberMe: false,
        },
        onSubmit: (values) => console.log(JSON.stringify(values, null, 4)),
        validationSchema: yup.object({
            email: yup
            .string()
            .email("Please Enter a valid Email")
            .required("Email is Required"),
            password: yup
            .string()
            .required("Email is Required"),
        }),
    })


    return (
      <section className="mx-5" style={{marginTop:"100px"}}>
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Enter your email"
                        id="email"
                        name="email"
                        {...formik.getFieldProps("email")}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <div className="alert alert-danger py-1 my-2">{formik.errors.email}</div>
                    )}
                </div>
                <div className="mb-3">
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Enter your password"
                        id="password"
                        name="password"
                        {...formik.getFieldProps("password")}
                    />
                    {formik.touched.password && formik.errors.password && (
                        <div className="alert alert-danger py-1 my-2">{formik.errors.password}</div>
                    )}
                </div>
                <div className="mb-3 form-check">
                    <input 
                        type="checkbox" 
                        className="form-check-input" 
                        id="exampleCheck1"
                        defaultChecked={formik.values.rememberMe}
                        {...formik.getFieldProps("rememberMe")}
                    />
                    <label className ="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
      </section>
    )
}