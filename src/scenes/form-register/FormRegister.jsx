import { Formik, Form , Field } from "formik";
import * as yup from "yup";
import FormArray from "../field-array/FieldArray";
import FormField from "../form-field/FormField"
export default function FormRegister(){

    const initialValues = {
        username: "",
        email: "",
        password: "",
        passmatch:"",
        active: false,
        gender:"male",
        hoppies:[]
      };
      const onSubmit = (values) => console.log(JSON.stringify(values, null, 4));
      const validationSchema = yup.object({
        username: yup.string().required(),
        email: yup.string().email("Please enter a valid email address").required("Email field is required"),
        password: yup.string().required("Password field is required"),
        passmatch:yup.string().required().oneOf([yup.ref('password')], 'Passwords must match'),
        active:yup.boolean().required(),
        gender:yup.string().required()
      });
    return (
        <section className="mx-5" style={{ marginTop: "100px" }}>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {(formik) => {
                    return (
                        <Form>
                            <div style={{ padding: 20 }}>
                                <FormField label="Enter user name" name="username" type="text" csName="form-control my-3" />
                                <FormField label="Email" name="email" type="email" csName="form-control my-3" />
                                <FormField label="Password" name="password" type="password" csName="form-control my-3"/>
                                <FormField label="Re-Password" name="passmatch" type="password" csName="form-control my-3"/>
                                <FormField label="Active" name="active" type="checkbox" csName="form-check-label"/>
                                <Field className="form-select w-25 my-3" as="select" name="gender">
                                    <option value="male">male</option>
                                    <option value="female">female</option>
                                </Field>
                                <FormArray formik={formik} name="hoppies" value={formik.values.hoppies} singular="Hoppy"/>
                                <button className="btn btn-primary d-block">submit</button>
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </section>
    )
}