<template>
	<el-submenu
		v-if="parent"
		:key="parent.id"
		:index="parent.id"
		:disabled="parent.disabled"
	>
		<template slot="title">
			<app-icon :class="parent.icon"></app-icon>
			<span slot="title">{{ parent.title }}</span>
		</template>
		<template v-for="item in parent.children">
			<app-submenu
				v-if="item.children"
				:key="item.id"
				:index="item.id"
				:icon="item.icon"
				:title="item.title"
				:disabled="item.disabled"
				:parent="item"
			></app-submenu>
			<app-menu-item
				v-else
				:key="item.id"
				:index="item.id"
				:icon="item.icon"
				:title="item.title"
				:disabled="item.disabled"
			></app-menu-item>
		</template>
	</el-submenu>
	<el-submenu v-else :key="key" :index="index" :disabled="disabled">
		<template slot="title">
			<app-icon :class="icon"></app-icon>
			<span slot="title">{{ title }}</span>
		</template>
		<slot></slot>
	</el-submenu>
</template>
<script>
import prop from "../../../helpers/prop";
import { Submenu } from "element-ui";
import AppIcon from "../../icon";
import AppMenuItem from "../../menu-item";

const components = {
	"el-submenu": Submenu,
	"app-icon": AppIcon,
	"app-menu-item": AppMenuItem
};

const props = {
	index: prop.string(false),
	icon: prop.string(false, ""),
	title: prop.string(false, ""),
	disabled: prop.boolean(false, false),
	parent: prop.object()
};

export default {
	name: "app-submenu",
	components,
	props
};
</script>
