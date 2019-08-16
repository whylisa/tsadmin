import { Vue, Component } from 'vue-property-decorator';
/**
 * Mixin demo
 *
 * @export
 * @class demoMixin
 * @extends {Vue}
 */
@Component({})
// tslint:disable-next-line:class-name
export default class demoMixin extends Vue {
  public mixinText: string = '我是混进来的';
  // tslint:disable-next-line:member-access
  mixinOtherComponent: string = '我是外部mixin';
  public mixinFunc(): void {
    this.mixinText = '我爱你中国';
  }
  public mixinOtherComponentFunc(): void {
    this.mixinOtherComponent = '我是外部方法优先使用内部';
  }
}
