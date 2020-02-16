<template>
	<el-container v-loading.fullscreen.lock="loading">
		<el-header>111</el-header>
		<el-aside>
			<component :is="outline"></component>
		</el-aside>
		<el-main>
			<router-view></router-view>
		</el-main>
		<el-footer>444</el-footer>
	</el-container>
</template>
<script>
import config from "../../config";
const props = Object.assign(config.props, {
	outline: { type: String, default: "app-outline" }
});
console.log(props);
const data = () => {
	return {
		loading: true,
		config: {}
	};
};

const methods = {};

export default {
	name: "AppAdmin",
	props,
	data,
	methods,
	mounted() {
		this["loading"] = false;
	}
};
</script>
