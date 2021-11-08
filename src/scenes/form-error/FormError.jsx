import { ErrorMessage } from "formik";


export default function FormError({ name }){
  return (
    <ErrorMessage name={name}>
      {(errMessage) => {
        return <div className="alert alert-danger py-1 my-2">{errMessage}</div>;
      }}
    </ErrorMessage>
  );
};