import Vue from "vue";
import { Loading, Container, Header, Aside, Main, Footer } from "element-ui";
const components = [Loading, Container, Header, Aside, Main, Footer];
components.forEach(component => {
	Vue.use(component);
});
