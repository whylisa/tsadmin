<template>
  <div id="directive">
    <div class="directive-top">typescript配合vue写自定义指令的时候，api和其他不一样，要引入DirectiveOptions</div>
    <div
      class="color-default"
      v-colorDirective="{color: 'yellow', backgroundColor: 'blue'}"
    >我是自定义颜色指令</div>
    <hr />
    <div class="input-default">
      <div
        class="color-default__title"
        v-colorDirective="{color: 'red', backgroundColor: 'blue'}"
      >我是自定义表单验证指令</div>
      <input
        type="text"
        v-check="{type:'phone',val:currentPhone}"
        placeholder="请输入手机号码"
        v-model="currentPhone"
      />
      <input
        type="text"
        v-check="{type:'date',val:currentDate}"
        placeholder="请输入日期"
        v-model="currentDate"
      />
      <input
        type="text"
        v-check="{type:'identification_card',val:currentIdentificationCard}"
        placeholder="请输入身份证"
        v-model="currentIdentificationCard"
      />
      <input
        type="text"
        v-check="{type:'email',val:currentEmail}"
        placeholder="请输入邮箱"
        v-model="currentEmail"
      />
      <input
        type="text"
        v-check="{type:'zip_code',val:currentZipCode}"
        placeholder="请输入邮编"
        v-model="currentZipCode"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { colorDirective, check } from './directives';

@Component({
  components: {},
  directives: {
    colorDirective,
    check,
  },
})
export default class Directive extends Vue {
  private currentPhone = '';
  private currentDate = '';
  private currentIdentificationCard = '';
  private currentEmail = '';
  private currentZipCode = '';
  private created(): void {
    // this.$route.matched.filter(item => console.log(item.name));
  }
}
</script>

<style lang="less">
#directive {
  ::selection {
    background: red;
    color: #fff;
    text-shadow: none;
  }

  .directive-top {
    width: 100%;
    height: 80px;
    text-align: center;
    line-height: 80px;
    margin-bottom: 20px;
    background-color: rgba(66, 185, 131, 0.3);
  }

  .color-default {
    width: 200px;
    height: 40px;
    text-align: center;
    margin: 20px auto;
    line-height: 40px;
  }

  .input-default {
    .color-default__title {
      width: 200px;
      height: 40px;
      text-align: center;
      margin: 20px auto;
      line-height: 40px;
    }

    input[type="text"] {
      display: block;
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      text-indent: 1em;
      margin: 10px auto;
      outline: none;
      border: 1px solid #ccc;
    }
  }
}
</style>
