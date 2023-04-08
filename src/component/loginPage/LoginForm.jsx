import { Form, Field } from "react-final-form";
import { fromValidate } from "./formValidate"
import CustomInput from "../customInput/CustomInput"
export default function LoginForm() {
    let onSubmit = async (values) => {
        console.log(values)
    }
    return (
        <Form
            onSubmit={onSubmit}
            validate={values => fromValidate(values)}
            render={({ handleSubmit, errors, submitting, pristine }) => (
                <form onSubmit={handleSubmit}>
                    <div className="formBody" style={{ color: "white" }}>
                        <Field name="userName">
                            {({ input, meta }) => (
                                <CustomInput inputInfo={input} touched={meta.touched} error={meta.error} type="text" placeholder="userName" />
                            )}
                        </Field>
                        <Field name="password">
                            {({ input, meta }) => (
                                <CustomInput inputInfo={input} touched={meta.touched} error={meta.error} type="password" placeholder="password" />
                            )}
                        </Field>

                        <button type="submit" disabled={submitting} className="form-Btn">
                            Submit
                        </button>
                    </div>
                </form>
            )}
        >
            <h1>Helo</h1>
        </Form>
    )
}