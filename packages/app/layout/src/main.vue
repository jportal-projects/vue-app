<template>
	<el-container :style="css">
		<slot></slot>
	</el-container>
</template>
<script>
import { Container } from "element-ui";
import prop from "../../../helpers/prop";

const components = {
	"el-container": Container
};

const props = {
	/**
	 * 当前组件标签名称。
	 */
	cname: prop.string(false, "app-layout"),
	/**
	 * 容器样式高度默认100%。
	 */
	css: prop.object(false, { height: "100%" })
};

export default {
	name: "app-layout",
	components,
	props
};
</script>
