import { Field } from "formik";
import FormError from "../form-error/FormError";

 export default function FormField({ name, type, label , csName }){
  return (
    <Field name={name}>
      {(formikField) => {
        return (
          <>
            { type==="checkbox" && ( <label className="mx-1" htmlFor={name}>{label}</label> )}
            <input
              type={type}
              id={name}
              placeholder={label}
              className={csName}
              {...formikField.field}
              defaultChecked={formikField.field.value}
            />
            <FormError name={name} />
          </>
        );
      }}
    </Field>
  );
};

