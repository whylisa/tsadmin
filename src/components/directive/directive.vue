<template>
	<div>
		<div class="color__default" v-colorDirective="{color: 'red', backgroundColor: 'blue'}"> 我是自定义颜色指令</div>
		<div>
			<input type="text" v-check="{type:'phone',val:currentPhone}" placeholder="请输入手机号码" v-model="currentPhone" />
			<input type="text" v-check="{type:'date',val:currentDate}" placeholder="请输入日期" v-model="currentDate" />
			<input type="text" v-check="{type:'identification_card',val:currentIdentificationCard}" placeholder="请输入身份证" v-model="currentIdentificationCard" />
			<input type="text" v-check="{type:'email',val:currentEmail}" placeholder="请输入邮箱" v-model="currentEmail" />
			<input type="text" v-check="{type:'zip_code',val:currentZipCode}" placeholder="请输入邮编" v-model="currentZipCode" />
		</div>
	</div>
</template>

<script lang="ts">
	import {
		Component,
		Vue
	} from 'vue-property-decorator';
	import {
		colorDirective,
		check
	} from './directives';

	@Component({
		directives: {
			colorDirective,
			check
		}
	})
	export default class Directive extends Vue {
		currentPhone = ''
		currentDate = ''
		currentIdentificationCard = ''
		currentEmail = ''
		currentZipCode = ''
		created() {
			console.log(this)
		}
	}
</script>

<style lang="less">
	.color__default {
		width: 200px;
		height: 40px;
		text-align: center;
		line-height: 40px;
		
	}
	input[type="text"] {
		display: block;
		width: 90%;
		height: 40px;
		line-height: 40px;
		font-size: 16px;
		text-indent: 1em;
		margin: 5px auto;
		outline: none; // 清除input默认样式
		border: 1px solid #ccc;
	}

	input[type="button"] {
		display: block;
		width: 70%;
		height: 40px;
		margin: 10px auto;
	}
</style>
