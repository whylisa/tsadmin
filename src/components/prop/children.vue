<template>
  <div id="children">
    我的年纪是{{ age }}
    我的顺子子{{ages}}
  </div>
</template>

<script lang="ts">
import { Component, Vue , Prop} from 'vue-property-decorator';

@Component({
})
export default class Children extends Vue {
  @Prop(Number) public age!: number;

  public ages: number = 15;
}
</script>

<style lang="less">
// #children {}
</style>
