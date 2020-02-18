import AppHeader from "./src/main";

AppHeader.install = Vue => {
	Vue.component(AppHeader.name, AppHeader);
};
export default AppHeader;
