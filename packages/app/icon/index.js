import AppIcon from "./src/main";

AppIcon.install = Vue => {
	Vue.components(AppIcon.name, AppIcon);
};
export default AppIcon;
