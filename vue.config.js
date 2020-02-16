const path = require("path");
const resolve = dir => path.join(__dirname, dir);
module.exports = {
	lintOnSave: process.env.NODE_ENV !== "production",
	configureWebpack: {
		resolve: {
			alias: {
				"@": resolve("src"),
				vue$: "vue/dist/vue.js"
			}
		}
	},
	productionSourceMap: true,
	devServer: {
		proxy: "http://localhost:3000"
	}
};
