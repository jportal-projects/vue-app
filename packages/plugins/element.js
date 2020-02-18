import Vue from "vue";
import { Loading } from "element-ui";
import { Container, Header, Aside, Main, Footer } from "element-ui";
import { Menu, Submenu, MenuItemGroup, MenuItem } from "element-ui";

const components = [
	Loading,
	Container,
	Header,
	Aside,
	Main,
	Footer,
	Menu,
	Submenu,
	MenuItemGroup,
	MenuItem
];
components.forEach(component => {
	Vue.use(component);
});
