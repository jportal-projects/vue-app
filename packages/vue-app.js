import "./plugins/element.js";

import AppLayout from "./app/layout/index.js";
import ApHeader from "./app/header/index.js";
import AppOutline from "./app/outline/index.js";
import AppAdmin from "./app/admin/index.js";
import AppAdminHeader from "./app/admin/header/index.js";

const components = [AppLayout, ApHeader, AppOutline, AppAdmin, AppAdminHeader];

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
	AppLayout,
	ApHeader,
	AppOutline,
	AppAdmin,
	AppAdminHeader
};
