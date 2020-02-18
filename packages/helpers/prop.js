const prop = {
	string(required = false, value = undefined) {
		let prop = { type: String, required: required };
		if (value) {
			prop.default = value;
		}
		return prop;
	},
	object(required = false, value = {}) {
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
