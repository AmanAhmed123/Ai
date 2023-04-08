import "./main.css"
import classNames from "classnames"
export default function CustomInput({ inputInfo, type, placeholder, error, touched }) {


    return (
        <div className="custom-input w-100 text-start">
            <input {...inputInfo} type={type} placeholder={placeholder} className={classNames("w-100", { "border-danger": error && touched })} />
            {error && touched && <p className="p-0 m-0 mt-2 fs-6 text-danger">{error}</p>}
        </div>
    )
}