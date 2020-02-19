<template>
	<app-menu mode="vertical" :items="items"></app-menu>
</template>
<script>
import prop from "../../../helpers/prop";
import AppMenu from "../../menu";
import AppMenuItem from "../../menu-item";

const components = {
	AppMenu,
	AppMenuItem
};

const props = {
	path: prop.string(),
	items: prop.array()
};

const data = function() {
	return {};
};

export default {
	name: "app-outline",
	components,
	props,
	data
};
</script>
