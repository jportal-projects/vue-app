import AppForm from "./src/main";
AppForm.install = Vue => {
	Vue.components(AppForm.name, AppForm);
};
export default AppForm;
