<template>
  <div id="prop">
      <p>{{mes}}</p>
    <Children @bindMsg="getChildMes" :age="age"></Children>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Children from './children.vue';

@Component({
    components: {
        Children,
    },
})
export default class Props extends Vue {
  public age: number = 155;
  public mes: string = '';
  private getChildMes(message: string): void {
    // console.log(message);
    this.mes = message;
  }
}
</script>

<style lang="less">
#prop {
  .mixin-component {
    margin-top: 20px;
  }
}
</style>
