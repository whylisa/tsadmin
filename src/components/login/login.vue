<template>
	<div class="login">
		<div class="login__center">
		  <el-input placeholder="请输入用户名" v-model="username"></el-input></br>
		  <el-input placeholder="请输入密码" v-model="password"></el-input></br>
		  <el-button type="primary" @click="login">登录</el-button>
		</div>
	</div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class Login extends Vue {
	username: string = 'jj';
	password: string = 'jj';
	constructor() {
		super()
		
	}
	login(username:) {
		console.log(username)
		console.log(this.password)
	}
}
</script>

<style lang="less">
	.login{
		width: 100%;
		height: 100%;
		.login__center{
			position: absolute;
			width: 500px;
			height: 300px;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			border: 1px solid #ccc;
			border-radius: 4px;
			table-layout: center;
			.el-input {
				width: 300px;
				margin-top: 10px;
			}
			.el-input:first-child {
				margin-top: 90px;
			}
			.el-button {
				margin-top: 10px;
			}
		}
	}
</style>
