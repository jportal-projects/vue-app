<template>
	<el-header>
		<slot></slot>
	</el-header>
</template>
<script>
import { Header } from "element-ui";
import prop from "../../../helpers/prop";

const components = {
	"el-header": Header
};

const props = {
	cname: prop.string()
};

const data = function() {
	return {};
};

const created = function() {};

export default {
	name: "app-header",
	components,
	props,
	data,
	created
};
</script>
