import AppView from "./src/main";

AppView.install = Vue => {
	Vue.components(AppView.name, AppView);
};
export default AppView;
