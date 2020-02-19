const prop = {
	string(required = false, value = null) {
		let prop = { type: String, required: required };
		if (value) {
			prop.default = value;
		}
		return prop;
	},
	boolean(required = false, value = null) {
		let prop = { type: Boolean, required: required };
		if (value) {
			prop.default = value;
		}
		return prop;
	},
	array(required = false, value = null) {
		let prop = { type: Array, required: required };
		if (value) {
			prop.default = () => {
				return value;
			};
		}
		return prop;
	},
	object(required = false, value = null) {
		let prop = { type: Object, required: required };
		if (value) {
			prop.default = () => {
				return value;
			};
		}
		return prop;
	},
	validator(prop, fn) {
		prop.validator = fn;
		return prop;
	}
};
export default prop;
