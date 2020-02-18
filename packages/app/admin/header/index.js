import AppAdminHeader from "./src/main";

AppAdminHeader.install = Vue => {
	Vue.component(AppAdminHeader.name, AppAdminHeader);
};
export default AppAdminHeader;
