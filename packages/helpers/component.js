import Vue from "vue";
const component = {
	/**
	 * 注册全局组件。
	 * @param components Vue组件。
	 */
	register: (...components) => {
		components.forEach(component => {
			component.install(Vue);
		});
	},
	/**
	 * 根据组件的名称向上查找符合条件的组件，如果找不到返回null。
	 * @param vm 组件对象。
	 * @param cname 组件的名称。
	 * @returns {null|*}
	 */
	parent: (vm, cname) => {
		if (vm != null && typeof vm === "object") {
			let parent = vm["$parent"];
			while (parent) {
				if (cname === parent.cname) {
					return parent;
				}
				parent = parent["$parent"];
			}
		}
		return null;
	}
};

export default component;
