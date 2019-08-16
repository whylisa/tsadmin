<template>
  <div id="prop">
    <Children :age="age"></Children>
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
}
</script>

<style lang="less">
#prop {
  .mixin-component {
    margin-top: 20px;
  }
}
</style>
