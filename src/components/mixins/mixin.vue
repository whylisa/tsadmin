<template>
  <div id="mixin">
    <div class="mixin-out">
      {{mixinText}}
      <el-button type="primary" @click="mixinFunc">点我啊</el-button>
    </div>
    <div class="mixin-component">
      {{mixinOtherComponent}}
      <el-button type="primary" @click="mixinOtherComponentFunc">快点我啊</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import demoMixin from './mixinDe';

@Component({
  mixins: [demoMixin],
})
export default class Minxins extends Vue {
  private mixinOtherComponent: string = '我是组件内部mixin';
  private mixinOtherComponentFunc(): void {
    this.mixinOtherComponent = '我是组件内部方法优先使用内部';
  }
}
</script>

<style lang="less">
#mixin {
  .mixin-component {
    margin-top: 20px;
  }
}
</style>
