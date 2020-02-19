<template>
	<div class="app-admin" v-loading.fullscreen.lock="loading">
		<app-layout>
			<app-sidebar>
				<app-outline :items="this.outline"></app-outline>
			</app-sidebar>
		</app-layout>
	</div>
</template>
<script>
import Router from "../../../plugins/router";
import component from "../../../helpers/component";
import prop from "../../../helpers/prop";
import { Loading } from "element-ui";
component.register(Loading);

// 注册局部组件
import AppLayout from "../../layout";
import AppOutline from "../../outline";
import AppHeader from "../../header";
import AppSidebar from "../../sidebar";
const components = {
	"app-layout": AppLayout,
	"app-header": AppHeader,
	"app-sidebar": AppSidebar,
	"app-outline": AppOutline
};

const props = {
	/**
	 * 标题（浏览器）
	 */
	title: prop.string(false),
	/**
	 * 样式（style）。
	 */
	css: prop.object()
};

const data = function() {
	return {
		loading: true,
		outline: [
			{
				id: "1",
				icon: "el-icon-location",
				title: "导航一",
				name: "",
				path: "",
				disabled: false,
				children: [
					{
						id: "1-1",
						icon: "el-icon-location",
						title: "导航一子导航",
						name: "",
						path: "",
						disabled: false
					}
				]
			},
			{
				id: "2",
				icon: "el-icon-menu",
				title: "导航一",
				name: "",
				path: "",
				disabled: true
			},
			{
				id: "3",
				title: "导航三",
				name: "",
				path: ""
			}
		]
	};
};

const methods = {};

export default {
	name: "app-admin",
	components,
	router: new Router(),
	props,
	data,
	methods,
	mounted() {
		this["loading"] = false;
	}
};
</script>
<style scoped>
.app-admin {
	height: 100%;
}
</style>
