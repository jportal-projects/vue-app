import AppMenu from "./src/menu";

AppMenu.install = Vue => {
	Vue.components(AppMenu.name, AppMenu);
};
export default AppMenu;
