import s from "./formControls.module.css";
import React from "react";

const FormControl = ({input, meta, child, ...props}) => {
	const hasError = meta.touched && meta.error;
	return (
		<div className={s.formControl + " " + (hasError ? s.error : "")}>
			<div>{props.children}</div>
		{hasError && <span>{meta.error}</span>}
		</div>
	);
};

const Textarea = (props) => {
	const {input, meta, child, ...restProps} = props
	return (
		<FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
	)
};

const Input = (props) => {
	const {input, meta, child, ...restProps} = props
	return (
		<FormControl {...props}><input {...input} {...restProps}/></FormControl>
	);
};
export { Input };
export default Textarea;
