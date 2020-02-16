import "./plugins/element.js";
import AppAdmin from "./app/admin/index.js";
import AppOutline from "./app/outline/index.js";

const components = [AppAdmin, AppOutline];

const install = Vue => {
	components.forEach(component => {
		Vue.component(component.name, component);
	});
};

if (typeof window !== "undefined" && window.Vue) {
	install(window.Vue);
}

export default {
	version: "0.1.0",
	install,
	AppAdmin,
	AppOutline
};
