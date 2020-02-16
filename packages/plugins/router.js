import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const defaults = {
	base: process.env.BASE_URL,
	mode: "history",
	routes: []
};

const Router = (options = {}) => {
	return new VueRouter(Object.assign(defaults, options));
};

export default Router;
