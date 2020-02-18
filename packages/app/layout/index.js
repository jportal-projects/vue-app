import AppLayout from "./src/main";

AppLayout.install = Vue => {
	Vue.component(AppLayout.name, AppLayout);
};
export default AppLayout;
