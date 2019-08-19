<template>
  <div id="children">
    <p>我是父组件的数据{{ age }}</p>
    
    <p>我是子组件的数据{{ages}}</p>
    <el-button @click="sendMeg">点我</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue , Prop, Emit} from 'vue-property-decorator';

@Component({
})
export default class Children extends Vue {
  public ages: number = 15;
  public message: string = '我是子组件的数据';
  @Prop(Number) public age!: number;
  @Emit('bindMsg') public send(message: any): void {
    // console.log(message);
  }
  public sendMeg(): void  {
    this.message = '子组件数据传递给了父组件';
    this.send(this.message);
  }
}
</script>

<style lang="less">
// #children {}
</style>
