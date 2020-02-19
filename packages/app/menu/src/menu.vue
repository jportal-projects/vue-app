<template>
	<el-menu :mode="mode">
		<template v-if="items">
			<template v-for="item in items">
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
		</template>
		<slot v-else></slot>
	</el-menu>
</template>
<script>
import prop from "../../../helpers/prop";
import { Menu } from "element-ui";
import AppSubmenu from "../../submenu";
import AppMenuItem from "../../menu-item";

const components = {
	"el-menu": Menu,
	"app-submenu": AppSubmenu,
	"app-menu-item": AppMenuItem
};

const props = {
	mode: prop.string(false, "horizontal"),
	items: prop.array(false)
};
export default {
	name: "app-menu",
	components,
	props
};
</script>
