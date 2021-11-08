import { Field , FieldArray } from "formik";
import { AiFillPlusCircle , AiFillMinusCircle } from "react-icons/ai";


export default function FormArray({formik , name , value , singular}) {
    return(
        <FieldArray
            name={name}
            render={arrayHelpers => (
                <div>
                    {value.length > 0 &&(<h5>Hoppies</h5>)}
                    {value && value.length > 0 ? (
                        value.map((elem, index) => (
                            
                            <div key={index}>

                                <div className="form-group d-flex justify-content-around my-2 align-items-center">
                                    <label className="mx-1">{`${singular} No.${index + 1}`}</label>
                                    <Field name={`${name}.${index}`} className="form-control w-50 flex-grow-1" />
                                    <AiFillPlusCircle className="text-success fs-1 mx-1" type="button" onClick={() => arrayHelpers.push('')} />
                                    <AiFillMinusCircle className="text-danger fs-1 mx-1" type="button" onClick={() => arrayHelpers.remove(index)} />
                                </div>
                         
                            </div>
                        ))
                    ) : (
                        <button type="button" className="btn btn-warning text-white my-2" onClick={() => arrayHelpers.push('')}>
                            Add a {singular}
                        </button>
                    )}
                </div>
            )}
        />
    )
}