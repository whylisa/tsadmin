<template>
	<div id="home">
		<el-container>
			<el-header style="height: 68px;">
				<div class="header-right">
					<div class="logout" @click="layout">
						<a href="javascript:;">退出</a>
					</div>
					<div class="people" @click="turnDetail">
						<i class="iconfont icon-lianxirenwode"></i>
					</div>
					<div class="people">
						<span>服务期限 到期 </span>
					</div>

				</div>

			</el-header>
			<el-container>
				<el-aside width="200px" background-color="#26292E">
					<el-scrollbar style="height: 100%;">
						<el-menu :unique-opened="true" :router="true" text-color="#ffffff" :default-active="$route.path"
						 active-text-color="#cccccc">
							<el-submenu index="1">
								<template slot="title">
									<i class="iconfont icon-shouye"></i>首页
								</template>
								<el-menu-item-group>
									<el-menu-item index="/homeMain">首页</el-menu-item>
								</el-menu-item-group>
							</el-submenu>
							<el-submenu index="2">
								<template slot="title">
									<i class="iconfont icon-chanpin1"></i>通道商城
								</template>
								<el-menu-item-group>
									<el-menu-item index="/channelMallMgt">通道商城</el-menu-item>
								</el-menu-item-group>
								<el-menu-item-group>
									<el-menu-item index="/channelCount">上传通道统计</el-menu-item>
								</el-menu-item-group>
								<el-menu-item-group>
									<el-menu-item index="/channelAccess">接入通道统计</el-menu-item>
								</el-menu-item-group>
								<el-menu-item-group>
									<el-menu-item index="/channelBill">商城账单</el-menu-item>
								</el-menu-item-group>
							</el-submenu>
						</el-menu>
					</el-scrollbar>
				</el-aside>
				<el-container>
					<el-scrollbar style="height: 100%;width: 100%;">
						<tags-view />
						<el-main>
							<router-view></router-view>
						</el-main>
					</el-scrollbar>
				</el-container>
			</el-container>
		</el-container>

	</div>
</template>
<script lang="ts">
	import {
		Component,
		Vue
	} from 'vue-property-decorator';
	@Component({})
	export default class Home extends Vue {}
</script>
<style lang="less">
	#home {
		height: 100%;

		.el-container {
			height: 100%;

			.el-aside {
				background-color: #26292e;
				color: #333;
				height: 100%;
				line-height: 200px;

				.el-submenu__title {
					padding-left: 30px !important;
				}

				.el-submenu .el-menu-item {
					padding-left: 60px !important;
				}
			}
		}

		.gomain {
			width: 100%;
			display: inline-block;
		}

		.el-scrollbar__wrap {
			overflow-x: hidden;
		}

		// 	.el-scrollbar__view {
		// 		height: 100%;
		// 	}

		.el-submenu__title {
			// color: #FFFFFF;
		}

		.el-header {
			// background-color: #FFFFFF;
			background-color: #26292e;
			text-align: center;
			padding: 0;
			// background: url(../assets/main/message.jpg) repeat-x;

			.userInfo {
				width: 290px;
				padding-top: 20px;
				text-indent: 15px;
				height: 150px;
				background-color: #cccccc;
				position: absolute;
				right: 0px;
				top: 68px;
				// border: 1px solid #cccccc;
				z-index: 100;

				ul {
					li {
						// margin-top: 20px;
						// margin-left: 15px;
						width: 100%;
						height: 30px;

						span {
							float: left
						}

					}
				}
			}

			.logo {
				float: left;
				width: 200px;
				// background-color: #26292e;
				height: 100%;
				line-height: 58px;
				padding-top: 3px;
				padding-bottom: 3px;
			}

			.header-right {
				float: right;
				height: 100%;
				line-height: 70px;

				.message {
					float: right;
					// margin-left: 45px;
				}

				.call {
					float: right;
					margin-left: 45px;
				}

				.people {
					cursor: pointer;
					float: right;
					color: #171717;
					margin-left: 45px;
				}

				.logout {
					float: right;
					margin-left: 45px;
					width: 65px;
					height: 100%;

					// background-color: #32373d;

					a {
						text-decoration: none;
						color: #171717;
					}
				}
			}
		}

		.el-main {
			background-color: #e5e9ef;
			color: #333;
			padding: 30px;
			height: 100%;
		}

		@media only screen and (max-width: 1400px) {
			.el-main {
				padding: 20px;
			}

			.el-aside {
				width: 160px !important;
			}

			.logo {
				width: 160px !important;
			}
		}

		.el-submenu__title i {
			margin-right: 10px;
		}

		.el-menu {
			background-color: #26292e;
			background-color: rgba(0, 0, 0, 0);
			border-right: none;

			.el-menu-item-group {
				background-color: #32373d;
				background-color: rgba(0, 0, 0, 0);
			}

			.el-menu-item.is-active {
				background-color: #49515c;
			}

			.el-submenu.is-opened {
				background-color: #398bf7;
				background-color: rgba(0, 0, 0, 0);

				i:first-child {
					color: #fff;
				}
			}
		}

		.main {
			// width: 50px;
		}

		.el-menu-item:focus {
			background-color: #4a525d !important
		}

		.el-menu-item:hover {
			// background-color: rgba(0,0,0,0);
			background-color: #4a525d
		}

		.el-menu-item:hover {
			background-color: #444d57;
			color: #ffffff !important;
		}

		.el-menu-item:focus {
			background-color: rgba(255, 255, 255, .3);
		}

		.el-submenu__title:hover {
			background-color: #4a525d;
		}
	}
</style>
