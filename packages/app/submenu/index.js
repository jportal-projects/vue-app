import AppSubmenu from "../menu/src/submenu";

AppSubmenu.install = Vue => {
	Vue.components(AppSubmenu.name, AppSubmenu);
};
export default AppSubmenu;
