<template>
	<div v-color-color-Two="red"> 我是自定义指令</div>
</template>

<script lang="ts">
	import {
		Component,
		Vue
	} from 'vue-property-decorator';
	@Component({})
	export default class Directive extends Vue {
// 			this.$directive('colorTwo', {
// 				inserted: function(el: string, binding: string) {
// 					el.style.color = binding.value;
// 
// 				}
// 			});
	}
</script>

<style>
</style>
