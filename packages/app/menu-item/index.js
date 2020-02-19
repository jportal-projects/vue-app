import AppMenuItem from "../menu/src/menu-item";

AppMenuItem.install = Vue => {
	Vue.components(AppMenuItem.name, AppMenuItem);
};
export default AppMenuItem;
