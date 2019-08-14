<template>
	<div id="mixin">
       {{mixinText}}
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'
	import Component from 'vue-class-component'
	import demoMixin from './mixinDe.ts'

	@Component({
		mixins: [demoMixin]
	})
	export default class Minxins extends Vue{

	}
</script>

<style>
</style>
