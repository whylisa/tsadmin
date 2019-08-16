<template>
  <div id="home">
    <el-container>
      <el-header style="height: 68px;">
        <div class="toggle" @click="toggleAside" :style="bgc">{{isCollapse?"展开":"关闭"}}</div>
        <div class="logout" @click="layout">
          <a href="javascript:;">退出</a>
        </div>
      </el-header>
      <el-container>
        <el-aside background-color="#26292E">
          <el-menu
            :unique-opened="true"
            :router="true"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            :default-active="$route.path"
          >
            <el-submenu :index="index.toString()" v-for="(item,index) in menus" :key="index">
              <template slot="title">
                <i :class="item.ico"></i>
                <span slot="title">{{item.label}}</span>
              </template>
              <el-menu-item-group v-for="(items,index) in item.children" :key="index">
                <el-menu-item :index="items.url">{{items.label}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-container>
          <el-scrollbar style="height: 100%;width: 100%;">
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
import { Component, Vue, Provide } from 'vue-property-decorator';
import { menus } from '../components/aside/asideMenus';
@Component({})
export default class Home extends Vue {
  private isCollapse: boolean = false;
  @Provide() private menus: any[] = menus;
  private bgc: string = 'background-color: #409EFF;color:#fff';
  private layout(): void {
    this.$router.push('/');
  }
  private toggleAside(): boolean {
    return this.isCollapse
      ? (this.isCollapse = false)
      : (this.isCollapse = true);
  }
}
</script>
<style lang="less">
#home {
  .toggle {
    width: 64px;
    float: left;
    height: 64px;
    text-align: center;
    line-height: 64px;
    background-color: #fff;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    transition: all 1s;
  }

  .toggle:hover {
    transform: rotateZ(-365deg);
    background-color: red !important;
  }

  height: 100%;

  .el-aside {
    width: inherit !important;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }

  .el-container {
    height: 100%;
  }

  .gomain {
    width: 100%;
    display: inline-block;
  }

  .el-scrollbar__wrap {
    overflow-x: hidden;
  }

  .el-header {
    background-color: #26292e;
    text-align: center;
    padding: 0;
    background: url(../assets/message.jpg) repeat-x;

    .logout {
      float: right;
      height: 100%;
      line-height: 70px;

      a {
        text-decoration: none;
        color: #171717;
      }
    }
  }

  .el-main {
    background-color: #e5e9ef;
    color: #333;
    padding: 30px;
    height: 100%;
  }
}
</style>
