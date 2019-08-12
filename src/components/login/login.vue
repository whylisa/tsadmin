<template>
	<div class="login">
		<div class="login__center">
			<el-form :model="loginForm" ref="loginForm" class="demo-dynamic" label-width="80px">
				<el-form-item prop="username" label="用户名" :rules="[
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ]">
					<el-input v-model="loginForm.username"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="password" :rules="[
            { required: true, message: '请输入密码', trigger: 'blur' },
          ]">
					<el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('loginForm')" class="login-btn">登录</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class Login extends Vue {
private loginForm: object = {
username: '',
password: '',
};
private submitForm(formType: string): void {
	console.log(this.loginForm);
	this.$refs[formType].validate((valid: boolean) => {
		if (valid) {
			this.$router.push('home');
		}
	})
}
}
</script>

<style lang="less">
	.login {
		width: 100%;
		height: 100%;

		.login__center {
			position: absolute;
			width: 400px;
			height: 300px;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			border: 1px solid #ccc;
			border-radius: 4px;
			
			.el-form {
				margin-top: 50px;
				text-align: center;
				.el-input {
					width: 280px;
				}
			}
		}
	}
</style>
