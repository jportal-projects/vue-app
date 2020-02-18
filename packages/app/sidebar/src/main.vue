<template>
	<el-aside>
		<slot></slot>
	</el-aside>
</template>
<script>
import prop from "../../../helpers/prop";
import { Aside } from "element-ui";

const components = {
	"el-aside": Aside
};

const data = function() {
	return {
		cname: prop.string(false, "app-sidebar")
	};
};
export default {
	name: "app-sidebar",
	components,
	data
};
</script>
