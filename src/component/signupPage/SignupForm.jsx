import { Form, Field } from "react-final-form";
import { formValdate } from "./formValidate"
import CustomInput from "../customInput/CustomInput"
export default function LoginForm() {
    let onSubmit = async (values) => {
        console.log(values)
    }
    return (
        <Form
            onSubmit={onSubmit}
            validate={values =>
                formValdate(values)
            }
            render={({ handleSubmit, errors, submitting, pristine }) => (
                <form onSubmit={handleSubmit}>
                    <div className="formBody" style={{ color: "white" }}>
                        <Field name="username">
                            {({ input, meta }) => (
                                <CustomInput inputInfo={input} touched={meta.touched} error={meta.error} type="text" placeholder="Username" />
                            )}
                        </Field>
                        <Field name="email">
                            {({ input, meta }) => (
                                <CustomInput inputInfo={input} touched={meta.touched} error={meta.error} type="text" placeholder="Email" />
                            )}
                        </Field>
                        <Field name="password">
                            {({ input, meta }) => (
                                <CustomInput inputInfo={input} touched={meta.touched} error={meta.error} type="password" placeholder="password" />
                            )}
                        </Field>
                        <Field name="confirm">
                            {({ input, meta }) => (
                                <CustomInput inputInfo={input} touched={meta.touched} error={meta.error} type="password" placeholder="confirm" />
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