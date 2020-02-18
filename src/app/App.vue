<template>
	<app-admin path="/platform.app" />
</template>
<script>
import AppAdmin from "../../packages/app/admin";
import AsideOutline from "./outlines/AsideOutline";
const components = {
	"app-admin": AppAdmin,
	"aside-outline": AsideOutline
};
export default {
	components
};
</script>
