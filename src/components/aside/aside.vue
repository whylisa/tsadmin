<template>
	<div>
		<el-submenu :index="index.toString()" v-for="(item,index) in menus" :key="index">
			<template slot="title">
				<i :class="item.ico"></i>
				<span slot="title">{{item.label}}</span>
			</template>
			<el-menu-item-group v-for="items in item.children">
				<el-menu-item :index="items.url">{{items.label}}</el-menu-item>
			</el-menu-item-group>
		</el-submenu>
	</div>

</template>

<script lang="ts">
	import {
		Component,
		Vue,
		Provide
	} from "vue-property-decorator"
	import { menus } from './asideMenus'
	@Component({})
	export default class AsideList extends Vue {
		@Provide() private menus: any[] = menus;
	}
</script>

<style>
</style>
