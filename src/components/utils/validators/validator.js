const required = (value) => {
	if (value) {
		return undefined;
	} else {
		return "Field is required";
	}
};

const maxLengthCreator = (maxLenght) => (value) => {
	if (value.length > maxLenght) {
		return `Max length is ${maxLenght} symbols`;
	}
	else {
		return undefined
	}
}


export {maxLengthCreator}
export {required}
