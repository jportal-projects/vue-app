<template>
	<app-admin path="/platform.app" outline="aside-outline"></app-admin>
</template>
<script>
import Vue from "vue";
import Router from "../../packages/plugins/router";
import AsideOutline from "./outlines/AsideOutline";
Vue.component("aside-outline", AsideOutline);
export default {
	router: new Router(),
	data() {
		return {};
	}
};
</script>
