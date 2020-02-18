import AppSidebar from "./src/main";

AppSidebar.install = Vue => {
	Vue.component(AppSidebar.name, AppSidebar);
};
export default AppSidebar;
