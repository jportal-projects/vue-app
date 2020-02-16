import AppAdmin from "./src/main";
AppAdmin.install = Vue => {
	Vue.component(AppAdmin.name, AppAdmin);
};
export default AppAdmin;
