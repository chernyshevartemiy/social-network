import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input } from "../common/formControls/FormControls"
import {required} from "../utils/validators/validator"
const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field
					placeholder={"Login"}
					name={"Login"}
					component={Input}
					validate={required}
				/>
			</div>
			<div>
				<Field
					validate={required}
					placeholder={"Password"}
					name={"Password"}
					component={Input}
				/>
			</div>
			<div>
				<Field
					type={"checkbox"}
					name={"rememberMe"}
					component={Input}
				/>{" "}
				Remember me
			</div>
			<div>
				<button>Login</button>
			</div>
		</form>
	);
};

const LoginReduxForm = reduxForm({
	form: "login",
})(LoginForm);

const Login = (props) => {
	const onSubmit = (formData) => {
		console.log(formData);
	};
	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	);
};

export default Login;
