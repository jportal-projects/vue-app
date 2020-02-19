<template>
	<el-menu-item :index="index">
		<app-icon :class="icon"></app-icon>
		<span slot="title">{{ title }}</span>
	</el-menu-item>
</template>
<script>
import prop from "../../../helpers/prop";
import { MenuItem } from "element-ui";
import AppIcon from "../../icon";

const components = {
	"el-menu-item": MenuItem,
	"app-icon": AppIcon
};

const props = {
	index: prop.string(false),
	icon: prop.string(""),
	title: prop.string(false, ""),
	disabled: prop.boolean(false, false)
};

export default {
	name: "app-menu-item",
	components,
	props
};
</script>
